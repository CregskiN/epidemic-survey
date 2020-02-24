import styled from 'styled-components';

export const InputBoxWrapper = styled.div`
opacity: 1;
    margin: 15px 0;
    width: 100%;

    display:flex;
    flex-direction: column;
    align-items: flex-start;

    .header-text {
        margin: 0 0 10px 0;
        font-size: 17px;
        line-height: 20px;

        span {
            color: red;
        }
    }

    .ant-input {
        padding: 2px 5px 2px 5px;
        border-radius: 5px;
        border: 1px solid #DAE2F3;
        width: calc(100% - 10px);
        height: 6vw;
        
    }

    .ant-input::-webkit-input-placeholder {
        color: #999;
    }
    .ant-input:-moz-placeholder {
        color: #999;
    }
    .ant-input:-ms-input-placeholder {
        color: #999;
    }

`; 