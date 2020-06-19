import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import ReactMarkdown from 'react-markdown';
import { Link as RouterLink } from 'react-router-dom';
import ActionLink from '../../components/ActionLink';
import { HomeIcon } from '../../icons/HomeIcon';
import { useStore } from '../../api';
// import config from '../../config';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.primary.dark,
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(6, 3),
        },
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(4, 1),
        },
        '& svg': {
            fill: theme.palette.secondary.contrastText,
        },
        '& *': {
            color: theme.palette.secondary.contrastText,
        },
        '& h6': {
            marginTop: '-0.3333em',
        },
    },
    underline: {
        marginLeft: '-6px',
    },
    logo: {
        flexGrow: 1,
        display: 'flex',
        '& svg': {
            fontSize: '6rem'
        },
        '& span': {
            maxWidth: theme.spacing(13),
            paddingLeft: theme.spacing(1),
            alignSelf: 'center',
        }
    },
}));

export const Footer = () => {
    const classes = useStyles();
    const { contentStore } = useStore();
    const { footer } = contentStore.useFooter();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="md">
                <Grid container spacing={4}>
                    {/* logo */}
                    <Grid item xs={12} sm={6} md={3} >
                        <Link component={RouterLink} to="/" className={classes.logo} aria-label="Home">
                            <HomeIcon alt="" />
                            {/* <Typography variant="h6" component="span">{config.siteName}</Typography> */}
                        </Link>
                    </Grid>

                    {/* other columns */}
                    {footer && footer.map((resources, col) =>
                        <Grid key={col} item xs={6} sm={6} md={3}>
                            {resources.fields.resources.map((res, row) =>
                                <Fragment key={row}>
                                    <Hidden smUp>
                                        {row === 0 && col === 2 &&
                                            <RemoveOutlinedIcon className={classes.underline} fontSize="large" />
                                        }
                                    </Hidden>
                                    {/* header */}
                                    {row === 0 &&
                                        <Typography gutterBottom variant="h5">{res.fields.value}</Typography>
                                    }
                                    {/* resource is link */}
                                    {row > 0 && res.fields.action &&
                                        <Typography gutterBottom>
                                            <Link component={ActionLink} to={res.fields.action} variant="body1">
                                                {res.fields.value}
                                            </Link>
                                        </Typography>
                                    }
                                    {/* resource is text */}
                                    {row > 0 && !res.fields.action &&
                                        <ReactMarkdown escapeHtml={false}>
                                            {res.fields.value}
                                        </ReactMarkdown>
                                    }
                                </Fragment>
                            )}
                        </Grid>
                    )}
                </Grid>
            </Container>
        </footer>
    );
}
