#!/bin/bash

ARGS="server"

while [ $# -gt 0 ] ; do
    case $1 in
        -b)
            ARGS="build"
            ;;
        -d)
            ARGS="$ARGS -e :development false"
            ;;
        console)
            ARGS="console"
            ;;
        *)
            ARGS="$ARGS $1"
            ;;
    esac
    shift
done

bundle exec middleman $ARGS
