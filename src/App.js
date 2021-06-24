import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { createInstance, OptimizelyProvider } from '@optimizely/react-sdk'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { StoreProvider } from './api';
import { WaitSkeleton } from './components/WaitSkeleton';
import config from './config';
import custom from './theme';

const View = lazy(() => import('./View'));

let theme = createMuiTheme(custom);
theme = responsiveFontSizes(theme);

const optimizely = createInstance({
    sdkKey: config.optimizely.key,
    logLevel: config.optimizely.loglevel
});

const user = {
    id: '', //'user123',
    attributes: {}, //{ 'customerId': 123, 'tester': true, }
};

export const App = () => {

    return (
        <OptimizelyProvider optimizely={optimizely} user={user}>
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
        </OptimizelyProvider >
    );
}