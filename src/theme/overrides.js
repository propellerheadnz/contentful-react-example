import { ttNorms, ttNormsBold, ttNormsItalic, ttNormsBoldItalic } from './typography';
import { color } from './palette';

export default {
    MuiCssBaseline: {
        '@global': {
            '@font-face': [ttNorms, ttNormsBold, ttNormsItalic, ttNormsBoldItalic],
        }
    },
    MuiAppBar: {
        colorDefault: {
            backgroundColor: color.white,
        }
    },
    MuiLink: {
        root: {
            fontWeight: 700,
        },
    },
    MuiPaper: {
        root: {
            backgroundColor: color.white,
        },
        elevation1: {
            boxShadow: `-8px 8px 6px -6px ${color.lightGrey}`
        },
    },
    MuiCardActionArea: {
        root: {
            height: '100%'
        },
    },
    MuiButton: {
        root: {
            fontSize: '1rem',
            fontWeight: 700,
        },
        contained: {
            boxShadow: 'none',
        },
    },
    MuiTypography: {
        gutterBottom: {
            marginBottom: '1rem',
        },
    },
}