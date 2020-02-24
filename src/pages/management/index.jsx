import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { createSelector } from 'reselect';

import Background from '../../common/Background/index.jsx';
import LoginBoard from '../../common/LoginBoard/index.jsx';
import {
    ManagementWrapper,
    DisplayBoardWrapper,
    BackgroundWrapper,
} from './index.js';
import { actionCreators } from './store/index.js';
import { actionCreators as regActionCreators } from '../registrate/store/index.js';
import backgroundUrl from "../../static/imgs/background.png";

const Management = () => {
    const managementSelector = createSelector(state => state, state => state.management);

    const management = useSelector(managementSelector, shallowEqual);
    const [isLoginBoardHidden, managerInfo] = [management.get('isLoginBoardHidden'), management.get('managerInfo')];
    const dispatch = useDispatch();

    const changeInput = useCallback((pageId, id, newValue) => {
        dispatch(actionCreators.changeInputAction(pageId, id, newValue));
    }, [dispatch])

    const submit = () => {
        actionCreators.submit(managerInfo, dispatch);
    };

    useEffect(() => {
        dispatch(regActionCreators.changePageTo(3));
    }, [dispatch])

    return (
        <ManagementWrapper>
            <LoginBoard hidden={isLoginBoardHidden} managerInfo={managerInfo} submit={submit} changeInput={changeInput} />

            <DisplayBoardWrapper>
                展示面板
            </DisplayBoardWrapper>

            <footer className='footer'>—— 全面落实党中央决策部署&emsp;坚决打赢疫情防控战 ——</footer>

            <BackgroundWrapper>
                <Background bgUrl={backgroundUrl} />
            </BackgroundWrapper>

            <footer className='footer'>—— 全面落实党中央决策部署&emsp;坚决打赢疫情防控战 ——</footer>

        </ManagementWrapper>
    )
}

export default Management;