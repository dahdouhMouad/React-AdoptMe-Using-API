import React from "react";

class Carousel extends React.Component{
    state = {
        photos : [],
        active :0
    };
// React static Methode to get image with size...
static getDerivedStateFromProps({media}){
    let photos = ['http://placecorgi.com/600/600'];

    if (media.length){
        photos = media.map(( {large} )=> large );
    }

    return { photos };

}

handleIndexClick = event => {
    this.setState({
        // get the index in div className="carousel-smaller"
        // it has to be a number so we use parseInt("5",10) or +
        active : +event.target.dataset.index
    });
};

render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              key={photo}
              onClick={this.handleIndexClick} 
              data-index ={index} 
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;


