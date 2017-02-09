'use strict';

const{  curry,  compose}=require('lodash/fp')
const{
  assign,
}=require('lodash/fp')


const foo = {a: 5, b: 4};

module.exports =curry ( ( a , b ) => {
      return compose( a, b , assign)(foo)
} )
