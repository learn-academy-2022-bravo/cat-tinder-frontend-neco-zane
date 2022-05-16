import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CatIndex from './pages/CatIndex';
import CatShow from './pages/CatShow';
import CatNew from './pages/CatNew';
import CatEdit from './pages/CatEdit';
import NotFound from './pages/NotFound';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats:[]
    }
  }
  componentDidMount() {
    this.readCat()
  }

  readCat = () => {
    fetch("http://localhost:3000/cats")
    .then(response => response.json())
    .then(payload => this.setState({cats: payload}))
    .catch(errors => console.log("Cat read errors:", errors))
  }

  createCat = (newlyCreatedCat) => {
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(newlyCreatedCat),
      headers: {
         "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(() => this.readCat())
    .catch(errors => console.log("Cat create errors:", errors))
    }
  
  render() {
    return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/catindex" render={(props) => <CatIndex cats={this.state.cats} />} />

        <Route path="/catshow/:id" render={(props) => {
          let id = props.match.params.id
          let cat = this.state.cats.find(cat => cat.id === +id)
          return <CatShow cat={cat} />
        }}/>

        <Route path="/catnew" render={(props) =>  {
          return <CatNew createNewCat ={this.createNewCat}/>
        }}
        />
        <Route path="/catedit" component={CatEdit} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
    );
  }
}

export default App;