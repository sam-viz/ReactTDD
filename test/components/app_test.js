import { renderComponent, expect} from "../test_helper";

import App from "../../src/components/app"; 

describe("App main component", () => {
    let appComponent;

    beforeEach(()=> {
        appComponent=renderComponent(App);
    });

    it("should contain a container css class name", () => {
        expect(appComponent).to.have.class("container");
    });

});