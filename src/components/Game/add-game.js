import React, { Component,Fragment } from 'react';
import CKEditors from "react-ckeditor-component";
import { AvField, AvForm } from 'availity-reactstrap-validation';
import one from '../../assets/images/pro3/1.jpg';
import { connect } from 'react-redux';
import { Multiselect } from 'multiselect-react-dropdown';
import { addGame } from '../../actions/index'


export class Add_Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: '',
            image: one,
            selectedValue:[],
            name:'',
            content:'',
            image_url:''

        }
    }
    onSelect = (selectedList, selectedItem) => {
        this.setState({selectedValue:selectedList})
        
    }
     
    onRemove(selectedList, removedItem) {
        this.setState({selectedValue:selectedList})
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        console.log(nam)
        console.log(val)
        this.setState({[nam]: val});
    }
    _handleImgChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];
        let url = e.target.files[0].name;

        reader.onloadend = () => {
            this.setState({image:reader.result})
            this.setState({
                file: file,
                image_url:url            
            });
        }
        reader.readAsDataURL(file)
    }
    onChangeDescription=(evt)=>{
        var newContent = evt.editor.getData();
        this.setState({
        content: newContent
        })
        console.log(this.state.content)
    }

    submitHandler = (e)=>{
        var tags = [];
        this.state.selectedValue.map((row,index) =>
            tags.push(row.name)
        );
        e.preventDefault();
        var jsonData = {
            name : this.state.name,
            category : tags,
            description : this.state.content,
            image_url : "/assets/images/Games/" + this.state.image_url,                       

        }
        var myJSON = JSON.stringify(jsonData)
        console.log(myJSON)
        let data = new FormData();
        data.append('file', this.state.file);
        data.append('fileName', this.state.image_url);
        data.append('data',myJSON);
        console.log(this.state.file)
        console.log(data)
        this.props.addGame(data);

    }

    render() {
        const multiselectContainer = {width:"200px"}
        return (
            <Fragment>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Add Product</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row product-adding">
                                        <div className="col-xl-5">
                                            <div className="add-product">
                                                <div className="row">
                                                    <div className="col-xl-9 xl-50 col-sm-6 col-9">
                                                        <img src={this.state.image} style={{ height:"600px", width:"450px"}} alt="" className="img-fluid image_zoom_1 blur-up lazyloaded" />
                                                    </div>
                                                    <div className="col-xl-3 xl-50 col-sm-6 col-3">
                                                        <ul className="file-upload-product">
                                                            
                                                            <li>
                                                                <div className="box-input-file">
                                                                    <input className="upload" type="file" onChange={(e) => this._handleImgChange(e)} />
                                                                        <button className = "btn btn-primary" style={{ width: 100, height: 40 }} >Image</button>                                                                                
                                                                    <a id="result1" onClick={(e) => this._handleSubmit(e.target.id)}></a>
                                                                </div>
                                                            </li>
                                                            
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-7">
                                            <AvForm className="needs-validation add-product-form" onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
                                                <div className="form form-label-center">
                                                    <div className="form-group mb-3 row">
                                                        <label className="col-xl-3 col-sm-4 mb-0">Game Name :</label>
                                                        <div className="col-xl-8 col-sm-7">
                                                            <AvField className="form-control" name="name" onChange={this.myChangeHandler} type="text" required />
                                                        </div>
                                                        <div className="valid-feedback">Looks good!</div>
                                                    </div>
                                                    <div className="form-group mb-3 row">
                                                        

                                                        <div className="valid-feedback">Looks good!</div>
                                                    </div>                             
                                                </div>
                                                <div className="form">
                                                    <div className="form-group row">
                                                        <label className="col-xl-3 col-sm-4 mb-0" >Game Category :</label>
                                                        <div className="col-xl-8 col-sm-7">
                                                        <Multiselect
                                                            className="custom-select col-xl-8 col-sm-7"
                                                            options={this.props.category} 
                                                            selectedValues={this.state.selectedValue} 
                                                            onSelect={this.onSelect} 
                                                            onRemove={this.onRemove} 
                                                            displayValue="name" 
                                                            style={multiselectContainer}
                                                        />
                                                        </div>
                                                    </div>
                                    
                                                    <div className="form-group row">
                                                        <label className="col-xl-3 col-sm-4">Add Description :</label>
                                                        <div className="col-xl-8 col-sm-7 description-sm">
                                                            <CKEditors
                                                                activeclassName="p10"
                                                                content={this.state.content}
                                                                events={{
                                                                    "blur": this.onBlur,
                                                                    "afterPaste": this.afterPaste,
                                                                    "change": this.onChangeDescription
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="offset-xl-3 offset-sm-4">
                                                    <button type="submit" className="btn btn-primary" onClick={this.submitHandler} style={{marginLeft:"10px"}}>Add</button>
                                                    <button type="button" className="btn btn-secondary" style={{marginLeft:"10px"}}>Discard</button>
                                                </div>
                                            </AvForm>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    category: state.game.category,

})

export default connect(
    mapStateToProps,{addGame}
)(Add_Game)