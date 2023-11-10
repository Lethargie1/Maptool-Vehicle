[h: ids = getSelected()]
[foreach(id, ids, "<br>"), code:{
	[h: Boarded = getProperty("VEHICLE_Boarded",id)]
	[r, if (Boarded != ""):  getName(id) + " unboarded " + getname(getProperty("VEHICLE_Boarded",id)); 
	                       getName(id) + " was not on a vehicle "]
	[h: setProperty("VEHICLE_Boarded","",id)]
}]