module.exports = {
sf_npm_array_payva: class sf_npm_array_payva
{
    constructor(array)
    {
	this.array = array;
    }

    set(array)
    {
	this.array = array;
    }

    get()
    {
	return this.array;
    }

    add(item)
    {
	this.array.push(item);
    }

    del(item)
    {
	var pos = this.array.indexOf(item);
	this.array.splice(pos, 1);
    }

}
};

/*var a = new mArray([12,23,34]);
a.add(45);
a.del(12);
if (""+a.get() == ""+[23,34,45])
    console.log("Success");
else
    console.log("Fail");
*/
