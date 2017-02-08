#!/bin/sh

# colors
COLOR_NC='\033[0m'
COLOR_RED='\033[0;31m'
COLOR_GREEN='\033[0;32m'
COLOR_LIGHT_GRAY='\033[0;37m'
COLOR_BOLD='\033[1m'

printf "${COLOR_LIGHT_GRAY}eslint-preset test ${COLOR_NC}"

cp test/test-case/source.js test/tmp.js
eslint --fix test/tmp.js

expectedsum=`md5 -q test/test-case/expected.js`
resultingsum=`md5 -q test/tmp.js`

if [ "$expectedsum" != "$resultingsum" ]; then
  echo "${COLOR_BOLD}failed${COLOR_NC}"
  printf "checksum for "
  printf "${COLOR_BOLD}test/test-case/expected.js${COLOR_NC} and "
  echo "${COLOR_BOLD}test/tmp.js${COLOR_NC} doesn't match."
  printf "see the result of "
  printf "${COLOR_BOLD}eslint --fix test/test-case/source.js${COLOR_NC} "
  echo "in the ${COLOR_BOLD}test/tmp.js${COLOR_NC} file."
  exit 1
else
  echo "${COLOR_BOLD}passed${COLOR_NC}"
fi
