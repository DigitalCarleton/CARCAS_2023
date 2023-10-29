#!/bin/bash

# Get the current version of the repository by looking at the last "version" 
# tag and extracting the number after it. All the version tags are in the 
# format: v<version-number>. For example: v1, v2, v3, v4... etc.
# Henry Burkhardt, 10/29/2023

# Get the most recent tag that starts with "v"
latest_tag=$(git describe --tags --match "v*" --abbrev=0)

# Extract the version number by removing the "v" prefix
current_version_number=${latest_tag#"v"}

# Generate new version number
next_version_number=$((current_version_number + 1))

echo "Latest version: $current_version_number"
echo "::set-output name=current-version::$current_version_number"

echo "Next version: $next_version_number"
echo "::set-output name=next-version::$next_version_number"
