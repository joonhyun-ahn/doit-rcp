import React from 'react';
import './App.css';
import P from './P';

function App() {
  // const texts = [<p>hello</p>, <p>world</p>];
  // return <div>{texts}</div>;

  // const texts = ['hello', 'world2'].map((value, index) => <p key={index} children={value} />);
  // return <div children={texts}></div>;

  const texts = ['hello', 'world4'].map((value, index) => <P key={index} children={value} />);
  return <div children={texts} />;
}

export default App;
