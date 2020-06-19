import React from 'react';

import { BlockPropTypes } from '../shared';
import { Detail } from './Detail';
import { Summary } from './Summary';

export const Profile = ({ content, className, detail }) =>
    <>
        {detail
            ? <Detail content={content} />
            : <Summary content={content} className={className} />
        }
    </>

Profile.propTypes = BlockPropTypes;
Profile.defaultProps = {};