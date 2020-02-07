import React,{Component} from 'react';
import { Button,Modal, ModalBody, ModalHeader, Label} from 'reactstrap';
import {Control, Errors,LocalForm} from 'react-redux-form'

const required = (val)=> val && val.length;
const minLength =(len)=>(val)=> !(val) || (val.length>=len);
const maxLength =(len)=>(val)=> !(val) || (val.length<=len);
class Formss extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            isModelOpens:false
        };
        this.onTogglesModels=this.onTogglesModels.bind(this);
     
    }

    onTogglesModels(){
        this.setState({
            isModelOpens:!this.state.isModelOpens
        });
    }

    

   
    render(){
        

        return(
            <div className="container">
               <div className="row">
                 <Button color="secondary" onClick={this.onTogglesModels}>Add Comment</Button>
                </div>
                <Modal isOpen={this.state.isModelOpens} toggle={this.onTogglesModels} >
               <ModalHeader toggle={this.onTogglesModels}> Add Comment</ModalHeader>
               <ModalBody>
                   <LocalForm>
                     <Label for="rating">Rating</Label>
                    <Control.select model=".rating" name="rating" className="form-control" >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Control.select>
                    <Label for="username">Your Name</Label>
                    <Control.text model=".username" name="username" className="form-control" 
                    validators={{
                        required,
                        minLength:minLength(2),
                        maxLength:maxLength(15)
                    }}
                    
                    />
                    <Errors
                    className="text-danger"
                    show="touched"
                    model=".username"
                    messages={{
                        required:'It must Required',
                        minLength:'Length Must be Greater than 2',
                        maxLength:'Must be Smaller than 15'
                    }}
                    
                    />
                  <Label for="comment" >Comment</Label>
                  <Control.textarea model=".comment" className="form-control" name="comment" />
                <br/>
                <Button color="primary">Submit</Button>
                   </LocalForm>
               </ModalBody>


                </Modal>
            
           </div>
        );
    }


}
export default Formss
