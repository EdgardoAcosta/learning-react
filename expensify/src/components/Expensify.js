import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ExpenseDashboardPage from "./ExpenseDashboardPage";
import AddExpensePage from "./AddExpensePage";
import EditExpensePage from "./EditExpensePage";
import HelpPage from "./HelpPage";
import NotFoundPage from "./NotFoundPage";
import Header from "./Header";

export default class Expensify extends React.Component {
    render() {
        const title = "Expensify App";
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                        <Route path="/create" component={AddExpensePage}/>
                        <Route path="/edit/:id" component={EditExpensePage}/>
                        <Route path="/help" component={HelpPage}/>
                        <Route component={NotFoundPage}/>

                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
