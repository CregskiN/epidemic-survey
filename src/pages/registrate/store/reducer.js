import { fromJS } from 'immutable';

import { actionTypes } from './index.js';

const defaultState = fromJS({

    /* 
        choiceType: 输入类型，1：input 2：单选 3：多选
    */

    regContents: [ // 第一页
        {
            qId: 0,
            pageId: 1,
            headerText: '上报人姓名',
            placeholder: '',
            value: '',
            isRequired: true,
            maxLength: 100,
            choiceType: 1

        }, {
            qId: 1,
            pageId: 1,
            headerText: '上报人联系方式',
            placeholder: '',
            value: '',
            isRequired: true,
            maxLength: 11,
            choiceType: 1

        }, {
            qId: 2,
            pageId: 1,
            headerText: '上报人身份证号',
            placeholder: '',
            value: '',
            isRequired: true,
            maxLength: 18,
            choiceType: 1

        }, {
            qId: 3,
            pageId: 1,
            headerText: '代理人姓名',
            placeholder: '(本人上报无需填写)',
            value: '',
            isRequired: false,
            maxLength: 100,
            choiceType: 1

        }, {
            qId: 4,
            pageId: 1,
            headerText: '代理人手机号',
            placeholder: '(本人上报无需填写)',
            value: '',
            isRequired: false,
            maxLength: 11,
            choiceType: 1

        }, {
            qId: 5,
            pageId: 1,
            headerText: '代理人身份证号',
            placeholder: '(本人上报无需填写)',
            value: '',
            isRequired: false,
            maxLength: 18,
            choiceType: 1
        }
    ],

    regDetailContents: [ // 第二页
        {
            qId: 0,
            pageId: 2,
            headerText: '上报人是否存在以下症状？(没有可不选)',
            options: [
                { label: '干咳', value: 0 },
                { label: '乏力', value: 1 },
                { label: '咳痰', value: 2 },
                { label: '鼻塞', value: 3 },
                { label: '流涕', value: 4 },
                { label: '呼吸困难', value: 5 },
                { label: '头疼', value: 6 },
                { label: '胸闷', value: 7 },
                { label: '呕吐', value: 8 },
                { label: '腹泻', value: 9 },
                { label: '其他症状', value: 10 }
            ],
            value: [],
            isRequired: true,
            choiceType: 3

        },
        {
            qId: 1,
            pageId: 2,
            headerText: '上报人家中是否有发热人员？',
            options: [{ content: '是' }, { content: '否' }],
            value: 0,
            isRequired: true,
            choiceType: 2
        },
        {
            qId: 2,
            pageId: 2,
            headerText: '上报人2019年12月1日后是否去过武汉？',
            placeholder: '没有则无需填写',
            isRequired: true,
            choiceType: 1
        },
        {
            qId: 3,
            pageId: 2,
            headerText: '上报人2019年12月1日后是否接触过疑似/确诊病例人员？',
            placeholder: '没有则无需填写',
            isRequired: true,
            choiceType: 1
        },
        {
            qId: 4,
            pageId: 2,
            headerText: '2019年12月1日后上报人家人是否去过湖北？',
            placeholder: '没有则无需填写',
            isRequired: true,
            choiceType: 1
        },
        {
            qId: 5,
            pageId: 2,
            headerText: '上报人及家人两周以来是否去过沧州？去了哪里？',
            placeholder: '没有则无需填写',
            isRequired: true,
            choiceType: 1
        },
        {
            qId: 6,
            pageId: 2,
            headerText: '上报人及家人是否在隔离点隔离？',
            placeholder: '没有则无需填写',
            isRequired: true,
            choiceType: 1
        },
        {
            qId: 7,
            pageId: 2,
            headerText: '上报人居民常住地？',
            placeholder: '没有则无需填写',
            isRequired: true,
            choiceType: 1
        },
        {
            qId: 8,
            pageId: 2,
            headerText: '上报人工作单位？',
            placeholder: '没有则无需填写',
            isRequired: true,
            choiceType: 1
        },
        {
            qId: 9,
            pageId: 2,
            headerText: '上报人户籍所在地？',
            placeholder: '没有则无需填写',
            isRequired: true,
            choiceType: 1
        },
        {
            qId: 10,
            pageId: 2,
            headerText: '上报人当前所在位置？',
            placeholder: '没有则无需填写',
            isRequired: true,
            choiceType: 1
        },

    ],

    pageId: 1,

});




export default (state = defaultState, action) => {
    switch (action.type) {

        case actionTypes.change_page_to_action: {
            const { toPageId } = action.payload;
            const newState = state.set('pageId', toPageId);
            return newState;
        }

        case actionTypes.change_reg_form_input_action: {
            const { pageId, qId, newValue } = action.payload;
            let newState;
            switch (pageId) {
                case 1:
                    newState = state.setIn(['regContents', `${qId}`, 'value'], newValue);
                    break;
                case 2:
                    newState = state.setIn(['regDetailContents', `${qId}`, 'value'], newValue)
                    break;
                default:
                    return state;
            }
            return newState;
        }

        // TODO: 可优化，input和checkout更改合并
        case actionTypes.change_reg_form_checkout_action: {
            const { pageId, qId, newValue } = action.payload;
            let newState;
            switch (pageId) {
                case 1:
                    newState = state.setIn(['regContents', `${qId}`, 'value'], newValue);
                    break;
                case 2:
                    newState = state.setIn(['regDetailContents', `${qId}`, 'value'], newValue)
                    break;
            }
            return newState;
        }

        case actionTypes.change_reg_checkout_action: {
            const { pageId, qId, newValue, choiceType } = action.payload;
            let newState;
            switch (choiceType) {
                case 2:
                    newState = state.setIn(['regDetailContents', `${qId}`, 'value'], newValue);
                case 3:
                    newState = state.setIn(['regDetailContents', `${qId}`, 'value'], newValue);
            }
            return newState;
        }

        default:
            return state;
    }
};