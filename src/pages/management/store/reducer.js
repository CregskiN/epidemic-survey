import { fromJS } from 'immutable';
import { actionTypes } from './index.js';

const defaultState = fromJS({

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

    isSubmit: 1010, // 1010未提交&登陆失败 1020提交中 1030登陆成功 

    isLoginBoardHidden: true, // 控制登录框隐藏




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

        default:
            return state;
    }
}