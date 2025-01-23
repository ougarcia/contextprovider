#!/bin/bash

# requires httpie and jq

http get "https://pokeapi.co/api/v2/pokemon/?limit=149" \
  | jq \
  > "./src/assets/data.json"
