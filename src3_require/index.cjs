// import _ from 'lodash';
const a = require('./a.cjs');

//  function component() {
  // const element = document.createElement('div');
  // const btn = document.createElement('button');

  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // btn.innerHTML = 'Click me and check the console!';
  // btn.onclick = printMe;

  // element.appendChild(btn);

  // return element;
//  }

//  document.body.appendChild(component());
 import('./dynamic_import.js').then((data) => {console.log(`dynamically import ${data.dynamic}`)})