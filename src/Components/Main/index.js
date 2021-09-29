import React, { useState, useEffect } from 'react'
import { Api } from "../../Services/api"
import * as S from "./style"



export default function Main() {

    const [ListApi, setListApi] = useState([])


    useEffect(() => {
        Api.get()
            .then(response => setListApi(response.data))
    }, [])





    return (
        <S.Container>
            <S.ContainerBoxCard >
                {ListApi.map((item, index) => (
                    <S.BoxCard key={index}>
                        <S.BoxCardMoldura>
                            <S.BoxText>
                                <h2><b>Ator(a):</b>{item.actor}</h2>
                            </S.BoxText>
                            <S.BoxImg>
                                <img src={item.image} alt={item.name} width='100%'/>
                            </S.BoxImg>
                            <S.BoxText>
                                <h2><b>PRS:</b>{item.name}</h2>
                                <h2><b>Casa:</b>{item.house}</h2>
                            </S.BoxText>
                        </S.BoxCardMoldura>
                    </S.BoxCard>
                ))}
            </S.ContainerBoxCard>
        </S.Container>
    )
}