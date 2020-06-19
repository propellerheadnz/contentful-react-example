import React from 'react';

import { Article } from '../Article';
import { CardGrid } from '../CardGrid';
import { Hero } from '../Hero';
import { Profile } from '../Profile'
import { Section } from '../Section';
import { BlockPropTypes } from '../shared';
import { Snippet } from '../Snippet';

const blocks = { Article, CardGrid, Hero, Profile, Section, Snippet }
const block = (content) => {
    let name;
    if (content.sys.contentType.sys.id === 'assembly') {
        name = 'cardGrid'; //content.fields.layout;
    } else {
        name = content.sys.contentType.sys.id;
    }

    return blocks[name.charAt(0).toUpperCase() + name.slice(1)];
}

export const Block = props =>
    React.createElement(block(props.content), props);

Block.propTypes = BlockPropTypes;
Block.defaultProps = {};