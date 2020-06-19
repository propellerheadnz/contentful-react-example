
// https://material.io/resources/color/
export const color = {
    purple: '#794577',
    white: '#FFFFFF',
    black: '#000000',
    cream: '#EFEBE7',
    lightGrey: 'rgba(204, 204, 204, 0.63)',
};

export default {
    primary: {
        main: color.black,
    },
    secondary: {
        main: color.black,
    },
    text: {
        primary: color.black,
        secondary: color.white,
    },
    background: {
        default: color.white,
        paper: color.cream,
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
}