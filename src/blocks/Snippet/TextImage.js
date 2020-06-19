import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import RemoveIcon from '@material-ui/icons/Remove';
import ReactMarkdown from 'react-markdown';

import ActionLink from '../../components/ActionLink';
import { BlockPropTypes, Markdown } from '../shared';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(7),
        paddingBottom: theme.spacing(7),
    },
    title: {
        marginTop: theme.spacing(2)
    },
    underline: {
        marginTop: theme.spacing(0.25),
        marginLeft: theme.spacing(-0.75),
    },
    copy: {
        marginTop: theme.spacing(0.5),
        '&>* img': {
            maxWidth: '100%',
        },
    },
    teaser: {
        marginTop: theme.spacing(6),
    },
    button: {
        marginTop: theme.spacing(3),
        color: theme.palette.secondary.contrastText,
    },
    image: {
        objectFit: 'contain',
        maxWidth: '100%',
    },
}));

export const TextImage = ({ content }) => {
    const classes = useStyles();

    return (
        <Grid container spacing={3} justify="space-between" className={classes.root}
            direction={content.fields.layout === "Right" ? "row-reverse" : "row"}>

            <Grid item xs={12} sm={6} md={6}>
                <Typography className={classes.title} variant="h2">{content.fields.title}</Typography>
                <RemoveIcon className={classes.underline} fontSize="large" />
                <ReactMarkdown className={classes.copy} renderers={Markdown.renderers}>
                    {content.fields.copy}
                </ReactMarkdown>
                {/* call to action */}
                {content.fields.actionTeaser &&
                    <Typography className={classes.teaser} variant="h3" component="p">{content.fields.actionTeaser}</Typography>
                }
                {content.fields.actionLink &&
                    <Button component={ActionLink} to={content.fields.actionLink}
                        className={classes.button}
                        color="secondary"
                        variant="contained">
                        {content.fields.actionLabel}
                    </Button>
                }
            </Grid>
            {content.fields.image &&
                <Hidden xsDown>
                    <Grid item xs={12} sm={6} md={6} container
                        justify={content.fields.layout === "Right" ? "flex-start" : "flex-end"}>
                        <img className={classes.image}
                            src={content.fields.image.fields.file.url}
                            title=""
                            alt={content.fields.image.fields.description ? `Image of ${content.fields.image.fields.description}` : ""}
                        />
                    </Grid>
                </Hidden>
            }
        </Grid>
    );
}

TextImage.propTypes = BlockPropTypes;
TextImage.defaultProps = {};