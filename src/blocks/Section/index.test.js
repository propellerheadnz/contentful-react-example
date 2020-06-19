import React from 'react';

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router } from 'react-router-dom';

import content from '../../../data/section';
import { Section } from './index';

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe('Section component', () => {
    it("should render", () => {
        act(() => {
            render(
                <Router>
                    <Section content={content} />
                </Router>,
                container
            );
        });

        expect(container.querySelector("h2").textContent).toBe(content.fields.title);
        expect(container.querySelector("[data-testid=subtitle]").textContent).toBe(content.fields.introduction);
        expect(container.querySelector("[data-testid=section-blocks]").childElementCount).toBe(content.fields.blocks.length);
    });
});