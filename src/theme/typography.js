import RobotoBold from './Roboto-Bold.ttf';
import RobotoBoldItalic from './Roboto-BoldItalic.ttf';
import RobotoItalic from './Roboto-Italic.ttf';
import RobotoMedium from './Roboto-Medium.ttf';
import RobotoRegular from './Roboto-Regular.ttf';

export const Roboto = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 500,
    src: `local('Roboto'), local('Roboto-Medium'), url(${RobotoMedium}) format('woff2')`,
};

export const RobotoReg = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `local('Roboto'), local('Roboto-Regular'), url(${RobotoRegular}) format('woff2')`,
};

export const Robot0Bold = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 700,
    src: `local('Roboto'), local('Roboto-Bold'), url(${RobotoBold}) format('woff2')`,
};

export const RobotoItalics = {
    fontFamily: 'Roboto',
    fontStyle: 'italic',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `local('Roboto'), local('Roboto-Italic'), url(${RobotoItalic}) format('woff2')`,
};

export const RobotoBoldItalics = {
    fontFamily: 'Roboto',
    fontStyle: 'italic',
    fontDisplay: 'swap',
    fontWeight: 700,
    src: `local('Roboto'), local('Roboto-BoldItalic'), url(${RobotoBoldItalic}) format('woff2')`,
};

export const typography = {
    fontFamily: "'Roboto', sans-serif",
    fontSize: 16,
    root: {},

    /* <Typography variant="xxx" */

    // Hero headline, Article title
    h1: {
        fontWeight: 600,
        fontSize: '4rem',
        lineHeight: 1.2,
        fontFamily: 'Roboto',
    },
    // Snippet, Section, LayoutGrid title
    h2: {
        fontWeight: 500,
        fontSize: '3.5rem',
        lineHeight: 1.20,
        fontFamily: 'Roboto',
        letterSpacing: '0.01em',
    },
    // Snippet teaser, card title
    h3: {
        fontWeight: 500,
        fontSize: '2.5rem',
        lineHeight: 1.20,
        fontFamily: 'Roboto',
        letterSpacing: '0.01em',
    },
    // Profile name
    h4: {
        fontWeight: 700,
        fontSize: '1.25rem',
        lineHeight: 1.20,
        fontFamily: 'Roboto',
        letterSpacing: '0.01em',
    },
    // Hero copy
    h5: {
        fontWeight: 400,
        fontSize: '1.125rem',
        lineHeight: 1.5,
        fontFamily: 'Roboto',
        paddingTop: '1rem'
    },
    // Header brand text
    h6: {
        fontWeight: 400,
        fontSize: '1.08rem',
        lineHeight: 1.3,
        fontFamily: 'Roboto',
    },
    // Hero brand text, Article pullQuote
    subtitle1: {
        fontWeight: 400,
        fontSize: '1.3125rem',
        lineHeight: 1.5,
        fontFamily: 'Roboto',
        letterSpacing: '0.005em',
    },
    // Article author
    subtitle2: {
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.5,
        fontFamily: 'Roboto',
    },
    // General body text outside markdown
    body1: {
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.5,
        fontFamily: 'Roboto',
    },
    button: {
        fontWeight: 500,
        fontSize: '0.75rem',
        fontFamily: 'Roboto',
        textTransform: 'none',
    },
};