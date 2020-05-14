import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Country from './pages/Country';

export default function Routes() {
    return (
        <Switch>
            <Route to="/" exact component={Home} />
            <Route to="/:country" component={Country} />
        </Switch>
    );
}
