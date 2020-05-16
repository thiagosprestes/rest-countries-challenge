import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Country from './pages/Country';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/country/:name" component={Country} />
        </Switch>
    );
}
