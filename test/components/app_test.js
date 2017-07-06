import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe ("App Component Tests", () => {

	it ("should contain a div" , () => {
		const renderedApp= renderComponent(App);		
	});

});