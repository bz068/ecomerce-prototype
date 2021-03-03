import React, { Component } from 'react'
import { connect} from "react-redux";
import './style.css';
import { addProduct } from "../../actions/productActions";
import axios from 'axios'


export class AddProduct extends Component {
    state = {
        title: "",
        price: "",
        info: "",
        img: "",
        imgName: '', 
        uploadedFile : {}
    };

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
      }

    onChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value,
            
        })
    };
    fileOnChange=(e)=>{
        this.setState({
            img: e.target.files[0],
            imgName: e.target.files[0].name
            
        })
        
       
    };
    onSubmit(e){
        e.preventDefault();
        // console.log(this.state);
        const {title, price, info, img} = this.state;
        // console.log(this.state.title);

        const newProduct = {
             title, price, info, img 
        }
        newProduct.img = this.state.imgName;
        // add item thro additem action
        this.props.addProduct(newProduct);
        this.fileSubmit();

        this.setState({
            title: '', price: '', info: '', img : '', imgName: ''
        })
    };


    fileSubmit = async ()=>{
       
        const fd = new FormData();
        fd.append('file', this.state.img);

        try {
            const res = await axios.post('https://sambros.herokuapp.com/api/products/upload', fd,{
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            });

            const { fileName, filePath} = res.data;
            this.setState({uploadedFile: {fileName, filePath}});
        } catch (err) {
            if(err.response.status===500){
                console.log('theres an error');
            }else{
                console.log(err.response.data.msg);
            }
        }
    }

    render() {
        return (
            <div className="addProduct">
                    <form onSubmit={this.onSubmit}>
                        <input onChange={this.onChange} value={this.state.title} type="text" placeholder='Title' name="title" id=""/>
                        <input onChange={this.onChange} value={this.state.price} type="text" placeholder='price' name="price" id=""/>
                        <textarea onChange={this.onChange} value={this.state.info} placeholder='info' name="info" id="" cols="30" rows="10"></textarea>
                        <input onChange={this.fileOnChange} type="file" name="file" id=""/>
                        <button type="submit">submit</button>
    
                    </form>
                </div>
        )
    }
}

const mapStateToProps = state  =>({
    product: state.product
})

export default connect(mapStateToProps, {addProduct})(AddProduct)
