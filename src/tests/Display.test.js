import React from "react";
import ReactDOM from "react-dom";
import sinon from "sinon";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Display from "../components/Display/Display";

Enzyme.configure({ adapter: new Adapter() });

describe("<Display />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Display />, div);
    });

    it("should have one child", () => {
        const wrapper = shallow(<Display />);
        expect(wrapper.find("div").children()).toHaveLength(1);
    });

    // it("should have props.value", () => {
    //     const wrapper = shallow(<Display value="Success" />);
    //     expect(wrapper.prop("value")).toEqual("Success");
    // });

    it("renders the value as a string", () => {
        const component = shallow(<Display value={`string`} />);
        expect(component.props().children.props.children).toBe(`string`);
    });
});
