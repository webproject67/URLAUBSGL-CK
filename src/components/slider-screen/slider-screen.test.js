import React from "react";
import renderer from "react-test-renderer";
import SliderScreen from "./slider-screen";

it(`Render SliderScreen`, () => {
  const tree = renderer.create(<SliderScreen num={2}/>).toJSON();

  expect(tree).toMatchSnapshot();
});