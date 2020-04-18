import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route exact={true} path={'/'} component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
}
