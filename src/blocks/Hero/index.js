import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import { BlockPropTypes } from '../shared';
import config from '../../config';

const useStyles = makeStyles(theme => ({
    root: {
        height: theme.spacing(54),
    },
    text: {
        color: theme.palette.text.secondary,
        paddingTop: 'calc(3em + 4vw)',
        [theme.breakpoints.down('sm')]: {
            width: "100%"
        },
        [theme.breakpoints.down('md')]: {
            width: "75%"
        },
        [theme.breakpoints.up('lg')]: {
            width: "75%"
        },
    },
    background: {
        background: content => content.fields.style || theme.background,
        height: theme.spacing(64),
        width: '100vw',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        overflow: 'hidden',
    },
    image: {
        width: 'calc(16em + 20vw)',
        position: 'absolute',
        right: 'min(-10vw, -120px)',
        bottom: `min(-5vw, ${theme.spacing(-8)}px)`,
    },
}));

export const Hero = ({ content }) => {
    const classes = useStyles(content);

    return (
        <div role="banner" data-testid="hero" >
            <Box className={classes.root} >
                <Box className={classes.text}>
                    <Typography variant="subtitle1" data-testid="title">{config.siteName}</Typography>
                    <RemoveOutlinedIcon alt="" fontSize="large" />
                    <Typography variant="h1" data-testid="headline">{content.fields.headline}</Typography>
                    <Typography variant="h5" data-testid="copy">{content.fields.copy}</Typography>
                </Box>
            </Box>
            <Box className={classes.background}>
                <img data-testid="heroImage" className={classes.image}
                    src={content.fields.image.fields.file.url}
                    alt={content.fields.image.fields.description ? `Image of ${content.fields.image.fields.description}` : ""} />
            </Box>
        </div>
    );
}

Hero.propTypes = BlockPropTypes;
Hero.defaultProps = {};