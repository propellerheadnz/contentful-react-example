import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';

import { BlockPropTypes } from '../shared';

const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    cardBody: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 'inherit',
        width: '100%',
        alignItems: 'flex-start',
    },
}));

export const Summary = ({ content, className }) => {
    const classes = useStyles();

    return (
        <Card className={clsx(classes.card, className)}>
            {content.fields.coverImage &&
                <CardMedia image={content.fields.coverImage.fields.file.url}
                    component="img"
                    title=""
                    alt={content.fields.coverImage.fields.description ? `Image of ${content.fields.coverImage.fields.description}` : ""}
                />
            }

            <Box className={classes.cardBody}>
                <CardContent>
                    <Typography variant="h3" gutterBottom>{content.fields.title}</Typography>
                    <Typography variant="body1">{content.fields.pullQuote}</Typography>
                </CardContent>
                <CardActions>
                    <Button component={RouterLink} to={`/article/${content.fields.slug}`}
                        size="small"
                        aria-label={`More on ${content.fields.title}`}>
                        Read more
                            </Button>
                </CardActions>
            </Box>
        </Card>
    );
}

Summary.propTypes = BlockPropTypes;
Summary.defaultProps = {};