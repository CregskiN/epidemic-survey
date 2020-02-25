import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { createSelector } from 'reselect';

import Background from '../../common/Background/index.jsx';
import LoginBoard from '../../common/LoginBoard/index.jsx';
import DisplayBoard from './component/DisplayBoard/index.jsx';
import UserListShow from './component/UserListShow/index.jsx';
import ManagerHeader from './component/ManagerHeader/index.jsx';

import {
    ManagementWrapper,
    ManagerHeaderWrapper,
    DisplayBoardWrapper,
    BackgroundWrapper,
    UserListShowWrapper,
} from './index.js';
import { actionCreators } from './store/index.js';
import { actionCreators as regActionCreators } from '../registrate/store/index.js';
import backgroundUrl from "../../static/imgs/background.png";

const Management = () => {
    const managementSelector = createSelector(state => state, state => state.management);

    const management = useSelector(managementSelector, shallowEqual);
    const [
        isLoginBoardHidden,
        managerInfo,
        usersAndRegs,
        isOk,
    ] = [management.get('isLoginBoardHidden'), management.get('managerInfo'), management.get('usersAndRegs'), management.get('isOk')];
    const dispatch = useDispatch();

    const changeInput = useCallback((pageId, id, newValue) => {
        dispatch(actionCreators.changeInputAction(pageId, id, newValue));
    }, [dispatch])

    const submit = () => {
        actionCreators.submit(managerInfo, dispatch);
    };

    const onDelete = useCallback((user_name, user_id, user_community) => {
        if (window.confirm(`您确定要删除${user_name}的数据？`)) {
            actionCreators.deleteUserAndRegs(user_id, user_community, managerInfo, dispatch);
        }
    }, [dispatch, managerInfo]);

    //TODO: 头部页码跳转需要整合
    useEffect(() => {
        dispatch(regActionCreators.changePageTo(3));
    }, [dispatch])

    return (
        <ManagementWrapper>

            <LoginBoard hidden={isLoginBoardHidden} managerInfo={managerInfo} submit={submit} changeInput={changeInput} />

            <DisplayBoardWrapper>
                <ManagerHeaderWrapper>
                    <ManagerHeader hidden={isOk} />
                </ManagerHeaderWrapper>

                <DisplayBoard usersAndRegs={usersAndRegs} />

                <UserListShowWrapper>
                    <UserListShow usersAndRegs={usersAndRegs} onDelete={onDelete} />
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