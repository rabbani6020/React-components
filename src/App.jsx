import React, { Component } from 'react';
import Profile from './components/profile';
import { profileData, GalleryData } from './data';
import GalleryBlock from './components/gallery/Gallery';
import axios from 'axios';
import Counter from './components/counter/Counter';

class App extends Component {
    state = {
        gallery: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/photos`)
            .then(res => {
                const gallery = res.data;
                this.setState({ gallery });
            })
    }

    render() {

        return (
            <div>
                <div className="py-5">
                    <div className="container">
                        <div className="row gutter-30">
                            {profileData.map((items, index) => (
                                <div className="col-lg-4" key={index}>
                                    <Profile
                                        profileInfo={items}
                                    />
                                </div>
                            ))}

                            {/* 2nd way */}
                            {/* <div className="col-lg-4">
                            <Profile profileInfo={faceData(1)}/>
                                </div>
                                <div className="col-lg-4">
                                    <Profile profileInfo={faceData(2)}/>
                                </div>
                                <div className="col-lg-4">
                                    <Profile profileInfo={faceData(4)}/>
                                </div>
                                <div className="col-lg-4">
                                    <Profile profileInfo={faceData(3)}/>
                                </div> */}
                        </div>
                    </div>
                </div>
                <div className="py-5">
                    <div className="container">
                        <div className="row gutter-30">
                            {GalleryData.map((items, index) => (
                                <div className="col-lg-4" key={index}>
                                    <GalleryBlock img={items.url} title={items.title} desc={items.title} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <Counter />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
