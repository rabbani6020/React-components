import React, { Component } from 'react';

import './gallery.scss';

class GalleryBlock extends Component {

    render() {
        return (
            <div className="gallery">
                <div className="gallery__thumbs">
                    <img src={this.props.img} alt="" className="gallery__img" />
                </div>
                <div className="gallery__content">
                    <h3 className="gallery__title">{this.props.title}</h3>
                    <p className="gallery__desc">{this.props.desc}</p>
                </div>
            </div>
        );
    }
}

export default GalleryBlock;