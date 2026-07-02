$ErrorActionPreference = "Stop"

Set-Location (Join-Path $PSScriptRoot "..")

$env:NEXT_TEST_WASM = "1"
$env:NEXT_TEST_WASM_DIR = (Resolve-Path "node_modules\@next\swc-wasm-nodejs").Path

& "node_modules\.bin\next.cmd" dev --webpack -H 127.0.0.1 -p 3000
