import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import WarningIcon from '@material-ui/icons/Warning';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4, 0),
        '& div': {
            textAlign: 'center',
        },
        '&>* a': {
            marginTop: theme.spacing(3),
        }
    },
}));

export const NotFound = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box>
                <WarningIcon alt="" fontSize="large" />
                <Typography variant="h1" >404 Page not found</Typography>
                <Typography variant="body1">The page you tried to find doesn't exist</Typography>
                <Button component={RouterLink} to="/" size="small"
                    color="secondary" variant="contained" href="/" >
                    Return Home
                </Button>
            </Box>
        </Box>

    );
}
