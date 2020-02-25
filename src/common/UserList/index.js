import styled from 'styled-components';

export const UserListWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 5px;
    box-shadow: #e2e1e4 0 0 15px;
    

    .list-header {
        width: 100%;
        height: 30px;
        font-size: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;

        .header-name{
            width: 24%;
            text-align: center;
            border-right: 1px solid #e2e1e4;
        }
        .header-gender{
            width: 13%;
            text-align: center;
            border-right: 1px solid #e2e1e4;
        }
        .header-age{
            width: 13%;
            text-align: center;
            border-right: 1px solid #e2e1e4;
        }
        .header-phoneNumber{
            width: 50%;
            text-align: center;
        }
    }

    .list-body {
        width: 100%;
    }
`;

export const ListItemWrapper = styled.div`
    width: 100%;
    height: 30px;
    margin: 5px 0 0 0;
    font-size: 90%;
    box-shadow: #e2e1e4 0 0 15px;
    border-top: 1px solid #e2e1e4;
    display: flex;
    flex-direction: row;
    align-items: center;
    .item-name{
        width: 24%;
        text-align: center;
    }
    .item-gender{
        width: 13%;
        text-align: center;
    }
    .item-age{
        width: 13%;
        text-align: center;
    }
    .item-phoneNumber{
        width: 50%;
        text-align: center;
    }
    
`;

