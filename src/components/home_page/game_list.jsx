import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductListItem from "./common/product-list-item";
import HeaderFive from "../commons/headers/header-five"

class CollectionMetro extends Component {

    constructor (props) {
        super (props)

        this.state = {
            limit: 10,
            hasMoreItems: true
        };
    }

    componentWillMount(){
        this.fetchMoreItems();
    }

    fetchMoreItems = () => {
        if (this.state.limit >= this.props.games.length) {
            this.setState({ hasMoreItems: false });
            return;
        }
        // a fake async api call
        setTimeout(() => {
            this.setState({
                limit: this.state.limit + 5
            });
        }, 3000);


    }

    render (){
        const {games, addToCart, symbol, addToWishlist, addToCompare} = this.props;

        return (
            <div>
            <HeaderFive logoName={'logo.png'}/>
            <div style={{backgroundColor:"rgba(0,0,0,0.9)"}}>
               <section className="section-b-space">
                    <div className="collection-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="collection-content col">
                                    <div className="page-main-content">
                  
                                        <div className="collection-product-wrapper">
                                            <div className="section-t-space portfolio-section portfolio-padding metro-section port-col">
                                                {games.length > 0 ?
                                                    <InfiniteScroll
                                                        dataLength={this.state.limit} //This is important field to render the next data
                                                        next={this.fetchMoreItems}
                                                        hasMore={this.state.hasMoreItems}
                                                        loader={<div className="loading-cls"></div>}
                                                        endMessage={
                                                            <p className="seen-cls seen-it-cls">
                                                                <b>Yay! You have seen it all</b>
                                                            </p>
                                                        }
                                                    >
                                                        <div className="isotopeContainer row">
                                                            { games.slice(0, this.state.limit).map((game, index) =>
                                                                <div className="col-xl-2 col-sm-6 isotopeSelector" key={index}>
                                                                    <ProductListItem product={game} 
                                                                                 
                                                                                 
                                                                                 />
                                                                </div>)
                                                            }
                                                        </div>
                                                    </InfiniteScroll>
                                                    :
                                                    <div className="row">
                                                        <div className="col-sm-12 text-center section-b-space mt-5 no-found" >
                                                            <img src={`${process.env.PUBLIC_URL}/assets/images/empty-search.jpg`} class="img-fluid mb-4" />
                                                            <h3>Sorry! Couldn't find the product you were looking For!!!    </h3>
                                                            <p>Please check if you have misspelt something or try searching with other words.</p>
                                                            <Link to={`${process.env.PUBLIC_URL}/`} class="btn btn-solid">continue shopping</Link>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            </div>
            
        
        )
    }
}
const mapStateToProps = (state) => ({
    games: state.game.games

})

export default connect(
    mapStateToProps, {}
)(CollectionMetro)