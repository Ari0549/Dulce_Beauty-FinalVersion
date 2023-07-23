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

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from 'react';
import { Formik, Field, ErrorMessage, getIn } from 'formik';
import { Form } from 'react-bootstrap';
import * as Yup from 'yup';
import Row from 'react-bootstrap/esm/Row';
import { BsQuestionCircle } from 'react-icons/bs';
import Col from 'react-bootstrap/esm/Col';
import { Tooltip } from 'react-tooltip';

export const FormItem = ({ item, onChange, answer, nextStep }) => {
    const [currentValue, setCurrentValue] = useState(answer || null);
    //const [startDate, setStartDate] = useState(new Date());
    const [date, setDate] = useState(new Date());
    const[index, setIndex] = useState(1);
    const phoneRegExp = /^([0-9]{10})?$/

    const nextButton = () => {
        if (index < 3){
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    function getStyles(errors, fieldName) {
        if (getIn(errors, fieldName)) {
            return {
                border: '1px solid red',
            }
        }
    }

        return(
            <>

                <Formik
                    initialValues={{ firstName: '', lastName: '', email: '', phone: '' }}
                    validationSchema={Yup.object({
                        firstName: Yup.string()
                            .max(15, 'Must be 15 characters or less')
                            .required('Required'),
                        lastName: Yup.string()
                            .max(20, 'Must be 20 characters or less')
                            .required('Required'),
                        email: Yup.string().email('Invalid email address').required('Required'),
                        phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid. 10 digit max.').required('Required')
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            setSubmitting(false);
                            nextStep();
                        }, 400);
                    }}
                >
                    {formik => {
                    console.log(formik)
                        switch (item.type) {
                            case 'first':
                                return (
                                    <Form className='m-3 me-5 '>
                                        <Col className='input-group'>
                                        <Row>
                                            <Form.Label >{item.label}</Form.Label>
                                        </Row>
                                        <Row className='input-group'>
                                            <Field name="firstName"  id={item.label} placeholder='First name' className='form-control' type="first" style={formik.touched.firstName ? getStyles(formik.errors, 'firstName') : {}} value={currentValue} />
                                        </Row>
                                        <Row className='text-danger'>
                                            <ErrorMessage name="firstName" />
                                        </Row>
                                                    
                                        </Col>
                                    </Form>
                                    
                                )
                                break;
                            case 'last':
                                return(
                                    <Form className='m-3 me-5 '>
                                        <Col className='input-group'>
                                            <Row>
                                                <label htmlFor="lastName">Last Name</label>
                                            </Row>
                                            <Row className='input-group'>
                                                <Field name="lastName" placeholder='Last name' className='form-control' type="last" style={formik.touched.lastName ? getStyles(formik.errors, 'lastName') : {}} />
                                            </Row>
                                            <Row className='text-danger'>
                                                <ErrorMessage name="lastName" />
                                            </Row>
                                        </Col>
                                    </Form>     
                                )
                                break;
                            case 'address':
                                return(
                                <>
                                    <Form className='m-3 me-5 '>
                                        <Col className='input-group'>
                                            <Row>
                                                <label htmlFor="email">Email</label>
                                            </Row>
                                            <Row className='input-group'>
                                                <Field name="email" className='form-control' placeholder='youremail@example.com' type="address" style={formik.touched.email ? getStyles(formik.errors, 'email') : {}} value={currentValue}/>
                                            </Row>
                                            <Row className='text-danger'>
                                                <ErrorMessage name="email" />
                                            </Row>
                                        </Col>
                                    </Form>
                                </>
                                )
                                break;
                            case 'number':
                                    return(
                                        <>
                                            <Form className='m-3 me-5 '>
                                                <Col className='input-group'>
                                                    <Row className='w-100'>
                                                        <Col lg={3}>
                                                            <label htmlFor="phone" style={{marginRight: '10px'}}>Phone number</label>
                                                            <Tooltip anchorSelect='#phoneTT' place='top' content='10 digits. No "-" and no space.' id='phTT'/>
                                                            <BsQuestionCircle id='phoneTT'  />
                                                        </Col>
                                                    </Row>
                                                    <Row className='input-group'>
                                                        <input name="phone" className='form-control' type="number" {...formik.getFieldProps('phone')} style={formik.touched.phone ? getStyles(formik.errors, 'phone') : {}} />
                                                    </Row>
                                                    <Row className='text-danger'>
                                                        <ErrorMessage name="phone" />
                                                    </Row>
                                                </Col>
                                            </Form>
                                        </>
                                    )
                                break;
                            case 'pickDate':
                                    return(
                                        <>
                                            <Form.Label style={{marginTop: '20px'}}>{item.label}</Form.Label>
                                            <div className="date-picker-wrapper">
                                                <DatePicker className='date-pick' style={{width: '1000px'}} selected={date} onChange={(date) => setDate(date)} />
                                            </div>
                                        </>
                                    )
                                break;
                            case 'selectexp':
                                    return(
                                        <div className='mt-2'>
                                            <Form.Label style={{marginTop: '20px'}}>{item.label}</Form.Label>
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
                            case 'selectserv':
                                    return(
                                        <div className='mt-2'>
                                            <Form.Label style={{marginTop: '20px'}}>{item.label}</Form.Label>
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
                            case 'selecttime':
                                    return(
                                        <div className='mt-2'>
                                            <Form.Label style={{marginTop: '20px'}}>{item.label}</Form.Label>
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
                    }}

                </Formik>
                
            </>
        )

}