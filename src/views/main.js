import React, { Component } from 'react';
import { HashRouter as Router } from "react-router-dom";
import Menu from './Menu'
import axiosGET from '../js/api'

class App extends Component {
  constructor() { 
    super()
    this.state = {
      articleNodeList: []
    }
  }
  componentDidMount() {
    this.getArticleNode()
  }
  getArticleNode() {
    axiosGET('/api/GetArticleNode', {
      ArticleNodeID: undefined,
      LanguageCode: 'en',
      Country: 'en-US'
    }).then(res => {
      let data = res.data
      this.setState({
        articleNodeList: data
      })
    })
  }
  render() {
    return (
      <Router>
        <div className = "App clearfix">
          <header className="app-header">header</header>
        <Menu articleNodeList={this.state.articleNodeList} />
        </div>
      </Router>
    );
  }
}

export default App;