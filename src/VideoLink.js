import React from 'react';
import styled from 'styled-components'
import HorizonLine from "./HorizonLine";

const A = styled.a`
color: black;
background: #E2E2E2;
font-size: 1.2em;
padding: 0.3em 0.5em;
margin-right: 0.1em;
text-decoration: none;
border-radius:10px;

`

const Li = styled.li`
list-style-type: none;
margin:10px;
display: inline-block;
font-size:15px;`

const P = styled.p`
font-size:13px;
`

const Container = styled.div`
background-color:#f8f9fa;
border-radius:30px;
padding:0`


function VideoLink() {
    //720p
    const HD = {
        L1: {
            title: "펜타 뺏기는 카이사 쿼드라",
            link: "https://www.youtube.com/watch?v=H9opfu-wuiQ"
        },
        L2: {
            title: "사미라 쿼드라",
            link: "https://www.youtube.com/watch?v=1fiG6Dy8IOk"
        },
        L3: {
            title: "진 쿼드라",
            link: "https://www.youtube.com/watch?v=fRim85Skhyc"
        },
        L4: {
            title: "도칠의 끝내기 이니시",
            link: "https://www.youtube.com/watch?v=D69ne0K88vs"
        },
        L5: {
            title: "눈덩이 범인 검거",
            link: "https://www.youtube.com/watch?v=D69ne0K88vs"
        },
        L6: {
            title: "신짜오 이니시",
            link: "https://www.youtube.com/watch?v=8bPqv6RpPY0"
        },
        L7: {
            title: "아트록스 버티기",
            link: "https://www.youtube.com/watch?v=cwdnNxkYycM"
        },
        L8: {
            title: "미포 4인궁",
            link: "https://www.youtube.com/watch?v=4MoY34DbFCU"
        },
        L9: {
            title: "그웬의 미친 딜링",
            link: "https://www.youtube.com/watch?v=HeXAh7Mirr4h"
        },
        L10: {
            title: "카이사 하드스로잉",
            link: "https://www.youtube.com/watch?v=Tt55A6Kmsww"
        },
        L11: {
            title: "카이사 쿼드라",
            link: "https://www.youtube.com/watch?v=aAeAzNkUphI"
        },
        L12: {
            title: "놀다가 게임 끝내기",
            link: "https://www.youtube.com/watch?v=F-DaQp_r7Cc"
        },
        L13: {
            title: "놀다가 게임 못끝내고 지기",
            link: "https://www.youtube.com/watch?v=OuUspUqm1tA"
        },
        L14: {
            title: "근수의 잼드",
            link: "https://www.youtube.com/watch?v=qGcGySetiFs"
        },
        L15: {
            title: "잼드의 넥서스궁",
            link: "https://www.youtube.com/watch?v=Uz9S0wU0IGU"
        },
        L16: {
            title: "다 잘한 한타",
            link: "https://www.youtube.com/watch?v=jJ73s4-BRGw"
        },
        L17: {
            title: "케넨 사일러스 끝내기 이니시",
            link: "https://www.youtube.com/watch?v=XvHbbkJC3Xw"
        },
        L18: {
            title: "다이애나 끝내기 이니시",
            link: "https://www.youtube.com/watch?v=-a7FEthxt_U"
        },
        L19: {
            title: "이렐리아 원딜들과 3대1",
            link: "https://www.youtube.com/watch?v=kQzFbj7tJgs"
        },
        L20: {
            title: "케넨 이니시",
            link: "https://www.youtube.com/watch?v=qT8Tg23laUc"
        },
        L21: {
            title: "게임을 끝내는 케넨 이니시",
            link: "https://www.youtube.com/watch?v=8eVIzu1B_IA"
        },
        L22: {
            title: "오른 요네 이니시",
            link: "https://www.youtube.com/watch?v=S6To08IO5V4"
        },
        L23: {
            title: "케넨 신지드 좌우합작",
            link: "https://www.youtube.com/watch?v=GaQXGHxTcVk"
        },
        L24: {
            title: "오른 요네 게임끝내기 이니시",
            link: "https://www.youtube.com/watch?v=CilTbErssC4"
        },
        L25: {
            title: "2번 만난 상대 2번 이기기",
            link: "https://www.youtube.com/watch?v=-8Z5g6wWVmI"
        },
        L26: {
            title: "갱플, 럼블 좌우합작",
            link: "https://www.youtube.com/watch?v=wDN9dEhjBVQ"
        },
        L27: {
            title: "갱플 럼블 한타 끝내기",
            link: "https://www.youtube.com/watch?v=iskUbh280I4"
        },
        L28: {
            title: "레넥톤, 스웨인 좌우합작",
            link: "https://www.youtube.com/watch?v=yjararpCstM"
        },
        L29: {
            title: "바이의 미친 이니시",
            link: "https://www.youtube.com/watch?v=UpugShm44XY"
        },
        L30: {
            title: "바이의 끝내기 이니시와 세트의 허공답보",
            link: "https://www.youtube.com/watch?v=YNzjH8ZyUAc"
        },
        L31: {
            title: "끝내기 한타",
            link: "https://www.youtube.com/watch?v=1H40ese0ghc"
        },
        L32: {
            title: "카사딘 쿼드라",
            link: "https://www.youtube.com/watch?v=vGkN0lz4SgE"
        },
        L33: {
            title: "빅토르 쿼드라",
            link: "https://www.youtube.com/watch?v=a1tOukqXWrI"
        },
        L34: {
            title: "스웨인 궁존야로 이니시 막기",
            link: "https://www.youtube.com/watch?v=OQEzrVdDPfU"
        },
        L35: {
            title: "아무무 원딜 녹이기",
            link: "https://www.youtube.com/watch?v=ZYKNeT5ga5I"
        },
        L36: {
            title: "아무무 4인궁 한타 빡캐리",
            link: "https://www.youtube.com/watch?v=9CKfuFKVMbo"
        },
        L37: {
            title: "아무무 4인궁 한타 빡캐리2",
            link: "https://www.youtube.com/watch?v=IicrBSYTId8"
        },
        L38: {
            title: "안죽는 워윅과 세나 쿼드라",
            link: "https://www.youtube.com/watch?v=NKcLFbn_vZY"
        },
        L39: {
            title: "마스터 상대로 승리",
            link: "https://www.youtube.com/watch?v=Lk_Q2FPrYcA"
        },
        L40: {
            title: "버섯 개판 5분전",
            link: "https://www.youtube.com/watch?v=EgIJCvSgM88"
        },
        L41: {
            title: "자크, 스웨인 좌우합작",
            link: "https://www.youtube.com/watch?v=vOCyIammA2c"
        },
        L42: {
            title: "다 잘한 한타2",
            link: "https://www.youtube.com/watch?v=FJef-T4JjOI"
        },
        L43: {
            title: "케이틀린 사거리싸움",
            link: "https://www.youtube.com/watch?v=7PvC9F4QlDw"
        },
        L44: {
            title: "미포 궁으로 3명 녹이기",
            link: "https://www.youtube.com/watch?v=qu-25Dp11co"
        },
        L45: {
            title: "게임을 끝내는 빅토르 앞점멸 이니시",
            link: "https://www.youtube.com/watch?v=c_3in4FvFbc"
        },
        L46: {
            title: "패드립먹는 리산드라",
            link: "https://www.youtube.com/watch?v=ywbaTXruICE"
        },
        L46: {
            title: "모데카이저 쿼드라",
            link: "https://www.youtube.com/watch?v=9CJfW5UR10I"
        },
        L47: {
            title: "6랩한타 5대0 올클리어",
            link: "https://www.youtube.com/watch?v=37lhk6rfUig"
        },
        L48: {
            title: "베인 프리딜",
            link: "https://www.youtube.com/watch?v=IJlSNU_1cNE"
        },
        L49: {
            title: "렐 스로잉",
            link: "https://www.youtube.com/watch?v=NGWSxDIwLcg"
        },
        L50: {
            title: "올클리어",
            link: "https://www.youtube.com/watch?v=oPVanpA1qXw"
        },
        L51: {
            title: "스웨인 아무무 합작",
            link: "https://www.youtube.com/watch?v=f9Id3OOuNtQ"
        },
        L52: {
            title: "스웨인 한타장악력",
            link: "https://www.youtube.com/watch?v=dqgwULpNTyU"
        },
        L53: {
            title: "게임을 끝내는 트리스타나의 앞점프",
            link: "https://www.youtube.com/watch?v=GbqinLcSfPo"
        },
        L54: {
            title: "리신 펜타킬",
            link: "https://www.youtube.com/watch?v=aUajQYTAyqw"
        },
        L55: {
            title: "게임을 끝내는 애쉬 궁",
            link: "https://www.youtube.com/watch?v=UJdqP15oKzs"
        },
        L56: {
            title: "다리우스 쿼드라",
            link: "https://www.youtube.com/watch?v=mrlhUX4oNOI"
        },
        L57: {
            title: "게임을 끝내는 세나의 카이팅",
            link: "https://www.youtube.com/watch?v=WBd2PjnYhDU"
        },
        L58: {
            title: "아트록스 쿼드라",
            link: "https://www.youtube.com/watch?v=WDJeQV_wa40"
        },
        L59: {
            title: "렉사이 쿼드라",
            link: "https://www.youtube.com/watch?v=xRPOEztRto0"
        },
        L60: {
            title: "시비르 프리딜",
            link: "https://www.youtube.com/watch?v=NJ6TgE4Ebok"
        },
        L61: {
            title: "사미라 펜타킬",
            link: "https://www.youtube.com/watch?v=2sDxB4rlm0M"
        },
        L62: {
            title: "다리우스 쿼드라",
            link: "https://www.youtube.com/watch?v=gBT50HrpPPs"
        },
        L63: {
            title: "33분 게임 끝내기",
            link: "https://www.youtube.com/watch?v=gkhDK8hj0ew"
        },
        L64: {
            title: "노틸의 끝내기 그랩",
            link: "https://www.youtube.com/watch?v=rnMGDekeKEc"
        },
        L65: {
            title: "다리우스 쿼드라",
            link: "https://www.youtube.com/watch?v=utlJuFL1n5o"
        },
        L66: {
            title: "리신 또 쿼드라",
            link: "https://www.youtube.com/watch?v=J3xW9Umny80"
        },
        L67: {
            title: "리신 당구킥",
            link: "https://www.youtube.com/watch?v=rYhCzRvUchk"
        },
        L68: {
            title: "리신 쿼드라",
            link: "https://www.youtube.com/watch?v=kGbhGwg8oL8"
        },
        L69: {
            title: "탈리야 쿼드라",
            link: "https://www.youtube.com/watch?v=y4XjmUWjNmI"
        },
        L70: {
            title: "스웨인 이니시",
            link: "https://www.youtube.com/watch?v=DVV24Pa7q3I"
        },
        L71: {
            title: "자르반 이니시",
            link: "https://www.youtube.com/watch?v=n5_ZQvhjUjE"
        },
        L72: {
            title: "세트, 아칼리 합작",
            link: "https://www.youtube.com/watch?v=By6rei7mod8"
        },
        L73: {
            title: "다리우스 선봉대",
            link: "https://www.youtube.com/watch?v=kCz89pzFtMo"
        },
        L74: {
            title: "카이사 4w 1q 쿼드라",
            link: "https://www.youtube.com/watch?v=_5KqTjpZvOc"
        },
        L75: {
            title: "사미라 펜타킬",
            link: "https://www.youtube.com/watch?v=2sDxB4rlm0M"
        },
        L76: {
            title: "징크스 신난다",
            link: "https://www.youtube.com/watch?v=1ck68mN8U58"
        },
        L77: {
            title: "안죽는 이렐",
            link: "https://www.youtube.com/watch?v=jLLfPbrKnCw"
        },
        L78: {
            title: "아펠 억까2",
            link: "https://www.youtube.com/watch?v=az_hPkUHbq0"
        },
        L79: {
            title: "아펠 억까, 카밀 쿼드라",
            link: "https://www.youtube.com/watch?v=EG-wJc9Dgl4"
        },
        L80: {
            title: "아펠 억까3",
            link: "https://www.youtube.com/watch?v=wxbW7uagMVw"
        },
        L81: {
            title: "리산드라 하드스로잉",
            link: "https://www.youtube.com/watch?v=SidvPn8CsNk"
        },
        L82: {
            title: "케넨 한타 파괴와 아크샨 마무리",
            link: "https://www.youtube.com/watch?v=8MxwSz7GpxE"
        },
        L83: {
            title: "아크샨 카이팅",
            link: "https://www.youtube.com/watch?v=D-raXf-gGZ0"
        },
        L84: {
            title: "트위치 잡기",
            link: "https://www.youtube.com/watch?v=YVikkZ18kJY"
        },
        L85: {
            title: "트위치 잡고 겜 끝내기",
            link: "https://www.youtube.com/watch?v=1jwvvw8Mls0"
        },
        L86: {
            title: "cc연계",
            link: "https://www.youtube.com/watch?v=-9_WaBU53dM"
        },
        L87: {
            title: "cc연계2",
            link: "https://www.youtube.com/watch?v=mNRypeh5PlM"
        },
        L88: {
            title: "케이틀린 4평타 쿼드라",
            link: "https://www.youtube.com/watch?v=uiismCTTopM"
        },
        L89: {
            title: "애쉬 궁 노틸 그랩 호응",
            link: "https://www.youtube.com/watch?v=ecm_VOE9HVU"
        },
        L90: {
            title: "세트 한타 파괴",
            link: "https://www.youtube.com/watch?v=gIKOfj4ekfs"
        }

    }

    //1080p
    const FHD220806 = {
        L1: {
            title: "못막는 사이온",
            link: "https://www.youtube.com/watch?v=jBN-ALh2WMk"
        },
        L2: {
            title: "야스오 비공식 쿼드라",
            link: "https://www.youtube.com/watch?v=0hRJ3f0pkGA"
        },
        L3: {
            title: "아칼리 쿼드라",
            link: "https://www.youtube.com/watch?v=C6sij6sIUCY"
        },
        L4: {
            title: "마오카이에게 타죽는 케인",
            link: "https://www.youtube.com/watch?v=Iq3wCDosZkI"
        },
        L5: {
            title: "그웬 쿼드라",
            link: "https://www.youtube.com/watch?v=itMNtOPXCXU"
        }
    }

    const FHD220807 = {
        L1: {
            title: "카타리나 쿼드라",
            link: "https://www.youtube.com/watch?v=4VR1ufevLi8"
        },
        L2: {
            title: "쓰레쉬 이니시와 cc연계",
            link: "https://www.youtube.com/watch?v=Ua8xXfVNAtk"
        },
        L3: {
            title: "한타 승리",
            link: "https://www.youtube.com/watch?v=NDljFZOVimk"
        },
        L4: {
            title: "카타리나 쿼드라2",
            link: "https://www.youtube.com/watch?v=z57XbQ340y0"
        }
    }


    return (
        <div>
            <HorizonLine text={"1080p"}/>

            <Container>
                <P>22-08-07</P>
                {
                    Object.entries(FHD220807).map((list) => (
                        <Li id={list[1].title}>
                            <A href={list[1].link}>{list[1].title}</A>
                        </Li>

                    ))
                }
            </Container>


            <Container>
                <P>22-08-06</P>
                {
                    Object.entries(FHD220806).map((list) => (
                        <Li id={list[1].title}>
                            <A href={list[1].link}>{list[1].title}</A>
                        </Li>

                    ))
                }
            </Container>

            <HorizonLine text={"720p"}/>
            {
                Object.entries(HD).map((list) => (
                    <Li id={list[1].title}>
                        <A href={list[1].link}>{list[1].title}</A>
                    </Li>
                ))
            }
        </div>
    );
}

export default VideoLink;