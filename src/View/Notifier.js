import React, { useState, useEffect } from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import * as PropTypes from 'prop-types';

export const Notifier = ({ notification }) => {
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        setAlert(notification !== undefined);
    }, [notification]);

    const closeAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlert(false);
    };

    return (
        <Snackbar open={alert} autoHideDuration={6000} onClose={closeAlert}>
            <Alert elevation={6} variant="filled" severity="error" onClose={closeAlert}>
                {/* {notification.msg} */}
            </Alert>
        </Snackbar>
    );
}

export default Notifier;

Notifier.propTypes = {
    notification: PropTypes.shape({
        msg: PropTypes.string
    })
};
Notifier.defaultProps = {};