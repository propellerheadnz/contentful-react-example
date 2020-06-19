import React from "react";

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router } from "react-router-dom";

import content from "../../../data/article";
import { Article } from "./index";

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

describe("Article component", () => {
    it("should render summary view", () => {
        act(() => {
            render(
                <Router>
                    <Article content={content} />
                </Router>,
                container
            );
        });

        expect(container.querySelector("div.MuiCardContent-root h3").textContent).toBe(content.fields.title);
        expect(container.querySelector("div.MuiCardContent-root p").textContent).toBe(content.fields.pullQuote);
        expect(container.querySelector("div.MuiCardActions-root a").href).toContain(`/article/${content.fields.slug}`);
    });

    it("should render detail view", () => {
        act(() => {
            render(
                <Router>
                    <Article content={content} detail={true} />
                </Router>,
                container
            );
        });

        expect(container.querySelector("div.MuiBox-root h1").textContent).toBe(content.fields.title);
        expect(container.querySelector("[data-testid=pullQuote]").textContent).toBe(content.fields.pullQuote);
        expect(container.querySelector("div.MuiBox-root a").href).toContain(`/profile/${content.fields.author.fields.slug}`);
        expect(container.querySelector("[data-testid=author]").textContent).toContain(content.fields.author.fields.name);
        expect(container.querySelector("div p").textContent).toBe(content.fields.body);
    });
});
