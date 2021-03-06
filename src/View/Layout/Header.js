import React, { useState } from 'react';
import clsx from 'clsx';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import { HomeIcon } from '../../icons/HomeIcon';
import { useStore } from '../../api';


const useStyles = makeStyles(theme => ({
    spacer: {
        flexGrow: 1,
    },
    logo: {
        flexGrow: 1,
        display: 'flex',
        '& svg': {
            paddingTop: theme.spacing(1),
            fontSize: '3rem',
        },
    },
    button: {
        margin: theme.spacing(1),
        borderBottomWidth: 2,
        borderBottomStyle: 'solid',
        borderBottomColor: "transparent",
        '&:hover': {
            borderBottomColor: theme.palette.text.primary,
            background: "transparent",
        },
    },
    selected: {
        borderBottomWidth: 2,
        borderBottomStyle: 'solid',
    },
    heroMenu: {
        background: 'inherit',
        '& svg': {
            fill: theme.palette.text.secondary,
        },
        '& h6, & a': {
            color: theme.palette.text.secondary,
            '&:hover': {
                borderBottomColor: theme.palette.text.secondary,
            },
        },
    },
    detailMenu: {
        background: theme.palette.background.default,
    },
    offset: theme.mixins.toolbar,
}));
export const Header = (props) => {
    level = (props.title.match(/\//g) || []).length;


    return (<>
        <OnScroll props={{ ...props, level }}>
            <AppBar position="fixed" elevation={0}>
                <Toolbar>
                    <Link href="/" className={classes.logo} aria-label="Home" data-testid="menu-home">
                        <HomeIcon alt="" />
                    </Link>
                    {/* sm+ full menu */}
                    <Hidden smDown><>
                        {menu && menu.map((item, index) =>
                            <Button key={index}
                                component={RouterLink} to={`/${item.fields.slug}`}
                                className={clsx(classes.button, (selected === item.fields.slug ? classes.selected : ""))}
                                aria-label={item.fields.title}
                                data-testid="menu-md"
                            >
                                {item.fields.title}
                            </Button>
                        )}
                    </></Hidden>
                    {/* xs popup menu */}
                    <Hidden mdUp>
                        <div className={classes.spacer} />
                        <IconButton edge="start"
                            onClick={openMenu}
                            color="secondary"
                            aria-haspopup="true"
                            aria-label="menu"
                            aria-controls="simple-menu">
                            <MenuIcon />
                        </IconButton>
                        <Menu id="simple-menu"
                            elevation={1}
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={closeMenu}>
                            {menu && menu.map((item, index) =>
                                <MenuItem key={index}
                                    disabled={selected === item.fields.slug}
                                    selected={selected === item.fields.slug}
                                    component={RouterLink}
                                    to={`/${item.fields.slug}`}
                                    onClick={closeMenu}>
                                    {item.fields.title}
                                </MenuItem>
                            )}
                        </Menu>
                    </Hidden>
                </Toolbar>
            </AppBar>
        </OnScroll>
        <div className={classes.offset} />
    </>);
}

const OnScroll = ({ props, children }) => {
    const classes = useStyles();
    const scrolling = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        className: scrolling || props.level > 1 ? classes.detailMenu : classes.heroMenu
    });
};

