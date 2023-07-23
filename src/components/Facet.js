import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Valeur_fac from './Valeur_fac';
import Col from 'react-bootstrap/esm/Col';

function Facet({ name, values, updateCategory }) {

    return (<>
        <Row>
            <Col>
                {name}
            </Col>
        </Row>
        {values.map(value => (<Row>
            <Valeur_fac className='facetCont' name={value.name} updateCategory={updateCategory} facet={name}/>
        </Row>
        ))}
    </>

    );
}

export default Facet;