#!/bin/bash
export NODE_ENV=production

vue-cli-service build

# vue-cli-service build --mode admin --dest ../../public/admin
# vue-cli-service build --mode user-bet-record --dest ../../public/external/user-bet-record
# vue-cli-service build --mode wager-detail --dest ../../public/external/wager-detail
# vue-cli-service build --mode user-profit-control --dest ../../public/external/user-profit-control
