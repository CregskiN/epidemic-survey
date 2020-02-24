import React, { memo } from 'react';

import UserList from '../../../../common/UserList/index.jsx';
import {
    UserListShowWrapper
} from './index.js'



const UserListShow = memo((props) => {
    const {
        usersAndRegs
    } = props;

    return (
        <UserListShowWrapper>
            <UserList usersAndRegs={usersAndRegs}/>
        </UserListShowWrapper>
    )
})

export default UserListShow;