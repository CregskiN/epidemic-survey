import styled from 'styled-components';

export const ManagementWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* overflow-y: scroll; */
    width: 100vw;
    height: 94vh;

    .footer {
        font-size: 13px;
        margin: 10px auto;
        margin-top: 40px;
        color: #67cfff;
    }
`;

export const DisplayBoardWrapper = styled.div`
    width: 95%;
    margin-top: 36vw; /* 表格与顶部的距离 */
    z-index: 10;
`;


export const BackgroundWrapper = styled.div`
    position: fixed;
    top: 6vh;
    width: 100%;
    z-index: -10;
`;
