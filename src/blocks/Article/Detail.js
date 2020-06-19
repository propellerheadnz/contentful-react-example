import React from 'react';

import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ReactMarkdown from 'react-markdown';
import { Link as RouterLink } from 'react-router-dom';

import { BlockPropTypes, Markdown } from '../shared';

const useStyles = makeStyles((theme) => ({
    detail: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        '& h1, h6': {
            margin: theme.spacing(0, 0, 2),
        },
        '&>* img': {
            maxWidth: '100%',
        },
    }
}));

export const Detail = ({ content }) => {
    const classes = useStyles();

    return (
        <Box className={classes.detail}>
            <Typography variant="h1" gutterBottom>{content.fields.title}</Typography>
            <Typography variant="subtitle1" data-testid="pullQuote">{content.fields.pullQuote}</Typography>
            {content.fields.author &&
                <Link component={RouterLink} to={`/profile/${content.fields.author.fields.slug}`} >
                    <Typography variant="subtitle2" data-testid="author">by {content.fields.author.fields.name}</Typography>
                </Link>
            }
            <ReactMarkdown renderers={Markdown.renderers}>
                {content.fields.body}
            </ReactMarkdown>
        </Box>
    );
}

Detail.propTypes = BlockPropTypes;
Detail.defaultProps = {};