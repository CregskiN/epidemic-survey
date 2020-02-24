import React, { memo } from 'react';


import DisplayBlock from '../../../../common/DisplayBlock/index.jsx';
import {
    DisplayBoardWrapper,
    DisplayBlockWrapper
} from './index.js';

import okIconUrl from '../../../../static/imgs/ok.png';
import subIconUrl from '../../../../static/imgs/sub.png';

const DisplayBoard = memo((props) => {
    const {
        usersAndRegs
    } = props;


    return (
        <DisplayBoardWrapper>
            <div className='displayboard-top'>
                <DisplayBlockWrapper>
                    <DisplayBlock prefixIconUrl={okIconUrl} number={usersAndRegs.size} text='已填写人数'/>
                </DisplayBlockWrapper>
                <DisplayBlockWrapper>
                    <DisplayBlock prefixIconUrl={subIconUrl} number={9999} text='未填写人数'/>
                </DisplayBlockWrapper>
            </div>


        </DisplayBoardWrapper>
    )
})

export default DisplayBoard;