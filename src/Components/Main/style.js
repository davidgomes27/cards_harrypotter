import Styled from "styled-components"


export const Container = Styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    //border: 1px solid blue;
    background-color: #1F1F1F ;
    margin-top: 7rem;
    padding-top: 4rem;
    
`
export const ContainerBoxCard = Styled.div`
    
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    //border: 1px solid red;
`

export const BoxText = Styled.div`
    display: flex;
    width: 100%;
    height: 2rem;
    justify-content: center;
    align-items: center; 
    flex-direction: column;
    
    
    h2{
        color: #000;
    font-size: 100%;
    }
`


export const BoxCard = Styled.div`
 display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:20%;
    height:30rem;
    border: 2px solid black;
    margin: 3%;
    background-color: #712707;
    box-shadow: -1px 6px 8px 1px rgba(6,5,5,0.7);
    -webkit-box-shadow: -1px 6px 8px 1px rgba(6,5,5,0.7);
    -moz-box-shadow: -1px 6px 8px 1px rgba(6,5,5,0.7);  
    &:hover{
        border: 2px solid red;
        opacity: 0.8 ;
    }
`

export const BoxCardMoldura = Styled(BoxCard)`
    width:90%;
    padding: 5%;
    background-color: #ffff;
`
export const BoxImg = Styled.div`
    width: 88%;
    
`
