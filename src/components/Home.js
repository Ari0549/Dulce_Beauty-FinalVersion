import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import homeImge from './homeimg.png';
import './styles.css';
import Nav from 'react-bootstrap/Nav';
import Book from "./Book";
import Button from 'react-bootstrap/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useTranslation } from 'react-i18next';


function Home() {

    const { t, i18n } = useTranslation();
    
    return (
        <div>
            <Container>
                <figure className='position-relative'>
                    <img src={homeImge} alt='homeImg' className='img-fluid'/>
                    <figcaption>
                        <div className='text1'>
                            {t('home_title')}
                        </div>
                        <div className='text2'>
                            Beauty Is Our Duty
                        </div>
                        <Link 
                            className="btn btn-lg"
                            role="button"
                            to="/Book"
                            > 
                            Book now
                        </Link>
                    </figcaption>
                </figure>

                <h1 className='newClient'>New here?</h1>
                    <h4 className='newClient2'>Take a look at the services our clinic offers</h4>
                    <Link 
                        className="btn btn-outline-light btn-lg"
                        role="button"
                        to="/services"
                    > 
                        Services
                    </Link>
            </Container>
        </div>
    )
}
export default Home;
