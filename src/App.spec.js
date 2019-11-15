import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
//import { shallow } from "enzyme";
import { mount } from "enzyme";
import React from "react";
import App from "./App";

configure({ adapter: new Adapter() });

describe("Markdown App Enzyme testing", () => {
  it("It should have an AreaText element", () => {
    expect(
      mount(<App />)
        .find("div")
        .exists()
    ).toBe(true);
    //expect(true).toBe(true)
  });
});
