import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Header } from './Header';
import { Footer } from './Footer';

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: 'calc(100vh - 330px)'
    },
}));

export const Layout = withRouter(props => {
    const classes = useStyles();
    const { location: { pathname } } = props;

    return (
        <>
            <Header title={pathname} />
            <main className={classes.root}>
                {props.children}
            </main>
            <Footer />
        </>
    );
});
