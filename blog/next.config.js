const withTM = require('next-transpile-modules')(['@acme']); // pass the modules you would like to see transpiled
 
module.exports = withTM();