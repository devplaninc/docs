---
title: "Setup Scripts"
sidebar_position: 2
---

# Setup Scripts

Setup scripts allow you to prepare the cloud environment before task implementation. Use them to install dependencies, configure tools, and set up everything the Codex agent needs to build and test your code.

## Overview

If you provide a setup script at `.devplan/run/setup.sh` in your repository, Cloud Run executes it before the Codex agent begins work. The script is optional - if not provided, Cloud Run skips directly to task implementation.

**Common setup tasks:**
- Install project dependencies (npm, pip, go mod, etc.)
- Install specific language versions
- Configure access to private package registries
- Set up database connections for tests
- Configure API keys for external services used in tests

## Creating a Setup Script

Create a file at `.devplan/run/setup.sh` in your repository:

```bash
#!/bin/bash
set -e  # Exit on any error

echo "=== Starting environment setup ==="

# Install dependencies
npm install

echo "=== Setup complete ==="
```

Make sure the script is executable:
```bash
chmod +x .devplan/run/setup.sh
```

## Exporting Environment Variables

Your setup script can export environment variables for use during the implementation phase by writing to the file specified in `$DEVPLAN_ENV`:

```bash
#!/bin/bash
set -e

# Export variables for the Codex agent
echo "DATABASE_URL=postgresql://localhost:5432/testdb" >> "$DEVPLAN_ENV"
echo "API_BASE_URL=https://api.example.com" >> "$DEVPLAN_ENV"
echo "NODE_ENV=test" >> "$DEVPLAN_ENV"
```

These exported variables will be available to the Codex agent during task implementation and test execution.

---

## Setting Up Test Environments

### Database Connections

Configure database access for running integration tests:

```bash
#!/bin/bash
set -e

echo "=== Configuring database for tests ==="

# Use secrets for database credentials
echo "DATABASE_URL=postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/${DB_NAME}" >> "$DEVPLAN_ENV"

# Or use a test database URL directly from secrets
echo "DATABASE_URL=$DATABASE_TEST_URL" >> "$DEVPLAN_ENV"

# For MongoDB
echo "MONGODB_URI=$MONGODB_TEST_URI" >> "$DEVPLAN_ENV"

# For Redis (used in tests)
echo "REDIS_URL=$REDIS_TEST_URL" >> "$DEVPLAN_ENV"
```

### Cloud Provider Credentials

Configure access to cloud services used during builds and tests:

```bash
#!/bin/bash
set -e

echo "=== Configuring cloud credentials ==="

# AWS
echo "AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID" >> "$DEVPLAN_ENV"
echo "AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY" >> "$DEVPLAN_ENV"
echo "AWS_DEFAULT_REGION=us-east-1" >> "$DEVPLAN_ENV"

# GCP - decode service account key
echo "$GCLOUD_SA_KEY_B64" | base64 -d > /tmp/gcloud-key.json
echo "GOOGLE_APPLICATION_CREDENTIALS=/tmp/gcloud-key.json" >> "$DEVPLAN_ENV"

# Azure
echo "AZURE_CLIENT_ID=$AZURE_CLIENT_ID" >> "$DEVPLAN_ENV"
echo "AZURE_CLIENT_SECRET=$AZURE_CLIENT_SECRET" >> "$DEVPLAN_ENV"
echo "AZURE_TENANT_ID=$AZURE_TENANT_ID" >> "$DEVPLAN_ENV"
```

---

## Language Version Management

### Python

Install a specific Python version using pyenv:

```bash
#!/bin/bash
set -e

echo "=== Setting up Python environment ==="

# Install pyenv dependencies
apt-get update && apt-get install -y \
    build-essential \
    libssl-dev \
    zlib1g-dev \
    libbz2-dev \
    libreadline-dev \
    libsqlite3-dev \
    libffi-dev

# Install pyenv
curl https://pyenv.run | bash

# Add pyenv to PATH
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"

# Install specific Python version
PYTHON_VERSION="3.11.7"
pyenv install $PYTHON_VERSION
pyenv global $PYTHON_VERSION

# Verify installation
python --version

# Install project dependencies
pip install --upgrade pip
pip install -r requirements.txt

# Install test dependencies
pip install -r requirements-dev.txt

echo "=== Python setup complete ==="
```

**Using virtual environments:**

```bash
#!/bin/bash
set -e

# Create and activate virtual environment
python -m venv .venv
source .venv/bin/activate

# Export for implementation phase
echo "VIRTUAL_ENV=$(pwd)/.venv" >> "$DEVPLAN_ENV"
echo "PATH=$(pwd)/.venv/bin:\$PATH" >> "$DEVPLAN_ENV"

# Install dependencies
pip install -r requirements.txt
pip install -r requirements-dev.txt
```

### Node.js

Install a specific Node.js version using nvm:

```bash
#!/bin/bash
set -e

echo "=== Setting up Node.js environment ==="

# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Install specific Node.js version
NODE_VERSION="20.11.0"
nvm install $NODE_VERSION
nvm use $NODE_VERSION
nvm alias default $NODE_VERSION

# Verify installation
node --version
npm --version

# Install project dependencies
npm ci

echo "=== Node.js setup complete ==="
```

**Using private npm registry:**

```bash
#!/bin/bash
set -e

# Configure private npm registry
npm config set //npm.pkg.github.com/:_authToken=$GITHUB_TOKEN
npm config set @myorg:registry https://npm.pkg.github.com/

# Or for a private registry
npm config set //npm.mycompany.com/:_authToken=$NPM_TOKEN

npm ci
```

### Go

Install a specific Go version:

```bash
#!/bin/bash
set -e

echo "=== Setting up Go environment ==="

GO_VERSION="1.22.0"

# Download and install Go
wget "https://go.dev/dl/go${GO_VERSION}.linux-amd64.tar.gz"
rm -rf /usr/local/go
tar -C /usr/local -xzf "go${GO_VERSION}.linux-amd64.tar.gz"
rm "go${GO_VERSION}.linux-amd64.tar.gz"

# Set up Go environment
export PATH=$PATH:/usr/local/go/bin
export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin

# Export for implementation phase
echo "PATH=/usr/local/go/bin:$HOME/go/bin:\$PATH" >> "$DEVPLAN_ENV"
echo "GOPATH=$HOME/go" >> "$DEVPLAN_ENV"

# Verify installation
go version

# Download dependencies
go mod download

echo "=== Go setup complete ==="
```

**With private Go modules:**

```bash
#!/bin/bash
set -e

# Configure Git for private modules
git config --global url."https://${GITHUB_TOKEN}@github.com/".insteadOf "https://github.com/"

# Set GOPRIVATE for private modules
export GOPRIVATE="github.com/myorg/*"
echo "GOPRIVATE=github.com/myorg/*" >> "$DEVPLAN_ENV"

go mod download
```

### Java

Install a specific Java version using SDKMAN:

```bash
#!/bin/bash
set -e

echo "=== Setting up Java environment ==="

# Install SDKMAN
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"

# Install specific Java version
JAVA_VERSION="21.0.2-tem"  # Temurin JDK 21
sdk install java $JAVA_VERSION
sdk default java $JAVA_VERSION

# Verify installation
java -version

# Export JAVA_HOME for implementation phase
echo "JAVA_HOME=$HOME/.sdkman/candidates/java/current" >> "$DEVPLAN_ENV"
echo "PATH=$HOME/.sdkman/candidates/java/current/bin:\$PATH" >> "$DEVPLAN_ENV"

echo "=== Java setup complete ==="
```

**With Maven and private repositories:**

```bash
#!/bin/bash
set -e

# Install Maven via SDKMAN
sdk install maven 3.9.6

# Configure Maven settings for private repositories
mkdir -p ~/.m2
cat > ~/.m2/settings.xml << EOF
<settings>
  <servers>
    <server>
      <id>private-repo</id>
      <username>${MAVEN_USERNAME}</username>
      <password>${MAVEN_PASSWORD}</password>
    </server>
  </servers>
</settings>
EOF

# Download dependencies
mvn dependency:resolve
```

**With Gradle:**

```bash
#!/bin/bash
set -e

# Install Gradle via SDKMAN
sdk install gradle 8.5

# Configure Gradle properties for private repositories
mkdir -p ~/.gradle
cat > ~/.gradle/gradle.properties << EOF
privateRepoUsername=${GRADLE_USERNAME}
privateRepoPassword=${GRADLE_PASSWORD}
EOF

# Download dependencies
./gradlew dependencies
```

---

## Complete Example Setup Scripts

### Node.js + PostgreSQL Project

```bash
#!/bin/bash
set -e

echo "=== Setting up Node.js project with PostgreSQL ==="

# Install Node.js 20
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install 20
nvm use 20

# Install dependencies
npm ci

# Configure test environment
echo "DATABASE_URL=$DATABASE_TEST_URL" >> "$DEVPLAN_ENV"
echo "REDIS_URL=$REDIS_TEST_URL" >> "$DEVPLAN_ENV"
echo "NODE_ENV=test" >> "$DEVPLAN_ENV"

echo "=== Setup complete ==="
```

### Python + AWS Services Project

```bash
#!/bin/bash
set -e

echo "=== Setting up Python project with AWS ==="

# Install Python 3.11
curl https://pyenv.run | bash
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
pyenv install 3.11.7
pyenv global 3.11.7

# Create virtual environment
python -m venv .venv
source .venv/bin/activate
echo "VIRTUAL_ENV=$(pwd)/.venv" >> "$DEVPLAN_ENV"

# Install dependencies
pip install -r requirements.txt
pip install -r requirements-dev.txt

# Configure AWS credentials for tests
echo "AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID" >> "$DEVPLAN_ENV"
echo "AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY" >> "$DEVPLAN_ENV"
echo "AWS_DEFAULT_REGION=us-east-1" >> "$DEVPLAN_ENV"
echo "AWS_S3_BUCKET=$AWS_S3_TEST_BUCKET" >> "$DEVPLAN_ENV"

# Configure database
echo "DATABASE_URL=$DATABASE_TEST_URL" >> "$DEVPLAN_ENV"

echo "=== Setup complete ==="
```

### Go + Private Modules Project

```bash
#!/bin/bash
set -e

echo "=== Setting up Go project ==="

# Install Go 1.22
GO_VERSION="1.22.0"
wget -q "https://go.dev/dl/go${GO_VERSION}.linux-amd64.tar.gz"
tar -C /usr/local -xzf "go${GO_VERSION}.linux-amd64.tar.gz"
rm "go${GO_VERSION}.linux-amd64.tar.gz"
export PATH=$PATH:/usr/local/go/bin
echo "PATH=/usr/local/go/bin:\$PATH" >> "$DEVPLAN_ENV"

# Configure private modules
git config --global url."https://${GITHUB_TOKEN}@github.com/".insteadOf "https://github.com/"
export GOPRIVATE="github.com/myorg/*"
echo "GOPRIVATE=github.com/myorg/*" >> "$DEVPLAN_ENV"

# Download dependencies
go mod download

# Configure test environment
echo "DATABASE_URL=$DATABASE_TEST_URL" >> "$DEVPLAN_ENV"
echo "REDIS_URL=$REDIS_TEST_URL" >> "$DEVPLAN_ENV"

echo "=== Setup complete ==="
```

---

## Testing Your Setup

Before running actual tasks, test your setup script to ensure it works correctly.

### Using the UI

1. Go to **Settings** > **Development**
2. In the **Secrets** section, find "Test setup"
3. Select a repository from the dropdown
4. Click **Test setup**
5. View results in **View setup test history**

This runs only the setup script without executing any coding steps, allowing you to verify your environment configuration.

### Common Issues

**Script not found:**
```
Setup script is not found, skipping
```
Ensure `.devplan/run/setup.sh` exists and is committed to your repository.

**Permission denied:**
```
bash: .devplan/run/setup.sh: Permission denied
```
Make the script executable: `chmod +x .devplan/run/setup.sh`

**Missing secrets:**
```
Error: Required secret DATABASE_URL is not set
```
Add the required secret in Settings > Development > Secrets.

---

## Best Practices

### 1. Fail Fast

Use `set -e` to stop execution on any error:

```bash
#!/bin/bash
set -e  # Exit immediately if a command fails
set -u  # Treat unset variables as errors (optional, be careful with this)
```

### 2. Log Progress

Add clear logging to help with debugging:

```bash
#!/bin/bash
set -e

echo "=== Installing dependencies ==="
npm ci

echo "=== Configuring environment ==="
echo "DATABASE_URL=$DATABASE_TEST_URL" >> "$DEVPLAN_ENV"

echo "=== Setup complete ==="
```

### 3. Validate Required Secrets

Check that required secrets are present before proceeding:

```bash
#!/bin/bash
set -e

# Validate required secrets
if [ -z "$DATABASE_TEST_URL" ]; then
    echo "Error: DATABASE_TEST_URL secret is not set"
    exit 1
fi

if [ -z "$GITHUB_TOKEN" ]; then
    echo "Error: GITHUB_TOKEN secret is not set"
    exit 1
fi

echo "All required secrets are configured"
```

### 4. Keep Scripts Idempotent

Scripts should work correctly even if run multiple times:

```bash
#!/bin/bash
set -e

# Good: npm ci removes existing node_modules
npm ci

# Good: Create directory only if it doesn't exist
mkdir -p ~/.config

# Good: Overwrite config files
cat > ~/.npmrc << EOF
@myorg:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=$GITHUB_TOKEN
EOF
```

### 5. Clean Up Sensitive Files

Remove temporary files containing secrets:

```bash
#!/bin/bash
set -e

# Ensure cleanup on exit
trap "rm -f /tmp/service-account.json" EXIT

# Write secret to temp file
echo "$GCLOUD_SA_KEY_B64" | base64 -d > /tmp/service-account.json
echo "GOOGLE_APPLICATION_CREDENTIALS=/tmp/service-account.json" >> "$DEVPLAN_ENV"
```

## Next Steps

- Learn about [Running Tasks](./run) to execute your configured environment
- Configure [Secrets Management](./secrets) for secure credential storage

**Questions?** Contact support at info@devplan.com
