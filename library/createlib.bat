del .\library\public\*.css 
del .\library\public\*.js 
del .\library\public\*.html 
xcopy ..\src\ressources ..\public\ressources /s
xcopy ..\public\release .\library\public /s
del Vehicle.mtlib
tar -a -cv -f Vehicle.zip --exclude *.zip  *
rename  Vehicle.zip  Vehicle.mtlib