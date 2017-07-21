'use strict';

import './node_modules/font-awesome/css/font-awesome.css';
import './style.less';

import React from 'react';
import ReactDOM from 'react-dom';
import Picogram from './picogram';

ReactDOM.render(<Picogram />, document.getElementById('picogram')); // method render called on ReactDOM library





// let div =document.getElementId('picogram');
// console.log(typeof div);
// let username = 'Janis';
// div.innerHTML = `Welcome to picogram ${username}`;
//
// function myfunc(attr) {
//   console.log(this);
//   return attr * 2;
// }
//
// let myfunc2 =function () {
//   return attr * 2
// }
//
// let myfunc3 = () => 5 * 2;
// console.log((myfunc3));
//
// function myfunc4 (...attr) { // many parameters can be added now
//   console.log(attr);
// }
//
// myfunc4(2,4,5,76,77);
