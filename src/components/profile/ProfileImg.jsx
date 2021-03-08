import React, { Component } from 'react';

class ProfileImg extends Component {
    render() {
        return (
            <div className="developer">
                <img className="img-fluid developer__img" src={this.props.img} alt="" />
            </div>
        );
    }
}

export default ProfileImg;