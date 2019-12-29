#!/bin/sh
while read p; do
  echo "\"${p}\", " | tr '[:upper:]' '[:lower:]'
done < wordstoconvert
