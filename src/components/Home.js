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

export default class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <figure className='position-relative'>
                        <img src={homeImge} alt='homeImg' className='img-fluid'/>
                        <figcaption>
                            <div className='text1'>
                                The Dulce Beauty Clinic
                            </div>
                            <div className='text2'>
                                Beauty Is Our Duty
                            </div>
                            <Link 
                                className="btn btn-lg"
                                role="button"
                                to="/services"
                                > 
                                Book now
                            </Link>
                        </figcaption>
                    </figure>
                </Container>
            </div>
        )
    }
}