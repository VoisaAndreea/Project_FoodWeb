import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Component} from "react";
import Recipes from './page/Recipes';
import Home from './page/Home';
import AddRecipe from './page/AddRecipe';
import ShowRecipe from './page/ShowRecipe';
import Search from './components/Search';



function App() {


  return (
   
      <Router>
          <Switch>
            <Route path='/view-all-recipes/recipe/:title' component={ShowRecipe}></Route>
            <Route path='/view-all-recipes/recipe/:title' component={Search}></Route>
            <Route path='/view-all-recipes' component={Recipes}/>
            <Route path='/view-all-recipes/recipe/delete/:title' component={Recipes}/>
            <Route path='/add-recipes' component={AddRecipe}/>
            <Route path="/" component={Home}/>
          </Switch>
      </Router>
 
  )
 }

export default App;
