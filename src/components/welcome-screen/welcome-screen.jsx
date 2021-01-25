import React, {Fragment, PureComponent} from "react";
import Slider from "react-slick";
import {slider1, slider2, slider3} from "../slider-screen/slider-screen.jsx";
import {Link} from "react-scroll";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1
};

class WelcomeScreen extends PureComponent {
  constructor() {
    super();
    this.state = {
      transform: 1,
      apiKey: '20013916-cbd06c727440e873a986e92b6',
      images: [],
      tags: [`sport`, `Activity`, `Wellnes`, `Health`, `Extreme Sports`, `Expeditions`, `games`, `Culture`, `Education`, 'Relaxation', `Travelling`]
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));

    const tag = this.state.tags[Math.floor(Math.random() * this.state.tags.length)]; 
    document.querySelector(`.active__text3`).value = tag;
    this.onButtonSubmit();
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(evt) {
    const scrollTop = evt.target.scrollingElement.scrollTop;
    const itemTranslate = Math.min(0, scrollTop/3 - 200);

    this.setState({
      transform: itemTranslate
    });
  }

  async onButtonSubmit(evt) {
    let text;

    if (evt === undefined) {
      text = document.querySelector(`.active__text3`).value;
    } else {
      evt.preventDefault();
      text = evt.target.querySelector(`.active__text3`).value;
    }

    const URL = await fetch(`https://pixabay.com/api/?key=${this.state.apiKey}&q=${text}&per_page=7&min_width=300&orientation=horizontal`);
    const data = await URL.json();
    document.querySelector(`.active__text3`).value = ``;
    this.setState({
        images: data.hits
    });
  }

  render() {
    return (
      <Fragment>
        <header className="page-header" id="page-header">
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
            <Link className="page-header__link" to="partner" spy={true} smooth={true} offset={-70} duration={500}>Find your holiday partner</Link>
          </div>
        </header>
        <main className="page-main">
          <section className="how-works">
            <h2 className="how-works__title">How Urlaubsglück works?</h2>
            <div className="how-works__list">
            <Slider {...settings}>
              {slider1()}
              {slider2()}
              {slider3()}
            </Slider>
            <Slider {...settings}>
              {slider2()}
              {slider3()}
              {slider1()}
            </Slider>
            <Slider {...settings}>
              {slider3()}
              {slider1()}
              {slider2()}
            </Slider>
            </div>
          </section>
          <section className="partner" id="partner">
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
              {this.state.images.map((elem, i) => (
                <li key={i} className="active__item">
                  <a className="active__link" href={elem.largeImageURL} target="_blank">
                    <div className="active__img"
                     style={{background: `url(${elem.largeImageURL})`}}
                    >
                    </div>
                    <p className="active__text">{elem.tags}</p>
                  </a>
                </li>
              ))}
            </ul>
            <h2 className="active__subtitle">Discover holiday activity ideas</h2>
            <p className="active__text2">Hi! What are your holiday interests?</p>
            <form onSubmit={this.onButtonSubmit.bind(this)} className="active__form">
              <input className="active__text3" type="text" placeholder="Enter your interests"/>
              <input className="active__button" type="submit" value="Search partners"/>
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
        <Link 
          className="scroll" 
          style={{opacity: this.state.transform ? 0 : 1}}
          to="page-header" 
          spy={true} 
          smooth={true} 
          offset={0} 
          duration={500}
        >
          <svg className="scroll--top" width="40" height="40">
            <use xlinkHref="img/svg/sprite.svg#scrollTop"></use>
          </svg>
        </Link>
      </Fragment>
    )
  }
} 

export default WelcomeScreen;