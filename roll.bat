rem --file dist\main.js
call rollup dist\index.js  --format iife
pause
call rollup dist\index.js  --format amd
pause
call rollup dist\index.js  --format umd
pause
call rollup dist\index.js  --format system
pause
call rollup dist\index.js  --format cjs
pause
call rollup dist\index.js  --format es