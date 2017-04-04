function getMan()
{
	let man = new Object();

	man.isTall = function()
	{
		if(this.h >= 200) return true;
		return false;
	}
	
	return man;
}
