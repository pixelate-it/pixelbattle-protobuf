#!/bin/bash
set -e

mkdir -p generated/ts

find proto -type f -name '*.proto' | while read -r proto; do
  relpath="${proto#proto/}"
  basename="${relpath%.proto}"
  out_js="generated/ts/$basename.js"
  out_dts="generated/ts/$basename.d.ts"

  mkdir -p "$(dirname "$out_js")"

  echo "Генерация $out_js и $out_dts"

  pbjs -t static-module -o "$out_js" "$proto"
  pbts -o "$out_dts" "$out_js"
done