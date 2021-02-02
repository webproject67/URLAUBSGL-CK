import React from "react";
import Picture from 'react-picture-webp';
import {Layer_2, Layer_3, Layer_4} from '../../const';
import PropTypes from "prop-types";

const imgs = [<Picture key={2} {...Layer_2 }/>, <Picture key={3} {...Layer_3 }/>, <Picture key={4} {...Layer_4 }/>]
const subtitles = [`Sed leo enim, condimentum`, `Morbi velit risus`, `Sed leo enim, condimentum`];
const texts = [`Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.`, `Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est.`, `Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.`];

const SliderScreen = (props) => {
  const {num} = props;

  return (
    <div className="how-works__item">
      {imgs[num - 2]}
      <a className="how-works__link" href="#">{`step ${num - 1}`}</a>
      <h3 className="how-works__subtitle">{subtitles[num - 2]}</h3>
      <p className="how-works__text">{texts[num - 2]}</p>
    </div>
  )
};

SliderScreen.propTypes = {
  num: PropTypes.number.isRequired
}

export default SliderScreen;