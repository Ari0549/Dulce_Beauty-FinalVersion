import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imageExpert1 from './imgExpert1.png';
import Collapse from 'react-bootstrap/Collapse';

const Services = () => {

    const [typeServiceF, settypeServiceF] = useState(false);
    const [open, setOpen] = useState(false);

    const handletypeServiceFChange = (e) => {
        //settypeServiceF(!typeServiceF)
        settypeServiceF(e.target.value);
    };

    const [priceF, setPriceF] = useState(false);

    const handlepriceFChange = (e) => {
        //setPriceF(!priceF)
        setPriceF(e.target.value);
    };

    const [timeF, settimeF] = useState(false);

    const handletimeFChange = (e) => {
        //settimeF(!timeF)
        settimeF(e.target.value);
    };

    const tpServ = 
    [
        { type: 'Body Treatment', price: '175$', time: '75 minutes', name: 'Himalayan Salt Treatment'},
        { type: 'Body Treatment', price: '130$', time: '60 minutes', name: 'Detox And Cellulite Treatment'},
        { type: 'Body Treatment', price: '100$', time: '50 minutes', name: 'Foot Care'},
        { type: 'Facial Treatment', price: '175$', time: '60 minutes', name: 'Cleansing Facial'},
        { type: 'Facial Treatment', price: '130$', time: '75 minutes', name: 'Facial Gua Sha'},
        { type: 'Facial Treatment', price: '100$', time: '40 minutes',  name: 'Anti-Aging Facial Treatment'},
        { type: 'Esthetic', price: '175$', time: '75 minutes', name: 'Keratin Treatment'},
        { type: 'Esthetic', price: '130$', time: '75 minutes', name: 'Lashes And Brows'},
        { type: 'Esthetic', price: '100$', time: '60 minutes', name: 'Laser Hair Removal'}
    ];

    const serviceFilt = tpServ.filter((item) => {
        if (typeServiceF && item.type !== typeServiceF) {
          return false;
        }
        if (priceF && item.price !== priceF) {
          return false;
        }
        if (timeF && item.time !== timeF) {
          return false;
        }
        return true;
    });

    return (
        <div>
            <h1 className='titlePages'>Services</h1>
                <div className='serv' style={{display: 'flex', marginTop: '150px'}}>
                    <div style={{marginLeft: '80px'}}>
                    <Form.Select className='optionsServ' aria-label="Default select example" value={typeServiceF} onChange={handletypeServiceFChange}>
                        <option value="">All types of services</option>
                        <option value="Body Treatment">Body Treatment</option>
                        <option value="Facial Treatment">Facial Treatment</option>
                        <option value="Esthetic">Esthetic</option>
                    </Form.Select>
                    <Form.Select className='optionsServ' aria-label="Default select example" value={priceF} onChange={handlepriceFChange}>
                        <option value="">All Prices</option>
                        <option value="175$">175$</option>
                        <option value="130$">130$</option>
                        <option value="100$">100$</option>
                    </Form.Select>
                    <Form.Select className='optionsServ' aria-label="Default select example" value={timeF} onChange={handletimeFChange}>
                        <option value="">All Times</option>
                        <option value="40 minutes">40 minutes</option>
                        <option value="50 minutes">50 minutes</option>
                        <option value="60 minutes">60 minutes</option>
                        <option value="75 minutes">75 minutes</option>
                    </Form.Select>

                    </div>
                    <div style={{marginLeft: '220px'}}>
                        <Container>
                            <div>
                                <h1>Beauty Treatment</h1>
                            </div>
                            {serviceFilt.map((item, index) => (
                                <Row> 
                                        <Col>
                                            <h2 style={{display: 'none'}}> {item.type}</h2>
                                            <div style={{border: '2px solid #5D4F85', width: '200px', height: '280px', paddingTop: '10px', paddingBottom: '10px', marginTop: '60px', marginBottom: '60px'}} key={index}>
                                                    {item.name}
                                                    <br />
                                                    {item.price}
                                                    <br />
                                                    {item.time}
                                                    <br />
                                                    <Button style={{marginTop: '20px', width: '150px'}} variant="primary">See more details</Button>
                                            </div>
                                        </Col>
                                </Row>
                            ))}
                        </Container> 
                    </div>
                    <Card style={{ width: '300px', height: '500px' }}>
                        <img src={imageExpert1} style={{ width: '300px' }} alt='imgAbout' className='img-fluid'/>
                        <Card.Body>
                            <Card.Title>Himalayan Salt Treatment</Card.Title>
                            <Card.Text style={{ marginTop: '20px' }}>
                                75 minutes
                            </Card.Text>
                            <Card.Text>
                                175$
                            </Card.Text>
                            <Button 
                                variant="primary" 
                                style={{ width: '150px'}}
                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}
                            >
                                See more details
                            </Button>
                            <div style={{ minHeight: '150px', marginTop:'60px'}}>
                                <Collapse in={open} dimension="width">
                                <div id="example-collapse-text">
                                    <Card body style={{ width: '300px' }}>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                                    helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                    ea proident.
                                    </Card>
                                </div>
                                </Collapse>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
      );
    
}
export default Services;