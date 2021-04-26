import React, { Component } from 'react';
import { Link, NavLink} from 'react-router-dom';
import { IntlActions } from 'react-redux-multilingual'
import Pace from 'react-pace-progress'

// Import custom components
import store from '../../../store';
import NavBar from "./common/navbar";
import SideBar from "./common/sidebar";
import TopBar from "./common/topbar";
import {connect} from "react-redux";
import TopBarDark from "./common/topbar-dark";
import LogoImage from "./common/logo";
import Modal from 'react-responsive-modal';

class HeaderFive extends Component {

    constructor(props){
        super(props)

        this.state = {
			isLoading:false,
			open: false,
			registerOpen:false,
            stock: 'InStock',
            quantity: 1,
            image: ''
        }
    }

    onOpenModal = () => {
        this.setState({ open: true });
	};
	onCloseModal = () => {
        this.setState({ open: false });
	};
	onCloseRegisterModal = () =>{
		this.setState({registerOpen:false});
	}
	onRegisterOpenModal = () =>{
		this.setState({registerOpen:true});
	}
    /*=====================
         Pre loader
         ==========================*/
    // componentDidMount() {
    //     setTimeout(function() {
    //         document.querySelector(".loader-wrapper").style = "display: none";
    //     }, 2000);
    // }

    componentWillMount(){
        window.addEventListener('scroll', this.handleScroll);
	}
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        if (number >= 300) {
            if (window.innerWidth < 576) {
                document.getElementById("sticky").classList.remove('fixed');
            }else
                document.getElementById("sticky").classList.add('fixed');
        } else {
            document.getElementById("sticky").classList.remove('fixed');
        }
    }

    changeLanguage(lang) {
        store.dispatch(IntlActions.setLocale(lang))
	}

    openNav() {
        var openmyslide = document.getElementById("mySidenav");
        if(openmyslide){
            openmyslide.classList.add('open-side')
		}
    }
    openSearch() {
        document.getElementById("search-overlay").style.display = "block";
    }

    closeSearch() {
        document.getElementById("search-overlay").style.display = "none";
    }

	load = ()=>{
		this.setState({isLoading: true});
		fetch().then(()=>{
			// deal with data fetched
			this.setState({isLoading: false})
		})
	};
	
	render() {
		const {open,registerOpen} = this.state;
		return (
			<div>
				<header id="sticky" className="sticky">
					{this.state.isLoading ? <Pace color="#27ae60"/> : null}
					<div className="mobile-fix-option"></div>
					{/*Top Header Component*/}
					<div className="container">
						<div className="row">
							<div className="col-sm-12">
								<div className="main-menu">
									<div className="menu-left category-nav-right">
										<div className="brand-logo">
                                            <LogoImage logo={this.props.logoName} />
										</div>
										<div className="navbar">						
											
										</div>
										<NavBar/>
									</div>
									<div className="menu-right pull-right">
										{/*Top Navigation Bar Component*/}
										

										<div>
											<div className="icon-nav">
												<ul>
													<li className="onhover-div mobile-search">
														<div><img src={`${process.env.PUBLIC_URL}/assets/images/icon/search.png`} onClick={this.openSearch} className="img-fluid" alt="" />
															<i className="fa fa-search" onClick={this.openSearch}></i></div>
													</li>
													<li className="onhover-div mobile-setting">
														<div><img src={`${process.env.PUBLIC_URL}/assets/images/icon/setting.png`} className="img-fluid" alt="" />
															<i className="fa fa-cog"></i></div>
														<div className="show-div setting">
															<h6>language</h6>
															<ul>
																<li><a href={null} onClick={() => this.changeLanguage('en')}>English</a> </li>
																<li><a href={null} onClick={() => this.changeLanguage('fn')}>French</a> </li>
															</ul>												
														</div>
													</li>
													{/* <button className="btn  btn-tournamant" style={{marginRight:"10px"}} onClick={this.onOpenModal}><i class="fa fa-user"></i> LOGIN </button>

													<button className="btn btn-register" style={{borderRadius:"50px"}} onClick={this.onRegisterOpenModal}><i class="fa fa-users"></i> REGISTER </button> */}
													{/*Header Cart Component */}
													
												</ul>
											</div>
											<div className="col-lg-6 text-right">
												<ul className="header-dropdown">
													<li className="mobile-wishlist compare-mobile"><Link to={`${process.env.PUBLIC_URL}/compare`}><i className="fa fa-random" aria-hidden="true"></i>{'compare'}</Link></li>
													<li className="mobile-wishlist"><Link to={`${process.env.PUBLIC_URL}/wishlist`}><i className="fa fa-heart" aria-hidden="true"></i>{'wishlist'}</Link></li>
													<li className="onhover-dropdown mobile-account">
														<i className="fa fa-user" aria-hidden="true"></i> {'my_account'}
														<ul className="onhover-show-div">
															<li>
																<Link to={`${process.env.PUBLIC_URL}/pages/login`} data-lng="en">Login</Link>
															</li>
															<li>
																<Link to={`${process.env.PUBLIC_URL}/pages/register`} data-lng="en">Register</Link>
															</li>
														</ul>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>

                <div id="search-overlay" className="search-overlay">
                    <div>
                        <span className="closebtn" onClick={this.closeSearch} title="Close Overlay">×</span>
                        <div className="overlay-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <form>
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Search a Product" />
                                            </div>
                                            <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
				<Modal open={open} onClose={this.onCloseModal} center> 
                            
					<div className="login-body">
						<div className="row">
							<div className="col-xl-12 login-top">
								<h6><center>Don’t have an account?</center></h6>	
								<button  className=" col-xl-12 btn btn-register"  >Create an Account</button>											
							</div>
							<div className="col-xl-12 login-part">											
								<h6><center>Already joined?</center></h6>
								<input className="row input-data" placeholder="Email" type="text" ></input>
								<input className="row input-data" placeholder="Password" type="password"></input>
								<button  className="row col-xl-12 btn btn-login"  >Login</button>	
								<h6><center>Having trouble logging in?</center></h6>
								<Link to={"#"}><h6><center>Reset your password</center></h6></Link>	
							</div>				
						</div>                                         
					</div>                         
                     
                </Modal>
				<Modal open={registerOpen} onClose={this.onCloseRegisterModal} center> 
					<div className="row register-part">
						<div className="col-xl-6 register-left">
							<h4><center>Esport Tournamant</center></h4>
							<h5><center>MAKE ESPORTS PREDICTIONS PLAY FOR REAL CASH</center></h5>
							<h6><center>Your account starts with $5*</center></h6>
							<h6><center>Safe, secure, regulated</center></h6>
						</div>
						<div className="col-xl-6 login-body">
							<div className="row">
								<div className="col-xl-12 login-part">	
								<h4><center>Create Account</center></h4>										
									<input className="row input-data" placeholder="Full Name" type="text" ></input>
									<input className="row input-data" placeholder="Email" type="text" ></input>
									<input className="row input-data" placeholder="Password" type="password"></input>
									<input className="row input-data" placeholder="conform" type="password"></input>
									<input type = "checkbox" className="checkbox_animated" style={{marginLeft:"5px"}} ></input>
									<span>I am over 18 years old. I have read and accept the Terms of Policy</span>
									<button  className=" col-xl-12 btn btn-register"  >Create an Account</button>									
									<h6><center>Already have an account? <Link className="login" to={"#"}>Log in</Link></center></h6>
								</div>					
							</div>                                         
						</div>   
					</div>                   
							 
				</Modal>
			</div>
			)
	}
}

export default connect(null,
    {  }
)(HeaderFive);