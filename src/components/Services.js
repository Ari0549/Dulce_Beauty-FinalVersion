import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import { data } from "./serv_data";
import TypeServ from "./TypeService";
import Facets_container from './Facets_container';

function Services(){

    const build_categorical_facet_values = (name) => {
        const values = [... new Set(data.map(item => item[name]))]
        return values.map(value => ({ 'name': value, 'checked': false }))
    }

    const [state, setState] = useState({

        all_services: data,
        shown_services: data,
        facets: {

            category: build_categorical_facet_values('category'),
            price: build_categorical_facet_values('price'),
            time: build_categorical_facet_values('time')
        }
    })

    useEffect(() =>{
        const facets = {}

        Object.entries(state.facets).forEach(([name, values]) => {
            facets[name] = []
            values.forEach(value => {
                if (value.checked) {
                    facets[name].push(value.name)
                }
            })
        })

        if (Object.values(facets).every(arr => arr.length === 0)){
            setState({ ...state, shown_services: state.all_services})
            return
        }

        const number_of_active_facets = Object.values(facets).filter(x => x.length).length

        const to_show = state.all_services.map(serv =>
            Object.entries(facets).map(([name, values]) =>
            values.includes(serv[name])).filter(Boolean).length == number_of_active_facets ? serv : undefined
        ).filter(Boolean)

        setState({ ...state, shown_services: to_show})
    }, [state.facets])

    function clearAllFacetValues(facet) {
        const new_facet = state.facets[facet].map(facet_value => ({
            ...facet_value, checked: false
        }))
        setState({ ...state, facets: { ...state.facets, [facet]: new_facet }})
    }

    function updateCategory(facet, value, newChecked) {
        const new_facet = state.facets[facet].map(({ name, checked }) => ({ name: name, checked: name == value ? newChecked : checked}))
        setState({ ...state, facets: { ...state.facets, [facet]: new_facet } })
    }

    return (
        <div>
            <h1 className='titlePages' style={{marginBottom: '150px'}}>Services</h1>
            <Row>
                <Col className='border-end' md={3}>
                    <h3 style={{display: 'inline-block'}}>Filter</h3>
                    <Facets_container facets={state.facets} updateCategory={updateCategory} clearAllFacetValues={clearAllFacetValues} />
                </Col>
                <Col xs={9}>
                    <Container className='d-flex flex-wrap'>
                        {state.shown_services.map(x => <TypeServ {...x} />)}
                    </Container>
                </Col>
            </Row>
        </div>
    );


}

export default Services;