#!/bin/bash

# Setup script for cloning 5etools repositories
echo "Setting up 5etools repositories..."

# Clone 5etools-2014 and its images
echo "Cloning 5etools-2014..."
git clone https://github.com/5etools-mirror-3/5etools-2014-src.git 5etools-2014
cd 5etools-2014
echo "Cloning 5etools-2014 images..."
git clone https://github.com/5etools-mirror-3/5etools-2014-img.git img
cd ..

# Clone 5etools-2024 and its images
echo "Cloning 5etools-2024..."
git clone https://github.com/5etools-mirror-3/5etools-src.git 5etools-2024
cd 5etools-2024
echo "Cloning 5etools-2024 images..."
git clone https://github.com/5etools-mirror-3/5etools-img.git img
cd ..

echo "5etools setup complete!"
echo "Directory structure:"
echo "├── 5etools-2014/"
echo "│   └── img/"
echo "└── 5etools-2024/"
echo "    └── img/"
