import React, {Component} from 'react';
import HeaderFive from "../commons/headers/header-five"
import headerFive from '../commons/headers/header-five';
import {Link} from 'react-router-dom'
class Collection extends Component {

    constructor (props) {
        super (props)
    }

    render (){
        return (
            <div>
                <HeaderFive logoName={'logo.png'}/>
                    <div style={{backgroundColor:"rgba(0,0,0,0.9)"}}>              
                    
                    {/*Collection section*/}
                    <section className="collection section-b-space">
                        <div className="container">
                            <h4 style={{marginLeft:"60px",color:"white"}}>All Esports News</h4>
                            <div className="row partition-collection">
                                <Link className="col-xl-2 col-md-6 news" to={"#"} >
                                    <div >
                                        <div className="collection-block">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/news/1.jpg`} className="img-fluid" alt="" />
                                                <div className="collection-content">
                                                    <h4>(20 March)</h4>
                                                    
                                                    <p>Lorem Ipsum is simply dummy text of 
                                                        industry....</p>
                                                   
                                                </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="col-xl-2 col-md-6 news" to={"#"} >
                                    <div >
                                        <div className="collection-block">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/news/3.jpg`} className="img-fluid" alt="" />
                                                <div className="collection-content">
                                                    <h4>(20 March)</h4>
                                                   
                                                    <p>Lorem Ipsum is simply dummy text of 
                                                        industry....</p>
                                                   
                                                </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="col-xl-2 col-md-6 news" to={"#"} >
                                    <div >
                                        <div className="collection-block">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/news/2.jpg`} className="img-fluid" alt="" />
                                                <div className="collection-content">
                                                    <h4>(20 March)</h4>
                                                   
                                                    <p>Lorem Ipsum is simply dummy text of 
                                                        industry....</p>
                                               
                                                </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="col-xl-2 col-md-6 news" to={"#"} >
                                    <div >
                                        <div className="collection-block">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/news/3.jpg`} className="img-fluid" alt="" />
                                                <div className="collection-content">
                                                    <h4>(20 March)</h4>
                                                    
                                                    <p>Lorem Ipsum is simply dummy text of 
                                                        industry....</p>
                                                   
                                                </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="col-xl-2 col-md-6 news" to={"#"} >
                                    <div >
                                        <div className="collection-block">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/news/2.jpg`} className="img-fluid" alt="" />
                                                <div className="collection-content">
                                                    <h4>(20 March)</h4>
                                                   
                                                    <p>Lorem Ipsum is simply dummy text of
                                                        industry....</p>
                                                   
                                                </div>
                                        </div>
                                    </div>
                                </Link>
                                </div>
                            
                            
                                <div className="row partition-collection">
                                <Link className="col-xl-2 col-md-6 news" to={"#"} >
                                    <div >
                                        <div className="collection-block">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/news/1.jpg`} className="img-fluid" alt="" />
                                                <div className="collection-content">
                                                    <h4>(20 March)</h4>
                                                    
                                                    <p>Lorem Ipsum is simply dummy text of 
                                                        industry....</p>
                                                   
                                                </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="col-xl-2 col-md-6 news" to={"#"} >
                                    <div >
                                        <div className="collection-block">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/news/3.jpg`} className="img-fluid" alt="" />
                                                <div className="collection-content">
                                                    <h4>(20 March)</h4>
                                                   
                                                    <p>Lorem Ipsum is simply dummy text of 
                                                        industry....</p>
                                                  
                                                </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="col-xl-2 col-md-6 news" to={"#"} >
                                    <div >
                                        <div className="collection-block">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/news/2.jpg`} className="img-fluid" alt="" />
                                                <div className="collection-content">
                                                    <h4>(20 March)</h4>
                                                   
                                                    <p>Lorem Ipsum is simply dummy text of 
                                                        industry....</p>
                                                    
                                                </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="col-xl-2 col-md-6 news" to={"#"} >
                                    <div >
                                        <div className="collection-block">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/news/3.jpg`} className="img-fluid" alt="" />
                                                <div className="collection-content">
                                                    <h4>(20 March)</h4>
                                                    
                                                    <p>Lorem Ipsum is simply dummy text of 
                                                        industry....</p>
                                                   
                                                </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="col-xl-2 col-md-6 news" to={"#"} >
                                    <div >
                                        <div className="collection-block">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/news/2.jpg`} className="img-fluid" alt="" />
                                                <div className="collection-content">
                                                    <h4>(20 March)</h4>
                                                   
                                                    <p>Lorem Ipsum is simply dummy text of
                                                        industry....</p>
                                                   
                                                </div>
                                        </div>
                                    </div>
                                </Link>
                                </div>
                            </div>                
                 
                    </section>

                </div>
            </div>
           
        )
    }
}

export default Collection