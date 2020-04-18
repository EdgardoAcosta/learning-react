import React from 'react';
import Option from './Option';


const Options = (props) => (
    <div>
        <button onClick={props.handleDeleteOptions} className="btn-danger btn">Remove All</button>
        <ol>
            {
                props.options.map((option) => (
                        <Option
                            key={option}
                            description={option}
                            handleDeleteSingleOption={props.handleDeleteSingleOption}
                        />
                    )
                )
            }
        </ol>

    </div>
);


export default Options;
