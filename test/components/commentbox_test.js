import {renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/commentbox';

describe("Comment box", () => {
 	let commentBoxRendered;

	beforeEach(() => {
		commentBoxRendered = renderComponent(CommentBox);
	});
	describe("Structure", () => {
		it("should have a text area" , () => {
			expect(commentBoxRendered.find('textarea')).to.exist;		
		});

		it("should have a button", () => {		
			expect(commentBoxRendered.find('button')).to.exist;
		});

		it("should have the class comment-box", () => {
			expect(commentBoxRendered).to.have.class('comment-box');
		});
	});

	describe("Functional tests", () => {
		const userInput= "React is Awesome";
		
		beforeEach(()=> {
			commentBoxRendered.find('textarea').simulate('change',userInput);		
		});


		it("should display the text of the user input", () => {			
			expect(commentBoxRendered.find('textarea')).to.have.value(userInput);
		});

		it('should clear the textarea when the form is submitted', () => {
			commentBoxRendered.simulate('submit');
			expect(commentBoxRendered.find('textarea')).to.have.value("");
		});
	});	
})