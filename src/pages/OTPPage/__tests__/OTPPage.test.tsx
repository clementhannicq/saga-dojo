import { shallow } from "enzyme";
import React from "react";
import OTPPage from "../OTPPage";

describe("Pages", () => {
  describe("OTPPage", () => {
    it("should render", () => {
      const wrapper = shallow(<OTPPage />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
