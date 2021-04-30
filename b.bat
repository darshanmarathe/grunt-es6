cls
call rimraf dist
call grunt
dir dist
Xcopy %cd%\dist C:\Learning\ServerApp\ServerApp\Scripts\js /E /H /C /I /Y

