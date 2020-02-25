import React, { memo } from 'react';

import UserList from '../../../../common/UserList/index.jsx';
import {
    UserListShowWrapper
} from './index.js'



const UserListShow = memo((props) => {
    const {
        usersAndRegs,
        onDelete
    } = props;

    return (
        <UserListShowWrapper>
            <UserList usersAndRegs={usersAndRegs} onDelete={onDelete}/>
        </UserListShowWrapper>
    )
})

export default UserListShow;