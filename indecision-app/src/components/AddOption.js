import React from 'react';
import {Button} from 'react-bootstrap';

export default class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = (e.target.elements.option.value).trim();
        const error = this.props.handleAddOption(option);

        if (!error) {
            e.target.elements.option.value = ''
        }
        this.setState(() => ({error}));

    }

    render() {
        return (
            <div className="col-md-6">
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">New Value</label>
                        <input type="text" name="option" className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        );

    }
}
