import React from "react";
import ReactDOM from "react-dom";
import sinon from "sinon";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<App />);
        // console.log(wrapper);
        expect(wrapper).toHaveLength(1);
    });

    it("has two children", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find("div").children()).toHaveLength(2);
    });

    it("should store total in state", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.state("total")).toEqual("0");
    });

    it("should store next in state", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.state("next")).toEqual(null);
    });

    it("should store operation in state", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.state("operation")).toEqual(null);
    });

    it("should have props on <Display/>", () => {
        const wrapper = shallow(<App value="Success" />);
        expect(wrapper.prop("value")).toEqual("Success");
    });
});
