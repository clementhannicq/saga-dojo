import { shallow } from "enzyme";
import React from "react";
import LoginForm from "../LoginForm";

describe("Components", () => {
  describe("LoginForm", () => {
    it("should render", () => {
      const wrapper = shallow(<LoginForm />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
