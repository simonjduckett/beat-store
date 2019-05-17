import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './Sections/footer';
import { Home } from './Sections/Home';
import { Blog } from './Sections/blog';
import { Single } from './Sections/single';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PageNotFound } from './components/pageNotFound';
import { Licensing } from './Sections/licensing';
import { Contact } from './Sections/contact';

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: { items: [{ content: '' }] },
      featured: []
    };
  }

  componentDidMount() {
    //get blogs
    const Base_URL = "https://www.googleapis.com/blogger/v3/blogs/4492098106120259453/posts?key=AIzaSyC5LMQseX-rxSLjys4oHTk4dpRD6U6uKA4";

    fetch(Base_URL)
      .then(res => res.json())
      .then(result => {
        this.setState({ data: result });
        console.log(this.state.data);
        let array = [];
        for(var i = 0; i < this.state.data.items.length; i++){
          array.push(this.state.data.items[i]);
        }
        this.setState({featured: array});
        console.log(this.state.featured);
      });
      
    AOS.init();
  }

  render() {
    return (
      <div className="App">
        
        <HashRouter>
          <Header />
          <Switch>
              <Route exact path='/' render={() => { return <Home featured={this.state.featured} />}} />
              <Route path='/licensing' component={Licensing} />
              <Route path='/blog' render={() => { return <Blog data={this.state.data} /> }} />
              <Route path='/single/:id' component={Single} />
              <Route path='/contact' component={Contact} />
              <Route component={PageNotFound} />
          </Switch>
        </HashRouter>
        <Footer />
      </div>
    );
  }
}

export default App;