#!/bin/bash

echo "🚀 Setting up both Client and Admin apps..."

# Install client app dependencies
echo "📦 Installing Client App dependencies..."
npm install

# Install admin app dependencies
echo "📦 Installing Admin App dependencies..."
cd admin-app
npm install
cd ..

echo "✅ Setup complete!"
echo ""
echo "🎯 To run both apps:"
echo "1. Terminal 1: npm run dev (Client App)"
echo "2. Terminal 2: cd admin-app && npm run dev (Admin App)"
echo ""
echo "🌐 Apps will be available at:"
echo "   Client App: http://localhost:5173"
echo "   Admin App:  http://localhost:5174"