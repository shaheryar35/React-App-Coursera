import React,{Component} from 'react';
import {Navbar, NavbarBrand, Jumbotron, Nav, NavItem, Collapse, NavbarToggler, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import {Modal, ModalBody, ModalHeader} from 'reactstrap';
class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen:false,
            onModalToggle:false
        };
        this.toggleNav=this.toggleNav.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
    }
    toggleNav(){
        this.setState({
            isNavOpen:!this.state.isNavOpen
        });
    }
   toggleModal(){
       this.setState({
           onModalToggle:!this.state.onModalToggle
       });
   }
   handleLogin(event){
       this.toggleModal();
       alert("Username:"+this.username.value+"Password"+this.password.value+"Rember Me"+this.remberme.checked);
       event.preventDefault();
   }
render(){
return(
<>
    <Navbar dark expand="md">
        <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand href="/" className="mr-auto" >
                <img src='assets/images/logo.png' width='41' height='30' alt='Ristorante Con Fusion' />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar >
            <Nav navbar>
            <NavItem>
                <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-large"></span> Home
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-large"></span> About Us
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-large"></span> Menu
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-large"></span> Contact Us
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink className="nav-link" to="/pra">
                    <span className="fa fa-address-card fa-large"></span> Temp Component
                </NavLink>
            </NavItem>


            </Nav>
            <Nav className='ml-auto' navbar>
                <NavItem>
                    <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-sign-in fa-lg">Sign In</span>
                    </Button>
                </NavItem>

            </Nav>
            </Collapse>
        </div>
    </Navbar>
      <Jumbotron >
          <div className="container">
              <div className="row row-header">
                  <div className="col-12 col-sm-6">
                  <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. 
                           Our lipsmacking creations will tickle your culinary senses!</p>
                  </div>
              </div>
          </div>
      </Jumbotron>
      <Modal isOpen={this.state.onModalToggle} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>Sign In</ModalHeader>
        <ModalBody>
            <Form onSubmit={this.handleLogin}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input type="text" id="username" name="username" innerRef={(input)=>this.username=input} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="username">Pasword</Label>
                    <Input type="password" id="password" name="password" innerRef={(input)=>this.password=input} />
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" name="remberme" id="remberme" innerRef={(input)=>this.remberme=input} />
                        <span>Rember Me</span>
                    </Label>

                </FormGroup>
                    <Button type="submit" color="primary" name="submit">Sign In</Button>
            </Form>
            
             </ModalBody>

      </Modal>
</>

)

}



}
export default Header