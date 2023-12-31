import React, { Component } from 'react';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import './MultiStepProgressBar.css';

export const MultiStepProgressBar = (props) => {
    return (
        <ProgressBar className='progressBar'
            percent={((props.step - 1) * 100) / 2}
            filledBackground="#D3C0B5"
        >
            <Step transition="scale">
            {({ accomplished, index}) => (

                <div className={`step ${accomplished ? "completed" : ""}`}>
                    1
                </div>
            )}
            </Step>
            <Step transition="scale">
            {({ accomplished, index}) => (

                <div className={`step ${accomplished ? "completed" : ""}`}>
                    2
                </div>
            )}
            </Step>
            <Step transition="scale">
            {({ accomplished, index}) => (
                
                <div className={`step ${accomplished ? "completed" : ""}`}>
                    3
                </div>
            )}
            </Step>
        </ProgressBar>
    )
}