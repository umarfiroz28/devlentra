@echo off
setlocal
pushd "%~dp0.."
set "NEXT_TEST_WASM=1"
set "NEXT_TEST_WASM_DIR=%CD%\node_modules\@next\swc-wasm-nodejs"
node_modules\.bin\next.cmd dev --webpack -H 127.0.0.1 -p 3000
popd
