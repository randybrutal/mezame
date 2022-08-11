#!/bin/bash
export NODE_ENV=development

# version='xbb'
# devEnv='admin'

# if [[ "$1" ]] ; then
#     devEnv=$1
# fi

# if [[ "$2" ]] ; then
#     version=$2
# fi

# export VUE_APP_VERSION=$version
# export VUE_APP_DEV_ENV=$devEnv

vue-cli-service serve --mode $devEnv
