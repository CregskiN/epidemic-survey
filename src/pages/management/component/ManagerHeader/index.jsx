import React, { memo, Fragment } from 'react';
import { useSelector } from 'react-redux';
import {
    ManagerHeaderWrapper
} from './index.js';

const ManagerHeader = memo((props) => {
    const {
        hidden,
    } = props;


    if (hidden) {

        const managerInfo = useSelector((state) => {
            return state.management.get('managerInfo')
        })

        const [
            manager_community
        ] = [managerInfo.get('manager_community')]
        return (
            <ManagerHeaderWrapper>
                <div className='manager-header'>{`您好，${manager_community}管理员!`}</div>
            </ManagerHeaderWrapper>
        )
    } else {
        return <Fragment />
    }

})

export default ManagerHeader;