import React from 'react';

export const Main = (props) => {
    return (
        <div>
            <div className="row">
                <h1>Main Page</h1>
            </div>
            <div className="row">
                <button className="btn btn-primary"
                    onClick={() => props.changeFirstName()}>Change Name</button>
                <button className="btn btn-primary"
                    onClick={() => props.changeLastName()}>Change Name</button>
                <button className="btn btn-primary"
                    onClick={() => props.changeAge()}>Change Age</button>
            </div>
        </div>
    );
}
