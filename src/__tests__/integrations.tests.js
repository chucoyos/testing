import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
	moxios.install();
	moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
		status: 200,
		response: [
			{
				name: 'fetched 1'
			},
			{
				name: 'fetched 2'
			},
			{
				name: 'fetched 3'
			}
		]
	});
});

afterEach(() => {
	moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
	// Attempt to render the entire app
	const wrapped = mount(
		<Root>
			<App />
		</Root>
	);

	// Find the 'fetchComments' button and click it
	wrapped.find('.fetch-comments').simulate('click');

	// Expect to find a list of comments

	// eslint-disable-next-line testing-library/await-async-utils
	moxios.wait(() => {
		wrapped.update();
		expect(wrapped.find('li').length).toEqual(3);
		done();
		wrapped.unmount();
	});
});
