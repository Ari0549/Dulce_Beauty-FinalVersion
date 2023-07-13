import React, { Component } from 'react';
import { MultiStepProgressBar } from "./MultiStepProgressBar";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import { PersonalInfo } from './PersonalInfo';
import { MultiStepForm } from './MultiStepForm';

function Book(){
    const[index, setIndex] = useState(1);
    const totalPagesCount = PersonalInfo.length;
    const [pagesAnswers, setPagesAnswers] = useState({});

    const onPagesAnswerUpdate = (step, answersObj) => {
        setPagesAnswers({...pagesAnswers, [step]: answersObj});
    } 
    const prevButton = () => {
        if (index > 1){
            setIndex(prevIndex => prevIndex - 1);
        }
    }

    const nextButton = () => {
        if (index < 3){
            setIndex(prevIndex => prevIndex + 1);
        }
    }
    return (
        <div>
            <Container className='h-100' style={{marginTop: '100px',}}>
                <Row className='m-5'>
                    <Col className='align-self-center'>
                        <MultiStepProgressBar step={index}/>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-between'
                style={{marginTop: '50px',}}>
                    <MultiStepForm step={index} list = {PersonalInfo} onPageUpdate={onPagesAnswerUpdate} pagesAnswers={pagesAnswers}/>
                    <Button onClick={prevButton} disabled = {index === 1} style={{marginTop: '40px',}}>Previous</Button>
                    <Button onClick={nextButton} style={{marginTop: '40px',}}>{index === totalPagesCount? '' : 'Next'}</Button>
                </Row>
            </Container>
        </div>
    )

}
export default Book;

