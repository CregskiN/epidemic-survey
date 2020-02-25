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
export const storageAllUsersAndRegsAction = (usersAndRegs) => {
    return {
        type: actionTypes.get_all_users_and_regs_action,
        payload: {
            usersAndRegs
        }
    }
}


/**
 * 存储管理员信息
 * @param {*} managerInfo 
 */
export const storageManagerInfoAction = (managerInfo) => {
    return {
        type: actionTypes.storage_manager_info_action,
        payload: {
            managerInfo
        }
    }
}

/**
 * 更改isOk的值，以显示manager头部信息
 */
export const changeIsOkToTrueAction = () => {
    return {
        type: actionTypes.change_is_ok_to_true_action,
        payload: {
            isOk: true
        }
    }
}


/**
 * 删除用户数据
 * @param {*} user_id 
 * @param {*} user_name 
 */
export const deleteUserAndRegs = (user_id, user_community, managerInfo, dispatch) => {
    let m = managerInfo.toJS();

    if (!user_id) {
        alert(`删除失败，错误代码:20000`);
        return;
    }

    axios.delete(`${config.api_base_url}:${config.port}/epidemic/v1/registrate`, {
        params: {
            account: m.manager_account,
            password: m.manager_password,
            user_id: user_id,
            user_community: user_community,
            appkey: config.appkey
        }
    }).then(res => {
        dispatch(storageAllUsersAndRegsAction(res.data.msg))
    }).catch(err => {
        console.log(err);
    })
}



/**
 * 管理员账号验证
 * @param {*} loginInput 
 * @param {*} dispatch 
 */
export const submit = (managerInfo, dispatch) => {

    let m = managerInfo.toJS();
    if (!_verifyManagerInfo(m)) {
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
            dispatch(storageManagerInfoAction(res.data.msg));
            dispatch(changeIsOkToTrueAction());
            getAllUsersAndRegs(managerInfo, dispatch); // TODO: 此处耦合，待优化
        }
    }).catch(err => {
        console.log(err);
    })
}

/**
 * 参数校验
 * @param {*} info 需检验参数
 */
const _verifyManagerInfo = (managerInfoJS) => {
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

            dispatch(storageAllUsersAndRegsAction(usersAndRegs))
        }
    }).catch(err => {
        console.log(err);
    })
}



