import React from 'react';

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(0, 8, 4),
	},
}));

export const WaitSkeleton = ({ variant }) => {
	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<Skeleton height="5rem" />
			<Skeleton variant="rect" height="20rem" />
			<Skeleton height="5rem" />
		</Box>
	);
};