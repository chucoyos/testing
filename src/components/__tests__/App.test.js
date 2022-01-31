import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';

it('shows a comment box', () => {
	const app = shallow(<App />);
	expect(app.find(CommentBox).length).toEqual(1);
});
