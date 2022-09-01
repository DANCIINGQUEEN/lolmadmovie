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

function ArrayLink({data, date}) {
    return (
        <div>
            <Container>
                <P>{date.slice(0, 2) + "-" + date.slice(2, 4) + "-" + date.slice(4, 6)}</P>

                {
                    Object.entries(data).map(list => (
                        <Li id={list[1][0]}>
                            <A href={list[1][1]}>{list[1][0]}</A>
                        </Li>
                    ))
                }
            </Container>
        </div>
    );
}

export default ArrayLink;