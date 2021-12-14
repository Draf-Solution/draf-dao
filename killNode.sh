#!/bin/bash
# ------------------------------------------------------------------
# [Author] David Wong
#          Kills all node process for deployment
# ------------------------------------------------------------------

PROCESS=`ps ax | grep -i node | grep -v grep | awk '{print $1}'`

if [ ! -z $PROCESS ] ; then
    ps ax | grep -i node | grep -v grep | awk '{print $1}' | xargs kill
    echo "Kill all Node Process"
    exit 1;
else
    echo "No Node Process to kill"
fi

