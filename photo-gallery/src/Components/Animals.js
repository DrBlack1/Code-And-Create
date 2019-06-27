import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const PHOTO_SET = [
  {
    src: require('../images/animals/coati/coati1920.jpg'),
    // srcSet: [
    // ],
    sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 3,
    height: 4,
    key: '0',
    alt: 'Coati climbing a palm tree'
  },
  {
    src: require('../images/animals/lizard/lizard1920.jpg'),
    // srcSet: [
    // 
    // ],
    // sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 3,
    height: 4.5,
    key: '1',
    alt: 'Sunbathing lizard'
  },
  {
    src: require('../images/animals/vulture/vulture1920.jpg'),
    // srcSet: [
    // 
    // ],
    // sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 3,
    height: 4,
    key: '2',
    alt: 'Staring vulture'
  },  
  {
    src: require('../images/animals/rhino/rhino1920.jpg'),
    // srcSet: [
    // 
    // ],
    // sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 4.5,
    height: 3,
    key: '3',
    alt: 'Grazing rhino in Woburn Park'
  },
  {
    src: require('../images/animals/caterpillar/caterpillar1920.jpg'),
    // srcSet: [
    // 
    // ],
    // sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 2,
    height: 1.5,
    key: '4',
    alt: 'Caterpillar'
  },
  {
    src: require('../images/animals/monkey/monkey1920.jpg'),
    // srcSet: [
    // 
    // ],
    // sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 2,
    height: 3,
    key: '5',
    alt: 'Squirrel monkey'
  },
  {
    src: require('../images/animals/rhino/rhino(2)1920.jpg'),
    // srcSet: [
    // 
    // ],
    // sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 2,
    height: 3,
    key: '6',
    alt: 'Resting rhino'
  },
  {
    src: require('../images/animals/kangaroo/kangaroo1920.jpg'),
    // srcSet: [
    // 
    // ],
    // sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 3,
    height: 2,
    key: '7',
    alt: 'Kangaroos'
  },
]

class Animals extends Component {

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
      <Route path="/animals" render={() => (
        <div>
          <div className="gallery-container">
            <h2 className="gallery-heading">Animals</h2>
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
            <Link to="/travel">
              <div className="travel">
                <h2>Travel</h2>
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

export default Animals;
