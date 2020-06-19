import React from 'react';

import { render, unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils";
import { MemoryRouter } from 'react-router-dom';

import * as AppContext from '../../api/index';
import { Header } from './Header';

let container;
const mockFn = jest.fn();
//1. unit under test
describe('CoP website', function() {
	//2. scenario
	describe('Header Component', function() {
		beforeEach(() => {
			// setup a DOM element as a render target
			container = document.createElement("div");
			// container *must* be attached to document so events work correctly.
			document.body.appendChild(container);
			const stores = {
				contentStore: {
					useMenu: () => mockFn,
					useContent: () => mockFn,
					useFooter: () => mockFn,
				},
			};
			jest
			.spyOn(AppContext, 'useStore')
			.mockImplementation(() => stores);
		});
		//3. expectation
		it('"App" component renders without crashing', () => {
			act(() => {
				render(
					<MemoryRouter>
						<Header />
					</MemoryRouter>
					, container);
			});
			expect(container.querySelector("[data-testid='menu-home']").getAttribute('href')).toBe("/");
		});
		
		afterEach(() => {
			// cleanup on exiting
			unmountComponentAtNode(container);
			container.remove();
			container = null;
		});
	});
});
