import React, { Component,Fragment } from 'react'
import data from '../../assets/data/physical_list';
import { Edit, Trash2 } from 'react-feather'
import { connect } from 'react-redux'
import { getAllGames } from '../../actions/index'

export class Game_list extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data
        }
    }
    editGame = () =>{
        console.log("dkfjdkjfdkljf")
    }
    render() {
        const { games } = this.props;
        return (
            <Fragment>
                <div className="container-fluid">
                    <div className="row products-admin ratio_asos">
                        {
                            games.map((game, i) =>                            
                                    <div className="col-xl-2 col-sm-6" key={i}>
                                        <div className="card">
                                            <div className="products-admin">
                                                <div className="card-body product-box">
                                                    <div className="img-wrapper">                                    
                                                        <div className="front">
                                                            <a className="bg-size"><img className="img-fluid blur-up bg-img lazyloaded" src={game.image_url} /></a>
                                                            <div className="product-hover">
                                                                <ul>
                                                                    <li>
                                                                        <button className="btn" type="button" >
                                                                            <Edit className="editBtn" />
                                                                        </button>
                                                                    </li>
                                                                    <li>
                                                                        <button  className="btn" type="button" >
                                                                            <Trash2 className="deleteBtn" />
                                                                        </button>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-detail">
                                                        <div className="rating">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                        <a> <h4 ><center>{game.name}</center></h4></a>
                                                        {
                                                            game.category.map((cat,index)=>
                                                                <span key={index}>{cat} </span>
                                                            )
                                                        }
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                            )
                        }

                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    games: state.game.games,

})

export default connect(
    mapStateToProps, {getAllGames}
)(Game_list)