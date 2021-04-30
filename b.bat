cls
call rimraf dist
call grunt es6
call grunt es5
dir dist
Xcopy %cd%\dist C:\Learning\ServerApp\ServerApp\Scripts\js /E /H /C /I /Y

