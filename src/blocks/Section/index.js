import React from 'react';

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { Block } from '../Block';
import { BlockPropTypes } from '../shared';

const useStyles = makeStyles((theme) => ({
    header: {
        margin: '0px calc(50% - 50vw)',
        background: content => content.fields.style || theme.background,
        [theme.breakpoints.up('sm')]: {
            height: theme.spacing(32),
        },
        [theme.breakpoints.down('xs')]: {
            height: theme.spacing(26),
        },
    },
    section: {
        marginTop: theme.spacing(-20),
        marginBottom: theme.spacing(2),
    },
    feature: {
        marginTop: theme.spacing(4),
        boxShadow: '0 0',
        flexDirection: 'row',
        '& > img': {
            width: '45%',
            height: 'auto',
        },
    }
}));

export const Section = ({ content, className }) => {
    const classes = useStyles(content);

    return (
        <>
            <Box className={classes.header} />
            <Box className={classes.section}>
                <Typography variant="h2" color="textSecondary" gutterBottom>{content.fields.title}</Typography>
                <Typography variant="body1" color="textSecondary" data-testid='subtitle'>{content.fields.introduction}</Typography>
            </Box>
            <Box data-testid="section-blocks">
                {/* render blocks */}
                {content.fields.blocks.map((block, index) =>
                    <React.Fragment key={index}>
                        {index === 0 && block.sys.contentType.sys.id !== 'assembly'
                            ? <Block content={block} className={classes.feature} />
                            : <Block content={block} />
                        }
                    </React.Fragment>
                )}
            </Box>
        </>
    );
}

Section.propTypes = BlockPropTypes;
Section.defaultProps = {};