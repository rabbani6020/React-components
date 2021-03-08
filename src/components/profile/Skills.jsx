import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <h4 className="skills__title">Skills :</h4>
                <ul className="skills__list">
                    {this.props.skillsInfo.map((items, index) => (
                        <li className="skills__item" key={index}>{items}</li>
                    ))}

                </ul>
            </div>
        );
    }
}

export default Skills;

