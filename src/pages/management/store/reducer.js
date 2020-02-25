import { fromJS } from 'immutable';
import { actionTypes } from './index.js';

const defaultState = fromJS({

    usersAndRegs: [], // [{用户信息，reg信息},{},{}]

    managerInfo: [
        {
            headerText: '账号',
            id: 0,
            value: '',
            maxLength: 15,
        }, {
            headerText: '密码',
            id: 1,
            value: '',
            maxLength: 15,
        }
    ],

    isOk: false, // 是否有数据展示

    isLoginBoardHidden: false, // 控制登录框隐藏




});


export default (state = defaultState, action) => {
    switch (action.type) {

        case actionTypes.change_input_action: {
            const { id, newValue } = action.payload;
            const newState = state.setIn(['managerInfo', `${id}`, 'value'], newValue);
            return newState;
        }

        case actionTypes.hide_loginboard_action: {
            const { isLoginBoardHidden } = action.payload;
            const newState = state.set('isLoginBoardHidden', isLoginBoardHidden);
            return newState;
        }

        case actionTypes.get_all_users_and_regs_action: {
            const { usersAndRegs } = action.payload;
            const newState = state.set('usersAndRegs', fromJS(usersAndRegs));
            return newState;
        }

        case actionTypes.storage_manager_info_action: {
            const { managerInfo } = action.payload;
            console.log(managerInfo)
            const newState = state.set('managerInfo', fromJS(managerInfo));
            return newState;
        }

        case actionTypes.change_is_ok_to_true_action: {
            const { isOk } = action.payload;
            const newState = state.set('isOk', isOk);
            return newState;
        }

        default:
            return state;
    }
}