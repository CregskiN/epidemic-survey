import styled from 'styled-components';

export const LoginBoardWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 200;
    background-color: gray;
    opacity: 0.9;
    
    
    /* box-sizing: border-box; */
    /* margin: 0 0 20px 0; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

    .login-board {
        color: #000;
        margin: 0 0 50px 0 ;
        z-index: 210;
        width: 80%;
        background-color: #fff;
        border-radius: 5px;
        padding: 10px;
        opacity: 1 !important;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .login-submit{
        /* background-color: blue;
        color: #2671fe;
        border-radius: 5px; */
        z-index: 211;
        margin: 10px auto;
        background-color: #2671fe;
        width: 50vw;
        height: 10vw;
        border-radius: 5px;
        display: block;
        text-align: center;
        line-height: 10vw;
        font-size: 20px;
        color: #fff;
        text-decoration: none;
    }
`;