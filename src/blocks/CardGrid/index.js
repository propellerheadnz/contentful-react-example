import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Carousel from 'react-material-ui-carousel';

import { Block } from '../Block';
import { BlockPropTypes } from '../shared';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(2, 0),
		'& h2': {
			padding: theme.spacing(3, 0),
		}
	},

}));

export const CardGrid = ({ content, className }) => {
	const classes = useStyles();

	return (
		<Box className={clsx(classes.root, className)}>
			<Typography variant="h2" gutterBottom>{content.fields.title}</Typography>
			{/* desktop standard grid */}
			<Hidden xsDown>
				<Grid container spacing={3} data-testid="cardGrid-blocks">
					{content.fields.blocks.map((item, index) =>
						<Grid key={index} item sm={6} md={4}>
							<Block content={item} />
						</Grid>
					)}
				</Grid>
			</Hidden>
			{/* mobile carousel */}
			<Hidden smUp>
				<Carousel navButtonsAlwaysVisible={true} autoPlay={false}>
					{content.fields.blocks.map((item, index) =>
						<Block key={index} content={item} />
					)}
				</Carousel>
			</Hidden>
		</Box>
	);
}

CardGrid.propTypes = BlockPropTypes;
CardGrid.defaultProps = {};
