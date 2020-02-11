import React, { Component } from 'react';
import Menu from './MenuComponent';

import DishDetail from './DishDetailComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactusComponent';

import About from './AboutComponent';
import Formss from './TempContactusComponent';
import {Switch, Route, Redirect, BrowserRouter as Router ,withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = state=>{
  return{
    dishes:state.dishes,
    comments:state.comments,
    promotions:state.promotions,
    leaders:state.leaders

  }
}

class Main extends Component {

   constructor(props){
     super(props)
      
   }
  render() {
    const HomePage=()=>{
      return(
          <Home dish={this.props.dishes.filter((dish)=> dish.featured)[0]} 
          promotion={this.props.promotions.filter((promo)=> promo.featured)[0]}
          leader={this.props.leaders.filter((leader)=> leader.featured)[0]}
          />
      );
    }
    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.props.dishes.filter(
              dish => dish.id === parseInt(match.params.dishId, 10),
            )[0]
          }
          comments={this.props.comments.filter(
            com => com.dishId === parseInt(match.params.dishId, 10),
          )}
        />
      );
    };
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/aboutus' component={About} />
          <Route
            exact
            path='/menu'
            component={() => <Menu dishes={this.props.dishes} />}
          />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route path='/contactus' component={Contact} />
          <Redirect to='/' />
        </Switch>
        <Footer />
      </div>
    );
  }
}



export default withRouter(connect(mapStateToProps)(Main));
