import { shallow } from "enzyme";
import React from "react";
import Home from "../Home";

describe("Pages", () => {
  describe("Home", () => {
    it("should render", () => {
      const wrapper = shallow(<Home />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
