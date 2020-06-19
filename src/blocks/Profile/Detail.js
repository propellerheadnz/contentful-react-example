import React from 'react';

import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ReactMarkdown from 'react-markdown';

import { BlockPropTypes, Markdown } from '../shared';

const useStyles = makeStyles((theme) => ({
    detail: {
        padding: theme.spacing(3, 0),
    }
}));

export const Detail = ({ content }) => {
    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.detail}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h1">{content.fields.name}</Typography>
                    <Typography variant="subtitle1">{content.fields.title}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} container justify="flex-end">
                    <CardMedia
                        image={content.fields.picture.fields.file.url}
                        component="img"
                        title=""
                        alt={content.fields.picture.fields.description ? `Image of ${content.fields.picture.fields.description}` : ""}
                    />
                </Grid>
            </Grid>
            <ReactMarkdown renderers={Markdown.renderers}>
                {content.fields.bio}
            </ReactMarkdown>
        </>
    );
}

Detail.propTypes = BlockPropTypes;
Detail.defaultProps = {};
