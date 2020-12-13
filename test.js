var tools = require('./index');

var a = new tools.sf_npm_array_payva([12,23,34]);
a.add(45);
a.del(12);
if (""+a.get() == ""+[23,34,45])
    console.log("Success");
else
    console.log("Fail");

