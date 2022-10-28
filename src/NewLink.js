import React from 'react';
import styled from 'styled-components'
import JsonLink from './JsonLink'

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

const P = styled.p`
font-size:13px;
`

const Container = styled.div`
background-color:#f8f9fa;
border-radius:30px;
padding:0
`


function NewLink() {
    const QWE = {
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

    Object.entries(QWE).map(q => {
        // console.log(q[1].video)
        // console.log(q[1])
        q[1].video.map(w => {
            // console.log(q[1].date)
            // console.log(w[0])
            // console.log(w[1])
        })
    })


    return (
        <div>

            {
                Object.entries(QWE).map((q, index) => (
                        <Container key={index}>

                            <P>
                                {q[1].date.slice(0, 2) + "-" + q[1].date.slice(2, 4) + "-" + q[1].date.slice(4, 6)}
                            </P>
                            <JsonLink data={q[1].video}/>
                        </Container>


                    )
                )
            }

        </div>

    );
}

export default NewLink;