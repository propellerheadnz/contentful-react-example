import React from 'react';

import { BlockPropTypes } from '../shared';
import { Centred } from './Centred';
import { Columns } from './Columns';
import { TextImage } from './TextImage';

export const Snippet = ({ content }) => {
    switch (content.fields.layout) {
        case 'Centred':
            return <Centred content={content} />;
        case 'Columns':
            return <Columns content={content} />;
        default:
            return <TextImage content={content} />;
    }
};

Snippet.propTypes = BlockPropTypes;
Snippet.defaultProps = {};