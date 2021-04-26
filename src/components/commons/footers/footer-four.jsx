import React, {Component} from 'react';
import { Link} from 'react-router-dom';

import {SlideUpDown} from "../../../services/script"
import LogoImage from "../headers/common/logo"

class FooterFour extends Component {

    componentDidMount(){
        var contentwidth = window.innerWidth;
        if ((contentwidth) < 750) {
            SlideUpDown('footer-title');
        } else {
            var elems = document.querySelectorAll(".footer-title");
            [].forEach.call(elems, function(elemt) {
                let el = elemt.nextElementSibling;
                el.style = "display: block";
            });
        }
    }


    render () {

        return (
            <footer className="">
                <div className="white-layout">
                    <div className="container">
                        <section className="small-section">
                            <div className="row">
                                <div className="col-xl-6 offset-xl-3">
                      
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
     
                <div className="sub-footer dark-subfooter">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-md-6 col-sm-12">
                                <div className="footer-end">
                                    <p><i className="fa fa-copyright" aria-hidden="true"></i> 2018-20 Esports - Game
                                        powered by Esports</p>
                                </div>
                            </div>
       
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default FooterFour;