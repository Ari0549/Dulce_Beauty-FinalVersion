import { Form } from 'react-bootstrap';
import { useState } from 'react';
import './MultiStepProgressBar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export const FormItem = ({ item, onChange, answer }) => {
    const [currentValue, setCurrentValue] = useState(answer || null);
    switch (item.type) {
        case 'text':
        return(
            <>
                <Form.Label>{item.label}</Form.Label>
                <Form.Control
                    type="text"
                    id={item.label}
                    onChange={(e) => onChange(e.target.value, item.value)}
                    value={currentValue}
                />
            </>
        )
        break;
        case 'select':
        return(
            <div className='mt-2'>
                <Form.Label>{item.label}</Form.Label>
                <Form.Select aria-label={item.label} value={currentValue} onChange={(e) => onChange(e.target.value, item.value)}>
                    <option>Open this select list</option>
                    {
                        item.options.map((opt, index) => {
                            return (
                                <option value={opt}>{opt}</option>
                            )
                        })
                    }
                </Form.Select>
            </div>
        )
        break;
        case 'information':
        return(
            <div className='BookingFin'>
                <h1>{item.label}</h1>
                <h1 style={{
                    marginTop: '30px',
                }}>A confirmation of your reservation has been sent to you by email.</h1>
                <Nav className='buttonHome'>
                    <Nav.Link as={Link} to={"/home"}>
                    <Button bsStyle="primary" style={{
                        marginTop: '10px',
                        width: '140px',
                        padding: '10px',
                        fontFamily: 'Lato, sans-serif',
                        fontSize: '20px',
                        backgroundColor: '',
                        marginLeft: '250px',
                    }}>Home Page</Button>
                    </Nav.Link>
                </Nav>
            </div>
            
        )
        break;
    }

    return[
        <></>
    ]
}