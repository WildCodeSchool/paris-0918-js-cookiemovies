import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import './Footer.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

class FooterPage extends React.Component {
    render() {
        return (
           <div className="fixed-bottom" >
            <Footer color="elegant-color-dark" className="page-footer font-small pt-4 mt-4">
                <Container fluid className="text-md-center">
                    <Row>
                        <Col md="2">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold"><a href="#">Contact</a></h5>
                        </Col>
                        
                        <Col md="4">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold"><a href="#">Politique de confidentialité</a></h5>
                        </Col>
          
                        <Col md="2">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold"><a href="#">Mentions Légales</a></h5>
                        </Col>
                   
                        <Col md="4">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold"><a href="#">Conditions générale d'utilisations</a></h5>
                        </Col>
                    </Row>
                </Container>
                <hr />
                <div className="text-center py-3">
                    <ul className="list-unstyled list-inline mb-0">
                        <li className="list-inline-item">
                            <h5 className="mb-1">Abonnez-vous à notre Newletters :</h5>
                        </li>
                        <li className="list-inline-item"><a href="#" className="btn purple-gradient btn-sm btn-rounded ">Here!</a></li>
                    </ul>
                </div>
                <hr />
                <div className="text-center">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-fb mx-1" href="https://www.facebook.com/" target="blank"><i className="fa fa-facebook"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-tw mx-1" href="https://www.twitter.com/" target="blank"><i className="fa fa-twitter"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-gplus mx-1" href="https://www.plus.google.com/" target="blank"><i className="fa fa-google-plus"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-li mx-1" href="https://www.linkedin.com/" target="blank"><i className="fa fa-linkedin"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-dribbble mx-1" href="https://www.instagram.com/" target="blank"><i className="fa fa-instagram"> </i></a></li>
                    </ul>
                </div>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="#"> cookieMovies.com </a>
                    </Container>
                </div>
            </Footer>
            </div>
            
            
        );
    }
}

export default FooterPage;

