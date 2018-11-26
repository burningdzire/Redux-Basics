import React from 'react';

export const Display = (props) => {
    return (
        <div>
            <h3>Hi {props.firstName} {props.lastName}!</h3>
            <h3>You are {props.age} years old.</h3>
        </div>
    );

}