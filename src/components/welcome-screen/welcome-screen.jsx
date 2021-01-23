import React, {Fragment} from "react";
import Picture from 'react-picture-webp';
import {Layer_2, Layer_3, Layer_4, Layer_10, Layer_11, Layer_12, Layer_13, Layer_14, Layer_15, Layer_16} from '../../const';

const WelcomeScreen = () => (
  <Fragment>
    <header className="page-header">
      <div className="page-header__wrapper">
        <nav className="main-nav">
          <p className="main-nav__logo">URLAUBSGLÜCK</p>
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <a className="main-nav__link" href="#">Log in</a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="#">Sign up</a>
            </li>
          </ul>
        </nav>
        <h1 className="page-header__title">Share your holiday dreams</h1>
        <p className="page-header__text">And find the perfect partner to fullfill it</p>
        <a className="page-header__link" href="#">Find your holiday partner</a>
      </div>
    </header>
    <main className="page-main">
      <section className="how-works">
        <h2 className="how-works__title">How Urlaubsglück works?</h2>
        <div className="how-works__list">
          <div className="how-works__item">
            <Picture {...Layer_2} />
            <div className="how-works__btns">
              <button className="how-works__btn">
                <svg className="how-works__arrow how-works__arrow--left">
                  <use xlinkHref="img/svg/sprite.svg#arrow"></use>
                </svg>
              </button>
              <button className="how-works__btn">
                <svg className="how-works__arrow how-works__arrow--right">
                  <use xlinkHref="img/svg/sprite.svg#arrow"></use>
                </svg>
              </button>
            </div>
            <a className="how-works__link" href="#">step 1</a>
            <h3 className="how-works__subtitle">Sed leo enim, <br/> condimentum</h3>
            <p className="how-works__text">Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.</p>
          </div>
          <div className="how-works__item">
            <Picture {...Layer_3} />
            <div className="how-works__btns how-works__btns--middle">
              <button className="how-works__btn">
                <svg className="how-works__arrow how-works__arrow--left">
                  <use xlinkHref="img/svg/sprite.svg#arrow"></use>
                </svg>
              </button>
              <button className="how-works__btn">
                <svg className="how-works__arrow how-works__arrow--right">
                  <use xlinkHref="img/svg/sprite.svg#arrow"></use>
                </svg>
              </button>
            </div>
            <a className="how-works__link" href="#">step 2</a>
            <h3 className="how-works__subtitle">Morbi velit risus</h3>
            <p className="how-works__text">Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est.</p>
          </div>
          <div className="how-works__item">
            <Picture {...Layer_4} />
            <div className="how-works__btns">
              <button className="how-works__btn" aria-label="switch">
                <svg className="how-works__arrow how-works__arrow--left">
                  <use xlinkHref="img/svg/sprite.svg#arrow"></use>
                </svg>
              </button>
              <button className="how-works__btn" aria-label="switch">
                <svg className="how-works__arrow how-works__arrow--right">
                  <use xlinkHref="img/svg/sprite.svg#arrow"></use>
                </svg>
              </button>
            </div>
            <a className="how-works__link" href="#">step 3</a>
            <h3 className="how-works__subtitle">Sed leo enim, <br/> condimentum</h3>
            <p className="how-works__text">Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.</p>
          </div>
        </div>
      </section>
      <section className="partner">
        <h2 className="partner__title">Meet a partner for your best holiday</h2>
        <ul className="partner__list">
          <li className="partner__item">
            <a className="partner__link" href="#">
              <img className="partner__img" src="img/mobile/Layer_6@1x.jpg" srcSet="img/mobile/Layer_6@2x.jpg 2x" alt="photo"/>
              <p className="partner__author">Bradley Hunter</p>
              <div className="partner__before"></div>
              <p className="partner__text">Based in Chicago. I love playing tennis and loud music.</p>
            </a>
          </li>
          <li className="partner__item">
            <a className="partner__link" href="#">
              <img className="partner__img" src="img/mobile/Layer_8@1x.jpg" srcSet="img/mobile/Layer_8@2x.jpg 2x" alt="photo"/>
              <p className="partner__author">Lucas Marsha</p>
              <div className="partner__before"></div>
              <p className="partner__text">I get my inspiration from nature and objects around me. I have a passion to colours, typography and skateboards.</p>
            </a>
          </li>
          <li className="partner__item">
            <a className="partner__link" href="#">
              <img className="partner__img" src="img/mobile/Layer_7@1x.jpg" srcSet="img/mobile/Layer_7@2x.jpg 2x" alt="photo"/>
              <p className="partner__author">Heather Walker</p>
              <div className="partner__before"></div>
              <p className="partner__text">I'm a happy person that loves cats and climbing on mountains.</p>
            </a>
          </li>
          <li className="partner__item">
            <a className="partner__link" href="#">
              <img className="partner__img" src="img/mobile/Layer_9@1x.jpg" srcSet="img/mobile/Layer_9@2x.jpg 2x" alt="photo"/>
              <p className="partner__author">Bradley Hunter</p>
              <div className="partner__before"></div>
              <p className="partner__text">Based in Chicago. I love playing tennis and loud music.</p>
            </a>
          </li>
        </ul>
        <a className="partner__btn" href="#">See other partners</a>
      </section>
      <section className="active">
        <h2 className="active__title">Discover holiday activity ideas</h2>
        <ul className="active__list">
          <li className="active__item">
            <a className="active__link" href="#">
              <Picture {...Layer_10} />
              <p className="active__text">Sport and Activity</p>
            </a>
          </li>
          <li className="active__item">
            <a className="active__link" href="#">
              <Picture {...Layer_11} />
              <p className="active__text">Wellnes and Health</p>
            </a>
          </li>
          <li className="active__item">
            <a className="active__link" href="#">
              <Picture {...Layer_12} />
              <p className="active__text">Extreme Sports and Expeditions</p>
            </a>
          </li>
          <li className="active__item">
            <a className="active__link" href="#">
              <Picture {...Layer_13} />
              <p className="active__text">Games</p>
            </a>
          </li>
          <li className="active__item">
            <a className="active__link" href="#">
              <Picture {...Layer_14} />
              <p className="active__text">Culture and Education</p>
            </a>
          </li>
          <li className="active__item">
            <a className="active__link" href="#">
              <Picture {...Layer_15} />
              <p className="active__text">Relaxation</p>
            </a>
          </li>
          <li className="active__item">
            <a className="active__link" href="#">
              <Picture {...Layer_16} />
              <p className="active__text">Travelling</p>
            </a>
          </li>
        </ul>
        <h2 className="active__subtitle">Discover holiday activity ideas</h2>
        <p className="active__text2">Hi! What are your holiday interests?</p>
        <form className="active__form">
          <input className="active__text3" type="text" placeholder="Enter your interests"/>
          <input className="active__button" type="button" value="Search partners"/>
        </form>
      </section>
      <div className="page-main__br"></div>
    </main>
    <footer className="page-footer">
      <ul className="page-footer__list">
        <li className="page-footer__item">URLAUBSGLÜCK</li>
        <li className="page-footer__item">
          Company
          <ul className="page-footer__list2">
            <li className="page-footer__item2">
              <a href="#">About</a>
            </li>
            <li className="page-footer__item2">
              <a href="#">Contacts</a>
            </li>
            <li className="page-footer__item2">
              <a href="#">Press</a>
            </li>
            <li className="page-footer__item2">
              <a href="#">Blog</a>
            </li>
          </ul>
        </li>
        <li className="page-footer__item">Partners</li>
        <li className="page-footer__item">
          Designed by
          <img className="page-footer__img" src="img/mobile/Vector_Smart_Object@1x.jpg" srcSet="img/mobile/Vector_Smart_Object@2x.jpg 2x" alt="Logo"/>
        </li>
      </ul>
    </footer>
  </Fragment>
);

export default WelcomeScreen;