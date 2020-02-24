import styled from 'styled-components';

export const DisplayBlockWrapper = styled.div`
    width: 100%;
    box-shadow: #e2e1e4 0 0 15px;
    border-radius: 3px;
    box-sizing: border-box;
    padding: 10px 0 0 0;

    display: flex;
    flex-direction: row;


    .displayblock-prefixIcon {
        width: 25%;
        margin: 10px 7%;
    }

    .displayblock-right {
        width: 64vw;
        /* height: 45vw; */

        .displayblock-right-number {
            height: 60%;
            font-size: 25px;
            line-height: 25px;
        }

        .displayblock-right-text {
            height: 40%;
            font-size: 15px;
            line-height: 15px;
        }
    }
`;