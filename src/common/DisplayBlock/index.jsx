import React, { memo } from 'react';
import PropType from 'prop-types';

import {
    DisplayBlockWrapper
} from './index.js';

const DisplayBlock = memo((props) => {
    const {
        prefixIconUrl,
        number,
        text,

    } = props;


    return (
        <DisplayBlockWrapper>
            <img src={prefixIconUrl} className='displayblock-prefixIcon' />

            <div className='displayblock-right'>
                <div className='displayblock-right-number'>{number}</div>
                <div className='displayblock-right-text'>{text}</div>
            </div>
            
        </DisplayBlockWrapper>
    )
})

DisplayBlock.propType = {

}

export default DisplayBlock;