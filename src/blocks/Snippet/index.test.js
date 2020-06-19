import React from "react";

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import content from "../../../data/snippet";
import { Snippet } from "./index";


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

describe("Snippet component", () => {
    it("should render left and right layout", () => {
        act(() => {
            render(
                <Snippet content={content} />,
                container
            );
        });

        expect(container.querySelector("div.MuiGrid-root h2").textContent).toBe(content.fields.title)
        expect(container.querySelector("div p").textContent).toBe(content.fields.copy);
    });

    it("should render centred layout", () => {
        content.fields.layout = "Centred";
        act(() => {
            render(
                <Snippet content={content} />,
                container
            );
        });

        expect(container.querySelector("div.MuiBox-root h2").textContent).toBe(content.fields.title)
        expect(container.querySelector("div p").textContent).toBe(content.fields.copy);
    });

    it("should render columns layout", () => {
        content.fields.layout = "Columns"
        act(() => {
            render(
                <Snippet content={content} />,
                container
            );
        });

        expect(container.querySelector("div.MuiBox-root h2").textContent).toBe(content.fields.title)
        expect(container.querySelector("div p").textContent).toBe(content.fields.copy);
    });

})