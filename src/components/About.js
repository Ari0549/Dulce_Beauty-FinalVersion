import React, { Component } from 'react';
import imageAbout from './imgAbout1.png';
import imageExpert1 from './imgExpert1.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function About() {

        const [index, setIndex] = useState(0);

        const handleSelect = (selectedIndex) => {
            setIndex(selectedIndex);
        };
        return (
            <div>
                <h1 className='titlePages'>ABOUT US</h1>
                
                <div className='aboutInfo'>
                    <div className='aboutInfo1'>
                        <h2>Dulce beauty clinic</h2>
                        <p>At our clinic, we have a team of qualified experts who have been in the beauty industry for several years.</p>
                        <p>The Dulce Beauty clinic offers you a wide choice of high-end services.</p>
                        <p>We prioritize the comfort and the satisfaction of our customers.</p>
                    </div>
                    <div className='aboutImg1'>
                        <img src={imageAbout} alt='imgAbout' className='img-fluid'/>
                    </div>
                </div>

                <h1 className='titlePages2' style={{marginTop: '250px'}}>OUR EXPERTS</h1>

                <div className='experts'>
                    <div className='expertsImg'>
                        <img src={imageExpert1} alt='imgAbout' className='img-fluid'/>
                    </div>
                    <h2>John Doe</h2>
                    <h3>Facial expert</h3>
                    <Link 
                        className="btn btn-outline-light btn-lg"
                        role="button"
                        to="/services"
                        > 
                        Services
                    </Link>
                </div>

                <div className='showReviews'>
                    <h1 className='titlePages3'>REVIEWS</h1>
                    <div className='CarouselAbout'>
                    <h2>Here will be a carousel with all the reviews that were approved</h2>
                </div>
                </div>
                <div>
                    <h1 className='titlePages4' style={{marginTop: '150px'}}>ADD A REVIEW</h1>
                    <Form className='addingReview'>
                        <Form.Group className="mb-3" controlId="formName">
                            <div className='addingReview2'style={{display: 'flex',}}>
                                <Form.Label style={{marginRight: '20px' }}>Name</Form.Label>
                                <Form.Control type="text" placeholder="" style={{width: '530px'}}/>
                            </div>
                        </Form.Group>
                        <FloatingLabel className='addingReview2' controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{height: '200px', width: '600px',}}
                            />
                        </FloatingLabel>
                        <Button style={{marginTop: '40px', marginRight: '100px'}} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        )
}
export default About;