#!/usr/bin/env bash

zip -r server.zip ./ -x *.git* node_modules/\* && mkdir ./build && mv ./server.zip ./build/
