'use strict';

const{ curry
}=require('lodash/fp')

module.exports =curry ( ( a , b ) => {
      return a + b
} )
