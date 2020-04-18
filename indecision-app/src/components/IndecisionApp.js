import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import Container from "react-bootstrap/Container";
import OptionModal from "./OptionModal";


export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
            selectedOption: undefined,
        };
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteSingleOption = this.handleDeleteSingleOption.bind(this);
        this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);
    }


    componentDidMount() {
        try {
            let json = localStorage.getItem('options');
            if (json) {
                this.setState(() => ({
                    options: JSON.parse(json)
                }))
            }
        } catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    handleDeleteOptions() {
        this.setState(() => ({options: []}))
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    }

    handleAddOption(newOption) {
        if (!newOption) {
            return 'Enter valid value'
        } else if (this.state.options.indexOf(newOption) > -1) {
            return 'Value already exist'
        }
        this.setState((prevState) => ({options: prevState.options.concat(newOption)}));
    }

    handleDeleteSingleOption(option) {

        this.setState((prevState) => ({
            options: prevState.options.filter((item) => item !== option)
        }))

    }

    handleClearSelectedOption() {
        this.setState(() => ({selectedOption: undefined}))
    }

    render() {
        const title = "Indecision App";
        return (
            <div>
                <Header title={title}/>
                <Container fluid>
                    <Action
                        handlePick={this.handlePick}
                        hasOptions={this.state.options.length > 0}
                    />
                    <Options
                        handleDeleteOptions={this.handleDeleteOptions}
                        options={this.state.options}
                        handleDeleteSingleOption={this.handleDeleteSingleOption}
                    />
                    <AddOption
                        handleAddOption={this.handleAddOption}
                    />
                    <OptionModal
                        selectedOption={this.state.selectedOption}
                        handleClearSelectedOption={this.handleClearSelectedOption}
                        title="Test" body="description" show={true}/>
                </Container>
            </div>
        );
    }
}
