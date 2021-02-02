import styled from "styled-components";

export const Header = styled.div`
    padding: 20px 0; 
    background: #ffffff;
`
export const HeaderItems = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    p{
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 28px;
        color: #757575;
    }
`
export const DivIconsCenter = styled.div`
    display: flex;
    align-items: center;
    
`
export const MainContainer = styled.div`
    padding: 20px;
    border-radius: 3px;
    background: #ffffff;
    margin-top: 50px;
`
export const HeaderInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const QuestionBody = styled.div`
    margin-top: 20px;

    img {
        width: 100%;
    }
`
export const ForceCenter = styled.div`
    display: flex;
    align-items: center;

    p{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        margin-right: 5px;
    }
`
export const ButtonsBox = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: center;

    button {
        margin: 0 10px;
    }
`