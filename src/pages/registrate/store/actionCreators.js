import axios from 'axios';
import { actionTypes } from './index.js';

/**
 * 
 * @param {*} pageId 新页码
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
 * 
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

export const changeRegFormCheckoutAction = (pageId, qId, newValue, choiceType) => {
    return {
        type: actionTypes.change_reg_checkout_action,
        payload:{ 
            pageId,
            qId,
            newValue,
            choiceType
        }
    }
}

