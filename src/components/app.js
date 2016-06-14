import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>React Redux Blog App</h1>
        </header>

        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}
