import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { createSelector } from 'reselect';

import Background from '../../common/Background/index.jsx';
import LoginBoard from '../../common/LoginBoard/index.jsx';
import DisplayBoard from './component/DisplayBoard/index.jsx';
import UserListShow from './component/UserListShow/index.jsx';

import {
    ManagementWrapper,
    DisplayBoardWrapper,
    BackgroundWrapper,
    UserListShowWrapper
} from './index.js';
import { actionCreators } from './store/index.js';
import { actionCreators as regActionCreators } from '../registrate/store/index.js';
import backgroundUrl from "../../static/imgs/background.png";

const Management = () => {
    const managementSelector = createSelector(state => state, state => state.management);

    const management = useSelector(managementSelector, shallowEqual);
    const [isLoginBoardHidden, managerInfo, usersAndRegs] = [management.get('isLoginBoardHidden'), management.get('managerInfo'), management.get('usersAndRegs')];
    const dispatch = useDispatch();

    const changeInput = useCallback((pageId, id, newValue) => {
        dispatch(actionCreators.changeInputAction(pageId, id, newValue));
    }, [dispatch])

    const submit = () => {
        actionCreators.submit(managerInfo, dispatch);
    };

    //TODO: 头部页码跳转需要整合
    useEffect(() => {
        dispatch(regActionCreators.changePageTo(3));
    }, [dispatch])

    return (
        <ManagementWrapper>

            <LoginBoard hidden={isLoginBoardHidden} managerInfo={managerInfo} submit={submit} changeInput={changeInput} />

            {/* <UserHeader /> */}

            <DisplayBoardWrapper>

                <DisplayBoard usersAndRegs={usersAndRegs}/>

                <UserListShowWrapper>
                    <UserListShow usersAndRegs={usersAndRegs} />
                </UserListShowWrapper>

            </DisplayBoardWrapper>

            <BackgroundWrapper>
                <Background bgUrl={backgroundUrl} />
            </BackgroundWrapper>

            <footer className='footer'>—— 全面落实党中央决策部署&emsp;坚决打赢疫情防控战 ——</footer>

        </ManagementWrapper>
    )
}

export default Management;