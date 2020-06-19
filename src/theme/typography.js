import TTNormsBold from './TTNorms-Bold.woff2';
import TTNormsBoldItalic from './TTNorms-BoldItalic.woff2';
import TTNormsItalic from './TTNorms-Italic.woff2';
import TTNormsRegular from './TTNorms-Regular.woff2';

export const ttNorms = {
    fontFamily: 'TTNorms',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `local('TTNorms'), local('TTNorms-Regular'), url(${TTNormsRegular}) format('woff2')`,
};

export const ttNormsBold = {
    fontFamily: 'TTNorms',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 700,
    src: `local('TTNorms'), local('TTNorms-Bold'), url(${TTNormsBold}) format('woff2')`,
};

export const ttNormsItalic = {
    fontFamily: 'TTNorms',
    fontStyle: 'italic',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `local('TTNorms'), local('TTNorms-Italic'), url(${TTNormsItalic}) format('woff2')`,
};

export const ttNormsBoldItalic = {
    fontFamily: 'TTNorms',
    fontStyle: 'italic',
    fontDisplay: 'swap',
    fontWeight: 700,
    src: `local('TTNorms'), local('TTNorms-BoldItalic'), url(${TTNormsBoldItalic}) format('woff2')`,
};

export default {
    fontFamily: "'TTNorms', sans-serif",
    fontSize: 16,
    root: {},

    /* <Typography variant="xxx" */

    // Hero headline, Article title
    h1: {
        fontWeight: 400,
        fontSize: '2.8125rem',
        lineHeight: 1.2,
        fontFamily: 'TTNorms',
    },
    // Snippet, Section, CardGrid title
    h2: {
        fontWeight: 700,
        fontSize: '1.875rem',
        lineHeight: 1.20,
        fontFamily: 'TTNorms',
        letterSpacing: '0.01em',
    },
    // Snippet teaser, card title
    h3: {
        fontWeight: 700,
        fontSize: '1.5rem',
        lineHeight: 1.20,
        fontFamily: 'TTNorms',
        letterSpacing: '0.01em',
    },
    // Profile name
    h4: {
        fontWeight: 700,
        fontSize: '1.25rem',
        lineHeight: 1.20,
        fontFamily: 'TTNorms',
        letterSpacing: '0.01em',
    },
    // Hero copy
    h5: {
        fontWeight: 400,
        fontSize: '1.125rem',
        lineHeight: 1.5,
        fontFamily: 'TTNorms',
    },
    // Header brand text
    h6: {
        fontWeight: 400,
        fontSize: '0.9rem',
        lineHeight: 1.3,
        fontFamily: 'TTNorms',
    },
    // Hero brand text, Article pullQuote
    subtitle1: {
        fontWeight: 400,
        fontSize: '1.5rem',
        lineHeight: 1.5,
        fontFamily: 'TTNorms',
        letterSpacing: '0.005em',
    },
    // Article author
    subtitle2: {
        fontWeight: 700,
        fontSize: '1rem',
        lineHeight: 1.5,
        fontFamily: 'TTNorms',
    },
    // General body text outside markdown
    body1: {
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.5,
        fontFamily: 'TTNorms',
    },
    button: {
        fontWeight: 400,
        fontSize: '0.9rem',
        fontFamily: 'TTNorms',
        textTransform: 'none'
    },
};