import { Form } from 'react-bootstrap';
import { FormBook } from './FormBook';
import { useState, useEffect } from 'react';

export const MultiStepForm = (props) => {
    const [answers, setAnswers] = useState ({ index: props.step});

    useEffect(() =>{
        if(Object.keys(answers).length > 1){

            props.onPageUpdate(answers.index, answers);
            setAnswers({ index: props.step})
        }
        else{
            setAnswers({ index: props.step})
        }
    }, [props.step])
    const updateAnswers = (value, category) => {
        
        setAnswers({...answers, [category] : value})
    }
    return(
        <div className='text-start'>
            {
                props.list[props.step - 1].items?.map((item, index) => {
                    return(
                        
                        <FormBook key={item.label} item={item} onChange={updateAnswers} answer={props.pagesAnswers[props.step] ? props.pagesAnswers[props.step][item.value] : null}/>
                    )
                })
            }
        </div>
    )
}