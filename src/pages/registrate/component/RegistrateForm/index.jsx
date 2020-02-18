import React, { memo } from 'react';
import PropType from 'prop-types';
import InputCheckoutbox from '../../../../common/InputCheckoutbox/index.jsx'

import {
    RegistrateFormWrapper,
    Submit
} from './index.js';

const RegistrateForm = memo((props) => {
    console.log('RegistrateForm组件渲染了！');

    const {
        regContents,
        changePage,
        changeRegFormInput
    } = props;




    return (
        <RegistrateFormWrapper>

            <div className='reg-header'>疫情上报登记表</div>
            <div className='reg-subHeader'>&ensp;希望大家齐心协力共同维护社区安全！</div>

            {
                regContents.map((item) => {
                    return (
                        <InputCheckoutbox
                            key={item.get('qId')}
                            item={item}
                            choiceType={item.get('choiceType')}
                            changeRegFormInput={changeRegFormInput}
                        />
                    )
                })
            }

            <Submit onClick={() => changePage(2)}>
                下一页
            </Submit>

        </RegistrateFormWrapper>
    )
})

RegistrateForm.propTypes = {
    regContents: PropType.object.isRequired,
    changePage: PropType.func.isRequired,
    changeRegFormInput: PropType.func.isRequired,
}

export default RegistrateForm;

