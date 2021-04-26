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
        const {logo, symbol, onAddToCartClicked, onAddToWishlistClicked, onAddToCompareClicked} = this.props;
        const {open} = this.state;


            let RatingStars = []
            for(var i = 0; i < 5; i++) {
                RatingStars.push(<i className="fa fa-star" key={i}></i>)
            }

        return (

                <div className="tournamant-box" >
                    <div className="row">
                        <div className="col-xl-1">
                                    <div className="category-image">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/icon/${logo}`} alt="" /></div>                                

                        </div>
                        <span className="col-xl-1 row-items" > 9:30 AM </span>
                        <span className="col-xl-3 row-items"> Dota 2 - International - Cup - 2020 </span>
                        <div className="col-xl-1">             
                                    <div className="category-image">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/icon/tournamant.png`} alt="" /></div>                                                     

                        </div>
                        <div className="col-xl-1 row-items" >
                            <span className="mode" >3</span>
                            <span className="">VS</span>
                            <span className="mode"> 3</span>

                        </div>
                        <span className="col-xl-1 row-items"> free </span>
                        <span className="col-xl-1 row-items"> $100 </span>
                        <span className="col-xl-1 row-items"> 45/60 </span>
                        <div className="col-xl-1 category-block">
                            <button className="btn btn-tournamant">
                                <span>                    
                                show tournamant
                                </span>

                            </button>   
                                                        
                        </div>

                    </div>    
                </div>
        )
    }
}

export default ProductListItem;