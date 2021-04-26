import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTranslate } from 'react-redux-multilingual'

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navClose: { right: '0px' }
        }
    }

    componentWillMount() {
        if (window.innerWidth < 750) {
            this.setState({ navClose: { right: '-410px' } })
        }
        if (window.innerWidth < 1199) {
            this.setState({ navClose: { right: '-300px' } })
        }
    }

    openNav() {
        console.log('open')
        this.setState({ navClose: { right: '0px' } })
    }
    closeNav() {
        this.setState({ navClose: { right: '-410px' } })
    }

    onMouseEnterHandler() {
        if (window.innerWidth > 1199) {
            document.querySelector("#main-menu").classList.add("hover-unset");
        }
    }

    handleSubmenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensubmenu'))
            event.target.nextElementSibling.classList.remove('opensubmenu')
        else{
            document.querySelectorAll('.nav-submenu').forEach(function (value) {
                value.classList.remove('opensubmenu');
            });
            document.querySelector('.mega-menu-container').classList.remove('opensubmenu')
            event.target.nextElementSibling.classList.add('opensubmenu')
        }
    }

    handleMegaSubmenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;
            
        if(event.target.parentNode.nextElementSibling.classList.contains('opensubmegamenu'))
            event.target.parentNode.nextElementSibling.classList.remove('opensubmegamenu')
        else{
            document.querySelectorAll('.menu-content').forEach(function (value) {
                value.classList.remove('opensubmegamenu');
            });
            event.target.parentNode.nextElementSibling.classList.add('opensubmegamenu')
        }
    }

    render() {
        const { translate } = this.props;
        return (
            <div>
                <div className="main-navbar">
                    <div id="mainnav" >
                        <div className="toggle-nav" onClick={this.openNav.bind(this)} >
                            <i className="fa fa-bars sidebar-bar"></i>
                        </div>
                        <ul className="nav-menu" style={this.state.navClose}>
                            <li className="back-btn" onClick={this.closeNav.bind(this)} >
                                <div className="mobile-back text-right">
                                    <span >Back</span>
                                    <i className="fa fa-angle-right pl-2" aria-hidden="true"></i>
                                </div>
                            </li>
                            <li >
                                <Link to={`${process.env.PUBLIC_URL}/tournamant_list`} className="nav-link" >
                                <i class="fa fa-trophy"></i> {'tournamants'}                                   
                                   
                                </Link>
                     
                            </li>
                            <li >
                                <Link to={`${process.env.PUBLIC_URL}/news_collection`} className="nav-link">
                                <i class="fa fa-bullhorn"></i> 
                                    {' news'}
                                    
                                </Link>
                                {/* <ul className="nav-submenu">
                                    <li><Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/1`} >{translate('left_sidebar')}</Link></li>
                                    <li><Link to={`${process.env.PUBLIC_URL}/right-sidebar/product/1`} >{translate('right_sidebar')}</Link></li>
                                    <li><Link to={`${process.env.PUBLIC_URL}/no-sidebar/product/1`} >{translate('no_sidebar')}</Link></li>
                                    <li><Link to={`${process.env.PUBLIC_URL}/col-left/product/1`} >{translate('three_col_thumbnail_left')}</Link></li>
                                    <li><Link to={`${process.env.PUBLIC_URL}/col-right/product/1`} >{translate('three_col_thumbnail_right')}</Link></li>
                                    <li><Link to={`${process.env.PUBLIC_URL}/column/product/1`} >{translate('thumbnail_below')}</Link></li>
                                    <li><Link to={`${process.env.PUBLIC_URL}/left-image/product/1`} >{translate('thumbnail_left')}</Link></li>
                                    <li><Link to={`${process.env.PUBLIC_URL}/right-image/product/1`} >{translate('thumbnail_right')}</Link></li>
                                </ul> */}
                            </li>              
                            <li>             
                                <Link to="#" className="nav-link" onClick={(e) => this.handleSubmenu(e)}>
                                    <div className="bar-style"> <i className="fa fa-ellipsis-h" aria-hidden="true"></i></div>
                                </Link>
                                   

                                <ul className="nav-submenu">
                                    <li><Link to={`${process.env.PUBLIC_URL}/pages/about-us`} > <i class="fa fa-book"> &nbsp;</i>{translate('about_us')}</Link></li>                
                                    <li><Link to={`${process.env.PUBLIC_URL}/pages/contact`} ><i class="fa fa-phone"> &nbsp;</i>{translate('contact')}</Link></li>
  
                                </ul>
                            </li>              
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}


export default withTranslate(NavBar);