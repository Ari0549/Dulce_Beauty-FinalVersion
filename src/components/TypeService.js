import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Collapse from 'react-bootstrap/Collapse';
import foot from '../imagesServices/foot_before_after.jpeg';

function TypeService ({ name, price, category, time, time2, time3, imfoot, image, moreInfo, id}) {

    const [open, setOpen] = useState(false)
    console.log(image)
    return (
        <Card className='m-2' style={{ width: '20rem' }}>
            <Card.Img variant="top" src={require('../imagesServices/' + image)}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <Row>
                        <Col>{category}</Col>
                    </Row>
                    <Row>
                        <Col>{price}</Col>
                    </Row>
                    <Row>
                        <Col>{time}</Col>
                    </Row>
                </Card.Text>
                <Container className='text-center'>
                <Button 
                    variant="primary" 
                    style={{ width: '170px'}}
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text9"
                    aria-expanded={open}
                >
                    See more details
                </Button>
                <div style={{ minHeight: '150px', marginTop:'60px'}}>
                    <Collapse in={open} dimension="width">
                        <div id="example-collapse-text9">
                            <Card body style={{ width: '300px'}}>
                                {moreInfo}
                            </Card>
                        </div>
                    </Collapse>
                </div>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default TypeService;