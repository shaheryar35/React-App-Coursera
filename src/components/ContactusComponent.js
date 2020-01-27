import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback} from 'reactstrap';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state={
            firstname:'',
            lastname:'',
            telnum:'',
            email:'',
            agree:false,
            contacttype:'tel',
            message:'',
            touched:{
                firstname:false,
                lastname:false,
                telnum:false,
                email:false
            }
        };
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleBlur=this.handleBlur.bind(this);
    }
    handleBlur=(field)=>(evt)=>{
            this.setState({
                touched:{...this.state.touched,[field]:true}
            });



    }
    handleInputChange(event){
    
        const target =event.target;
        const value =target.type === 'checkbox' ? target.checked : target.value;
        const name =target.name;
        this.setState({
            [name]: value
        });

    }
    handleSubmit(event){
        alert("Current State is:"+JSON.stringify(this.state));
        event.preventDefault();
    }
    validate(firstname,lastname,telnum,email){
        const errors={
            firstname:'',
            lastname:'',
            telnum:'',
            email:''
        };
        if (this.state.touched.firstname && firstname.length < 3 )
            errors.firstname='FirstName length must be greater then 3';
        else if(this.state.touched.firstname && firstname.length > 10)
            errors.firstname='FirstName length must be smaller than 10';
        if (this.state.touched.lastname && lastname.length < 3 )
            errors.lastname='lastname length must be greater then 3';
        else if(this.state.touched.lastname && lastname.length > 10)
            errors.lastname='lastname length must be smaller than 10';
        const reg=/^\d+$/;
        if(this.state.touched.telnum && !reg.test(telnum))
            errors.telnum='Enter Only Number';
        if(this.state.touched.email && email.split('').filter(x => x=== '@').length!==1)
            errors.email='Email Address Must Contain @ sign';
        

        return errors;
    }
    render(){
        const errors=this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email)
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
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlfor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" placeholder="First Name" name="firstname" value={this.state.firstname}
                                    valid={errors.firstname ===''}
                                    invalid={errors.firstname !==''}
                                    onBlur={this.handleBlur('firstname')}
                                    onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlfor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" placeholder="Last Name" name="lastname" value={this.state.lastname} 
                                    valid={errors.lastname ===''}
                                    invalid={errors.lastname !==''}
                                    onBlur={this.handleBlur('lastname')}
                                   onChange={this.handleInputChange} />
                                     <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlfor="telnum" md={2}>Tel Num</Label>
                                <Col md={10}>
                                    <Input type="number" id="telnum" placeholder="Tel Number" name="telnum" value={this.state.telnum}
                                    valid={errors.telnum ===''}
                                    invalid={errors.telnum !==''}
                                    onBlur={this.handleBlur('telnum')}
                                   onChange={this.handleInputChange}  />
                                     <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlfor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="text" id="email" placeholder="email" name="email" value={this.state.email} 
                                   valid={errors.email ===''}
                                   invalid={errors.email !==''}
                                   onBlur={this.handleBlur('email')}
                                   onChange={this.handleInputChange} />
                                     <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:6, offset:2}} >
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"  name="agree" checked={this.state.agree} 
                                            onChange={this.handleInputChange} /> {''}
                                            <strong>May We Contact You</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    <Input type="select" name="contacttype" value={this.state.contacttype}
                                    onChange={this.handleInputChange} >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlfor="feedback" md={2}>FeedBack</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" placeholder="feedback" name="message" value={this.state.message
                                    } onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:10, offset:2}}>
                                    <Button type="submit" color="primary" >Send FeedBack</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                        </div> 
                </div>
            </div>
        );
    }
   
}

export default Contact;