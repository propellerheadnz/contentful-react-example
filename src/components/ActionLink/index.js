import React, { forwardRef } from 'react';

import Link from '@material-ui/core/Link';
// import { useFeature } from '@optimizely/react-sdk';
// import { Link as RouterLink } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';

const ActionLink = forwardRef((props, ref) => {
    // const [bookmark] = useFeature('bookmark');

    // if (props.to.startsWith("/")) {
    //     if (bookmark === true && props.to.includes("#")) {
    //         return <HashLink {...props} />;
    //     } else {
    //         return <RouterLink ref={ref} {...props} />;
    //     }
    // } else {
    return <Link ref={ref} target="_blank" rel="noopener" href={props.to} {...props} />;
    // }
});

export default ActionLink;