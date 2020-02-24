import { actionTypes } from "./index.js"
import axios from 'axios';
import { config } from '../../../config/config';
import { dealWithAxiosErrors } from '../../../common/helper';

/**
 * 改变输入内容
 * @param {*} pageId 忽略
 * @param {*} id 
 * @param {*} newValue 
 */
export const changeInputAction = (pageId = -1, id, newValue) => {
    return {
        type: actionTypes.change_input_action,
        payload: {
            id,
            newValue
        }
    }
}

/**
 * 隐藏登录框
 */
export const hideLoginBoardAction = () => {
    return {
        type: actionTypes.hide_loginboard_action,
        payload: {
            isLoginBoardHidden: true
        }
    }
}

/**
 * 存储所有查询的数据
 * @param {*} usersAndRegs 
 */
export const getAllUsersAndRegsAction = (usersAndRegs) => {
    return {
        type: actionTypes.get_all_users_and_regs_action,
        payload: {
            usersAndRegs
        }
    }
}



/**
 * 管理员账号验证
 * @param {*} loginInput 
 * @param {*} dispatch 
 */
export const submit = (managerInfo, dispatch) => {

    let m = managerInfo.toJS();
    if (!_verify(m)) {
        return;
    }

    axios.get(`${config.api_base_url}:${config.port}/epidemic/v1/registrate/login`, {
        params: {
            account: m[0].value,
            password: m[1].value,
            appkey: config.appkey
        }
    }).then(res => {
        const dealRes = dealWithAxiosErrors(res);

        if (dealRes === 'bad request') {
            return;
        } else if (dealRes === 'success') {
            dispatch(hideLoginBoardAction());
            getAllUsersAndRegs(managerInfo, dispatch); //TODO: 此处耦合，待优化
        }
    }).catch(err => {
        console.log(err);
    })
}

/**
 * 参数校验
 * @param {*} info 需检验参数
 */
const _verify = (managerInfoJS) => {
    const { account, password } = managerInfoJS;

    if (account === '') {
        alert('请检查输入的账号');
        return false;
    }
    if (password === '') {
        alert('请检查您输入的密码');
        return false;
    }

    return true;
}


/**
 * 获取全部user和regs
 */
export const getAllUsersAndRegs = (managerInfo, dispatch) => {
    const m = managerInfo.toJS();   

    axios.get(`${config.api_base_url}:${config.port}/epidemic/v1/registrate`, {
        params: {
            account: m[0].value,
            password: m[1].value,
            appkey: config.appkey
        }
    }).then(res => {
        const dealRes = dealWithAxiosErrors(res);
        
        if (dealRes === 'bad request') {
            return;
        } else if (dealRes === 'success') {
            const usersAndRegs = res.data.msg;
            
            dispatch(getAllUsersAndRegsAction(usersAndRegs))
        }
    }).catch(err => {
        console.log(err);
    })
}



