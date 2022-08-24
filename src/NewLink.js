// import React from 'react';
// import styled from 'styled-components'
//
// const A = styled.a`
// color: black;
// background: #E2E2E2;
// font-size: 1.2em;
// padding: 0.3em 0.5em;
// margin-right: 0.1em;
// text-decoration: none;
// border-radius:10px;
// :hover{
// background:yellow
// `
//
// const Li = styled.li`
// list-style-type: none;
// margin:10px;
// display: inline-block;
// font-size:15px;`
//
// const P = styled.p`
// font-size:13px;
// `
//
// const Container = styled.div`
// background-color:#f8f9fa;
// border-radius:30px;
// padding:0
// `
//
//
// function NewLink() {
//
//     const FHD = {
//         220806: {
//             L1: {
//                 title: "못막는 사이온",
//                 link: "https://www.youtube.com/watch?v=jBN-ALh2WMk"
//             },
//             L2: {
//                 title: "야스오 비공식 쿼드라",
//                 link: "https://www.youtube.com/watch?v=0hRJ3f0pkGA"
//             },
//             L3: {
//                 title: "아칼리 쿼드라",
//                 link: "https://www.youtube.com/watch?v=C6sij6sIUCY"
//             },
//             L4: {
//                 title: "마오카이에게 타죽는 케인",
//                 link: "https://www.youtube.com/watch?v=Iq3wCDosZkI"
//             },
//             L5: {
//                 title: "그웬 쿼드라",
//                 link: "https://www.youtube.com/watch?v=itMNtOPXCXU"
//             }
//         },
//         220807: {
//             L1: {
//                 title: "카타리나 쿼드라",
//                 link: "https://www.youtube.com/watch?v=4VR1ufevLi8"
//             },
//             L2: {
//                 title: "쓰레쉬 이니시와 cc연계",
//                 link: "https://www.youtube.com/watch?v=Ua8xXfVNAtk"
//             },
//             L3: {
//                 title: "한타 승리",
//                 link: "https://www.youtube.com/watch?v=NDljFZOVimk"
//             },
//             L4: {
//                 title: "카타리나 쿼드라2",
//                 link: "https://www.youtube.com/watch?v=z57XbQ340y0"
//             }
//         },
//         220808: {
//             L1: {
//                 title: "피오라 쿼드라",
//                 link: "https://www.youtube.com/watch?v=FatxHmo8c4w"
//             },
//             L2: {
//                 title: "한타 이기고 게임 못끝냄",
//                 link: "https://www.youtube.com/watch?v=beVo0Zy5Nx0"
//             }
//         },
//         220809: {
//             L1: {
//                 title: "조합차이",
//                 link: "https://www.youtube.com/watch?v=hsJd6_D5GUA"
//             },
//             L2: {
//                 title: "안죽는 신짜오",
//                 link: "https://www.youtube.com/watch?v=1znHBfCxfOk"
//             },
//             L3: {
//                 title: "안죽는 람머스",
//                 link: "https://www.youtube.com/watch?v=ujtsnbMt1O0"
//             },
//             L4: {
//                 title: "게임을 끝내러 가는 람머스",
//                 link: "https://www.youtube.com/watch?v=9GYKkxCDCA4"
//             },
//             L5: {
//                 title: "자르반 어그로",
//                 link: "https://www.youtube.com/watch?v=mlzeDr8Rkpc"
//             },
//             L6: {
//                 title: "미포 자르반 연계",
//                 link: "https://www.youtube.com/watch?v=rTV-kdEMEhY"
//             },
//             L7: {
//                 title: "마지막 만담",
//                 link: "https://www.youtube.com/watch?v=2M4iGaQwzyQ"
//             }
//         },
//     }
//
//     const FHD2 = {
//         220806: [
//              {
//                 title: "못막는 사이온",
//                 link: "https://www.youtube.com/watch?v=jBN-ALh2WMk"
//              },
//              {
//                 title: "야스오 비공식 쿼드라",
//                 link: "https://www.youtube.com/watch?v=0hRJ3f0pkGA"
//             },
//              {
//                 title: "아칼리 쿼드라",
//                 link: "https://www.youtube.com/watch?v=C6sij6sIUCY"
//             },
//              {
//                 title: "마오카이에게 타죽는 케인",
//                 link: "https://www.youtube.com/watch?v=Iq3wCDosZkI"
//             },
//              {
//                 title: "그웬 쿼드라",
//                 link: "https://www.youtube.com/watch?v=itMNtOPXCXU"
//             }
//         ],
//         220807: [
//              {
//                 title: "카타리나 쿼드라",
//                 link: "https://www.youtube.com/watch?v=4VR1ufevLi8"
//             },
//              {
//                 title: "쓰레쉬 이니시와 cc연계",
//                 link: "https://www.youtube.com/watch?v=Ua8xXfVNAtk"
//             },
//              {
//                 title: "한타 승리",
//                 link: "https://www.youtube.com/watch?v=NDljFZOVimk"
//             },
//              {
//                 title: "카타리나 쿼드라2",
//                 link: "https://www.youtube.com/watch?v=z57XbQ340y0"
//             }
//         ],
//         220808: [
//              {
//                 title: "피오라 쿼드라",
//                 link: "https://www.youtube.com/watch?v=FatxHmo8c4w"
//             },
//              {
//                 title: "한타 이기고 게임 못끝냄",
//                 link: "https://www.youtube.com/watch?v=beVo0Zy5Nx0"
//             }
//         ],
//         220809: [
//              {
//                 title: "조합차이",
//                 link: "https://www.youtube.com/watch?v=hsJd6_D5GUA"
//             },
//              {
//                 title: "안죽는 신짜오",
//                 link: "https://www.youtube.com/watch?v=1znHBfCxfOk"
//             },
//              {
//                 title: "안죽는 람머스",
//                 link: "https://www.youtube.com/watch?v=ujtsnbMt1O0"
//             },
//              {
//                 title: "게임을 끝내러 가는 람머스",
//                 link: "https://www.youtube.com/watch?v=9GYKkxCDCA4"
//             },
//              {
//                 title: "자르반 어그로",
//                 link: "https://www.youtube.com/watch?v=mlzeDr8Rkpc"
//             },
//              {
//                 title: "미포 자르반 연계",
//                 link: "https://www.youtube.com/watch?v=rTV-kdEMEhY"
//             },
//              {
//                 title: "마지막 만담",
//                 link: "https://www.youtube.com/watch?v=2M4iGaQwzyQ"
//             }
//         ],
//     }
//     const aa=Object.entries(FHD2)
//     console.log(aa)
//     // const a1=aa.map(a1=>{a1[0]})
//     // console.log(a1)
//
//
//
//
//
//
//
//     // const aa = Object.entries(FHD)
//     // const bb = aa.map(day => day[1])
//     // const b1 = aa.map(day => day[0])
//     // console.log(cc)
//     // console.log(b1)
//     // const b2=aa.forEach(day=>console.log(day[0]))
//     // console.log(b2)
//     // aa.map(list=>{
//     //     console.log(list[aa.forEach(day=>day[0])].length)
//     // })
//
//     // console.log(aa)
//     // console.log(bb)
//     // console.log(Object.keys(bb))
//     // console.log(Object.keys(bb[1]))
//     // console.log(Object.keys(bb[2]))
//     // console.log(Object.keys(bb[3]))
//     // console.log(bb.length)
//
//     // const a1=aa.forEach(a1=>{
//     //     console.log(a1[1])
//     // })
//     // console.log(Object.entries(a1))
//
//
//     // for (var i = 0; i < bb.length; i++) {
//     //     const list = Object.keys(bb[i])
//     //     console.log(list[0])
//     //     for (var j = 0; j < list.length; j++) {
//     //         const list2 = list[j]
//     //         console.log(list2)
//     //     }
//     // }
//     // console.log(aa.length)
//
//
//     // for(var i=0;i<aa.length;i++){
//     //     // console.log(aa[i][0])
//     //     const list=aa[i][1]
//     //     // console.log(list)
//     //     const listLength=Object.keys(list).length
//     //     // console.log("리스트 길이 "+listLength)
//     //     for (var j=1;j<=listLength;j++){
//     //         // console.log(j)
//     //
//     //         console.log(list[`L${j}`].title)
//     //         console.log(list[`L${j}`].link)
//     //     }
//     // }
//     // aa.map(a1 => {
//     //     console.log(Object.keys(a1).length)
//     // })
//
//     // function containerBox() {
//     //     for (var i = 0; i < aa.length; i++) {
//     //         // console.log(aa[i][0])
//     //         const list = aa[i][1]
//     //         // console.log(list)
//     //         let game = document.createElement('h1')
//     //         let gameDate = document.createElement('p')
//     //         let gameTitle = document.createElement('li')
//     //         let gameLink = document.createElement('a')
//     //
//     //         game.appendChild(gameDate)
//     //         game.appendChild(gameTitle)
//     //         game.appendChild(gameLink)
//     //         const listLength = Object.keys(list).length
//     //         gameDate.innerHTML = listLength
//     //
//     //         // console.log("리스트 길이 "+listLength)
//     //         for (var j = 1; j <= listLength; j++) {
//     //             // console.log(j)
//     //
//     //             console.log(list[`L${j}`].title)
//     //             console.log(list[`L${j}`].link)
//     //
//     //         }
//     //     }
//     // }
//
//     // console.log(list)
//
//
//     // const b5=bb.forEach(v=>{
//     //     v.forEach(l=>l[0]))
//     // })
//     // console.log(b1)
//     // Object.entries(bb).map((v)=>{
//     //     console.log(v[1])
//     // })
//     // const b2 = Object.entries(bb).map(v => v[1])
//     // console.log(b2)
//     // const b3=Object.entries(b2.map((b)=>{
//     //     console.log(b)
//     // }))
//     // console.log(Object.entries(b2).map((v)=>Object.entries(v[1]).map((list)=>list[0])))
//     // const b4 = Object.entries(b2).map((v) => Object.entries(v[1]).map((list) => list[0]))
//     // console.log(b4)
//     //  Object.entries(b4).forEach((v)=>console.log(v))
//     // console.log(Object.keys(bb))
//     // console.log(aa["220809"])
//
//
//     // console.log(
//     //     aa.map((day) => {
//     //            day
//     //         }
//     //     )
//     // )
//     // aa.map((day)=>{
//     //     console.log(day[1])
//     // })
//     // console.log(bb[1])
//
//
//     // bb.map((d)=>{
//     //     console.log(d)
//     // })
//     //
//     // console.log(bb)
//     // console.log(cc[0])
//
//
//     return (
//         <div>
//             {
//                 aa.map((list) => (
//
//
//                     <Container>
//                         <P>{list[0].slice(0, 2) + "-" + list[0].slice(2, 4) + "-" + list[0].slice(4, 6)}</P>
//                         <Li>
//                             <A>
//                                 {list[1].L1.title +
//                                     list[1].L2.title}
//                                 {/*{list[1].map((item)=>{*/}
//                                 {/*    item[0].title*/}
//                                 {/*})}*/}
//                             </A>
//                         </Li>
//
//                     </Container>
//                 ))
//             }
//         </div>
//
//     );
// }
//
// export default NewLink;