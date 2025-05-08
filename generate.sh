#!/bin/bash
set -e

rm -rf generated/*

mkdir -p generated/ts
pbjs -t static-module -w commonjs -o generated/ts/index.js proto/*.proto
pbts -o generated/ts/index.d.ts generated/ts/index.js