import React, {Component} from 'react';

class Social extends Component {
    render() {
        return (
            <div className="social">
                <h4 className="social__title">Social Links :</h4>
                <ul className="social__list">
                    {this.props.socialInfo.map((items, index) => (
                        <li className="social__item" key={index}>
                            <a href="#" className="social__link">
                                {items.name}
                            </a>
                        </li>
                    ))}

                </ul>
            </div>
        );
    }
}

export default Social;
