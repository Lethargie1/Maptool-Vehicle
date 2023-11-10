[h: ids = getSelected()]
[foreach(id, ids, "<br>"), code:{
	[h: setPropertyType("Vehicle",id)]
	

    [h: MacroPropsGen=json.set("", "applyToSelected ", true)]
    [h: MacroPropsGen=json.set(MacroPropsGen, "group", "Vehicle add-on")]
    [h: MacroPropsGen=json.set(MacroPropsGen, "playerEditable", false)]

    [h: MacroPropsMove=json.set(MacroPropsGen, "label", "Move vehicle")]
    [h: MacroPropsMove=json.set(MacroPropsMove, "tooltip", "Adjust all boarding token to the current position")]
    [h: MacroPropsMove=json.set(MacroPropsMove, "command", '[macro("MoveVehicle@lib:Vehicle"):0]')]
    [h: createMacro(MacroPropsMove, id)]

    [h: MacroPropsReset=json.set(MacroPropsGen, "label", "Reset vehicle")]
    [h: MacroPropsReset =json.set(MacroPropsReset, "tooltip", "Set current position as source position for the next move without moving boarded token")]
    [h: MacroPropsReset =json.set(MacroPropsReset, "command", '[macro("ResetVehicle@lib:Vehicle"):0]')]
    [h: createMacro(MacroPropsReset, id)]



    [r: getName(id) + " is now a Vehicle")]
}]
