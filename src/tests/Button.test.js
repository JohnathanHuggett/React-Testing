import React from "react";
import ReactDOM from "react-dom";
import sinon from "sinon";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Button from "../components/Button/Button";

Enzyme.configure({ adapter: new Adapter() });

describe("<Button />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Button />, div);
    });

    it("should have one child", () => {
        const wrapper = shallow(<Button />);
        expect(wrapper.find("div").children()).toHaveLength(1);
    });

    it("renders with className `component-button wide` when passed the `wide` prop", () => {
        const wrapper = shallow(<Button wide />);
        expect(wrapper.find(".component-button")).toHaveLength(1);
        expect(wrapper.find(".wide")).toHaveLength(1);
    });

    it("renders with className `component-button wide` when passed the `orange` prop", () => {
        const wrapper = shallow(<Button orange />);
        expect(wrapper.find(".component-button")).toHaveLength(1);
        expect(wrapper.find(".orange")).toHaveLength(1);
    });

    it("renders the name as a string", () => {
        const wrapper = shallow(<Button name={`string`} />);

        expect(wrapper.find("button").props().children).toBe("string");
        // expect(wrapper.props().children.props.children).toBe(`string`);
    });

    it("testing clicks on the handleClick method", () => {
        const spy = sinon.spy();
        const button = shallow(<Button clickHandler={spy} />);
        button.find("button").simulate("click");
        expect(spy.calledOnce).toBe(true);
    });
});
//.props().children.props.children).toBe(`string`);

// .find("button").prop()
