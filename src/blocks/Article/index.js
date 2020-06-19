import React from 'react';

import { BlockPropTypes } from '../shared';
import { Detail } from './Detail';
import { Summary } from './Summary';

export const Article = ({ content, className, detail }) =>
    <>
        {detail
            ? <Detail content={content} />
            : <Summary content={content} className={className} />
        }
    </>

Article.propTypes = BlockPropTypes;
Article.defaultProps = {};