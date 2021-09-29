import React from 'react'
import * as S from "./style"
import {Link} from "gatsby"

export default function Header(){


    return(
        <S.Container>
            <S.BoxInput>
                <input/>
            </S.BoxInput>
            <S.BoxList>
                <S.BoxUl>
                    <li>
                        <S.BoxLink to="/sobre">Sobre</S.BoxLink>
                    </li>
                    <li>
                        <S.BoxLink to="/loja">Loja</S.BoxLink>
                    </li>
                    <li>
                        <S.BoxLink to="/historias">Historia</S.BoxLink>
                    </li>
                </S.BoxUl>
            </S.BoxList>
        </S.Container>
    )
}