
// https://material.io/resources/color/
export const color = {
    blue: '#1a90ff',
    white: '#FFFFFF',
    black: '#333333',
    smoke: '#f5f5f5',
    lightGrey: 'rgba(204, 204, 204, 0.63)',
};

export const palette = {
    primary: {
        main: color.black,
    },
    secondary: {
        main: color.blue,
    },
    text: {
        primary: color.black,
        secondary: color.white,
    },
    background: {
        default: color.white,
        paper: color.lightGrey,
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
}