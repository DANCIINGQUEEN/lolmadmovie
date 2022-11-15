import React from 'react';
import styled from 'styled-components'
import JsonLink from './JsonLink'

const P = styled.p`
font-size:13px;
`

const Container = styled.div`
background-color:#f8f9fa;
border-radius:30px;
padding:0
`

// ARAM221115: {
//     date: "221115",
//         video: [
//         ["",
//             ""],]
// },

function NewLink() {
    const ARAM = {
        ARAM221115: {
            date: "221115",
            video: [
                ["밀어붙이기",
                    "https://www.youtube.com/watch?v=QiPTNVgQcWc"],
                ["레넥톤 기습",
                    "https://www.youtube.com/watch?v=oX95LsMaNJ4"],
                ["같은 한타 헤카림 시점",
                    "https://www.youtube.com/watch?v=da-dKb7I_RM"],
                ["같은 한타 피들스틱 시점",
                    "https://www.youtube.com/watch?v=w_qO28ztQis"],
                ["정신 못차리는 뚜벅이들",
                    "https://www.youtube.com/watch?v=LAyeMs8pQHw"],
                ["유일한 한타 승리 후 넥뿌",
                    "https://www.youtube.com/watch?v=W-gkBOgiAXE"],

            ]
        },
        ARAM221114: {
            date: "221114",
            video: [
                ["쓰레쉬 쿼드라",
                    "https://www.youtube.com/watch?v=WMXADpPCxAM"],
                ["오리아나 이니시",
                    "https://www.youtube.com/watch?v=M5DWUA_yW_I"],
                ["게임을 끝내는 아지르 슈퍼토스",
                    "https://www.youtube.com/watch?v=o_d-E4j-tCk"]
            ]

        },
        ARAM221029: {
            date: "221029",
            video: [
                ["헤카림 6랩 이니시",
                    "https://www.youtube.com/watch?v=jhHZNtXSl9I"],
                ["헤카림 이니시",
                    "https://www.youtube.com/watch?v=aeB1JeiNho0"],
                ["헤카림 이니시2",
                    "https://www.youtube.com/watch?v=wQnWjj_JDPE"],
                ["헤카림 이니시3",
                    "https://www.youtube.com/watch?v=iUCs3jERhXM"],
                ["에코 쿼드라",
                    "https://www.youtube.com/watch?v=DXY3SdRYC_Q"],
                ["헤카림 게임 끝내기",
                    "https://www.youtube.com/watch?v=YdA4kExey9c"],
                ["파이크 쿼드라",
                    "https://www.youtube.com/watch?v=HRgVWaJyKK0"],
                ["파이크 쿼드라2",
                    "https://www.youtube.com/watch?v=R9gQI9mV9_w"],
                ["루시안 쿼드라",
                    "https://www.youtube.com/watch?v=L_5VgeXfI10"],
                ["알리스타 이니시",
                    "https://www.youtube.com/watch?v=LiNDlw_GwO0"],
                ["이렐 6랩 이니시",
                    "https://www.youtube.com/watch?v=vezgFOqioCE"],
                ["오리아나 궁니시",
                    "https://www.youtube.com/watch?v=MDox2X_O6IQ"],
                ["워윅 이니시, 트리스타나 쿼드라",
                    "https://www.youtube.com/watch?v=Ixpve7eeDlQ"],

            ]
        },
        ARAM221028: {
            date: "221028",
            video: [
                ["탈압박",
                    "https://www.youtube.com/watch?v=ZTO0H5hyuCg"],
                ["수문장 갈리오",
                    "https://www.youtube.com/watch?v=KzF4iFzRdAA"],
                ["나르 이니시",
                    "https://www.youtube.com/watch?v=2fwT_vpRUMs"],
                ["나르 4인궁",
                    "https://www.youtube.com/watch?v=Qa6JvR9OAhY"],
                ["코그모 카이팅",
                    "https://www.youtube.com/watch?v=gZwkx-PXcRA"],
                ["비에고 선빵",
                    "https://www.youtube.com/watch?v=p2hrCgZ8TN0"],
                ["비에고 선빵2",
                    "https://www.youtube.com/watch?v=ZN2Qq1AwE2Y"],
                ["비에고 쿼드라",
                    "https://www.youtube.com/watch?v=ksS9DMh4apk"],
                ["슈퍼발키리",
                    "https://www.youtube.com/watch?v=K3nVh-CR9lo"],
                ["노틸 이니시",
                    "https://www.youtube.com/watch?v=ds-xv-omOAY"],
                ["노틸 이니시2",
                    "https://www.youtube.com/watch?v=OixJK7Oynlo"],
                ["아트록스 쿼드라",
                    "https://www.youtube.com/watch?v=wchXsZMOMQA"],


            ]
        },

    }

    // Object.entries(QWE).map(q => {
    //     // console.log(q[1].video)
    //     // console.log(q[1])
    //     q[1].video.map(w => {
    //         // console.log(q[1].date)
    //         // console.log(w[0])
    //         // console.log(w[1])
    //     })
    // })


    return (
        <div>
            {
                Object.entries(ARAM).map((video, index) => (
                        <Container key={index}>
                            <P>
                                {video[1].date.slice(0, 2) + "-" + video[1].date.slice(2, 4) + "-" + video[1].date.slice(4, 6)}
                            </P>
                            <JsonLink data={video[1].video}/>
                        </Container>
                    )
                )
            }
        </div>
    );
}

export default NewLink;