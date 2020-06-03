import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Faturas from './pages/Faturas';
import Fatura from './pages/Fatura';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/faturas/:uc" exact component={Faturas} />
                <Route path="/faturas/:uc/:ano/:mes" exact component={Fatura} />
            </Switch>
        </BrowserRouter>
    );
}