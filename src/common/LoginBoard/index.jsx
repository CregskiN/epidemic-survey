import React from 'react';
import PropType from 'prop-types';
import InputBox from '../InputBox/index.jsx';

import {
    LoginBoardWrapper,
} from './index.js';

const LoginBoard = (props) => {
    const {
        hidden,
        managerInfo,
        submit,
        changeInput,

    } = props;


    if (hidden) {
        return '';
    } else {

        return (
            <LoginBoardWrapper>
                <div className='login-board'>
                    <div>请完成管理员登录</div>
                    {
                        managerInfo.map((value, index) => {
                            return (
                                <InputBox
                                    key={value.get('id')}
                                    headerText={value.get('headerText')}
                                    qId={value.get('id')}
                                    value={value.get('value')}
                                    changeRegFormInput={changeInput}
                                    maxLength={15}
                                />
                            )
                        })
                    }
                    <div className='login-submit' onClick={() => submit()}>提交</div>
                </div>


            </LoginBoardWrapper>
        )
    }

}

LoginBoard.propType = {
    submit: PropType.func.isReuired
}

export default LoginBoard;