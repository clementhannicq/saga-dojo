import { shallow } from "enzyme";
import React from "react";
import LoginPage from "../LoginPage";

describe("Pages", () => {
  describe("LoginPage", () => {
    it("should render", () => {
      const wrapper = shallow(<LoginPage />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
