import axios from 'axios';
import dayjs from 'dayjs';

import { actionTypes } from './index.js';
import { config } from '../../../config/config'
import { illinessType, yOrNChoiceType, communitiesType } from '../../../common/enum.js';
import { getDay, getAge } from '../../../common/helper.js';

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
 * _helper 检验填写数据是否合格
 * @param {*} regJS reg.toJS() 参数  
 */
const _verify = (regJS, dispatch) => {

    for (let ans of regJS.regUnion) {
        const { pageId, qId, isRequired, value, maxLength } = ans;

        // 验证身份证号，并提取年龄 + 生日 + 性别
        if (pageId === 1 && qId === 2) {
            if (value.length !== maxLength) {
                alert('请确认您的身份证位数。');
                return false;
            } else {
                const t = dayjs(Date.now());
                const currentTimeCode = '' + t.$y + ((t.$M + 1) > 9 ? t.$M : '0' + t.$M) + ((t.$D + 1) > 9 ? t.$M : '0' + t.$D);
                const currentDay = getDay(currentTimeCode);
                const birthday = getDay(value.slice(6, 14));
                const age = getAge(birthday, currentDay);
                const gender = parseInt(value.charAt(16) % 2) === 1 ? '男' : '女';
                regJS.age = age;
                regJS.gender = gender;
                return true;
            }
        }


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



    }

    return true;
}

/**
 * _helper 规范化提交数据，添加到state.registrate.regUnion
 * @param {*} regJS reg.toJS()参数
 */
const _tansform = (regJS) => {
    regJS.regUnion = [...regJS.regContents, ...regJS.regDetailContents];

    for (let ans of regJS.regUnion) {
        const { pageId, qId, choiceType, isRequired } = ans;

        // isReauired===false && value===''
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


    }
    return regJS;
}


/**
 * 提交功能
 * @param {*} reg 用户添加的所有信息
 */
export const submit = (reg, dispatch) => {
    let regJS = reg.toJS();
    regJS = _tansform(regJS);
    _verify(regJS);



}



