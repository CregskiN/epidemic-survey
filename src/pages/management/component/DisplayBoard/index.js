import styled from 'styled-components';

export const DisplayBoardWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    border-radius: 5px;
    background: #fff;
    padding: 15px 0;
    /* box-shadow: #e2e1e4 0 0 15px; */

    .displayboard-top {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
`;

export const DisplayBlockWrapper = styled.div`
    box-sizing: border-box;
    width: 45%;
    padding: 6px;
`;