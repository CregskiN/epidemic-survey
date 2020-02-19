import React from 'react';
import { Link } from 'react-router-dom';

import {
    PopularWrapper
} from './index.js';
import {
    SubmitWrapper,
    Submit
} from '../registrate/component/RegistrateFormDetail/index.js';

const Popular = (props) => {

    const backToTop = () => {
        document.documentElement.scrollTop = 0;
    }

    return (
        <PopularWrapper>
            <img src={require('../../static/imgs/page1-1.png')} alt="科普小知识" />

            <SubmitWrapper onClick={backToTop}>
                <Submit>
                    <Link className='link' to='/registrate'>下一页</Link>
                </Submit>
            </SubmitWrapper>
        </PopularWrapper>
    )
}

export default Popular;