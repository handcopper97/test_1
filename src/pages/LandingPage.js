import React, { useState } from 'react';
import styled from 'styled-components';
import StartButtonComponent from '../components/StartButtonComponent';
import QuizPage from './QuizPage';

const Wrapper = styled.div`
    display: ${props => props.isShow === true ? 'flex' : 'none'};
    width:100%;
    background-color:white;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const Container = styled.div`
    margin-top:18.6rem;
    margin-bottom:3rem;
    text-align:center;
`
const Intro = styled.div`
    font-family:'Spoqa-Han-Sans';
    font-size:1.4rem;
    font-weight:400;
    text-align:center;
    color:#A7A7A7;
    margin-bottom:4rem;
`
const Title = styled.div`
    font-family:'Jalnan';
    font-size:2.5rem;
    text-align:center;
    color:#00462A;
    margin-top:1.9rem;
    margin-bottom:8.4rem;
`
const Footer = styled.div`
    font-family:'Spoqa-Han-Sans';
    font-size:1.4rem;
    font-weight:400;
    text-align:center;
    margin-top:8.9rem;
    color:#A7A7A7;
`

const Logo = styled.img`
    width: 1.2rem;
`

function LandingPage() {

    const [isShow, setIsShow] = useState(true);
    const [isQuizShow, setIsQuizShow] = useState(false);

    const onClickStartBtn = () => {
        setIsShow(false);
        setIsQuizShow(true);
    }
    return (
        <>

            <Wrapper isShow={isShow}>
                <Container>
                    <Intro>나는 언제까지 살수 있을까?<br />  테스트</Intro>
                    <Title>my life</Title>
                    <StartButtonComponent type={true} text={"시작하기"} onclick={onClickStartBtn} />
                    <Footer>made by Yeom-Ra &nbsp;</Footer>
                </Container>
            </Wrapper>
            <QuizPage isShow={isQuizShow} />
        </>
    );
}

export default LandingPage;