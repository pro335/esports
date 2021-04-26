import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-responsive-modal';


class ProductListItem extends Component {

    constructor(props){
        super(props)

        this.state = {
            open: false,
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

    onClickHandle(img) {
        this.setState({ image : img} );
    }

    minusQty = () => {
        if(this.state.quantity > 1) {
            this.setState({stock: 'InStock'})
            this.setState({quantity: this.state.quantity - 1})
        }
    }

    plusQty = () => {
        if(this.props.product.stock >= this.state.quantity) {
            this.setState({quantity: this.state.quantity+1})
        }else{
            this.setState({stock: 'Out of Stock !'})
        }
    }
    changeQty = (e) => {
        this.setState({ quantity: parseInt(e.target.value) })
    }


    render() {
        const {product, symbol, onAddToCartClicked, onAddToWishlistClicked, onAddToCompareClicked} = this.props;
        const {open} = this.state;

            let RatingStars = []
            for(var i = 0; i < 5; i++) {
                RatingStars.push(<i className="fa fa-star" key={i}></i>)
            }

        return (

                    <div className="product-box" style={{border:"5px solid gray",borderRadius:"10px"}}>
                        <div className="img-wrapper">
                            <div className="front">
                                <Link to={`${process.env.PUBLIC_URL}/Tournamant_List`} ><img
                                    src={product.image_url?product.image_url:''
                                        }
                                    className="img-fluid"
                                    style={{borderRadius:"10px"}}
                                    alt="" /></Link>
                            </div>
                        </div>
                        <div className="product-detail">
                            <div>
                                <div className="rating">
                                    {RatingStars}
                                </div>

                                
                                <span style={{color:"black"}}>{"30 tournaments"}</span><br/>
                                <span style={{color:"black"}}>{"20 participants"}</span>

                            </div>
                        </div>          
                </div>
        )
    }
}

export default ProductListItem;