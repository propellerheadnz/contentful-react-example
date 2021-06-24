import React from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { useTheme, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import * as PropTypes from 'prop-types';

import { Block } from '../blocks/Block';

// page-level theme
const makeTheme = (theme, style) => createMuiTheme({
    ...theme,
    background: style
});

export const ContentRenderer = ({ content }) => {
    const theme = useTheme();

    // block background
    let bg = 'inherit';

    const background = (block) => {
        switch (block.sys.contentType.sys.id) {
            case 'assembly':
                return { background: block.fields.style };
            case 'snippet':
                bg = block.fields.style || (bg ? null : theme.palette.background.paper.default);
                return { background: bg };
            default:
                return {};
        }
    }

    return (
        <ThemeProvider theme={theme => makeTheme(theme, content.fields.style)}>
            {content.sys.contentType.sys.id === 'assembly' ?
                <>
                    {/* page or section layout */}
                    {content.fields.blocks.map((block, index) =>
                        <Box key={index} id={block.fields.slug} style={background(block)}>
                            <Container maxWidth="md">
                                <Block content={block} />
                            </Container>
                        </Box>
                    )}
                </>
                :
                // individual component
                <Container maxWidth="md">
                    <Block content={content} detail={true} />
                </Container>
            }
        </ThemeProvider>
    );
}

ContentRenderer.propTypes = {
    content: PropTypes.object,
};
ContentRenderer.defaultProps = {};