import React from 'react';
import styled from 'styled-components'

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
margin:20px;
// background-color:red;
align-items: center;
justify-content:center;
`
function VideoLink() {
    const titleAndLink={
        L1:{
            title:"펜타 뺏기는 카이사 쿼드라",
            link:"https://www.youtube.com/watch?v=H9opfu-wuiQ"
        },
        L2:{
            title:"사미라 쿼드라",
            link:"https://www.youtube.com/watch?v=1fiG6Dy8IOk"
        },
        L3:{
            title:"진 쿼드라",
            link:"https://www.youtube.com/watch?v=fRim85Skhyc"
        },
        L4:{
            title:"도칠의 끝내기 이니시",
            link:"https://www.youtube.com/watch?v=D69ne0K88vs"
        },
        L5:{
            title:"눈덩이 범인 검거",
            link:"https://www.youtube.com/watch?v=D69ne0K88vs"
        },
        L6:{
            title:"신짜오 이니시",
            link:"https://www.youtube.com/watch?v=8bPqv6RpPY0"
        },
        L7:{
            title:"아트록스 버티기",
            link:"https://www.youtube.com/watch?v=cwdnNxkYycM"
        },
        L8:{
            title:"미포 4인궁",
            link:"https://www.youtube.com/watch?v=4MoY34DbFCU"
        },
        L9:{
            title:"그웬의 미친 딜링",
            link:"https://www.youtube.com/watch?v=HeXAh7Mirr4h"
        },
        L10:{
            title:"카이사 하드스로잉",
            link:"https://www.youtube.com/watch?v=Tt55A6Kmsww"
        },
        L11:{
            title:"카이사 쿼드라",
            link:"https://www.youtube.com/watch?v=aAeAzNkUphI"
        },
        L12:{
            title:"놀다가 게임 끝내기",
            link:"https://www.youtube.com/watch?v=F-DaQp_r7Cc"
        },
        L13:{
            title:"놀다가 게임 못끝내고 지기",
            link:"https://www.youtube.com/watch?v=OuUspUqm1tA"
        },
        L14:{
            title:"근수의 잼드",
            link:"https://www.youtube.com/watch?v=qGcGySetiFs"
        },
        L15:{
            title:"잼드의 넥서스궁",
            link:"https://www.youtube.com/watch?v=Uz9S0wU0IGU"
        },
        L16:{
            title:"다 잘한 한타",
            link:"https://www.youtube.com/watch?v=jJ73s4-BRGw"
        },
        L17:{
            title:"케넨 사일러스 끝내기 이니시",
            link:"https://www.youtube.com/watch?v=XvHbbkJC3Xw"
        },
        L18:{
            title:"다이애나 끝내기 이니시",
            link:"https://www.youtube.com/watch?v=-a7FEthxt_U"
        },
        L19:{
            title:"이렐리아 원딜들과 3대1",
            link:"https://www.youtube.com/watch?v=kQzFbj7tJgs"
        },
        L20:{
            title:"케넨 이니시",
            link:"https://www.youtube.com/watch?v=qT8Tg23laUc"
        },
        L21:{
            title:"게임을 끝내는 케넨 이니시",
            link:"https://www.youtube.com/watch?v=8eVIzu1B_IA"
        },
        L22:{
            title:"오른 요네 이니시",
            link:"https://www.youtube.com/watch?v=S6To08IO5V4"
        },
        L23:{
            title:"케넨 신지드 좌우합작",
            link:"https://www.youtube.com/watch?v=GaQXGHxTcVk"
        },
        L24:{
            title:"오른 요네 게임끝내기 이니시",
            link:"https://www.youtube.com/watch?v=CilTbErssC4"
        },
        L25:{
            title:"2번 만난 상대 2번 이기기",
            link:"https://www.youtube.com/watch?v=-8Z5g6wWVmI"
        },
        L26:{
            title:"갱플, 럼블 좌우합작",
            link:"https://www.youtube.com/watch?v=wDN9dEhjBVQ"
        },
        L27:{
            title:"갱플 럼블 한타 끝내기",
            link:"https://www.youtube.com/watch?v=iskUbh280I4"
        },
        L28:{
            title:"레넥톤, 스웨인 좌우합작",
            link:"https://www.youtube.com/watch?v=yjararpCstM"
        },
        L29:{
            title:"바이의 미친 이니시",
            link:"https://www.youtube.com/watch?v=UpugShm44XY"
        },
        L30:{
            title:"바이의 끝내기 이니시와 세트의 허공답보",
            link:"https://www.youtube.com/watch?v=YNzjH8ZyUAc"
        },
        L31:{
            title:"끝내기 한타",
            link:"https://www.youtube.com/watch?v=1H40ese0ghc"
        },
        L32:{
            title:"카사딘 쿼드라",
            link:"https://www.youtube.com/watch?v=vGkN0lz4SgE"
        },
        L33:{
            title:"빅토르 쿼드라",
            link:"https://www.youtube.com/watch?v=a1tOukqXWrI"
        },
        L34:{
            title:"스웨인 궁존야로 이니시 막기",
            link:"https://www.youtube.com/watch?v=OQEzrVdDPfU"
        }

    }
    return (
        <div>
            {
                Object.entries(titleAndLink).map((LL)=> (
                    <Li id={LL[1].title}>
                        <A href={LL[1].link}>{LL[1].title}</A>
                    </Li>

                ))
            }
        </div>
    );
}

export default VideoLink;