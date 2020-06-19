import Link from '@material-ui/core/Link';
import * as PropTypes from 'prop-types';

export const BlockPropTypes = {
    content: PropTypes.object.isRequired,
    className: PropTypes.string,
    detail: PropTypes.bool,
};

export const Markdown = {
    renderers: { link: Link }
};
