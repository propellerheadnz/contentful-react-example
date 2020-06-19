import React from 'react';

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router } from 'react-router-dom';

import content from '../../../data/hero';
import { Hero } from './index';


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

describe('Hero component', () => {
    it("should render", () => {
        act(() => {
            render(
                <Router>
                    <Hero content={content} />
                </Router>,
                container
            );
        });

        expect(container.querySelector('[data-testid=title]').textContent).toBe("Propellerhead");
        expect(container.querySelector('[data-testid=headline]').textContent).toBe(content.fields.headline);
        expect(container.querySelector('[data-testid=copy]').textContent).toBe(content.fields.copy);
        expect(container.querySelector('[data-testid=heroImage]').src).toBe(`http:${content.fields.image.fields.file.url}`);
    });

});