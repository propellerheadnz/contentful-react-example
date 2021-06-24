import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { BlockPropTypes } from '../shared';


const useStyles = makeStyles(theme => ({
    root: {
        height: theme.spacing(80),

    },
    text: {
        color: theme.palette.primary.contrastText,
        paddingTop: 'calc(3em + 4vw)',
        [theme.breakpoints.down('sm')]: {
            width: "100%"
        },
        [theme.breakpoints.down('md')]: {
            width: "75%"
        },
        [theme.breakpoints.up('lg')]: {
            width: "45%"
        },
    },
    background: {
        height: theme.spacing(90),
        width: '100vw',
        position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'hidden',
    },
    containedButton: {
        backgroundColor: theme.palette.text.secondary,
        color: theme.palette.secondary.main,
    },
    outlinedButton: {
        color: theme.palette.background.paper,
        borderColor: theme.palette.background.paper,
        '&:hover': {
            color: theme.palette.background.default,
            borderColor: theme.palette.background.default,
        },
    }
}));

export const Hero = ({ content }) => {
    const classes = useStyles(content);

    // var solutionClass
    var homeClass, solutionClass
    if (content.fields.headline === 'Solutions') {
        solutionClass =
            <Box padding="4rem" className={classes.text} display="flex" justifyContent="flex-start" alignSelf="flex-end">
                <Typography variant="h1" data-testid="headline">{content.fields.headline}</Typography>
            </Box>
    } else {
        homeClass =
            <Box alignSelf="center" padding="2rem" className={classes.text}>
                <Typography variant="h2" data-testid="headline">{content.fields.headline}</Typography>
                <Typography variant="h5" data-testid="copy">{content.fields.copy}</Typography>
                <Box paddingTop="2rem" display="flex" >
                    <Button className={classes.containedButton} variant="contained">{content.fields.ctaLabel1}</Button>
                    <Box padding="0.25rem" />
                    <Button className={classes.outlinedButton} variant="outlined">{content.fields.ctaLabel2}</Button>
                </Box>
            </Box>
    }

    return (
        <Box role="banner" data-testid="hero" className={classes.root} >
            <Box display="flex" flexDirection="row" className={classes.background} style={{
                backgroundImage: "url(" + content.fields.image.fields.file.url + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                {homeClass}
                {solutionClass}
            </Box>
        </Box>
    );
}

Hero.propTypes = BlockPropTypes;
Hero.defaultProps = {};