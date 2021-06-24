/* eslint-disable react/display-name */
import React, { lazy, Suspense } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { StoreProvider } from './api';
import { WaitSkeleton } from './components/WaitSkeleton';
import custom from './theme';

const View = lazy(() => import('./View'));

let theme = createMuiTheme(custom);
theme = responsiveFontSizes(theme);



export const App = () => {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <StoreProvider>
                <Router>
                    <Switch>
                        <Suspense fallback={<WaitSkeleton variant="default" />}>
                            <Route exact path="/" component={View} />
                            <Route exact path="/:slug" component={View} />
                            <Route exact path="/:type/:slug" component={View} />
                        </Suspense>
                    </Switch>
                </Router>
            </StoreProvider>
        </ThemeProvider>
    );
}
