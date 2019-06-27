import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const PHOTO_SET = [
  {
    src: require('../images/travel/boat/boat1920.jpg'),
    // srcSet: [
    // ],
    sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 4.2,
    height: 3,
    key: '0',
    alt: 'Boat in the Caribbean sunset'
  },
  {
    src: require('../images/travel/market/market1920.jpg'),
    // srcSet: [
    // ],
    sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 5,
    height: 3,
    key: '1',
    alt: 'Mexican market'
  },
  {
    src: require('../images/travel/seascape/seascape1920.jpg'),
    // srcSet: [
    // ],
    sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 3,
    height: 4,
    key: '2',
    alt: 'Caribbean nights'
  },
  {
    src: require('../images/travel/tuk-tukdriver/tuk-tukdriver1920.jpg'),
    // srcSet: [
    // ],
    sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 3,
    height: 4,
    key: '3',
    alt: 'Bangkok tuk-tuk driver'
  },
  {
    src: require('../images/travel/kiliview/kiliview1920.jpg'),
    // srcSet: [
    // ],
    sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 4,
    height: 3,
    key: '4',
    alt: 'View of Uhuru peak, Kilimanjaro'
  },
]

class Travel extends Component {

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
      <Route path="/travel" render={() => (
        <div>
          <div className="gallery-container">
            <h2 className="gallery-heading">Travel</h2>
            <Gallery 
              photos={PHOTO_SET} 
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
            <Link to="/animals">
              <div className="animals">
                <h2>Animals</h2>
              </div>
            </Link>
            <Link to="/people">
              <div className="people">
                <h2>People</h2>
              </div>
            </Link>
          </div>
        </div>  
      )} />
    )
  }
}

export default Travel;