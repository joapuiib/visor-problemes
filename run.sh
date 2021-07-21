#!/bin/bash

BUILD=0
ARGS=

while [ $# -gt 0 ] ; do
    case $1 in
        -b)
            BUILD=1
            ;;
        -d)
            ARGS="-e :development false"
            ;;
        *)
            ARGS="$ARGS $1"
            ;;
    esac
    shift
done

if [ $BUILD -eq 1 ]; then
    bundle exec middleman build $ARGS
else
    bundle exec middleman server $ARGS
fi
