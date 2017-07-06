import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe ("App Component Tests", () => {
	let appComponent;

	beforeEach(() => {
		appComponent=renderComponent(App);
	});

	it ("should have a comment box" , () => {		
		expect(appComponent.find(".comment-box")).to.exist;
	});

});