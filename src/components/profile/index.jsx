import React, { Component } from 'react';
import './index.scss';

import ProfileImg from './ProfileImg'
import Info from './Info';
import Skills from './Skills';
import Social from './Social';

class Profile extends Component {
    
    render() {

        const {img, name, designation, skills, socials} = this.props.profileInfo;
        return (
            <div className="profile">
                
                <ProfileImg img={img} />
                <div className="profile__content">
                    <Info name={name} designation={designation} />
                    <Skills skillsInfo={skills} />
                    <Social socialInfo={socials} />
                </div>
            </div>
        );
    }
}

export default Profile;

