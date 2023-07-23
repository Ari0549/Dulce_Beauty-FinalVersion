import React, { Component } from 'react';
import { MultiStepProgressBar } from "./MultiStepProgressBar";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import { InfoBook } from './InfoBook';
import { MultiStepForm } from './MultiStepForm';
import Alert from 'react-bootstrap/Alert';

function Book(){
    const[index, setIndex] = useState(1);
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

    const [show, setShow] = useState(true);

    if(show){
        return (
            <div>
                <Container className='h-100' style={{marginTop: '100px',}}>
                    <Row className='m-5' style={{width: '600px', display: 'inline-block',}}>
                        <Col className='align-self-center'>
                            <MultiStepProgressBar step={index}
                            />
                        </Col>
                    </Row>
                    <Row className='d-flex justify-content-between'
                    style={{marginTop: '50px',}}>
                        <div hidden = {(index === 2) || (index === 3)}>
                            <h1 className='titreInstruct1'>Welcome!</h1>
                            <h3 className='titreInstruct2'>Enter your personal information</h3>
                        </div>
    
                        <div hidden = {(index === 1) || (index === 3)}>
                            <h3 className='titreInstruct2'>Select the expert, service, date and time of your appointment</h3>
                        </div>
                        <MultiStepForm step={index} list = {InfoBook} onPageUpdate={onPagesAnswerUpdate} pagesAnswers={pagesAnswers}/>
                        <div hidden = {(index === 1) || (index === 3)}>
                            <Alert className='alerteSub' variant="warning" onClose={() => setShow(true)} dismissible>
                                <p>
                                Make sure that you have entered your data correctly and that you have chosen the desired appointment. 
                                <br />
                                Once you click on submit, you won't be able to go back and modifiy your appointment.
                                </p>
                            </Alert>
                        </div>
                        <Button className='previousBtn' onClick={prevButton} disabled = {index === 1} hidden = {index === 3} style={{marginTop: '40px'}}>Previous</Button>
                        <Button onClick={nextButton} hidden = {index === 3} style={{marginTop: '40px'}}>{index === 2? 'Submit' : 'Next'}</Button>
                    </Row>
                </Container>
            </div>
        )
    }

}
export default Book;

