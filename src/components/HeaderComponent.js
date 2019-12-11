import React,{Component} from 'react';
import {Navbar, NavbarBrand, Jumbotron, Nav, NavItem, Collapse, NavbarToggler } from 'reactstrap';
import { NavLink } from 'react-router-dom';
class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen:false
        };
        this.toggleNav=this.toggleNav.bind(this);
    }
    toggleNav(){
        this.setState({
            isNavOpen:!this.state.isNavOpen
        });
    }
render(){
return(
<>
    <Navbar dark expand="md">
        <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand href="/" classNam="mr-auto" >
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
</>

)

}



}
export default Header