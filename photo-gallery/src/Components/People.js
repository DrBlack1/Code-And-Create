import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const PHOTO_SET = [
  
  {
    src: require('../images/people/judit/juditstairs1920.jpg'),
    // srcSet: [
    //   require('images/people/mel/pregnant320.jpg 320w'),
    //   '../images/people/mel/pregnant640.jpg 640w',
    //   '../images/people/mel/pregnant1180.jpg 1180w',
    //   '../images/people/mel/pregnant1920.jpg 1920w'
    // ],
    sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 3,
    height: 4.5,
    key: '6',
    alt: 'Pregnant woman'
  },
  {
    src: require('../images/people/mel/pregnant1920.jpg'),
    // srcSet: [
    //   require('images/people/mel/pregnant320.jpg 320w'),
    //   '../images/people/mel/pregnant640.jpg 640w',
    //   '../images/people/mel/pregnant1180.jpg 1180w',
    //   '../images/people/mel/pregnant1920.jpg 1920w'
    // ],
    sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 3,
    height: 4.5,
    key: '0',
    alt: 'Pregnant woman'
  },
  {
    src: require('../images/people/ellie/ellie1920.jpg'),
    // srcSet: [
    // 
    // ],
    // sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 3,
    height: 4.3,
    key: '1',
    alt: 'Model with striking background'
  },
  {
    src: require('../images/people/bee/bee1920.jpg'),
    // srcSet: [
    // 
    // ],
    // sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 3.5,
    height: 3,
    key: '2',
    alt: 'Model in motion blur'
  },
  {
    src: require('../images/people/couple/couple1920.jpg'),
    // srcSet: [
    // 
    // ],
    // sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 3,
    height: 3.5,
    key: '3',
    alt: 'Couple in a park'
  },
  {
    src: require('../images/people/jo/jo1920.jpg'),
    // srcSet: [
    // 
    // ],
    // sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 3,
    height: 4.5,
    key: '4',
    alt: 'Model Jo and autumn colours'
  },
  {
    src: require('../images/people/boyandcat/boyandcat1920.jpg'),
    // srcSet: [
    // 
    // ],
    // sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 3,
    height: 4,
    key: '5',
    alt: 'Boy and his cat'
  },
]

class People extends Component {

  //when the a gallery mounts disable scroll on body
  componentDidMount() {
    document.body.classList.remove('scroll');
    window.scrollTo(0, 0);
  }
  //when the a gallery unmounts enable scroll on body
  componentWillUnmount() {
    document.body.classList.add('scroll');
  }

  state = {
    currentImage: 0
  }

  openLightbox = (ev, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  } 
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  
  render() {
    return (
      <Route path="/people" render={() => (
        <div>
          <div className="gallery-container">
            <h2 className="gallery-heading">People</h2>
            <Gallery photos={PHOTO_SET}
            onClick={this.openLightbox}
            direction='row'
            />
            <Lightbox images={PHOTO_SET}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
            />
          </div>
          <div className="bottom-nav">
            <Link to="/travel">
              <div className="travel">
                <h2>Travel</h2>
              </div>
            </Link>
            <Link to="/animals">
              <div className="animals">
                <h2>Animals</h2>
              </div>
            </Link>
          </div>
        </div>  
      )} />
    )
  }
}

export default People;