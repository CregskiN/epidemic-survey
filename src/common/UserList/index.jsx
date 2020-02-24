import React, { memo } from 'react';
import {
    UserListWrapper,
    ListItemWrapper,

} from './index.js';

const ListItem = memo((props) => {
    const {
        userInfo
    } = props;

    const [
        user_id,
        user_name,
        user_gender,
        user_age,
        user_account
    ] = [userInfo.get('user_id'), userInfo.get('user_name'), userInfo.get('user_gender'), userInfo.get('user_age'), userInfo.get('user_account')]

    return (
        <ListItemWrapper>
            <div className='item-name'>{user_name}</div>
            <div className='item-gender'>{user_gender}</div>
            <div className='item-age'>{user_age}</div>
            <div className='item-phoneNumber'>{user_account}</div>
        </ListItemWrapper>
    )
})


const UserList = memo((props) => {

    const {
        usersAndRegs
    } = props;



    return (
        <UserListWrapper>
            <div className='list-header'>
                <div className='header-name'>姓名</div>
                <div className='header-gender'>性别</div>
                <div className='header-age'>年龄</div>
                <div className='header-phoneNumber'>手机号</div>

            </div>
            <div className='list-body'>
                {
                    usersAndRegs.size === 0
                        ? ''
                        : usersAndRegs.map((value, index) => {
                            const userInfo = value.get('userInfo');
                            return (
                                <ListItem key={userInfo.get('user_id')} userInfo={userInfo} />
                            )
                        })
                }
            </div>
        </UserListWrapper>
    )
});

export default UserList;





