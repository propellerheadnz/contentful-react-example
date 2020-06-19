import React from 'react';

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';

import { BlockPropTypes, Markdown } from '../shared';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(7),
        paddingBottom: theme.spacing(7),
    },
    copy: {
        marginTop: theme.spacing(0.5),
        '&>* img': {
            maxWidth: '100%',
        },
    },
    columns: {
        paddingTop: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            columnCount: "2",
            '& p:first-of-type': {
                marginTop: 0,
            }
        },
        columnGap: '40px',
        wordBreak: 'break-word',
        whiteSpace: 'normal',
    },
}));

export const Columns = ({ content }) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography variant="h2">{content.fields.title}</Typography>
            <ReactMarkdown className={clsx(classes.copy, classes.columns)} renderers={Markdown.renderers}>
                {content.fields.copy}
            </ReactMarkdown>
        </Box>
    );
}

Columns.propTypes = BlockPropTypes;
Columns.defaultProps = {};