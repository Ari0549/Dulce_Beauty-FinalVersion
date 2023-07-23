import React, { Component } from 'react';
import imageAbout from './imgAbout1.png';
import imageExpert1 from './imgExpert1.png';
import imageExpert2 from './imgExpert2.png';
import imageExpert3 from './imgExpert3.png';
import Accordion from 'react-bootstrap/Accordion';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function About() {

        const [index, setIndex] = useState(0);
        const [isShown, setIsShown] = useState(false);
        
        const handlebtnSoumettre = (e) => {
            
            if (window.confirm("Once you click Submit, you will not be able to edit your review. Are you sure you want to submit?")) {
                alert("Your review has been sent! We thank you for your participation.");
            } else {
                alert("You can edit your review.");

                // empêcher la page de refresh et ainsi de perdre le commentaire écrit
                e.preventDefault();
            }
        }

        const renderTooltip = (props) => (
            <Tooltip id="button-tooltip" {...props}>
              Selected language
            </Tooltip>
        );

        const handleSelect = (selectedIndex) => {
            setIndex(selectedIndex);
        };

        const { t, i18n } = useTranslation();
        
        return (
            <div>
                <h1 className='titlePages'>{t('about_titre')}</h1>
                
                <div className='aboutInfo'>
                    <div className='aboutInfo1'>
                        <h2>{t('about_dulce')}</h2>
                        <p>{t('about_text1')}</p>
                        <p>{t('about_text2')}</p>
                        <p>{t('about_text3')}</p>
                    </div>
                    <div className='aboutImg1'>
                        <img src={imageAbout} alt='Image next to description of our clinic' className='img-fluid'/>
                    </div>
                </div>

                <h1 className='titlePages2' style={{marginTop: '250px', marginBottom: '100px',}}>{t('about_experts')}</h1>

                <div>
                    <Carousel className='experts'>
                        <Carousel.Item>
                            <div className='expertsImg'>
                                <img src={imageExpert1} alt='Image of Facial Treatment Expert' className='img-fluid'/>
                            </div>
                            <h2>John Doe</h2>
                            <h3>{t('about_facial')}</h3>
                            <OverlayTrigger
                                placement="bottom"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                            >
                                <Link 
                                className="btn btn-outline-light btn-lg"
                                role="button"
                                to="/services"
                                > 
                                    Services
                                </Link>
                            </OverlayTrigger>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='expertsImg'>
                                <img src={imageExpert2} alt='Image of Body Treatment Expert' className='img-fluid'/>
                            </div>
                            <h2>Jane Doe</h2>
                            <h3>{t('about_body')}</h3>
                            <OverlayTrigger
                                placement="bottom"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                            >
                                <Link 
                                className="btn btn-outline-light btn-lg"
                                role="button"
                                to="/services"
                                > 
                                    Services
                                </Link>
                            </OverlayTrigger>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='expertsImg'>
                                <img src={imageExpert3} alt='Image of Esthetic Expert' className='img-fluid'/>
                            </div>
                            <h2>Sofia Hayes</h2>
                            <h3>{t('about_esthetic')}</h3>

                            <OverlayTrigger
                                placement="bottom"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                            >
                                <Link 
                                className="btn btn-outline-light btn-lg"
                                role="button"
                                to="/services"
                                > 
                                    Services
                                </Link>
                            </OverlayTrigger>
                        </Carousel.Item>
                    </Carousel>
                </div>

                <div className='showReviews'>
                    <h1 className='titlePages3'>{t('about_reviews')}</h1>
                    <Carousel className='CarouselReviews'>
                        <Carousel.Item>
                            <h3>{t('about_r1')}</h3>
                            <p> {t('about_rev1')}</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h3>{t('about_r2')}</h3>
                            <p>{t('about_rev2')}</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h3>{t('about_r3')}</h3>
                            <p>{t('about_rev3')}</p>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div>
                    <h1 className='titlePages4' style={{marginTop: '150px'}}>{t('about_addReviews')}</h1>
                    <Form className='addingReview'>
                        <Form.Group className="mb-3" controlId="formName">
                            <div className='addingReview2'style={{display: 'flex',}}>
                                <Form.Label style={{marginRight: '20px' }}>{t('about_name')}</Form.Label>
                                <Form.Control type="text" placeholder="" style={{width: '530px'}}/>
                            </div>
                        </Form.Group>
                        <FloatingLabel className='addingReview2' controlId="floatingTextarea2" label={t('about_comment')}>
                            <Form.Control
                            as="textarea"
                            style={{height: '200px', width: '600px',}}
                            />
                        </FloatingLabel>
                        <Button 
                            style={{marginTop: '40px', marginRight: '100px', paddingRight: "5px"}}
                            variant="primary"
                            type="submit"
                            onClick={handlebtnSoumettre}
                        >
                            {t('about_submit')}
                        </Button>
                    </Form>
                </div>

                <div>
                    <h1 className='titlePages2' style={{marginTop: '150px', marginBottom:'120px'}}>FAQ</h1>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item style={{width: '900px', display: 'inline-block'}} eventKey="1">
                            <Accordion.Header>{t('about_quest1')}</Accordion.Header>
                            <Accordion.Body>
                            {t('about_quest1_ans')}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item style={{width: '900px', display: 'inline-block'}} eventKey="2">
                            <Accordion.Header>{t('about_quest2')}</Accordion.Header>
                            <Accordion.Body>
                            {t('about_quest2_ans')}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item style={{width: '900px', display: 'inline-block'}} eventKey="3">
                            <Accordion.Header>{t('about_quest3')}</Accordion.Header>
                            <Accordion.Body>
                            {t('about_quest3_ans')}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                
            </div>
        )
}
export default About;