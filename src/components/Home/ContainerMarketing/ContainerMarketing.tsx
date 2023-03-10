import React from "react";
import '../Carousel/Carousel.css'
import '../Home.css'
const ContainerMarketing = () => {
    return (
        <div className="container marketing">

            <div className="row">
                <div className="col-lg-4">
                    <img className="rounded-circle" src={require('../../../images/home/winter-tires-2861853_960_720.jpg')}
                          alt="Generic placeholder image" width="140" height="140"/>
                        <h2>Heading</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh
                            ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                            Praesent commodo cursus magna.</p>
                        <p><a className="btn btn-secondary" href="src/components#" role="button">View details &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" src={require('../../../images/home/engine-2770374_960_720.jpg')}
                         alt="Generic placeholder image" width="140" height="140"/>
                        <h2>Heading</h2>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
                            elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus
                            commodo, tortor mauris condimentum nibh.</p>
                        <p><a className="btn btn-secondary" href="src/components#" role="button">View details &raquo;</a></p>
                </div>

                <div className="col-lg-4">
                    <img className="rounded-circle" src={require('../../../images/home/vintage-car-852239_960_720.jpg')}
                         alt="Generic placeholder image" width="140" height="140"/>
                        <h2>Heading</h2>
                        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum
                            id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                            condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                        <p><a className="btn btn-secondary" href="src/components#" role="button">View details &raquo;</a></p>
                </div>
            </div>


            <hr className="featurette-divider"/>

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span>
                        </h2>
                        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula
                            porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <div className="col-md-5">
                        <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto"
                             src={require('../../../images/home/gjip.jpeg')} style={{width:500, height:500}}
                             alt="Generic placeholder image"/>
                    </div>
                </div>

                <hr className="featurette-divider"/>

                    <div className="row featurette">
                        <div className="col-md-7 order-md-2">
                            <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span>
                            </h2>
                            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula
                                porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl
                                consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                        </div>
                        <div className="col-md-5 order-md-1">
                            <img className="featurette-image img-fluid mx-auto"
                                 src={require('../../../images/home/mustang-gb483f438a_1920.jpg')} data-src="holder.js/500x500/auto"
                                 alt="Generic placeholder image"/>
                        </div>
                    </div>

                    <hr className="featurette-divider"/>

                        <div className="row featurette">
                            <div className="col-md-7">
                                <h2 className="featurette-heading">And lastly, this one. <span
                                    className="text-muted">Checkmate.</span></h2>
                                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
                                    ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque
                                    nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                            </div>
                            <div className="col-md-5">
                                <img className="featurette-image img-fluid mx-auto"
                                     src={require('../../../images/home/oldtimer-gdcb593d6e_1920.jpg')} data-src="holder.js/500x500/auto"
                                     alt="Generic placeholder image"/>
                            </div>
                        </div>



        </div>
    );
}

export default ContainerMarketing;