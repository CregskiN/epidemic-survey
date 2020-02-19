import styled from 'styled-components';

export const InputCheckoutboxWrapper = styled.div`

    margin: 15px 0;
    width: 100%;

    after: {
        content: '';
        display: block;
        width: 80%;
        height: 1px;
        background-color: #000;
    }

    .header-text {
        margin: 0 0 10px 0;
        font-size: 17px;

        span {
            color: red;
        }
    }

    .ant-radio-group {
        margin: 0;

        .ant-radio-wrapper{
            font-size: 15px;
            line-height: 15px;

            ::after {
                content: ' ';
                display: block;
                margin: 6px 0;
                background-color: #fff;
            }
        }
    }
    
    

    .ant-checkbox-group-item {
        display: block;
        font-size: 18px;
        height: 30px;
        line-height: 30px;

        .ant-checkbox{
            height: 5px;
            width: 5px;
            margin: 0 5px 0 10px;
        }
    }
`; 