var rangesliderJs = require('../../');

var rangeInput = '<input type="range" />';
document.body.innerHTML = rangeInput + rangeInput + rangeInput + rangeInput;

rangesliderJs.create(document.querySelectorAll('input'));
