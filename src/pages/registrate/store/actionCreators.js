import axios from 'axios';
import dayjs from 'dayjs';

import { actionTypes } from './index.js';
import { config } from '../../../config/config'
import { illinessType, yOrNChoiceType, communitiesType } from '../../../common/enum.js';
import { getDay, getAge, dealWithAxiosErrors } from '../../../common/helper.js';
import { testData } from '../../../config/test';


/**
 * 修改页码
 * @param {*} pageId 
 */
export const changePageTo = (toPageId) => {
    return {
        type: actionTypes.change_page_to_action,
        payload: {
            toPageId
        }
    }
}

/**
 * 修改输入框内容
 * @param {*} newContent 调查表输入框内容
 */
export const changeRegFormInputAction = (pageId, qId, newValue) => {
    return {
        type: actionTypes.change_reg_form_input_action,
        payload: {
            pageId,
            qId,
            newValue
        }
    }
}

/**
 * 修改单选,多选内容
 * @param {*} pageId page id
 * @param {*} qId question id
 * @param {*} newValue answer
 * @param {*} choiceType 输入模块类型 1.input 2.单选 3.多选
 */
export const changeRegFormCheckoutAction = (pageId, qId, newValue, choiceType) => {
    return {
        type: actionTypes.change_reg_checkout_action,
        payload: {
            pageId,
            qId,
            newValue,
            choiceType
        }
    }
}

/**
 * 修改合格标志字段值
 * @param {*} isQualified 
 */
export const changeIsQualifiedAction = (isQualified) => {
    return {
        type: actionTypes.change_is_qualified_action,
        payload: {
            isQualified
        }
    }
}


/**
 * 改变isSubmit状态
 * @param {*} stateCode 提交状态码 101.未提交 102.正在提交  103.提交失败 104.提交完成
 */
export const changeSubmitStateAction = (stateCode) => {
    return {
        type: actionTypes.change_submit_state_action,
        payload: {
            stateCode
        }
    }
}

/**
 * 改变社区号
 * @param {*} communityId 社区号
 */
export const changeCommunityIdAction = (communityId) => {
    return {
        type: actionTypes.change_community_id,
        payload: {
            communityId
        }
    }
}

/**
 * _helper 参数校验模块
 * @param {*} regJS reg.toJS() 参数  
 */
const _verify = (regJS) => {

    for (let ans of regJS.regUnion) {
        const { pageId, qId, isRequired, value, maxLength } = ans;

        // 验证未填写问题
        if (value === null || value === [] || value === '' || value === -1) {
            if (isRequired) {
                alert(`您的 ${ans.headerText} 问题未填写！`)
                return false;
            }
        }

        // 验证手机/固化号码 
        if (pageId === 1 && qId === 1) {
            if (value.length !== 11 && value.length !== 7) {
                alert('请确认您的手机/固话位数。')
                return false;
            }
        }

        // 验证身份证号，并提取年龄 + 生日 + 性别
        if (pageId === 1 && qId === 2) {
            if (value.length !== 18) {
                alert('请确认您的身份证位数。');
                return false;
            }
        }
    }
    return true;
}

/**
 * _helper 规范数据模块 - 整合到regUnion
 * @param {*} regJS reg.toJS()参数
 */
const _tansform = (regJS) => {
    regJS.regUnion = [...regJS.regContents, ...regJS.regDetailContents];

    for (let ans of regJS.regUnion) {
        const { pageId, qId, choiceType, isRequired } = ans; // 将无需transform的数据解构，需要trans的不可以！

        // 转译不重要且未填数据
        if (isRequired === false && ans.value === '') {
            ans.value = '无';
        }


        // 转译多选框value
        if (pageId === 2 && qId === 0 && choiceType === 3) {
            const { value: values } = ans;
            for (let val of values) {
                values[val] = illinessType[val]; // 模拟枚举
            }
        }

        // 转译单选 YorN 1 3 
        if (pageId === 2 && (qId === 1 || qId === 3) && choiceType === 2) {
            ans.value = yOrNChoiceType[ans.value];
        }

        // 转译单选 9
        if (pageId === 2 && qId === 9 && choiceType === 2) {
            ans.value = communitiesType[ans.value];
        }

        // 转译 身份证号 => 生日，性别，年龄
        if (pageId === 1 && qId === 2) {
            const t = dayjs(Date.now());
            const currentTimeCode = '' + t.$y + ((t.$M + 1) > 9 ? t.$M : '0' + t.$M) + ((t.$D + 1) > 9 ? t.$M : '0' + t.$D);
            const birthdayCode = ans.value.slice(6, 14);

            const currentDay = getDay(currentTimeCode);
            const birthday = getDay(birthdayCode);
            const age = getAge(birthday, currentDay);
            const gender = parseInt(ans.value.charAt(16) % 2) === 1 ? '男' : '女';

            regJS.age = age;
            regJS.gender = gender;
            regJS.birthday = birthdayCode;
        }

    }
    return regJS;
}

/**
 * 组装axios数据
 * @param {*} reqJS 
 */
const _getAxiosReqContent = (regJS, appkey) => { // base_64加密) => {


    const axiosReqContent = {

        regUnion: regJS.regUnion,
        userInfo: { // 待入库 查询字段
            name: regJS.regUnion[0].value,
            age: regJS.age,
            birthday: regJS.birthday,
            gender: regJS.gender,
            phoneNumber: regJS.regUnion[1].value,
            identity: regJS.regUnion[2].value,
            community: regJS.regUnion[12].value
        },
        appkey,
        reqTime: Date.now()
    };

    return axiosReqContent;
}

/**
 * 提交功能
 * @param {*} reg 用户添加的所有信息
 */
export const submit = (reg, dispatch) => {
    let regJS = reg.toJS();

    regJS = _tansform(regJS);

    // if (!_verify(regJS)) {
    //     dispatch(changeIsQualifiedAction(false));
    //     return;
    // }
    // dispatch(changeIsQualifiedAction(true));

    const axiosReqContent = _getAxiosReqContent(regJS, config.appkey);

    // console.log(axiosReqContent);



    axios.post(`${config.api_base_url}:${config.port}/epidemic/v1/registrate`, testData)
        .then((res) => {
            const dealRes = dealWithAxiosErrors(res);
            if (dealRes === 'bad request') {
                
            } else if (dealRes === 'ok') {

            }


        }).catch(err => {
            console.log(err);
        })




}



