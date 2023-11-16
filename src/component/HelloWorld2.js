import React, { Component } from 'react'
import { ReactDOM } from 'react'
import LanCom from './Lan'

var helloWorldReactElement = <h1>Hello world!</h1>

class HelloWorld2 extends Component {
  getUrl() {
    return 'http://webapplog.com'
  }
  render() {
    return <div>
      {helloWorldReactElement}
      {helloWorldReactElement}
      ppp
      <p>Your REST API URL is: <a href={this.getUrl()}>{this.getUrl()}</a></p>
      <LanCom
        id='ember'
        frameworkName='Ember.js'
        title='A framework for creating ambitious web applications.' />
      <LanCom
        id='backbone'
        frameworkName='Backbone.js'
        title='Backbone.js gives structure to web applications...' />
      <LanCom
        id='angular'
        frameworkName='Angular.js'
        title='Superheroic JavaScript MVW Framework' />

    </div>
  }
}

// ReactDOM.render(
//     React.createElement(
//       'div',
//       null,
//       React.createElement(HelloWorld, {
//         id: 'ember',
//         frameworkName: 'Ember.js',
//         title: 'A framework for creating ambitious web applications.'}),
//       React.createElement(HelloWorld, {
//         id: 'backbone',
//         frameworkName: 'Backbone.js',
//         title: 'Backbone.js gives structure to web applications...'}),
//       React.createElement(HelloWorld, {
//         id: 'angular',
//         frameworkName: 'Angular.js',
//         title: 'Superheroic JavaScript MVW Framework'})
//     ),
//     document.getElementById('content')
//   )

export default HelloWorld2