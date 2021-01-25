import React from "react";
import Picture from 'react-picture-webp';
import {Layer_2, Layer_3, Layer_4} from '../../const';

export const slider1 = () => (
  <div className="how-works__item">
    <Picture {...Layer_2} />
    <a className="how-works__link" href="#">step 1</a>
    <h3 className="how-works__subtitle">Sed leo enim, <br/> condimentum</h3>
    <p className="how-works__text">Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.</p>
  </div>
)

export const slider2 = () => (
  <div className="how-works__item">
    <Picture {...Layer_3} />
    <a className="how-works__link" href="#">step 2</a>
    <h3 className="how-works__subtitle">Morbi velit risus</h3>
    <p className="how-works__text">Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est.</p>
  </div>
)

export const slider3 = () => (
  <div className="how-works__item">
    <Picture {...Layer_4} />
    <a className="how-works__link" href="#">step 3</a>
    <h3 className="how-works__subtitle">Sed leo enim, <br/> condimentum</h3>
    <p className="how-works__text">Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.</p>
  </div>
)