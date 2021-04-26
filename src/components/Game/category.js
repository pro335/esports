import React, { Component, Fragment } from 'react';
import data from '../../assets/data/digital-category';
import Datatable from './datatable';
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';
import { makeCategory } from '../../services/index'

export class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }
    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };
    render() {
        const { open } = this.state;
        const { category } = this.props;
        return (
            <Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Game Category</h5>
                                </div>
                                <div className="card-body">
                                    <div className="btn-popup pull-right">
                                        <button type="button" className="btn btn-secondary" onClick={this.onOpenModal} data-toggle="modal" data-original-title="test" data-target="#exampleModal">Add Category</button>
                                        <Modal open={open} onClose={this.onCloseModal} >
                                            <div className="modal-header">
                                                <h5 className="modal-title f-w-600" id="exampleModalLabel2">Add Category</h5>
                                            </div>
                                            <div className="modal-body">
                                                <form>
                                                    <div className="form-group">
                                                        <label htmlFor="recipient-name" className="col-form-label" >{this.props.name} Name :</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="message-text" className="col-form-label">Category description :</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-primary" onClick={() => this.onCloseModal('VaryingMdo')}>Save</button>
                                                <button type="button" className="btn btn-secondary" onClick={() => this.onCloseModal('VaryingMdo')}>Close</button>
                                            </div>
                                        </Modal>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div id="basicScenario" className="product-physical">
                                        <Datatable
                                            multiSelectOption={false}
                                            myData={category}
                                            pageSize={5}
                                            pagination={false}
                                            class="-striped -highlight"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Container-fluid Ends--> */}
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => ({
    category: makeCategory(state.game.category),

})

export default connect(
    mapStateToProps, {}
)(Category)