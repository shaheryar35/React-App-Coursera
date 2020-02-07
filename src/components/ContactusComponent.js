import React,{Component} from 'react';
import { Button, Label, Col, Row} from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';
const required =(val)=> val && val.length;
const maxLength =(len)=>(val)=> !(val) || (val.length <= len);
const minLength =(len)=>(val)=> !(val) || (val.length >=len);
const isNumber =(val)=>!isNaN(Number(val));
const validEmail =(val)=> /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-z]{2,4}$/i.test(val);


class Contact extends Component {
    constructor(props){
        super(props);
       
        this.handleSubmit=this.handleSubmit.bind(this);
      
      
    }
   
   
    handleSubmit(values){
        alert("Current State is:"+JSON.stringify(values));
      
    }
   
    render(){
       
        return(
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send Us Your Feedback:</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlfor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" placeholder="First Name" name="firstname"
                                    className="form-control"
                                    validators={{
                                        required,
                                        maxLength:maxLength(15),
                                         minLength:minLength(3)
                                         
                                                 }}
                                    />
                                   <Errors
                                   className="text-danger"
                                   model=".firstname"
                                   show="touched"
                                   messages={{
                                       required:'Required',
                                       minLength:'Length must be greater than 3',
                                       maxLength:'Length must be smaller than 8'
                                   }}
                               
                                   />
                                       
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlfor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" placeholder="Last Name" name="lastname" 
                                    className="form-control"
                                    validators={{
                                        required,
                                        minLength:minLength(3),
                                        maxLength:maxLength(8)
                                    }} />
                                     <Errors
                                    className="text-danger"
                                    model=".lastname"
                                    show="touched"
                                    messages={{
                                        required:'Last Name is Required',
                                        minLength: 'Length must be greater than 3',
                                        maxLength:'Length must be smaller than 8'
                                    }}
                                     
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlfor="telnum" md={2}>Tel Num</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" placeholder="Tel Number" name="telnum" 
                                     className="form-control" 
                                     validators={{
                                         required,
                                         isNumber
                                         
                                     }}
                                     />
                                    <Errors
                                    className="text-danger"
                                     model=".telnum"
                                     show="touched"
                                     messages={{
                                         required:'Required',
                                         isNumber:'It must be a Number'
                                     }}
                                    
                                    />
                                </Col>
                           </Row>
                           <Row className="form-group">
                                <Label htmlfor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" placeholder="email" name="email"
                                    className="form-control"
                                    validators={{
                                        required,
                                        validEmail
                                    }}
                                    
                                    />
                                    <Errors
                                    className="text-danger"
                                    show="touched"
                                    model=".email"
                                    messages={{
                                        required:'Email is Required',
                                        validEmail:'it must be valid in form @.XXX'
                                    }}

                                        /> 
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:6, offset:2}} >
                                    <div className="form-check-input">
                                        <Label check>
                                            <Control.checkbox model=".agree"  name="agree"  
                                                          /> {''}
                                            <strong>May We Contact You</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    <Control.select model=".contacttype" name="contacttype"  className="form-control"
                                     >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlfor="feedback" md={2}>FeedBack</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" placeholder="feedback" name="message" 
                                   className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset:2}}>
                                    <Button type="submit" color="primary" >Send FeedBack</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                        </div> 
                </div>
            </div>
        );
    }
   
}

export default Contact;