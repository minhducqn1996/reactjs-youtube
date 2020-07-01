import React from 'react';

class NewDetail extends React.Component {
    render() {
        return (
            <div>
                <header className="masthead tintuc">
                    <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-12 my-auto">
                        <div className="header-content mx-auto">
                            <h1 className="mb-5">Trang chi tiết tin</h1>
                        </div>
                        </div>
                    </div>
                    </div>
                </header>
                {/* begin tintuc */}
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                    <img src="http://placehold.it/1900x700" className="img-fluid" alt="App for iphone" />
                    <h1 className="display-3">Fluid jumbo heading</h1>
                    <p className="lead">Jumbo helper text</p>
                    <hr className="my-2" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nemo cumque architecto tempora eaque laboriosam expedita dicta veniam porro, eum, esse non rerum dolorem, temporibus ipsam ipsum quam ut est.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nemo cumque architecto tempora eaque laboriosam expedita dicta veniam porro, eum, esse non rerum dolorem, temporibus ipsam ipsum quam ut est.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nemo cumque architecto tempora eaque laboriosam expedita dicta veniam porro, eum, esse non rerum dolorem, temporibus ipsam ipsum quam ut est.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nemo cumque architecto tempora eaque laboriosam expedita dicta veniam porro, eum, esse non rerum dolorem, temporibus ipsam ipsum quam ut est.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nemo cumque architecto tempora eaque laboriosam expedita dicta veniam porro, eum, esse non rerum dolorem, temporibus ipsam ipsum quam ut est.</p>
                    </div>
                    <div className="container">
                    <h4 className="card-title text-center">Tin liên quan</h4>
                    <div className="row">
                        <div className="col-12">
                        <div className="card-deck">
                            <div className="card">
                            <a href="chitiet.html"><img className="card-img-top" src="http://placehold.it/500x300" alt="App for iphone" /></a>
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                            </div>
                            <div className="card">
                            <a href="chitiet.html"><img className="card-img-top" src="http://placehold.it/500x300" alt="App for iphone" /></a>
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                            </div>
                            <div className="card">
                            <a href="chitiet.html"><img className="card-img-top" src="http://placehold.it/500x300" alt="App for iphone" /></a>
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                            </div>
                            <div className="card">
                            <a href="chitiet.html"><img className="card-img-top" src="http://placehold.it/500x300" alt="App for iphone" /></a>
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewDetail;