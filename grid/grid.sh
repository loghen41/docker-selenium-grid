#!/bin/bash

source ./.env

start() {
    docker-compose up -d
    docker-compose scale chrome=$NUM_SESSIONS
}

stop() {
    docker-compose down
}

### main logic ###
case "$1" in
    start)
        start
        ;;
    stop)
        stop
        ;;
    status)
        docker ps
        ;;
    restart|reload|condrestart)
        stop
        start
        ;;
    *)
        echo $"Usage: $0 {start|stop|restart|reload|status}"
        exit 1
esac

exit 0