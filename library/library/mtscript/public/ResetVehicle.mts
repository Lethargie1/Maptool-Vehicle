[h: CurrentX = getTokenX(1)]
[h: CurrentY = getTokenY(1)]
[h: Width = getTokenWidth()]
[h: Height = getTokenHeight()]
[h: CenterX = CurrentX + Width/2]
[h: CenterY = CurrentY + Height/2]
[h: CurrentFacing = -(getTokenRotation()+90)]

[h: setProperty("OldCenterX",CenterX)]
[h: setProperty("OldCenterY",CenterY)]
[h: setProperty("OldFacing",CurrentFacing)]