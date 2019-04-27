import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from "./components/navbar";
import Search from "./components/Search";
import Tagform from "./components/Tagform";
import Candycard from "./components/Candycard";
import Button from "./components/button";
it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<React.Fragment/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
describe('Seperate Components', () => {
  it('NavBar Component loads', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavBar/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('Candycard Component loads', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Candycard/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('Button Component loads', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
describe('SHOULD FAIL w/o database', () => {
  it('Search Combined Component loads', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('TagForm Combined Component loads', () => {
    const form = document.createElement('form');
    ReactDOM.render(<Tagform/>, form);
    ReactDOM.unmountComponentAtNode(form);
  });
});
