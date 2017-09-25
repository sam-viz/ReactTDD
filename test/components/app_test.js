import { renderComponent, expect} from "../test_helper";

import App from "../../src/components/app"; 

describe("App main component", () => {

    let appComponent;

    describe("App main component without comment" , () => {

        beforeEach(()=> {
            appComponent=renderComponent(App);
        });

        it("should contain a container css class name", () => {
            expect(appComponent).to.have.class("container");
        });
    
        it("should contain a comment box component", () => {
            expect(appComponent.find(".comment-box")).to.exist;
        });


        
        it("should not contain a comment list component", () => {
            expect(appComponent.find(".comment-list")).not.to.exist;
        });
    });

    describe("App main component with some comment", () => {
        const props= { 
            comments: [
                {
                    author: "Jaques",
                    body : "This is a comment from Jaques"
                },
                {
                    author: "Clémentine",
                    body : "This is a comment from Clémentine"
                },
                {
                    author: "Julien",
                    body: "This is a comment from Julien"
                }
            ]
        };
       
       
        beforeEach(()=> {
            appComponent=renderComponent(App,null, props);
        });

        it("should contain a comment list component", () => {
            expect(appComponent.find(".comment-list")).to.exist;
        });

    });

});