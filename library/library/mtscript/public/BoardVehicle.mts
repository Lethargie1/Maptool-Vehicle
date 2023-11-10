
[h:filter = json.set("","layer",json.append("[]","TOKEN","HIDDEN","OBJECT","BACKGROUND"))]
[h: filter2 = json.set(filter,"propertyType", json.append("", "Vehicle"))]
[h: VehicleTokens = getTokens("json", filter2)]

[h: tokenList = json.toList(VehicleTokens)]
[h: NameList = ""]
[h,foreach(Token, tokenList): NameList = ListAppend(NameList,getName(Token))]
[h: InputString= "test|"+NameList+"|really?|LIST"]
[h: input(InputString)]


[h: ids = getSelected()]
[foreach(id, ids, "<br>"), code:{
	[h: setProperty("VEHICLE_Boarded",listget(tokenList,test),id)]
	[r: getName(id) + " boarded " + getname(listget(tokenList,test))]
}]
