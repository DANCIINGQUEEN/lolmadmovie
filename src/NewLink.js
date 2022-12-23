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

// ARAM221215: {
//     date: "221215",
//         video: [
//         ["",
//             ""],
//             ]
// },

function NewLink() {
    const ARAM = {
        ARAM221223: {
            date: "221223",
            video: [
                ["케인 쿼드라",
                    "https://www.youtube.com/watch?v=Fv0F7PcYccg"],
                ["케인 그라가스 이렐리아",
                    "https://www.youtube.com/watch?v=02mj0Y7Lzx4"],
                ["비에고",
                    "https://www.youtube.com/watch?v=jVLW-9DO0bY"],
                ["아무튼 이김",
                    "https://www.youtube.com/watch?v=1rA0ERtpF6g"],
                ["상대 신지드 하드 스로잉",
                    "https://www.youtube.com/watch?v=9JsYBj4qTEo"],
                ["세트 이니시",
                    "https://www.youtube.com/watch?v=iMKGIpjSNBw"],
                ["세트 이니시 2",
                    "https://www.youtube.com/watch?v=SkOjgRp-pj8"],
                ["오합지졸 상대",
                    "https://www.youtube.com/watch?v=zG8MJbDQJsk"],
                ["초가스 워윅",
                    "https://www.youtube.com/watch?v=8_vos74jVx8"],
                ["2제압",
                    "https://www.youtube.com/watch?v=7LklN4xHWTM"],

            ]
        },
        ARAM221222: {
            date: "221222",
            video: [
                ["허우적대는 상대",
                    "https://www.youtube.com/watch?v=CSMYf8KyiYY"],
            ]
        },
        ARAM221221: {
            date: "221221",
            video: [
                ["리신 쿼드라 주워먹기",
                    "https://www.youtube.com/watch?v=wMDs-tM4Q0E"],
                ["렐 이니시, 아칼리 쿼드라",
                    "https://www.youtube.com/watch?v=rr9WV_qe2Q0"],
                ["렐 이니시",
                    "https://www.youtube.com/watch?v=nhOoO7uWj1Q"],
                ["3랩 올클리어",
                    "https://www.youtube.com/watch?v=DrDPC_e5ENY"],
                ["케넨 아지르",
                    "https://www.youtube.com/watch?v=BzdryN3oHco"],
                ["아지르 케넨",
                    "https://www.youtube.com/watch?v=KhMZaCXoyNQ"],
                ["오른 칼리스타",
                    "https://www.youtube.com/watch?v=wSzhjZnwyy4"],
                ["ㅈㄴ 못하는 상대",
                    "https://www.youtube.com/watch?v=duBYCxB44UI"],

            ]
        },
        ARAM221220: {
            date: "221220",
            video: [
                ["케틑 왕귀",
                    "https://www.youtube.com/watch?v=PUL5u2sqgxQ"],
                ["바이",
                    "https://www.youtube.com/watch?v=ep5v19h4ErM"],
                ["제라스 국토횡단",
                    "https://www.youtube.com/watch?v=Sd-i8xzWaAA"],
                ["바이 2",
                    "https://www.youtube.com/watch?v=NTjEf__HBoA"],
                ["카사딘 쿼드라",
                    "https://www.youtube.com/watch?v=YphjyT9qaoY"],
                ["상대 자르반 레이드 실패",
                    "https://www.youtube.com/watch?v=S1cc7L0g3JU"],
                ["자르반 신지드로부터 탈출",
                    "https://www.youtube.com/watch?v=V8EAXhGefz4"],
                ["블리츠 블로킹",
                    "https://www.youtube.com/watch?v=UlJ1n-H_COk"],

            ]
        },
        ARAM221217: {
            date: "221217",
            video: [
                ["리산드라 속박",
                    "https://www.youtube.com/watch?v=JyYYkX2AuQY"],
                ["바이 이니시",
                    "https://www.youtube.com/watch?v=Sd3dCqMfaA0"],
                ["손쉽게 이기기",
                    "https://www.youtube.com/watch?v=2-JelLi52RE"],
                ["인원수 차이로 겜 끝내기",
                    "https://www.youtube.com/watch?v=VrjBjT_oqV4"],
                ["아무무 자르고 한타 승리",
                    "https://www.youtube.com/watch?v=IZjeE-TrVkw"],
                ["6랩 싸움 승리, 마지막 적 처치",
                    "https://www.youtube.com/watch?v=echCmuRPLvQ"],
                ["징크스 프리딜, 4대5 한타 승리",
                    "https://www.youtube.com/watch?v=WFbJqOJsZ14"],
                ["신지드 추노, 마지막 적 처치",
                    "https://www.youtube.com/watch?v=CLqFJJQAan8"],
                ["그웬",
                    "https://www.youtube.com/watch?v=3yAS53GWHbU"],
                ["마지막 적 처지 2",
                    "https://www.youtube.com/watch?v=ijNgv98zwrY"],
                ["마지막 적 처지",
                    "https://www.youtube.com/watch?v=wI6mN6fRKTU"],
            ]
        },

        ARAM221216: {
            date: "221216",
            video: [
                ["카타리나 쿼드라",
                    "https://www.youtube.com/watch?v=hXfLehEwmG0"],
                ["ㅈㄴ 못하는 트위치",
                    "https://www.youtube.com/watch?v=t7pDwCkXyOY"],
                ["ㅈㄴ 못하는 트위치2",
                    "https://www.youtube.com/watch?v=ax_zqNjxF-8"],
                ["닐라 5인궁 이니시",
                    "https://www.youtube.com/watch?v=YsAS9PnwaCo"],
                ["카이사 w",
                    "https://www.youtube.com/watch?v=X3nri0fU2M8"],
                ["카이사 w2",
                    "https://www.youtube.com/watch?v=HwVu5CV3V5c"],
                ["오합지졸 상대",
                    "https://www.youtube.com/watch?v=st6G2E3pRUQ"],
            ]
        },
        ARAM221214: {
            date: "221214",
            video: [
                ["루난 징크스",
                    "https://www.youtube.com/watch?v=-LGC7pAocbE"],
                ["카밀 이니시",
                    "https://www.youtube.com/watch?v=pyfBi3tp43o"],
                ["사이온 이니시 막기, 다이애나 한타 파괴",
                    "https://www.youtube.com/watch?v=B_9sPFe3i2I"],
                ["병림픽",
                    "https://www.youtube.com/watch?v=-m1r_kE3IpM"],
                ["정돈된 한타",
                    "https://www.youtube.com/watch?v=SMhjvwJl4WQ"],
            ]
        },
        ARAM221211: {
            date: "221211",
            video: [
                ["일라오이 무지성 이니시",
                    "https://www.youtube.com/watch?v=LSmW7L8l45A"],
                ["시원하게 겜 끝내기",
                    "https://www.youtube.com/watch?v=1_ez6bYCjtc"],
                ["스웨인 딜러 속박",
                    "https://www.youtube.com/watch?v=6H6lb9OfjmY"],
                ["세트 안면강타",
                    "https://www.youtube.com/watch?v=ELdrROSXLvw"],
                ["안죽는 스웨인",
                    "https://www.youtube.com/watch?v=4PDSmzhZDnk"],
                ["안죽는 스웨인2",
                    "https://www.youtube.com/watch?v=ETMZxhhIQiI"],
                ["리산드라 어그로",
                    "https://www.youtube.com/watch?v=YtVoXQsrZ9Y"],
                ["가지고 놀기",
                    "https://www.youtube.com/watch?v=N5zFBdtUL7Y"],

            ]
        },
        ARAM221126: {
            date: "221126",
            video: [
                ["트런들 불꽃 방망이질",
                    "https://www.youtube.com/watch?v=HIgSqivhpjU"],
                ["워윅 몸을 불사르는 이니시",
                    "https://www.youtube.com/watch?v=Ny9YyqOOR58"],
                ["트런들 기둥, 말파 3인궁",
                    "https://www.youtube.com/watch?v=LeFIsTsZOnQ"],
                ["트런들 몽둥이찜질",
                    "https://www.youtube.com/watch?v=irr-TPtKtcc"],

            ]
        },
        ARAM221124: {
            date: "221124",
            video: [
                ["세트 역이니시",
                    "https://www.youtube.com/watch?v=Fm_gxsmjTyA"],
                ["세트 한타 파괴",
                    "https://www.youtube.com/watch?v=cAfdU5D4dMs"],
                ["개못하는 상대팀",
                    "https://www.youtube.com/watch?v=7Lno0ln8TBE"],
                ["레오나 이니시",
                    "https://www.youtube.com/watch?v=QS_pV9NTYIc"],
                ["자르반 하드스로잉, 겜 끝",
                    "https://www.youtube.com/watch?v=Ivm2lwPck1w"],
                ["쌍마무리",
                    "https://www.youtube.com/watch?v=B79og27zuX0"],
                ["게임을 끝내는 그라가스 술통",
                    "https://www.youtube.com/watch?v=gdCsT6Tm5ZA"],

            ]
        },
        ARAM221123: {
            date: "221123",
            video: [
                ["키아나 쿼드라",
                    "https://www.youtube.com/watch?v=faL-gAhZFOA"],
                ["스웨인 3인 속박",
                    "https://www.youtube.com/watch?v=npV7p8Af0So"],
                ["역전승",
                    "https://www.youtube.com/watch?v=fQxrEMqbgRU"],
                ["마무리",
                    "https://www.youtube.com/watch?v=Db2GCo8cpHs"],
                ["한타 연속 두번 승리",
                    "https://www.youtube.com/watch?v=gO_2NJ9PKTc"],
                ["쓰레쉬 그랩",
                    "https://www.youtube.com/watch?v=acXA5NfP1OE"],
                ["쓰레쉬 3그랩",
                    "https://www.youtube.com/watch?v=kZzzonCkzWc"],
                ["다리우스 이니시",
                    "https://www.youtube.com/watch?v=N6jYcqO3R-I"],
                ["요네 이니시, 킨드 궁에서 꺼내기",
                    "https://www.youtube.com/watch?v=R_4h6hpisRM"],
                ["그라가스 이니시",
                    "https://www.youtube.com/watch?v=in0w7H2CsuY"],
                ["갱플랭크 쿼드라",
                    "https://www.youtube.com/watch?v=oUQgHHMP8Ss"],
                ["케틀 잡기",
                    "https://www.youtube.com/watch?v=yRLT6Jwn7cY"],
                ["코그모 카이팅",
                    "https://www.youtube.com/watch?v=l0scmmIu_5s"],
                ["케틀 잡기2",
                    "https://www.youtube.com/watch?v=5anbe6kL0BI"],
                ["해카림 역전승",
                    "https://www.youtube.com/watch?v=CaOFGUTtQBk"],
                ["요네 이니시 그라가스 술통",
                    "https://www.youtube.com/watch?v=YxVGdgnCg_w"],

            ]
        },
        ARAM221120: {
            date: "221120",
            video: [
                ["알리스타 이니시",
                    "https://www.youtube.com/watch?v=vps7kcUokP0"],
                ["딜러들 개빡딜",
                    "https://www.youtube.com/watch?v=ojsj8dYGAHk"],
                ["세트 이니시",
                    "https://www.youtube.com/watch?v=BQZYXy2PsxM"],
                ["쓰레쉬 이니시, 다리우스 마무리",
                    "https://www.youtube.com/watch?v=-ujyxRzIB_Y"],
                ["크산테 이니시",
                    "https://www.youtube.com/watch?v=7dbv4-cG6MI"],
                ["안죽는 크산테",
                    "https://www.youtube.com/watch?v=URf2hKusoro"],
                ["4탱커",
                    "https://www.youtube.com/watch?v=b6C7woMkHl0"],

            ]
        },
        ARAM221119: {
            date: "221119",
            video: [
                ["알리스타 이니시 받아치기",
                    "https://www.youtube.com/watch?v=pn7qCK0ztdo"],
                ["워윅 이니시",
                    "https://www.youtube.com/watch?v=kl5f34-l2PQ"],
                ["신짜오 이니시, 카이사 쿼드라",
                    "https://www.youtube.com/watch?v=o_534gDrkEg"],
                ["게임을 끝내는 워윅, 신짜오 이니시",
                    "https://www.youtube.com/watch?v=D36YqAQKBSE"],
                ["대역전극",
                    "https://www.youtube.com/watch?v=HIK2dMeS-WU"],
            ]
        },
        ARAM221118: {
            date: "221118",
            video: [
                ["오른 이니시 받아치기",
                    "https://www.youtube.com/watch?v=w1FWNsck5CM"],
                ["시비르 쿼드라킬",
                    "https://www.youtube.com/watch?v=n3Qvv1DmLPc"],
            ]
        },
        ARAM221117: {
            date: "221117",
            video: [
                ["진 쿼드라",
                    "https://www.youtube.com/watch?v=DhFyGirBLUo"],
                ["진 바드 누누 비에고 애쉬",
                    "https://www.youtube.com/watch?v=fYYNdKyOXgM"],
                ["원거리 포격 겜 끝내기",
                    "https://www.youtube.com/watch?v=_DLzJ1Iz7nc"],
            ]
        },
        ARAM221116: {
            date: "221116",
            video: [
                ["요네 케넨",
                    "https://www.youtube.com/watch?v=rLatS0-ZaoE"],
                ["헤카림",
                    "https://www.youtube.com/watch?v=UEtdI4GFg_Y"],
                ["아칼리 마크",
                    "https://www.youtube.com/watch?v=X5PqYgbpEcE"],
                ["이렐, 리산 이니시 아크샨 카이팅",
                    "https://www.youtube.com/watch?v=ts_mX0Fq6u4"],
                ["라칸 이니시, 이렐 쿼드라",
                    "https://www.youtube.com/watch?v=_4lvuMdBk1Y"],

            ]
        },
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