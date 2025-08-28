#!/bin/bash

echo "🚀 Starting both Client and Admin apps..."

# Function to cleanup background processes
cleanup() {
    echo "🛑 Stopping both apps..."
    kill $(jobs -p) 2>/dev/null
    exit
}

# Set up trap to cleanup on script exit
trap cleanup SIGINT SIGTERM

# Start client app in background
echo "🌐 Starting Client App on port 5173..."
npm run dev &

# Start admin app in background
echo "🌐 Starting Admin App on port 5174..."
cd admin-app
npm run dev &

# Wait for user to press Ctrl+C
echo ""
echo "✅ Both apps are running!"
echo "   Client App: http://localhost:5173"
echo "   Admin App:  http://localhost:5174"
echo ""
echo "Press Ctrl+C to stop both apps..."

# Wait for background processes
wait