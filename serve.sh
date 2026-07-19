#!/bin/bash
# Start a local server to host the built page
# The dist/index.html is fully self-contained with everything inlined
PORT=${1:-8080}
echo "Serving at http://localhost:$PORT"
npx serve dist -p $PORT -s
