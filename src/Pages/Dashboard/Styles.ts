import styled from "styled-components";

export const NameUser = styled.h1`
    color: #595959;
    margin: 50px 0 25px 0;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 22px;
`
export const Grind1 = styled.div`
    width: 100%;
    background: #ffffff !important;
    padding: 25px;
    border-radius: 2px;

    @media screen and (max-width: 464px){
        background: transparent !important;
    }
`
export const TitleGrid = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;
    color: #595959;
    margin-bottom: 10px;
`
export const CardInfo = styled.div`
    padding: 10px 10px;
    background: #FFFFFF;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
    border-radius: 2px;
    margin: 45px 0;


    margin: 10px 3px;

    p{
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 18px;
        color: #000000;
        margin: 15px 0 30px 0;
    }
`
export const CardInfoResultados = styled.div`
    padding: 10px 10px;
    background: #FFFFFF;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
    border-radius: 2px;
    margin: 45px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 10px 3px;

    p{
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 18px;
        color: #000000;
        margin: 15px 0 30px 0;
    }
`
export const BadgeInfo = styled.span`
    padding: 5px 10px;
    border-radius: 2px;
    color: #ffffff;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 22px;
`
export const ProgressInfo = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 0 15px 0;
    font-size: 13px;
    color: #757575;
`
export const TimeInfo = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 12px;
    color: #757575;
`
export const ProgressBarResult = styled.div`
    width: 35%;

    p {
        margin-bottom: 10px;
        font-size: 20px;
        font-family: Roboto;
        font-style: normal;
    }

    span {
        font-size: 14px;
        color: #5e5e5e
    }
`
