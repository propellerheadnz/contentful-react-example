import React from 'react';

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router } from 'react-router-dom';

import content from '../../../data/profile';
import { Profile } from "./index";

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

describe('Profile component', () => {
    it("should render summary view", () => {
        act(() => {
            render(
                <Router>
                    <Profile content={content} />
                </Router>,
                container
            );
        });

        expect(container.querySelector("div.MuiCardContent-root h3").textContent).toBe(content.fields.name);
        expect(container.querySelector("div.MuiCardContent-root h5").textContent).toBe(content.fields.title);
        expect(container.querySelector("div.MuiCardContent-root p").textContent).toBe(content.fields.summary);
        expect(container.querySelector("div.MuiCardActions-root a").href).toContain(`/profile/${content.fields.slug}`);
    });

    it("should render detail view", () => {
        act(() => {
            render(
                <Router>
                    <Profile content={content} detail={true} />
                </Router>,
                container
            );
        });

        expect(container.querySelector("div.MuiGrid-root h1").textContent).toBe(content.fields.name);
        expect(container.querySelector("div.MuiGrid-root h6").textContent).toBe(content.fields.title);
        expect(container.querySelector("div p").textContent).toBe(content.fields.bio);
    });
});