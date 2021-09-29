import Styled from "styled-components"

export const Container = Styled.div`
    width: 100%;
    height: 20rem;
    background-color:  #1F1F1F;

`

export const BoxUl = Styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
`

export const Linkrouter = Styled.a`
        color: #712707;
        cursor: pointer;
        border-bottom: 2px solid #fff;
        border-radius: 4px;
        text-transform: capitalize;

       
        &:hover {
            color: #ffff;
            border-bottom: 2px solid #712707;
            
        }

`