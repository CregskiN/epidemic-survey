import React, { memo } from 'react';

import InputCheckoutbox from '../../../../common/InputCheckoutbox/index.jsx'

import {
    SubmitWrapper,
    Submit
} from './index.js';
import {
    RegistrateFormWrapper,
} from '../RegistrateForm/index.js';

const RegistrateFormDetail = memo((props) => {
    console.log('RegistrateForm组件渲染了！');

    const {
        regDetailContents,
        changePage,
        changeRegFormInput,
        changeRegFormCheckout,
    } = props;


    return (
        <RegistrateFormWrapper>

            {
                regDetailContents.map((item, index) => {
                    switch (item.get('choiceType')) {
                        case 1:
                            return <InputCheckoutbox
                                key={item.get('qId')}
                                item={item}
                                choiceType={item.get('choiceType')}
                                changeRegFormInput={changeRegFormInput}
                                changeRegFormCheckout={changeRegFormCheckout}
                            />;

                        case 2:
                            return <InputCheckoutbox
                                key={item.get('qId')}
                                item={item}
                                choiceType={item.get('choiceType')}
                                changeRegFormInput={changeRegFormInput}
                                changeRegFormCheckout={changeRegFormCheckout}
                            />;

                        case 3:
                            return <InputCheckoutbox
                                key={item.get('qId')}
                                item={item}
                                choiceType={item.get('choiceType')}
                                changeRegFormInput={changeRegFormInput}
                                changeRegFormCheckout={changeRegFormCheckout}
                            />
                        default:
                            return;
                    }
                })
            }
            <SubmitWrapper>
                <Submit onClick={() => changePage(1)}>上一页</Submit>
                <Submit onClick={() => changePage(1)}>提交</Submit>
            </SubmitWrapper>
        </RegistrateFormWrapper>
    )
});

export default RegistrateFormDetail;

