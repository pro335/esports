import React, { Component } from 'react';
import {Helmet} from 'react-helmet'
import '../commons/index.scss';
import Slider from 'react-slick';
import HeaderFive from "../commons/headers/header-five"
import FooterFour from "../commons/footers/footer-four";
import ThemeSettings from "../commons/theme-settings"


class Watch extends Component {

    // componentDidMount() {
    //     document.getElementById("color").setAttribute("href", `/assets/css/color4.css` );
    // }

    render(){
        return (
            <div>
                <Helmet>
                    <title> ESports </title>
                </Helmet>
                <HeaderFive logoName={'logo.png'} />
                <section className="p-0 small-slider section-t-space">
                    <Slider className="slide-1 home-slider">
                        <div>
                            <div className="home home10 text-left p-left">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    <h4>welcome to ESPORTS</h4>
                                                    <h1>CS - GO</h1>
                                                    <a href="#" className="btn btn-outline btn-classic">Play Now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="home home9 text-left p-left">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    <h4>every time</h4>
                                                    <h1>DOTA - 2</h1>
                                                    <a href="#" className="btn btn-outline btn-classic">Play Now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="home home11 text-left p-left">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    <h4>welcome to ESPORTS</h4>
                                                    <h1>League of Legends</h1>
                                                    <a href="#" className="btn btn-outline btn-classic">Play Now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>         
                    </Slider>
                </section>
                {/*Service Layout*/}
                <div className="rule">
                    <section className="service section-b-space border-section border-top-0">
                        <div className="row partition4">
                            <div className="col-lg-4 col-md-6 service-block1">
                                <img src={'/assets/images/cup.jpg'} />
                                <h4>WINNER</h4>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                            </div>
                            <div className="col-lg-4 col-md-6 service-block1">
                                <img src={'/assets/images/whisle.png'} />
                                <h4>NO CHEATING</h4>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                            </div>
                            <div className="col-lg-4 col-md-6 service-block1">
                                <img src={'/assets/images/gift.png'} />
                                <h4>GET YOUR REWARD</h4>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                            </div>
                         </div>
                    </section>
                </div>
                <div className="intro">
                    <div className = "container">
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue semper mi, gravida sodales in. Vitae viverra quam malesuada habitasse ut. Neque a, venenatis sodales nec cursus dolor etiam mi. Gravida amet et eu cursus. Cras pretium aliquam lacus amet vestibulum tellus.

                                Tincidunt hendrerit morbi ultrices urna habitasse elementum commodo. Sem nunc, purus tellus quis sit. Tellus mauris, nec id at sed eros, turpis. Metus varius ullamcorper quis interdum iaculis sed aenean commodo velit. Mattis at ornare eget arcu. Ut gravida viverra eget donec tempor lacus leo, adipiscing. Nec viverra massa in odio sed id porttitor imperdiet. Amet eu massa diam hendrerit pulvinar. Viverra enim, leo iaculis risus egestas mi. Tortor pretium sit mauris et. Quis suspendisse est feugiat felis eget. In donec cursus nunc magna sapien. Risus velit non ac a. Tellus phasellus libero duis risus consectetur viverra leo imperdiet in. Tincidunt diam sodales posuere nunc risus, metus, vitae turpis.

                                Quis interdum tincidunt facilisi mattis. Malesuada imperdiet sed ultricies facilisis vulputate eget praesent nibh id. Suspendisse ac dignissim posuere aliquam lectus eu. Blandit fames dolor ac enim sed duis lectus dolor imperdiet. Eu adipiscing velit etiam consequat etiam egestas nulla.

                                Volutpat faucibus pellentesque euismod adipiscing imperdiet tincidunt tellus elementum. Semper cras id fermentum elit vitae placerat. Ut egestas accumsan, sit eu sed pellentesque ultricies. Faucibus a morbi lobortis pulvinar elementum urna, iaculis dolor integer. Eget erat euismod feugiat adipiscing et dolor eget sapien ac.
                                Mi netus ut fringilla lectus at. Ultrices amet at sit nibh nisi, odio vel nisi. Pellentesque porta et mattis semper id. Mi nascetur diam rutrum at curabitur volutpat porta gravida pellentesque. Non auctor fringilla magna etiam dictum vulputate in vestibulum, pellentesque. Maecenas venenatis enim risus accumsan auctor mauris. Suspendisse varius sit odio imperdiet. Et pharetra sit odio phasellus viverra. Fringilla tempor ut curabitur lectus magna condimentum nunc sit cras. Sed non eu facilisis in pharetra. Tortor sed massa, interdum elementum, massa a gravida scelerisque morbi. Lectus ultrices ac amet diam et sed nisl leo. Elementum senectus amet ultrices tristique tincidunt ante pellentesque est tempus. Volutpat porttitor vestibulum sagittis tempus, tempor sit nunc.
                                Ac leo duis fermentum cursus. Fringilla quis pharetra congue morbi quis ornare sagittis. Volutpat, vel in netus et quisque at dignissim purus nec. Sed laoreet volutpat adipiscing ut egestas. Elementum consequat risus eu urna egestas amet, morbi id. Sit nibh in pharetra fermentum. Bibendum ullamcorper morbi sapien, rhoncus, nunc laoreet phasellus volutpat. Nisi, condimentum ut quam viverra sed velit, mauris eu. Amet, faucibus suscipit scelerisque ipsum id imperdiet id in. Pellentesque convallis ac nunc in dolor placerat viverra pretium ac. Viverra diam sit nec adipiscing integer elit arcu morbi euismod. Urna quam sed metus in purus tristique cursus. Nisl, risus faucibus nec sagittis odio viverra eget tincidunt.

                                Diam pretium ac ullamcorper morbi fermentum, ac et faucibus amet. Tristique eu fringilla purus aliquet lacinia quisque vulputate amet. Fringilla metus sem ultrices sit volutpat enim. Leo accumsan ac lorem nisl. Facilisis purus tincidunt enim eget sit. Nibh pellentesque vivamus gravida ac vitae egestas. Sit suspendisse sit turpis tortor. Felis varius imperdiet ut bibendum vitae ut varius in consectetur. Risus faucibus lorem maecenas consectetur et feugiat ac.

                                Nisi duis faucibus orci ultrices arcu malesuada sed. Urna, lorem viverra dictum elementum nam. Potenti eget semper aenean volutpat id. Eget aliquam, viverra nibh turpis in ac commodo. Scelerisque erat netus suspendisse tellus viverra pharetra morbi ullamcorper. Duis id sodales ornare eu feugiat. Volutpat lacus sed ornare et ut habitasse
                            </span>
                        </div>
                </div>
                <ThemeSettings/>

                <FooterFour logoName={'layout4/footerlogo.png'} />

            </div>
        )
    }
}


export default Watch;