import { color } from './palette';
import { Roboto, RobotoReg, Robot0Bold, RobotoItalics, RobotoBoldItalics } from './typography';

export const overrides = {
    MuiCssBaseline: {
        '@global': {
            '@font-face': [Roboto, RobotoReg, Robot0Bold, RobotoItalics, RobotoBoldItalics],
        }
    },
    MuiCard: {
        root: {
            backgroundColor: color.white,
        }
    },
    MuiPaper: {
        root: {
            backgroundColor: color.white,
        },
        elevation1: {
            boxShadow: `0px 3px 10px ${'rgba(184,184,184, 0.2)'}`
        },
        elevation2: {
            boxShadow: `0px 3px 10px ${'rgba(184,184,184, 0.5)'}`
        },
    },

    MuiButton: {
        root: {
            fontSize: '1.125rem',
            lineHeight: '1.3125rem',
        },
        contained: {
            boxShadow: 'none',
            borderRadius: '0.15rem',
            lineHeight: '2rem',
            fontSize: '1.125rem',
            paddingLeft: '2rem',
            paddingRight: '2rem',
        },
        outlined: {
            paddingLeft: '2rem',
            paddingRight: '2rem',
            borderRadius: '0.15rem',
        }
    },

    MuiOutlinedInput: {
        root: {
            borderRadius: '0.25rem',
            background: color.white,
            color: color.grey,
        }
    },
    MuiInputLabel: {
        root: {
            color: color.grey,
            fontSize: '0.9rem',

        }
    },
}