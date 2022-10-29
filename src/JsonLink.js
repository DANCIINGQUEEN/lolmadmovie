import React, {useState, useEffect} from 'react';
import styled from 'styled-components'

const A = styled.a`
color: black;
background: #E2E2E2;
font-size: 1.2em;
padding: 0.3em 0.5em;
margin-right 0.1em;
text-decoration: none;
border-radius:10px;
:hover{
background:yellow
}
;`

const Li = styled.li`
list-style-type: none;
margin:10px;
display: inline-block;
font-size:15px;`


function JsonLink(data) {



    // console.log(data)
    // Object.entries(QWE).map(q => {
    // console.log(q[1].video)
    // console.log(q[1])
    // q[1].video.map(w => {
    // console.log(q[1].date)
    // console.log(w[0])
    // console.log(w[1])
    // })
    // })
    // console.log(data)
    // Object.entries(data).map((q) => {
        // console.log(q[1])
        // console.log(q[1][1])
        // Object.entries(q[1]).map(w => {
        //     console.log(w)
        // console.log(w[1][1])
        // q[1].map(w => {
            // console.log(w[0])
            // console.log(w[1])
        // })
        // })
    // })
    return (
        <>
            {
                Object.entries(data).map(video => (
                        video[1].map(titleAndLink => (
                                <Li key={titleAndLink[0]}>
                                    <A href={titleAndLink[1]} > {titleAndLink[0]} </A>
                                </Li>
                            )
                        )
                    )
                )
            }
        </>
    );
}

export default JsonLink;