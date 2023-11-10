
[h: OldCenterY = getProperty("OldCenterY")]
[h: OldFacing = getProperty("OldFacing")]
[h: OldCenterX = getProperty("OldCenterX")]

[h: CurrentX = getTokenX(1)]
[h: CurrentY = getTokenY(1)]
[h: Width = getTokenWidth()]
[h: Height = getTokenHeight()]
[h: CenterX= CurrentX + Width/2]
[h: CenterY= CurrentY + Height/2]
[h: CurrentFacing = -(getTokenRotation()+90)]

[h: MoveX = CenterX-OldCenterX]
[h: MoveY = CenterY- OldCenterY]
[h: Rotation = CurrentFacing - OldFacing]

[h: setProperty("OldCenterX",CenterX)]
[h: setProperty("OldCenterY",CenterY)]
[h: setProperty("OldFacing",CurrentFacing)]



[h: VehicleId = currentToken()]
[h: ids = getTokens()]
[h: tomove = ""]
[h,foreach(id,ids, "<br>"), code:{
	[h: boarded = getProperty("VEHICLE_Boarded",id)]
	[h,if (boarded == VehicleId): tomove = listappend(tomove,id)]
	}]
[h: tomove]

[h,foreach(id, tomove, "<br>"), code:{
	[r: getName(id)]
	[h: setTokenSnapToGrid(0, id)]
	[h: CurrentXT = getTokenX(1,id)]
	[h: CurrentYT = getTokenY(1,id)]
	[h: WidthT = getTokenWidth(id)]
	[h: HeightT = getTokenHeight(id)]
	[h: CenterXT= CurrentXT + WidthT/2]
	[h: CenterYT= CurrentYT + HeightT/2]
	[h: CurrentFacingT = -(getTokenRotation(id)+90)]
	[h: RelativeX = CenterXT-OldCenterX]
	[h: RelativeY = CenterYT-OldCenterY]
    [h: SinT = math.sin(-Rotation)]
	[h: CosT = math.cos(-Rotation)]
    [h: NewRelativeX= CosT*RelativeX -Sint*RelativeY ]
	[h: NewRelativeY= SinT*RelativeX +Cost*RelativeY ]
	[h: NewPosX=round(CenterX+NewRelativeX-WidthT/2)]
	[h: NewPosY=round(CenterY+NewRelativeY-HeightT/2)]
    


	
	[h: moveToken(NewPosX, NewPosY, 1, id)]
	[h: setTokenFacing(CurrentFacingT +Rotation, id)]
}]
