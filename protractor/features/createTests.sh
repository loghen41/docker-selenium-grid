#!/usr/bin/env bash

if [ "$1" == '' ]
then
	echo "No test file for sharding provided. Please provide a test file. ie. ./createTests.sh load_test"
	exit 1
else
	file="${1}"
fi

if [ "$2" == '' ]
then
	echo "No initial integer for sharding provided. Using default of 1"
	i=1
else
	echo "Initial integer set to $2"
	i=$2
fi

if [ "$3" == '' ]
then
	echo "No final integer for sharding provided. Using default of 200"
	max=200
else
	echo "Max integer set to $3"
	max=$3
fi

until [ $i -gt $max ]
do
	cp "${file}.feature" "${file}${i}.feature"
	i=$(( i + 1))
done