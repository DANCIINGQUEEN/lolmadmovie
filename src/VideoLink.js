import React from 'react';
import styled from 'styled-components'
import HorizonLine from "./HorizonLine";
import DatePerLink from "./DatePerLink";
import ArrayLink from "./ArrayLink";

const A = styled.a`
color: black;
background: #E2E2E2;
font-size: 1.2em;
padding: 0.3em 0.5em;
margin-right: 0.1em;
text-decoration: none;
border-radius:10px;
:hover{
background:yellow
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
padding:0
`


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
        },
        L91: {
            title: "아지르 4대1 트리플킬",
            link: "https://www.youtube.com/watch?v=51s6iJOW67Q"
        },
        L92: {
            title: "모데카이저 끝내기 q점멸",
            link: "https://www.youtube.com/watch?v=q_txQtvhsPE"
        },
        L93: {
            title: "그브 시비르 폭딜",
            link: "https://www.youtube.com/watch?v=233-cfi1dCI"
        },
        L94: {
            title: "피즈 어그로빼기",
            link: "https://www.youtube.com/watch?v=MJT2a8D39AQ"
        },
        L95: {
            title: "베이가 쿼드라",
            link: "https://www.youtube.com/watch?v=b-w68OrrAao"
        },
        L96: {
            title: "벡스 쿼드라",
            link: "https://www.youtube.com/watch?v=nIbkRrfvoWs"
        },
        L97: {
            title: "마스터이 쿼드라",
            link: "https://www.youtube.com/watch?v=IQ2FSvRSAYc"
        },
        L98: {
            title: "트린다이머 쿼드라",
            link: "https://www.youtube.com/watch?v=0jTsRdGe-hw"
        },
        L99: {
            title: "조합차이",
            link: "https://www.youtube.com/watch?v=lkGaAtdB6E0"
        },
        L100: {
            title: "헤카림 이니시",
            link: "https://www.youtube.com/watch?v=s2og64zmwto"
        },
        L101: {
            title: "헤카림 이니시2",
            link: "https://www.youtube.com/watch?v=SDngwTCnVKs"
        },
        L102: {
            title: "비에고 갈아타기",
            link: "https://www.youtube.com/watch?v=a3L0qfi3FQw"
        },
        L103: {
            title: "비에고 갈아타기2",
            link: "https://www.youtube.com/watch?v=1FhV_aHw4HQ"
        },
        L104: {
            title: "4대5 한타 승리",
            link: "https://www.youtube.com/watch?v=vNpSRHv_SY4"
        },
        L105: {
            title: "아펠 쿼드라",
            link: "https://www.youtube.com/watch?v=quAWcdbdKIE"
        },
        L106: {
            title: "대역전극",
            link: "https://www.youtube.com/watch?v=t52dpHu3K68"
        },
        L107: {
            title: "세트의 미포 원콤",
            link: "https://www.youtube.com/watch?v=UefqikR2M-A"
        },
        L108: {
            title: "리븐 스로잉",
            link: "https://www.youtube.com/watch?v=MW6MBHzchYQ"
        },
        L109: {
            title: "안죽는 위윅",
            link: "https://www.youtube.com/watch?v=eyJU6rqiIuM"
        },
        L110: {
            title: "아무무 5인궁",
            link: "https://www.youtube.com/watch?v=Q1gNvUkCsB4"
        },
        L111: {
            title: "아무무 5인궁 2",
            link: "https://www.youtube.com/watch?v=e1iyKp61sxQ"
        },
        L112: {
            title: "워윅의 포탑다이브",
            link: "https://www.youtube.com/watch?v=X8UAbarcC-w"
        },
        L112: {
            title: "아무무 초가스 합작",
            link: "https://www.youtube.com/watch?v=HteK8Sqscz0"
        },
        L113: {
            title: "워윅의 트위치잡기",
            link: "https://www.youtube.com/watch?v=AhlnKnppnAs"
        },
        L114: {
            title: "오공 요네 오른",
            link: "https://www.youtube.com/watch?v=_EojPCmUgaw"
        },
        L115: {
            title: "신지드 넘기기",
            link: "https://www.youtube.com/watch?v=GdXHALlCb6w"
        },
        L116: {
            title: "파이크 펜타킬",
            link: "https://www.youtube.com/watch?v=2WwSfpOjaBE"
        },
        L117: {
            title: "사미라 쿼드라2",
            link: "https://www.youtube.com/watch?v=m-IuOMXqSPY"
        },
        L118: {
            title: "사미라 펜타킬2",
            link: "https://www.youtube.com/watch?v=EJg9BizXwcc"
        },
        L119: {
            title: "사미라 게임을 끝내는 펜타킬",
            link: "https://www.youtube.com/watch?v=WJ0WMZ3_l-A"
        },
        L120: {
            title: "피오라 몰래 라이즈 잡고 비공식 쿼드라",
            link: "https://www.youtube.com/watch?v=xPUxMD7_H_A"
        },
        L121: {
            title: "그라가스 배치기",
            link: "https://www.youtube.com/watch?v=o7U2Tx-YmJE"
        },
        L122: {
            title: "카타리나 쿼드라",
            link: "https://www.youtube.com/watch?v=LTjh3QA-UGI"
        },
        L123: {
            title: "카타리나 쿼드라2",
            link: "https://www.youtube.com/watch?v=V4a0Al65ms0"
        },
        L124: {
            title: "라이즈 쿼드라",
            link: "https://www.youtube.com/watch?v=O2HUklo4MII"
        },
        L125: {
            title: "라이즈 쿼드라2",
            link: "https://www.youtube.com/watch?v=53ZWRhdgK4M"
        },
        L126: {
            title: "게임을 끝내는 라이즈궁",
            link: "https://www.youtube.com/watch?v=cr3I5qi35fI"
        },
        L127: {
            title: "야이애나",
            link: "https://www.youtube.com/watch?v=Er_YRNlkfo4"
        },
        L128: {
            title: "이렐 혼자 펜타킬 후 겜 끝내기",
            link: "https://www.youtube.com/watch?v=dTtA32BXDgA"
        },
        L129: {
            title: "르블랑 펜타킬",
            link: "https://www.youtube.com/watch?v=D74Kmo1B1Ko"
        },
        L130: {
            title: "세트 한타 파괴",
            link: "https://www.youtube.com/watch?v=dyppJ0bKmjk"
        },
        L131: {
            title: "세트 레넥톤 비에고",
            link: "https://www.youtube.com/watch?v=kh_ftd12dkU"
        },
        L132: {
            title: "4대5 한타 승리",
            link: "https://www.youtube.com/watch?v=rv3yFCMj22A"
        },
        L133: {
            title: "말파 4인궁",
            link: "https://www.youtube.com/watch?v=oLYmVnaAYgw"
        },
        L134: {
            title: "나르 아무무 5인궁",
            link: "https://www.youtube.com/watch?v=9dQ3eRB2q4Q"
        },
        L135: {
            title: "은신으로 살아나가는 트위치",
            link: "https://www.youtube.com/watch?v=ZdDpjPBqzj0"
        },
        L136: {
            title: "야스오 트위치 합작",
            link: "https://www.youtube.com/watch?v=cHaPZ42qrOo"
        },
        L137: {
            title: "스카너 베이가 배달",
            link: "https://www.youtube.com/watch?v=O2-SdFXYA5s"
        },
        L138: {
            title: "오공 비공식 쿼드라",
            link: "https://www.youtube.com/watch?v=N6JuLMYvDT8"
        },
        L139: {
            title: "아지르 궁 크로스",
            link: "https://www.youtube.com/watch?v=jPrrIO1D-mM"
        },
        L140: {
            title: "라이즈 궁 아니시2",
            link: "https://www.youtube.com/watch?v=Af6hL3OSALY"
        },
        L141: {
            title: "다리우스 쿼드라",
            link: "https://www.youtube.com/watch?v=mmKMJjwlylg"
        },
        L142: {
            title: "스웨인 쿼드라",
            link: "https://www.youtube.com/watch?v=yRWsCYGwd4A"
        },
        L143: {
            title: "라이즈 궁 이니시",
            link: "https://www.youtube.com/watch?v=77aQiYYpZ30"
        },
        L144: {
            title: "카밀 오리아나",
            link: "https://www.youtube.com/watch?v=wP9KrUzaH40"
        },
        L145: {
            title: "포킹에 뒤지는 오리아나",
            link: "https://www.youtube.com/watch?v=HZeKuH27smo"
        },
        L146: {
            title: "역겨운 포킹조합",
            link: "https://www.youtube.com/watch?v=wUyblm1e6Dg"
        },
        L147: {
            title: "3방향 포킹에 뒤지는 오리아나",
            link: "https://www.youtube.com/watch?v=FKgB_QzaOQ8"
        },
        L148: {
            title: "포킹 끝판왕 조합",
            link: "https://www.youtube.com/watch?v=A_UjB3ZnhPI"
        },
        L149: {
            title: "미포 정면 3인궁 녹이기",
            link: "https://www.youtube.com/watch?v=nP_O420rIdk"
        },
        L150: {
            title: "혼자 다 하는 이렐",
            link: "https://www.youtube.com/watch?v=wwselbl9Qeo"
        },
        L151: {
            title: "카타리나 쿼드라",
            link: "https://www.youtube.com/watch?v=Sz23JeHAd6E"
        },
        L152: {
            title: "카타리나 펜타킬",
            link: "https://www.youtube.com/watch?v=DGYvZLPJzpY"
        },
        L153: {
            title: "4대5 한타 승리2",
            link: "https://www.youtube.com/watch?v=HThLHvWTcPQ"
        },
        L154: {
            title: "제리 쿼드라",
            link: "https://www.youtube.com/watch?v=L9S4waELEDk"
        },
        L155: {
            title: "세나 사거리",
            link: "https://www.youtube.com/watch?v=xvJpKEKGQfQ"
        },
        L156: {
            title: "렐 이니시",
            link: "https://www.youtube.com/watch?v=13OwBVFEmoM"
        },
        L157: {
            title: "오공 야스오 야스오 부활",
            link: "https://www.youtube.com/watch?v=QNt2mAE6NxQ"
        },
        L158: {
            title: "오공 야스오",
            link: "https://www.youtube.com/watch?v=Hf12EUYts0k"
        },
        L159: {
            title: "럭스 3인궁",
            link: "https://www.youtube.com/watch?v=mVVTDWpCGhU"
        },
        L160: {
            title: "안죽는 렝가",
            link: "https://www.youtube.com/watch?v=dt0dmb8XAYM"
        },
        L161: {
            title: "렝가 피들 합작",
            link: "https://www.youtube.com/watch?v=dAnUcUkkdvU"
        },
        L162: {
            title: "그라가스 점멸 예측궁",
            link: "https://www.youtube.com/watch?v=uItdOWc0As8"
        },
        L163: {
            title: "카타리나 프리딜",
            link: "https://www.youtube.com/watch?v=ZF0iy9bcMuE"
        },
        L164: {
            title: "피들스틱 5인궁",
            link: "https://www.youtube.com/watch?v=3n_mNwsm-AA"
        },
        L165: {
            title: "코르키 카미카제 이니시",
            link: "https://www.youtube.com/watch?v=i9vIg1D8bZ4"
        },
        L166: {
            title: "자르반 이상한 콤보",
            link: "https://www.youtube.com/watch?v=ABB8aJCuXiQ"
        },
        L167: {
            title: "사미라 3대1 트리플킬",
            link: "https://www.youtube.com/watch?v=-kFNQbBxLno"
        },
        L168: {
            title: "한타때 궁 2번 도는 리신",
            link: "https://www.youtube.com/watch?v=DBtGt_gLj-s"
        },
        L169: {
            title: "카이사 하드스로잉",
            link: "https://www.youtube.com/watch?v=2n-7XdOzeKI"
        },
        L170: {
            title: "제리 1분동안 물총 카이팅",
            link: "https://www.youtube.com/watch?v=sxZDdW3jgEk"
        },
        L171: {
            title: "제리 물총 카이팅",
            link: "https://www.youtube.com/watch?v=-XTQi2axR-g"
        },
        L171: {
            title: "제리 쿼드라2",
            link: "https://www.youtube.com/watch?v=igjtB9pcdZ0"
        },
        L171: {
            title: "자야 폭딜",
            link: "https://www.youtube.com/watch?v=qVoIqNL_pxE"
        },
        L171: {
            title: "30대 중반 애 2명 피오라",
            link: "https://www.youtube.com/watch?v=TJ18CHrajHY"
        },
        L172: {
            title: "세트 한타 끝내기",
            link: "https://www.youtube.com/watch?v=xLfQPmDQgUc"
        },
        L173: {
            title: "사이온 미친 이니시",
            link: "https://www.youtube.com/watch?v=pIJW-scRDsA"
        },
        L174: {
            title: "샤코 쿼드라",
            link: "https://www.youtube.com/watch?v=yssweRkGavI"
        },
        L175: {
            title: "케넨 이니시",
            link: "https://www.youtube.com/watch?v=vSxeE4hZZEw"
        },
        L176: {
            title: "카타리나 거의 솔로 펜타킬",
            link: "https://www.youtube.com/watch?v=hsbymIv-pkI"
        },
        L177: {
            title: "질리언 티베깅",
            link: "https://www.youtube.com/watch?v=gw8eSLWdlOg"
        },
        L178: {
            title: "다이애나 미친 이니시",
            link: "https://www.youtube.com/watch?v=GkGbsshdT28"
        },
        L179: {
            title: "카타리나 펜타",
            link: "https://www.youtube.com/watch?v=rLuqOsvCogg"
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

    const FHD220808 = {
        L1: {
            title: "피오라 쿼드라",
            link: "https://www.youtube.com/watch?v=FatxHmo8c4w"
        },
        L2: {
            title: "한타 이기고 게임 못끝냄",
            link: "https://www.youtube.com/watch?v=beVo0Zy5Nx0"
        }
    }

    const FHD220809 = {
        L1: {
            title: "조합차이",
            link: "https://www.youtube.com/watch?v=hsJd6_D5GUA"
        },
        L2: {
            title: "안죽는 신짜오",
            link: "https://www.youtube.com/watch?v=1znHBfCxfOk"
        },
        L3: {
            title: "안죽는 람머스",
            link: "https://www.youtube.com/watch?v=ujtsnbMt1O0"
        },
        L4: {
            title: "게임을 끝내러 가는 람머스",
            link: "https://www.youtube.com/watch?v=9GYKkxCDCA4"
        },
        L5: {
            title: "자르반 어그로",
            link: "https://www.youtube.com/watch?v=mlzeDr8Rkpc"
        },
        L6: {
            title: "미포 자르반 연계",
            link: "https://www.youtube.com/watch?v=rTV-kdEMEhY"
        },
        L7: {
            title: "마지막 만담",
            link: "https://www.youtube.com/watch?v=2M4iGaQwzyQ"
        }
    }

    const FHD220810 = {
        L1: {
            title: "징크스 쿼드라",
            link: "https://www.youtube.com/watch?v=Q6JqfPHye3k"
        },
        L2: {
            title: "신지드 독",
            link: "https://www.youtube.com/watch?v=AsjmtHLU3Io"
        },
        L3: {
            title: "그웬 폭딜",
            link: "https://www.youtube.com/watch?v=CXeAEp7QieM"
        },
        L4: {
            title: "카서스 묫자리",
            link: "https://www.youtube.com/watch?v=7dIHaFerqvY"
        },
        L5: {
            title: "그저 아트록스",
            link: "https://www.youtube.com/watch?v=eC1qv96uhNc"
        },
        L6: {
            title: "갈리오차이",
            link: "https://www.youtube.com/watch?v=IK_Zn3kLdBM"
        }
    }

    const FHD220811 = {
        L1: {
            title: "아지르 또퍼토스",
            link: "https://www.youtube.com/watch?v=cdS228p4Q9k"
        },
        L2: {
            title: "아지르 또퍼토스와 진 쿼드라",
            link: "https://www.youtube.com/watch?v=TRDHCr2oA0A"
        },
        L3: {
            title: "이판 유일한 한타승리",
            link: "https://www.youtube.com/watch?v=lU3pJGCPxd4"
        },
        L4: {
            title: "오리아나 꼬리 살랑살랑",
            link: "https://www.youtube.com/watch?v=apHIx7x7Jl0"
        },
        L5: {
            title: "바드에게 패드립 먹는 애쉬",
            link: "https://www.youtube.com/watch?v=89I4afSrAXM"
        },
        L6: {
            title: "오리아나 한타파괴",
            link: "https://www.youtube.com/watch?v=gEwCVFWi4SI"
        },
        L7: {
            title: "딜러 포커싱",
            link: "https://www.youtube.com/watch?v=vxBgdWyRLqk"
        },
        L8: {
            title: "카타리나 쿼드라",
            link: "https://www.youtube.com/watch?v=qWR58Y3IhfI"
        },
        L9: {
            title: "아지르 슈퍼토스",
            link: "https://www.youtube.com/watch?v=wy6hy6ZeqJs"
        },

    }

    const FHD220813 = {
        L1: {
            title: "겨우 이김",
            link: "https://www.youtube.com/watch?v=ppCcAXOrZuA"
        },
        L2: {
            title: "릴리아 스트라이크",
            link: "https://www.youtube.com/watch?v=Xm9cXnulFRw"
        },
        L3: {
            title: "신짜오 치타배달",
            link: "https://www.youtube.com/watch?v=2qc2fs8UHq4"
        },
        L4: {
            title: "바이 이니시",
            link: "https://www.youtube.com/watch?v=LBkZQKRzFAw"
        },
        L5: {
            title: "피들스틱 이니시",
            link: "https://www.youtube.com/watch?v=dZbWOgUmBhU"
        },
        L6: {
            title: "바이 쿼드라",
            link: "https://www.youtube.com/watch?v=8Zxymg10L6M"
        },
        L7: {
            title: "세주아니 이니시",
            link: "https://www.youtube.com/watch?v=XUP7kRQlhDQ"
        },
        L8: {
            title: "시원한 한타",
            link: "https://www.youtube.com/watch?v=A3Fm9yOJ7Ng"
        }
    }

    const FHD220814 = {
        L1: {
            title: "조합차이",
            link: "https://www.youtube.com/watch?v=pquKhn3nSbY"
        },
        L2: {
            title: "야소 쿼드라",
            link: "https://www.youtube.com/watch?v=BVoSJDuOIFE"
        },
        L3: {
            title: "마오카이 q 야스오 궁",
            link: "https://www.youtube.com/watch?v=MqbP8BVIioI"
        },
    }

    const FHD220815 = {
        L1: {
            title: "아지르 토스",
            link: "https://www.youtube.com/watch?v=hU5UAYZLfb0"
        },
        L2: {
            title: "4대5한타 승리",
            link: "https://www.youtube.com/watch?v=pzxPONshDwk"
        },
        L3: {
            title: "후반 아지르 딜",
            link: "https://www.youtube.com/watch?v=patjij2wRdQ"
        },
        L4: {
            title: "40분 게임 승리",
            link: "https://www.youtube.com/watch?v=x0dscLSJWn0"
        },
        L5: {
            title: "아지르 드리프트",
            link: "https://www.youtube.com/watch?v=TZlYtFX6LPc"
        },
        L6: {
            title: "쉬바나 스웨인 나르",
            link: "https://www.youtube.com/watch?v=y0WH81ddhRQ"
        },
        L7: {
            title: "스웨인 쉬바나 2대5",
            link: "https://www.youtube.com/watch?v=A-6E_iK79vk"
        },
        L8: {
            title: "카이사 쿼드라",
            link: "https://www.youtube.com/watch?v=ffBIswCmcdU"
        },
        L9: {
            title: "스웨인 스웨인",
            link: "https://www.youtube.com/watch?v=ISnpEmbenfI"
        },
    }

    const FHD220816 = {
        L1: {
            title: "샤코 릭트쇼",
            link: "https://www.youtube.com/watch?v=As4ey7IQ9ug"
        },
        L2: {
            title: "쉔 도발",
            link: "https://www.youtube.com/watch?v=gtjU_AKayBg"
        },
    }

    const FHD220817 = {
        L1: {
            title: "다이애나 이니시",
            link: "https://www.youtube.com/watch?v=Zaz5yEX0LZ4"
        },
        L2: {
            title: "질뻔한 판",
            link: "https://www.youtube.com/watch?v=kKQGvTT5pXo"
        },
        L3: {
            title: "키아나 쿼드라",
            link: "https://www.youtube.com/watch?v=VaLqxFSMcqg"
        },
        L4: {
            title: "요네 쿼드라",
            link: "https://www.youtube.com/watch?v=foAT5rzSTkI"
        },
        L5: {
            title: "아이번 세나 사랑싸움",
            link: "https://www.youtube.com/watch?v=GZbp8hEQFd4"
        },
        L6: {
            title: "렐 레넥톤",
            link: "https://www.youtube.com/watch?v=iWuG0R0-yIo"
        },

    }

    const FHD220820 = {
        L1: {
            title: "다이애나 이니시",
            link: "https://www.youtube.com/watch?v=CzT54PjPp0M"
        },
        L2: {
            title: "사일러스 받아치기",
            link: "https://www.youtube.com/watch?v=treLgWDFob4"
        },
        L3: {
            title: "한타 역전",
            link: "https://www.youtube.com/watch?v=ZqG2OE_ImcI"
        },
        L4: {
            title: "자크 이니시, 아크샨 돌진",
            link: "https://www.youtube.com/watch?v=4YHNY8X__D4"
        },
        L5: {
            title: "리신 쿼드라",
            link: "https://www.youtube.com/watch?v=RRn4XhLgviw"
        },
        L6: {
            title: "리신 3인분",
            link: "https://www.youtube.com/watch?v=Yf8isElnFto"
        },
        L7: {
            title: "안죽는 아트록스",
            link: "https://www.youtube.com/watch?v=uB_socdwTsA"
        },
        L8: {
            title: "받아치기",
            link: "https://www.youtube.com/watch?v=x2Mon-XJSa0"
        },
        L9: {
            title: "올 킬",
            link: "https://www.youtube.com/watch?v=NNEAqP32CRk"
        },
        L10: {
            title: "리산드라",
            link: "https://www.youtube.com/watch?v=GgTpSA2LIOc"
        },
        L11: {
            title: "자크 노어시",
            link: "https://www.youtube.com/watch?v=3po1jUpvslc"
        },

    }

    const FHD220821 = {
        L1: {
            title: "한타 승리",
            link: "https://www.youtube.com/watch?v=ee_18DoOtQE"
        },
        L2: {
            title: "말파 3인궁",
            link: "https://www.youtube.com/watch?v=MglWw4uPooc"
        },
        L3: {
            title: "처음 슈렐 사용",
            link: "https://www.youtube.com/watch?v=5vPqOXraxdM"
        },
        L4: {
            title: "두번째 슈렐 사용",
            link: "https://www.youtube.com/watch?v=VMz2outFjFs"
        },
        L5: {
            title: "슈렐 3번째 사용 억제기 to 억제기",
            link: "https://www.youtube.com/watch?v=ko0TUNb9PPM"
        },
        L6: {
            title: "마지막 슈렐 사용, 카타 쿼드라",
            link: "https://www.youtube.com/watch?v=oBDq5GxN76M"
        },

    }

    const FHD220822 = {
        L1: {
            title: "아트록스 레오나",
            link: "https://www.youtube.com/watch?v=nJLwZ_wijlY"
        },
        L2: {
            title: "녹턴 쿼드라",
            link: "https://www.youtube.com/watch?v=3CPUeqZqWu8"
        },
        L3: {
            title: "슈퍼발키리",
            link: "https://www.youtube.com/watch?v=g3-TuiD2VCU"
        },
        L4: {
            title: "넥서스 공략",
            link: "https://www.youtube.com/watch?v=BgmTuFRX0pI"
        },
        L5: {
            title: "요네 스로잉",
            link: "https://www.youtube.com/watch?v=6XOoHpEAaiY"
        },

    }

    const FHD220823 = {
        L1: {
            title: "뽀삐",
            link: "https://www.youtube.com/watch?v=e_Sbw98nfLs"
        },
        L2: {
            title: "뽀삐2",
            link: "https://www.youtube.com/watch?v=XYJSFCTaw9c"
        },
        L3: {
            title: "게임 끝",
            link: "https://www.youtube.com/watch?v=-OP0bOIHkk8"
        },
        L4: {
            title: "무지성 다이브 성공",
            link: "https://www.youtube.com/watch?v=VCjOZvm1xkU"
        },
        L5: {
            title: "노틸 케넨 합작",
            link: "https://www.youtube.com/watch?v=KCAs5A_hjSk"
        },
        L6: {
            title: "노틸 케넨 2",
            link: "https://www.youtube.com/watch?v=q8gEREmxIpc"
        },
        L7: {
            title: "노틸, 케넨 이니시와 람머스 꼬라박기",
            link: "https://www.youtube.com/watch?v=mD6LAV2RNa8"
        },
        L8: {
            title: "안죽는 람머스",
            link: "https://www.youtube.com/watch?v=sOXLLF7kq8A"
        },
        L9: {
            title: "람머스 자야 감아차기",
            link: "https://www.youtube.com/watch?v=jAQfzroz6Pk"
        },
        L10: {
            title: "트페 앞궁",
            link: "https://www.youtube.com/watch?v=_ZbO7z3q4w8"
        },
        L11: {
            title: "이즈 피오라 교차검증",
            link: "https://www.youtube.com/watch?v=H61c92KXrVE"
        },
        L12: {
            title: "레오나 이니시 피오라 가렌 앞잡이",
            link: "https://www.youtube.com/watch?v=z2ypZvqD9Us"
        },
        L13: {
            title: "피들 궁 차징 잔나가 막기",
            link: "https://www.youtube.com/watch?v=peqWfoKGKDQ"
        },

    }

    const FHD220824 = {
        L1: {
            title: "진 쿼드라",
            link: "https://www.youtube.com/watch?v=fVyAMSy7Iqg"
        },
        L2: {
            title: "다이애나 이니시",
            link: "https://www.youtube.com/watch?v=VLcRulOv0ME"
        },
        L3: {
            title: "다이애나 이니시2",
            link: "https://www.youtube.com/watch?v=gkaHZkTokMA"
        },
        L4: {
            title: "다이애나 이니시3",
            link: "https://www.youtube.com/watch?v=pvsngd35YtI"
        },
        L5: {
            title: "말파 탈주 연기",
            link: "https://www.youtube.com/watch?v=YzzLxuGKkNc"
        },
        L6: {
            title: "가렌 뚜벅뚜벅 이니시",
            link: "https://www.youtube.com/watch?v=d_jcSg9xq5Y"
        },

    }

    const FHD220825= {
        L1: {
            title: "진 비공식 쿼드라",
            link: "https://www.youtube.com/watch?v=_XsFer5e1hk"
        },
        L2: {
            title: "레나타 컷",
            link: "https://www.youtube.com/watch?v=e78rjJkojak"
        },
        L3: {
            title: "레나타 컷2",
            link: "https://www.youtube.com/watch?v=LfV88KPg8Rc"
        },
        L4: {
            title: "세트 어그로",
            link: "https://www.youtube.com/watch?v=RV8PymjIIlA"
        },
        L5: {
            title: "놀다가 게임 끝내기",
            link: "https://www.youtube.com/watch?v=XuhCOoX4Mo4"
        },
        L6: {
            title: "드레이븐 잡기",
            link: "https://www.youtube.com/watch?v=rIggwmK1lSQ"
        },
        L7: {
            title: "드레이븐 잡기2",
            link: "https://www.youtube.com/watch?v=8BxsTHd698M"
        },

    }

    const FHD220826= {
        L1: {
            title: "무무 4인궁",
            link: "https://www.youtube.com/watch?v=yi6eOWJ4wEE"
        },
        L2: {
            title: "에코 어그로",
            link: "https://www.youtube.com/watch?v=ve9Bmy-IyzY"
        },
        L3: {
            title: "자르반 녹이고 시작한 한타 승리",
            link: "https://www.youtube.com/watch?v=pM5wWleKqn8"
        },
        L4: {
            title: "자르반 딜러 묶기",
            link: "https://www.youtube.com/watch?v=FE_9PEQEl1Y"
        },
        L5: {
            title: "카이사 추노",
            link: "https://www.youtube.com/watch?v=iY9zMweqQbg"
        },
        L6: {
            title: "그웬 모니터 이슈, 샤코 분신 폭딜, 카이사 생존",
            link: "https://www.youtube.com/watch?v=CLl6hPLJ4HU"
        },
        L7: {
            title: "샤코 하드쓰로잉",
            link: "https://www.youtube.com/watch?v=SetsqyB9BhY"
        },
        L8: {
            title: "그웬 카타 프리딜, 카이사 생존",
            link: "https://www.youtube.com/watch?v=9yBwCcPf9X4"
        },
        L9: {
            title: "결국 승리",
            link: "https://www.youtube.com/watch?v=077ZImdlHmE"
        },
        L10: {
            title: "요네 3인궁 닐라 4인궁",
            link: "https://www.youtube.com/watch?v=jaMdS7v9JlA"
        },
        L11: {
            title: "닐라 또 4인궁",
            link: "https://www.youtube.com/watch?v=0TrUmft2plA"
        },
        L12: {
            title: "대가리 박고 돌진",
            link: "https://www.youtube.com/watch?v=9PRLBn2JUNk"
        },
        L13: {
            title: "레넥 작사 탐켄치 작곡",
            link: "https://www.youtube.com/watch?v=qmb_ASHOpts"
        },

    }

    const FHD220827= {
        L1: {
            title: "오리, 닐라, 야스오",
            link: "https://www.youtube.com/watch?v=hdwSTs01VhU"
        },
        L2: {
            title: "오리, 야스오 그리고 닐라",
            link: "https://www.youtube.com/watch?v=PyRG4mGKpXY"
        },
        L3: {
            title: "닐라 야스오",
            link: "https://www.youtube.com/watch?v=72PO7rXuFWI"
        },
        L4: {
            title: "오리아나 닐라와 함께 만들어낸 야스오 펜타킬",
            link: "https://www.youtube.com/watch?v=_RsZCz14fXw"
        },
        L5: {
            title: "닐라 야스오2 게임 끝내기",
            link: "https://www.youtube.com/watch?v=qs7966tobJA"
        },
        L6: {
            title: "오리아나 닐라와 함께 만들어낸 야스오 펜타킬 느린버전",
            link: "https://www.youtube.com/watch?v=m_zciYhLYgo"
        },
        L7: {
            title: "워윅 카타 타고 텔포",
            link: "https://www.youtube.com/watch?v=fdKJM4d-Fbo"
        },
        L8: {
            title: "람머스 궁딜",
            link: "https://www.youtube.com/watch?v=hNp0rT1BiWU"
        },
        L9: {
            title: "람머스 드리블",
            link: "https://www.youtube.com/watch?v=XpUcZoiNcZs"
        },

    }

    const FHD220831= {
        L1: {
            title: "아칼리 비공식 펜타",
            link: "https://www.youtube.com/watch?v=0OgSfV3tWAE"
        },
        L2: {
            title: "니달리 콤보",
            link: "https://www.youtube.com/watch?v=-65PZN-NqAk"
        },
        L3: {
            title: "아칼리 케틀 니달리",
            link: "https://www.youtube.com/watch?v=sxoD-laaNAs"
        },
        L4: {
            title: "렝가 딜",
            link: "https://www.youtube.com/watch?v=lnuSDX1bMf4"
        },
        L5: {
            title: "티모 엔딩",
            link: "https://www.youtube.com/watch?v=j3bKaYICFyM"
        },
        L6: {
            title: "5원딜 참교육",
            link: "https://www.youtube.com/watch?v=hdnv3Jz4sRU"
        },
        L7: {
            title: "요네 럼블 카시",
            link: "https://www.youtube.com/watch?v=3MgiKHZdfAU"
        },
        L8: {
            title: "징크스 소라카한테 따잇",
            link: "https://www.youtube.com/watch?v=8I6764B0nDs"
        },
        L9: {
            title: "이게 쵸비식 요네야",
            link: "https://www.youtube.com/watch?v=NgIPa1HiKgI"
        },

    }

    const FHD220901= {
        L1: {
            title: "킹 쵸 비 간결한 대답",
            link: "https://www.youtube.com/watch?v=RbNZ4NbqT38"
        },
        L2: {
            title: "모데 쵸비 솔킬",
            link: "https://www.youtube.com/watch?v=JMifg8ScBjU"
        },
        L3: {
            title: "챌린저 제드 펜타",
            link: "https://www.youtube.com/watch?v=8Pn4YfXpL0M"
        },
        L4: {
            title: "대 황 쵸비 펜타",
            link: "https://www.youtube.com/watch?v=DyHwZHXrWkw"
        },
        L5: {
            title: "킹 오브 킹 쵸비 쿼드라",
            link: "https://www.youtube.com/watch?v=0jbH9A_Wkac"
        },


    }

    const FHD220902= [
        ["4대5 한타 승리",
            "https://www.youtube.com/watch?v=QG8tkCy3oR4"],
        ["나르 점멸 궁",
            "https://www.youtube.com/watch?v=iwQv75w6B00"],
        ["나르 자발 궁",
            "https://www.youtube.com/watch?v=XaTFz6X_aJo"],
        ["시비르 카이팅",
            "https://www.youtube.com/watch?v=UyAX40o7wa0"],
        ["역전 몰왕레오나",
            "https://www.youtube.com/watch?v=eZvCuKkhMTs"],
        ["티모 실명",
            "https://www.youtube.com/watch?v=TZo7O3BBMnE"],
        ["카직스 스로잉 카밀엔딩",
            "https://www.youtube.com/watch?v=x11jxXJfNR4"],
        ["나르 5인궁",
            "https://www.youtube.com/watch?v=oasmQuMXduQ"],
        ["자발 나르",
            "https://www.youtube.com/watch?v=crhsYighgqs"],
        ["아칼리 쿼드라",
            "https://www.youtube.com/watch?v=mnx8sQDwNUo"],
        ["자발 나르 콤보",
            "https://www.youtube.com/watch?v=Kaz1524MZqw"],
        ["결국 역전승",
            "https://www.youtube.com/watch?v=scUvtaeLMdA"],

    ]

    const FHD220912= [
        ["아펠레이스 무빙",
            "https://www.youtube.com/watch?v=KqXgFaQxx0g"],
        ["리산드라 이니시 사미라 쿼드라",
            "https://www.youtube.com/watch?v=fWSCrnVzbaQ"],
        ["말파 이니시",
            "https://www.youtube.com/watch?v=okM4CtufVZw"],
        ["리산드라 이니시",
            "https://www.youtube.com/watch?v=YnUpmypSOvc"],
        ["말파 늦궁 딜러 컷",
            "https://www.youtube.com/watch?v=xoUTYFUqOPE"],

    ]

    const FHD220916= [
        ["판테온 끝내기 궁",
            "https://www.youtube.com/watch?v=ssQfcqDv6ek"],
        ["아칼리 생존",
            "https://www.youtube.com/watch?v=Nclzr3fvBBc"],
        ["비에고 쿼드라",
            "https://www.youtube.com/watch?v=vmQCIE0ps0k"],
        ["2코 패배 국룰",
            "https://www.youtube.com/watch?v=yy2unPRkw_4"],

    ]

    const FHD220917= [
        ["미포 세탁기",
            "https://www.youtube.com/watch?v=PUOyKTpeRxE"],
        ["딜량 1등 문도",
            "https://www.youtube.com/watch?v=pD_cAtEdqCk"],
        ["미포 쿼드라",
            "https://www.youtube.com/watch?v=dCfdy4_OoVg"],
        ["다이애나 벽꿍",
            "https://www.youtube.com/watch?v=C_YpHUCKmQQ"],
        ["카밀 이니시 말파 4인궁",
            "https://www.youtube.com/watch?v=mZjKwJIarJI"],
        ["말파 4인궁",
            "https://www.youtube.com/watch?v=Sc4bl26jRDg"],
        ["카직스 쿼드라",
            "https://www.youtube.com/watch?v=mUyC7p0e2mo"],

    ]

    const FHD220918= [
        ["오공 스로잉, 존나 비벼서 이기기",
            "https://www.youtube.com/watch?v=2dUPq0QwPHY"],
        ["존나 비비기",
            "https://www.youtube.com/watch?v=SHJoX03lp-4"],
        ["르블랑 쿼드라",
            "https://www.youtube.com/watch?v=8QsJ-Yg3tYY"],
        ["스웨인 한타 장악",
            "https://www.youtube.com/watch?v=4_ueRyU0wCQ"],
        ["사미라 쿼드라",
            "https://www.youtube.com/watch?v=XMjYyELeqi4"],
        ["아트록스 이니시",
            "https://www.youtube.com/watch?v=DfOMKb0NwaE"],
        ["진 쿼드라",
            "https://www.youtube.com/watch?v=4xyoniM7uic"],

    ]

    const FHD220922= [
        ["게임 끝내고 놀기",
            "https://www.youtube.com/watch?v=rQxNYS9Owv8"],
        ["자르반 이니시 느린버전",
            "https://www.youtube.com/watch?v=ZBISxJBh6Aw"],
        ["자르반 이니시",
            "https://www.youtube.com/watch?v=rVXflseb_fo"],
        ["세라핀",
            "https://www.youtube.com/watch?v=oOyGxwSdSLU"],
        ["야소 쿼드라",
            "https://www.youtube.com/watch?v=-UFFARJtwsg"],

    ]

    const FHD220923= [
        ["티모 인생 무빙 후 사망",
            "https://www.youtube.com/watch?v=3EiBHvG5Up8"],
        ["티모 시간끌기",
            "https://www.youtube.com/watch?v=unhJm3bGavQ"],
        ["워윅 이니시 버섯",
            "https://www.youtube.com/watch?v=L1eY6KiLsGU"],
        ["티모 끔살",
            "https://www.youtube.com/watch?v=jiZR7KYNrtE"],
        ["세주 반격",
            "https://www.youtube.com/watch?v=Pra-U7aBwjU"],
        ["한타 승리",
            "https://www.youtube.com/watch?v=VTZYe35Xvz0"],
        ["티모 검거",
            "https://www.youtube.com/watch?v=PWYfwWeemiM"],
        ["이즈 앞비전 버섯밟기",
            "https://www.youtube.com/watch?v=2aKgodl29J4"],
        ["티모",
            "https://www.youtube.com/watch?v=4_jQyvvEI5k"],
        ["일기토",
            "https://www.youtube.com/watch?v=L841nkyC62c"],
        ["티모 버섯",
            "https://www.youtube.com/watch?v=HO-uIQJW-Ms"],
        ["티모 뒤통수, 세주 궁, 워윅 1대1",
            "https://www.youtube.com/watch?v=cemETespne4"],

        ]

    const FHD220925= [
        ["사일러스 이니시",
            "https://www.youtube.com/watch?v=46bl0xA5jtA"],
        ["반격",
            "https://www.youtube.com/watch?v=_aAsN0k3DsE"],
        ["미스포츈 마무리궁",
            "https://www.youtube.com/watch?v=M9qE0dpLA-w"],
        ["트위치 양념 마무리",
            "https://www.youtube.com/watch?v=XCZtJe1n_Hc"],
        ["트위치 무호흡 딜링",
            "https://www.youtube.com/watch?v=tcB7H6pQxIU"],
        ["사일러스 다 죽이기",
            "https://www.youtube.com/watch?v=ahjv-_Y20M4"],
        ["자야, 피오라 개빡딜",
            "https://www.youtube.com/watch?v=KN_3iUPU3do"],
        ["자야 개빡딜",
            "https://www.youtube.com/watch?v=dhBI-R0ccJo"],

    ]

    const FHD220930= [
        ["마지막 적 처지",
            "https://www.youtube.com/watch?v=Q36lMK97DaQ"],
        ["딜러 잡기",
            "https://www.youtube.com/watch?v=DKXSCJKv83c"],
        ["케인 잡기",
            "https://www.youtube.com/watch?v=z6fbea7kRNI"],
        ["마지막 한타",
            "https://www.youtube.com/watch?v=EA4pRvNX5cs"],
        ["닐라 이니시",
            "https://www.youtube.com/watch?v=f2Dc0H7M6uQ"],

    ]

    const FHD221001= [
        ["캐낸 이니시",
            "https://www.youtube.com/watch?v=-fb2DdLXqSQ"],
        ["케넨 이니시2",
            "https://www.youtube.com/watch?v=Tjjr1r5qAd0"],
        ["케넨 이니시3",
            "https://www.youtube.com/watch?v=sW7MuG5O1Rk"],
        ["인간미",
            "https://www.youtube.com/watch?v=Y4GIEEM3eHE"],
        ["마이 쿼드라 받아먹기",
            "https://www.youtube.com/watch?v=eng7V1XfQww"],
        ["끝내기",
            "https://www.youtube.com/watch?v=r0fG_7ZcthA"],
        ["안죽는 해카림",
            "https://www.youtube.com/watch?v=tGm2Ybwhiek"],
        ["무쌍찍는 해카림, 마무리하는 마스터이",
            "https://www.youtube.com/watch?v=IINkHUMEVic"],
        ["무쌍찍는 해카림, 마무리하는 마스터이2",
            "https://www.youtube.com/watch?v=zC9-SAKtLr8"],
        
    ]

    const FHD221002= [
        ["말자하 점멸 궁 이니시",
            "https://www.youtube.com/watch?v=Xt3q5ohbIko"],
        ["브랜드와 비에고",
            "https://www.youtube.com/watch?v=ukHlX6Urx1s"],
        ["아크샨 3바퀴 돌기",
            "https://www.youtube.com/watch?v=eVDHxMtq-gc"],
        ["안죽는 렝가",
            "https://www.youtube.com/watch?v=2BnAM4BhhKs"],
        ["그웬, 갱플 이니시",
            "https://www.youtube.com/watch?v=RThfvesJT0Q"],
        ["마무리",
            "https://www.youtube.com/watch?v=SUb3jROWPj4"],
        ["벨코즈 궁 뒤로쓰기",
            "https://www.youtube.com/watch?v=1H-oURVgsv8"],
        ["트위치 쿼드라 후 끝내기",
            "https://www.youtube.com/watch?v=9Bk1FP0fNjQ"],
        ["쓰레쉬 그랩 이니시",
            "https://www.youtube.com/watch?v=mBVhoDefmOU"],
        ["쓰레쉬 그랩 이니시 2",
            "https://www.youtube.com/watch?v=e4wc6UY7PBE"],

    ]

    const FHD221003_1= [
        ["마지막 한타",
            "https://www.youtube.com/watch?v=2HxDdtQr8eM"],

    ]

    const FHD221003_2= [
        ["파이크 쿼드라",
            "https://www.youtube.com/watch?v=H7308t-sns4"],
        ["사일러스 튕김",
            "https://www.youtube.com/watch?v=QFL3Z7wNBLw"],
        ["워윅 3랩 펜타킬",
            "https://www.youtube.com/watch?v=Ewed0Hnp1H4"],
        ["워웍 쿼드라",
            "https://www.youtube.com/watch?v=PXlUSQmYdAw"],
        ["렐 이니시",
            "https://www.youtube.com/watch?v=6mpFTiSqYlY"],
        ["렐 5인궁 5인 스턴",
            "https://www.youtube.com/watch?v=08ZNT2zP2sc"],
        ["재매이햄 궁각",
            "https://www.youtube.com/watch?v=aAqCrPn1Py8"],
        ["부쉬 슈팅게임",
            "https://www.youtube.com/watch?v=erp3Q1v2RCI"],
        ["오른 뻘궁",
            "https://www.youtube.com/watch?v=DEzsN0D2l5w"],
        ["신지드 점멸 넘기기",
            "https://www.youtube.com/watch?v=qjF6UXxGOdc"],
        ["아크샨 부활, 라이즈 통수치기",
            "https://www.youtube.com/watch?v=u-ylqPKbmWI"],
        ["3대5로 싸움거는 적, 당연한 패배",
            "https://www.youtube.com/watch?v=tl_AoQpBFfw"],
        ["신지드 상대 농락",
            "https://www.youtube.com/watch?v=Q3HJ_6HkEXI"],
        ["블츠 미친 폭딜",
            "https://www.youtube.com/watch?v=aBFTatnc6nU"],
        ["이렐리아 쿼드라",
            "https://www.youtube.com/watch?v=fPCMV338ZN8"],
        ["블츠 q 딜",
            "https://www.youtube.com/watch?v=6gwB59-J35M"],
        ["블츠 인형뽑기",
            "https://www.youtube.com/watch?v=uOrTBjyTGyw"],

    ]

    const FHD221004= [
        ["킨드 궁에서 꺼내는 우르곳",
            "https://www.youtube.com/watch?v=3CdHCl5Q9yA"],
        ["애매한 이니시 성공",
            "https://www.youtube.com/watch?v=a5g7pPqxWNo"],
        ["브랜드 살리기",
            "https://www.youtube.com/watch?v=DsVd_Hp0FHo"],

    ]

    const FHD221008= [
        ["아트록스 펜타킬",
            "https://www.youtube.com/watch?v=a0erceeb4rc"],
        ["막무가내 이니시",
            "https://www.youtube.com/watch?v=_4uDkOcelP4"],
        ["제이스 승천",
            "https://www.youtube.com/watch?v=_kTXc0_Y7KE"],
        ["다리우스 펜타킬",
            "https://www.youtube.com/watch?v=yDWyGDaffl4"],
        ["다리 쿼드라",
            "https://www.youtube.com/watch?v=uCBLOAdcht8"],
        ["마이 딸피 쿼드라",
            "https://www.youtube.com/watch?v=jMv4v122qVA"],
        ["말파 원딜잡기",
            "https://www.youtube.com/watch?v=AHBJRHee8dE"],
        ["펑",
            "https://www.youtube.com/watch?v=Kbt2EjKleEM"],
        ["벨베스 생존",
            "https://www.youtube.com/watch?v=PiFx12xeUnk"],
        ["벨베스 공속",
            "https://www.youtube.com/watch?v=ogjrO8byuug"],
        ["벨베스 넥뿌",
            "https://www.youtube.com/watch?v=BzZOYCn_TeA"],
        ["노틸 이니시",
            "https://www.youtube.com/watch?v=tcykPrPdz1Q"],
        ["노틸 이니시2",
            "https://www.youtube.com/watch?v=4QlF8lnP2wY"],
        ["코그모 무호흡딜링",
            "https://www.youtube.com/watch?v=d6WySUOf3pM"],

        ]

    const FHD221009= [
        ["나르 이니시",
            "https://www.youtube.com/watch?v=Zkgg81rppUg"],
        ["세트 역이니시",
            "https://www.youtube.com/watch?v=uxy9R2G5T1c"],
        ["세트 요네",
            "https://www.youtube.com/watch?v=vXzhUo25tl8"],
        ["세트 자크 이니시",
            "https://www.youtube.com/watch?v=8nhMXdx_5K8"],
        ["옷갈아입는 비에고 쿼드라",
            "https://www.youtube.com/watch?v=DuIy9UVbt7E"],
        ["옷갈아입는 비에고 쿼드라2",
            "https://www.youtube.com/watch?v=87JQB9WuiUQ"],
        ["옷갈아입는 비에고 쿼드라3",
            "https://www.youtube.com/watch?v=plCiWYzedoQ"],
        ["염병하는 비에고",
            "https://www.youtube.com/watch?v=uLIN97oRKjQ"],
        ["애쉬 폭사",
            "https://www.youtube.com/watch?v=u7a9QUsQlzk"],
        ["길고 더러운 싸움2",
            "https://www.youtube.com/watch?v=KHnUntpR1lk"],
        ["길고 더러운 싸움",
            "https://www.youtube.com/watch?v=2fAdckNSDiU"],
        ["이렐 5인기절",
            "https://www.youtube.com/watch?v=LNvT8lYiWd4"],
        ["람머스 먼저 잡기",
            "https://www.youtube.com/watch?v=3lBoBW5MeXM"],
        ["기절기절기절",
            "https://www.youtube.com/watch?v=kWlOgiwwb_o"],
        ["쉬바나 딜",
            "https://www.youtube.com/watch?v=T2ljP3BbRwQ"],
        ["진 쿼드라",
            "https://www.youtube.com/watch?v=KPAJWljWYWw"],

    ]

    const FHD221011= [
        ["블츠 궁극기",
            "https://www.youtube.com/watch?v=s5MAoIJ2CJI"],
        ["받아치기",
            "https://www.youtube.com/watch?v=P4JBqwSTdA8"],
        ["받아치기2",
            "https://www.youtube.com/watch?v=QJtn2doYTKg"],
        ["받아치기3",
            "https://www.youtube.com/watch?v=WT2Xd9CTEYg"],
        ["첫 한타 승리",
            "https://www.youtube.com/watch?v=nV5ClupES1w"],
        ["애쉬한테 따잇",
            "https://www.youtube.com/watch?v=5MFchLhS_PI"],
        ["승리",
            "https://www.youtube.com/watch?v=n5ROOSW9iTU"],

    ]

    const FHD221012= [
        ["케이틀린 비공식 쿼드라",
            "https://www.youtube.com/watch?v=xgux-oOOEy4"],
        ["자크 이니시",
            "https://www.youtube.com/watch?v=COdhwtxoMP4"],
        ["마무리",
            "https://www.youtube.com/watch?v=PrB_sdvHQT8"],
        ["자크 이니시2 겜 끝",
            "https://www.youtube.com/watch?v=8LQfZlYNrt0"],
        ["케넨 이니시",
            "https://www.youtube.com/watch?v=wMy-K3nrQl8"],
        ["코그모 잡기",
            "https://www.youtube.com/watch?v=CN9jr3rnFL4"],
        ["탈론 하드스로잉",
            "https://www.youtube.com/watch?v=g6TM91Ptwsk"],

    ]

    const FHD221013= [
        ["에코 이니시",
            "https://www.youtube.com/watch?v=bQ_gMc14ats"],
        ["아칼리 쿼드라 받아먹기",
            "https://www.youtube.com/watch?v=3Qfo-ZLuhU0"],
        ["아칼리 쿼드라 펜타 실패",
            "https://www.youtube.com/watch?v=4SlxiT5c7p4"],
        ["아칼리 5대1 생존",
            "https://www.youtube.com/watch?v=XCe25yfighI"],
        ["마무리",
            "https://www.youtube.com/watch?v=XQR44ESLh7o"],
        ["칼리스타 씹캐리",
            "https://www.youtube.com/watch?v=ypQjdF-fRRo"],
        ["혜지로는 못 막는 돌진",
            "https://www.youtube.com/watch?v=pkk0Fkn2jbI"],
        ["혜지로는 못 막는 돌진2",
            "https://www.youtube.com/watch?v=jalf3zaFD3A"],
        ["뽀삐 몸니시",
            "https://www.youtube.com/watch?v=OZM4Rpm1MrY"],

    ]

    const FHD221014= [
        ["바이 펜타킬",
            "https://www.youtube.com/watch?v=x8dvRtr1G68"],
        ["니코 4인궁",
            "https://www.youtube.com/watch?v=D7LaSBfTUR0"],
        ["안죽는 스웨인, 마스터이",
            "https://www.youtube.com/watch?v=JeN6hypvDlQ"],
        ["스웨인 이니시",
            "https://www.youtube.com/watch?v=kCRkhUbTkFA"],
        ["오른 패왕색 말파 이니시",
            "https://www.youtube.com/watch?v=ftm710O2sAM"],
        ["오른 말파 합작",
            "https://www.youtube.com/watch?v=gtZtuoSwfF0"],
        ["브랜드, 트위치 잡고 겜 끝내기",
            "https://www.youtube.com/watch?v=LsjfbngUBJg"],
        ["말자하 점멸 궁",
            "https://www.youtube.com/watch?v=R9gOw2Wh964"],
        ["무지성 포탑 다이브",
            "https://www.youtube.com/watch?v=h-q82DoNBs4"],
        ["슈렐 말자하 점멸 궁, 비에고 옷 갈아입기",
            "https://www.youtube.com/watch?v=Fy8woLT-D4E"],
        ["밀고 들어가서 겜 끝내기",
            "https://www.youtube.com/watch?v=kq0PHs75LGw"],
        ["바이 코그모 잡기",
            "https://www.youtube.com/watch?v=eXCQ0Pg6RsA"],
        ["바이 코그모 잡기 2",
            "https://www.youtube.com/watch?v=SGoHgKRR3R8"],

    ]

    const FHD221016= [
        ["한놈씩 자르기",
            "https://www.youtube.com/watch?v=gu7KXvIreMc"],
        ["잔나 궁",
            "https://www.youtube.com/watch?v=B-rDfAKimks"],
        ["안죽는 딜러들",
            "https://www.youtube.com/watch?v=YT-wFITB6k4"],
        ["뚜벅이들 컷",
            "https://www.youtube.com/watch?v=BvdrQ_fPKU0"],
        ["딜러들 프리딜",
            "https://www.youtube.com/watch?v=GRWzNiSpUk8"],
        ["딜러들 프리딜 2",
            "https://www.youtube.com/watch?v=WK-1GAsbi8Q"],
        ["단단한 말파이트",
            "https://www.youtube.com/watch?v=lA6ohZeVaD4"],
        ["브랜드 야바위",
            "https://www.youtube.com/watch?v=xP5CCD4nGk4"],
        ["트린다이머 펜타킬",
            "https://www.youtube.com/watch?v=rgKwiI6z9QE"],
        ["가렌 이니시",
            "https://www.youtube.com/watch?v=p0L56Zb7ZW4"],
        ["코그모 잡기, 이렐 마무리",
            "https://www.youtube.com/watch?v=6SvP8ddyu0U"],
        ["코그모 잡기",
            "https://www.youtube.com/watch?v=47XINDTWk20"],
        ["이렐리아 무쌍",
            "https://www.youtube.com/watch?v=MGNZcXR5HC4"],
        ["이렐 쿼드라",
            "https://www.youtube.com/watch?v=Ykoqx1Iw174"],

    ]

    const FHD221018= [
        ["베인 어그로",
            "https://www.youtube.com/watch?v=tkBGN-2eEfs"],
        ["비에고 쿼드라",
            "https://www.youtube.com/watch?v=JYIx5-mJs9M"],
        ["존나 못하는 상대팀",
            "https://www.youtube.com/watch?v=5vCipxBFMGA"],
        ["존나 못하는 상대팀2",
            "https://www.youtube.com/watch?v=9r7tALFC1ZA"],

    ]

    const FHD221020= [
        ["레나타, 질리언 버프",
            "https://www.youtube.com/watch?v=afTefsGe8BA"],
        ["바이 이니시2",
            "https://www.youtube.com/watch?v=eS4Xw8rU0o0"],
        ["레나타, 질리언 버프2",
            "https://www.youtube.com/watch?v=4jx5rr5OqMg"],
        ["레나타 궁극기",
            "https://www.youtube.com/watch?v=flP6Z53aOGY"],
        ["바이, 이렐 이니시",
            "https://www.youtube.com/watch?v=oDx5U56pb5A"],
        ["일기토",
            "https://www.youtube.com/watch?v=73_mTjvIzmA"],
        ["원딜 프리딜",
            "https://www.youtube.com/watch?v=Ae-kiGJjffo"],
        ["모데 하드스로잉, 카이사 프리딜",
            "https://www.youtube.com/watch?v=eaNojqzRbys"],
        ["말파이트",
            "https://www.youtube.com/watch?v=ymuy6vlsn_4"],
        ["바이 이니시",
            "https://www.youtube.com/watch?v=FFxfl9k-6J8"],
        ["노틸 무지성 이니시 후 진, 티모 카이팅",
            "https://www.youtube.com/watch?v=pPDtoz1-TyU"],
        ["게임을 끝내는 진의 속박",
            "https://www.youtube.com/watch?v=UGEm0toqKZ8"],
        ["아지르 중장비 컨트롤",
            "https://www.youtube.com/watch?v=D7s1LHfkaBw"],
        ["아지르 중장비 컨트롤2",
            "https://www.youtube.com/watch?v=RYiKPMTUcic"],
        ["4대5승리",
            "https://www.youtube.com/watch?v=uBoDmhcggkI"],
        ["아지르 중장비 컨트롤3",
            "https://www.youtube.com/watch?v=y5BZ1mnK_w8"],
        ["아지르 중장비 컨트롤4",
            "https://www.youtube.com/watch?v=o1QauWMFyW8"],
        ["아지르 중장비 컨트롤5",
            "https://www.youtube.com/watch?v=Gh_xncqq_l0"],

    ]

    const FHD221023= [
            ["알리스타 이니시",
                "https://www.youtube.com/watch?v=7gN7ojjtLQY"],
            ["대 역 전",
                "https://www.youtube.com/watch?v=oGVdGBvjqvs"],
            ["아크샨 무한 휠",
                "https://www.youtube.com/watch?v=0du-JeFWG6c"],
            ["징크스 프리딜",
                "https://www.youtube.com/watch?v=gKJjYS_OGJY"],
            ["안죽는 렝가",
                "https://www.youtube.com/watch?v=0LLoiLAoH8Y"],
            ["신드라 쿼드라",
                "https://www.youtube.com/watch?v=iMvJnplMXug"],
            ["안죽는 렝가, 딜러 프리딜",
                "https://www.youtube.com/watch?v=tE6MHNMEdk8"],
            ["탈리야 신드라 징크스",
                "https://www.youtube.com/watch?v=N-5LXABw_DQ"],

        ]




    // const FHD221002= [
    //     ["",
    //         ""],
    //
    // ]




    // const FHD220817= {
    //     L1: {
    //         title: "",
    //         link: ""
    //     },
    //
    // }

    return (
        <div>
            <HorizonLine text={"1080p"}/>

            <ArrayLink data={FHD221023} date={"221023"}/>

            <ArrayLink data={FHD221020} date={"221020"}/>

            <ArrayLink data={FHD221018} date={"221018"}/>

            <ArrayLink data={FHD221016} date={"221016"}/>

            <ArrayLink data={FHD221014} date={"221014"}/>

            <ArrayLink data={FHD221013} date={"221013"}/>

            <ArrayLink data={FHD221012} date={"221012"}/>

            <ArrayLink data={FHD221011} date={"221011"}/>

            <ArrayLink data={FHD221009} date={"221009"}/>

            <ArrayLink data={FHD221008} date={"221008"}/>

            <ArrayLink data={FHD221004} date={"221004"}/>

            <ArrayLink data={FHD221003_2} date={"221003-2"}/>

            <ArrayLink data={FHD221003_1} date={"221003-1"}/>

            <ArrayLink data={FHD221002} date={"221002"}/>

            <ArrayLink data={FHD221001} date={"221001"}/>

            <ArrayLink data={FHD220930} date={"220930"}/>

            <ArrayLink data={FHD220925} date={"220925"}/>

            <ArrayLink data={FHD220923} date={"220923"}/>

            <ArrayLink data={FHD220922} date={"220922"}/>

            <ArrayLink data={FHD220918} date={"220918"}/>

            <ArrayLink data={FHD220917} date={"220917"}/>

            <ArrayLink data={FHD220916} date={"220916"}/>

            <ArrayLink data={FHD220912} date={"220912"}/>

            <ArrayLink data={FHD220902} date={"220902"}/>

            <DatePerLink data={FHD220901} date={"220901"}/>

            <DatePerLink data={FHD220831} date={"220831"}/>

            <DatePerLink data={FHD220827} date={"220827"}/>

            <DatePerLink data={FHD220826} date={"220826"}/>


            {/*22-08-25*/}
            <Container>
                <P>22-08-25</P>
                {
                    Object.entries(FHD220825).map((list) => (
                        <Li id={list[1].title}>
                            <A href={list[1].link}>{list[1].title}</A>
                        </Li>

                    ))
                }
            </Container>


            {/*22-08-24*/}
            <Container>
                <P>22-08-24</P>
                {
                    Object.entries(FHD220824).map((list) => (
                        <Li id={list[1].title}>
                            <A href={list[1].link}>{list[1].title}</A>
                        </Li>

                    ))
                }
            </Container>


            {/*22-08-23*/}
            <Container>
                <P>22-08-23</P>
                {
                    Object.entries(FHD220823).map((list) => (
                        <Li id={list[1].title}>
                            <A href={list[1].link}>{list[1].title}</A>
                        </Li>

                    ))
                }
            </Container>


            {/*22-08-22*/}
            <Container>
                <P>22-08-22</P>
                {
                    Object.entries(FHD220822).map((list) => (
                        <Li id={list[1].title}>
                            <A href={list[1].link}>{list[1].title}</A>
                        </Li>

                    ))
                }
            </Container>


            {/*22-08-21*/}
            <Container>
                <P>22-08-21</P>
                {
                    Object.entries(FHD220821).map((list) => (
                        <Li id={list[1].title}>
                            <A href={list[1].link}>{list[1].title}</A>
                        </Li>

                    ))
                }
            </Container>


            {/*22-08-20*/}
            <Container>
                <P>22-08-20</P>
                {
                    Object.entries(FHD220820).map((list) => (
                        <Li id={list[1].title}>
                            <A href={list[1].link}>{list[1].title}</A>
                        </Li>

                    ))
                }
            </Container>


            {/*22-08-17*/}
            <Container>
                <P>22-08-17</P>
                {
                    Object.entries(FHD220817).map((list) => (
                        <Li id={list[1].title}>
                            <A href                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ={list[1].link}>{list[1].title}</A>
                        </Li>

                    ))
                }
            </Container>

            {/*22-08-16*/}
            <Container>
                <P>22-08-16</P>
                {
                    Object.entries(FHD220816).map((list) => (
                        <Li id={list[1].title}>
                            <A href={list[1].link}>{list[1].title}</A>
                        </Li>

                    ))
                }
            </Container>

            {/*22-08-15*/}
            <Container>
                <P>22-08-15</P>
                {
                    Object.entries(FHD220815).map((list) => (
                        <Li id={list[1].title}>
                            <A href={list[1].link}>{list[1].title}</A>
                        </Li>

                    ))
                }
            </Container>

            {/*22-08-14*/}
            <Container>
                <P>22-08-14</P>
                {
                    Object.entries(FHD220814).map((list) => (
                        <Li id={list[1].title}>
                            <A href={list[1].link}>{list[1].title}</A>
                        </Li>

                    ))
                }
            </Container>

            {/*22-08-13*/}
            <Container>
                <P>22-08-13</P>
                {
                    Object.entries(FHD220813).map((list) => (
                        <Li id={list[1].title}>
                            <A href={list[1].link}>{list[1].title}</A>
                        </Li>

                    ))
                }
            </Container>

            {/*22-08-11*/}
            <Container>
                <P>22-08-11</P>
                {
                    Object.entries(FHD220811).map((list) => (
                        <Li id={list[1].title}>
                            <A href={list[1].link}>{list[1].title}</A>
                        </Li>

                    ))
                }
            </Container>

            {/*22-08-10*/}
            <Container>
                <P>22-08-10</P>
                {
                    Object.entries(FHD220810).map((list) => (
                        <Li id={list[1].title}>
                            <A href={list[1].link}>{list[1].title}</A>
                        </Li>

                    ))
                }
            </Container>

            {/*22-08-09*/}
            <Container>
                <P>22-08-09</P>
                {
                    Object.entries(FHD220809).map((list) => (
                        <Li id={list[1].title}>
                            <A href={list[1].link}>{list[1].title}</A>
                        </Li>

                    ))
                }
            </Container>


            {/*22-08-08*/}
            <Container>
                <P>22-08-08</P>
                {
                    Object.entries(FHD220808).map((list) => (
                        <Li id={list[1].title}>
                            <A href={list[1].link}>{list[1].title}</A>
                        </Li>

                    ))
                }
            </Container>


            {/*22-08-07*/}
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


            {/*22-08-06*/}
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


            {/*720p*/}
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