import Styled from "styled-components"


export const Container =Styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 8rem;
    box-shadow: -1px 6px 8px 1px rgba(6,5,5,0.7);
    -webkit-box-shadow: -1px 6px 8px 1px rgba(6,5,5,0.7);
    -moz-box-shadow: -1px 6px 8px 1px rgba(6,5,5,0.7);
    background-color: #1F1F1F;
    position: fixed;
    bottom: 84%;
    z-index: 9999999999;
` 

export const BoxInput =Styled.div`
    border: 2px solid #000;
    border-radius: 10px;
    

input{
    width: 20rem;
    height: 2rem;
    border: none;
    border-radius: 10px;

}

`

export const BoxList =Styled.div`
    width: 30%;
`

export const BoxUl =Styled.div`
    display: flex;
    justify-content: space-evenly ;
    align-items: center;
    width: 100%;
    list-style: none;
    color: #712707;
`


export const BoxLink = Styled.a`
        cursor: pointer;
        border-bottom: 2px solid #fff;
        border-radius: 4px;
        text-transform: capitalize;

       
        &:hover {
            color: #ffff;
            border-bottom: 2px solid #712707;
            
        }



`