import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

function Valeur_fac({name, updateCategory, facet}) {

    const [selected, setSelected] = useState(false)

    const handleChange = () => {
        setSelected(!selected)
    }

    useEffect(() => {
        updateCategory(facet, name, selected)
    }, [selected])
    return (
        <Form.Check type='checkbox'
            label={name}
            value={selected}
            style={{marginLeft: '5px'}}
            onChange={handleChange}
        />
    );
}

export default Valeur_fac;