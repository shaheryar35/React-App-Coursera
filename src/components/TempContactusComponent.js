import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback} from 'reactstrap';

class Formss extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            firstname:'',
            lastname:'',
            email:'',
            agree:false,
            touched:{
                firstname:false,
                lastname:false,
                email:false
            }
            
        }
        this.handlerOnInputChange=this.handlerOnInputChange.bind(this);
    }

    onBlureEvent=(field)=>(evt)=>{
        this.setState({
            touched:{...this.state.touched,[field]:true}
        });

    }

    formValidate(firstname,lastname,email){
        const errrors={
            firstname:'',
            lastname:'',
            email:''
        };
            if(this.state.touched.firstname && firstname.length<3)
            errrors.firstname='FirstName Must be Greater than 3';
            else if(this.state.touched.firstname && firstname.length>8)
            errrors.firstname='FirstName length Mustber Smaller than 8';
            if(this.state.touched.lastname && lastname.length<3)
            errrors.lastname='LastName Must be Greater than 3';
            else if(this.state.touched.lastname && lastname.length>8)
            errrors.firstname='LastName length Mustber Smaller than 8';
            if(this.state.touched.email && email.split('').filter(x=>x==='@').length!==1)
            errrors.email="Email Must Contain @ Sign";
     return errrors;
    }
    
    handlerOnInputChange(event){
        const target=event.target;
        const value= target.type === 'checkbox' ? target.checked :target.value;
        const name=target.name;
        this.setState({
            [name]: value
        });

    }

    render(){
        const errrors=this.formValidate(this.state.firstname,this.state.lastname,this.state.email)

        return(
             <div className="container">
                <div className="row row-contant">
                    <div className="col-12">
                        <h3>Send Us Your FormFeedback </h3>
                    </div>
                    <Form>
                     
                      <FormGroup row>
                                <Label htmlfor="firstname" md={4}>First Name</Label>
                                <Col md={8}>
                                    <Input type="text" id="firstname" placeholder="First Name" name="firstname" value={this.state.firstname}
                                    onChange={this.handlerOnInputChange}
                                    valid={errrors.firstname===''}
                                    invalid={errrors.firstname!==''}
                                    onBlur={this.onBlureEvent('firstname')}
                                 />
                                  <FormFeedback>{errrors.firstname}</FormFeedback>
                                </Col>
                               
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlfor="lastname" md={4}>last Name</Label>
                                <Col md={8}>
                                    <Input type="text" id="firstname" placeholder="Last Name" name="lastname" value={this.state.lastname
                                    } onChange={this.handlerOnInputChange} onBlur={this.onBlureEvent('lastname')}
                                 valid={errrors.lastname===''}
                                 invalid={errrors.lastname!==''}
                                 />
                                  <FormFeedback>{errrors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="emails" md={6} >Email Address</Label>
                                <Input type="text" name="email" value={this.state.email} 
                                onChange={this.handlerOnInputChange}
                                onBlur={this.onBlureEvent('email')}
                                valid={errrors.email===''}
                                invalid={errrors.email!==''}
                                />
                                <FormFeedback>{errrors.email}</FormFeedback>
                            </FormGroup>
                        <FormGroup check>
                            <Label check>
                               
                                <Input type="checkbox" name="agree" value={this.state.agree} />
                                <strong>Are U Agree</strong>
                            </Label>
                            
                        </FormGroup>
                    
                    </Form>
                </div>
                </div>

        );
    }


}
export default Formss
