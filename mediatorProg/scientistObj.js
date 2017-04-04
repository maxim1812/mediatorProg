function getScientist()
{
	let scientist = new Object();
	
	scientist.isClever = function()
	{
		if(this.iq >= 300) return true;
		return false;
	}
	
	return scientist;	
}
