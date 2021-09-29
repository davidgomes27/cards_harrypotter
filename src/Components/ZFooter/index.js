import React from 'react'
import * as S from './style'
import {Link} from "gatsby"

export default function Footer(){


    return(
        <S.Container>
            <S.BoxUl>
                <li>
                    <S.Linkrouter to="/face">facebook</S.Linkrouter>
                </li>
                <li>
                    <S.Linkrouter to="/insta">finstagram</S.Linkrouter>
                </li>
                <li>
                    <S.Linkrouter to="/pix">pix</S.Linkrouter>
                </li>
                <li>
                    <S.Linkrouter to="/youtube">youtube</S.Linkrouter>
                </li>
            </S.BoxUl>
        </S.Container>
    )
}
