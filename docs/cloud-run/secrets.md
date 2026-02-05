---
title: "Secrets Management"
sidebar_position: 4
---

# Secrets Management

Cloud Run jobs often need access to sensitive credentials like API keys, database passwords, or service tokens. Devplan provides secure secrets management that stores these values safely and injects them into your cloud runs as environment variables.

## Overview

Secrets in Devplan are:

- **Encrypted at rest** - Stored securely using industry-standard encryption
- **Never displayed** - Values are never shown in the UI after creation
- **Automatically redacted** - Secret values are filtered from all log output
- **Workspace-scoped** - Only accessible to jobs in your workspace

## Managing Secrets

### Accessing Secrets Management

1. Go to **Settings** in the navigation
2. Click on the **Development** tab
3. Find the **Secrets** section

### Creating a Secret

1. Click **Create secret**
2. Enter a **Name** for the secret
3. Enter the **Value** (this will not be shown again)
4. Click **Create**

**Important:** Secret values are stored securely and are **never shown again** after creation. Make sure to store your original values safely.

### Updating a Secret

Secret names are immutable, but you can update the value:

1. Find the secret in the table
2. Click the menu icon (**...**) on the right
3. Select **Update value**
4. Enter the new value
5. Click **Update**

### Deleting a Secret

1. Find the secret in the table
2. Click the menu icon (**...**) on the right
3. Select **Delete**
4. Confirm the deletion

**Warning:** Deleting a secret will cause any Cloud Run jobs that depend on it to fail. Make sure no active jobs or setup scripts require the secret before deleting.

## Secret Naming Conventions

### Requirements

Secret names must:
- Start with a letter (a-z, A-Z)
- Contain only letters, numbers, underscores, and hyphens
- Be 256 characters or less
- Be unique within your workspace

### Recommended Patterns

Use descriptive, uppercase names with underscores:

```
# Cloud Provider Credentials
GCLOUD_SA_KEY_B64
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AZURE_CLIENT_ID
AZURE_CLIENT_SECRET
AZURE_TENANT_ID

# API Keys
GITHUB_TOKEN
NPM_TOKEN
OPENAI_API_KEY
STRIPE_SECRET_KEY

# Database Credentials
DATABASE_URL
DATABASE_PASSWORD
REDIS_PASSWORD

# Service Credentials
SENTRY_DSN
DATADOG_API_KEY
SLACK_WEBHOOK_URL
```

## Using Secrets in Setup Scripts

Secrets are automatically injected as environment variables when your Cloud Run job starts. Reference them in your setup script using standard shell syntax:

### Basic Usage

```bash
#!/bin/bash
set -e

# Secrets are available as environment variables
echo "Using GitHub token to clone private repos..."
git clone https://${GITHUB_TOKEN}@github.com/myorg/private-repo.git

# Configure npm with private registry token
npm config set //npm.pkg.github.com/:_authToken=$GITHUB_TOKEN
```

### Cloud Provider Authentication

```bash
#!/bin/bash
set -e

# GCP - Decode base64-encoded service account key
echo "$GCLOUD_SA_KEY_B64" | base64 -d > /tmp/gcloud-key.json
gcloud auth activate-service-account --key-file=/tmp/gcloud-key.json

# AWS - Configure credentials file
mkdir -p ~/.aws
cat > ~/.aws/credentials << EOF
[default]
aws_access_key_id = $AWS_ACCESS_KEY_ID
aws_secret_access_key = $AWS_SECRET_ACCESS_KEY
EOF

# Azure - Login with service principal
az login --service-principal \
    --username "$AZURE_CLIENT_ID" \
    --password "$AZURE_CLIENT_SECRET" \
    --tenant "$AZURE_TENANT_ID"
```

### Database Connections

```bash
#!/bin/bash
set -e

# Export database URL for the application
echo "DATABASE_URL=$DATABASE_URL" >> "$DEVPLAN_ENV"

# Or construct from individual components
DB_URL="postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/${DB_NAME}"
echo "DATABASE_URL=$DB_URL" >> "$DEVPLAN_ENV"
```

### Private Package Registries

```bash
#!/bin/bash
set -e

# npm private registry
npm config set //registry.npmjs.org/:_authToken=$NPM_TOKEN

# GitHub Packages
npm config set @myorg:registry https://npm.pkg.github.com/
npm config set //npm.pkg.github.com/:_authToken=$GITHUB_TOKEN

# Python private index
pip config set global.extra-index-url "https://${PYPI_USER}:${PYPI_PASSWORD}@pypi.mycompany.com/simple"

# Go private modules
git config --global url."https://${GITHUB_TOKEN}@github.com/".insteadOf "https://github.com/"
export GOPRIVATE="github.com/myorg/*"
```

## Security Best Practices

### 1. Principle of Least Privilege

Only create secrets that are actually needed. Use credentials with minimal required permissions.

```bash
# Good: Read-only token for pulling code
GITHUB_TOKEN_READONLY

# Avoid: Admin token when read access is sufficient
GITHUB_ADMIN_TOKEN
```

### 2. Rotate Secrets Regularly

Update secret values periodically:
- Immediately after any potential exposure
- On a regular schedule (e.g., quarterly)
- When team members leave

### 3. Never Log Secret Values

Even though Devplan automatically redacts secrets from logs, avoid explicitly logging them:

```bash
#!/bin/bash

# Bad - Don't do this
echo "Using token: $GITHUB_TOKEN"

# Good - Reference without exposing
echo "Authenticating with GitHub..."
git clone https://${GITHUB_TOKEN}@github.com/org/repo.git
```

### 4. Use Environment-Specific Secrets

If you have multiple environments, use clear naming:

```
DATABASE_URL_STAGING
DATABASE_URL_PRODUCTION
AWS_ACCESS_KEY_ID_DEV
AWS_ACCESS_KEY_ID_PROD
```

### 5. Validate Secrets in Setup

Check that required secrets are present before proceeding:

```bash
#!/bin/bash
set -e

# Validate required secrets
required_secrets=("GITHUB_TOKEN" "DATABASE_URL" "AWS_ACCESS_KEY_ID")

for secret in "${required_secrets[@]}"; do
    if [ -z "${!secret}" ]; then
        echo "Error: Required secret $secret is not set"
        exit 1
    fi
done

echo "All required secrets are configured"
```

### 6. Clean Up Temporary Files

Remove files containing secret data:

```bash
#!/bin/bash
set -e

# Write secret to temp file
echo "$GCLOUD_SA_KEY_B64" | base64 -d > /tmp/gcloud-key.json

# Ensure cleanup on exit
trap "rm -f /tmp/gcloud-key.json" EXIT

# Use the file
gcloud auth activate-service-account --key-file=/tmp/gcloud-key.json
```

## Common Secret Types

### Cloud Provider Credentials

For accessing cloud services during builds and tests:

| Secret Name | Purpose |
|-------------|---------|
| `GCLOUD_SA_KEY_B64` | GCP service account (base64-encoded JSON) |
| `AWS_ACCESS_KEY_ID` | AWS access key |
| `AWS_SECRET_ACCESS_KEY` | AWS secret key |
| `AZURE_CLIENT_ID` | Azure service principal |
| `AZURE_CLIENT_SECRET` | Azure client secret |
| `AZURE_TENANT_ID` | Azure tenant ID |

**Encoding a GCP service account key:**
```bash
base64 -i service-account.json | tr -d '\n'
```

### Private Package Registries

For accessing private packages during dependency installation:

| Secret Name | Purpose |
|-------------|---------|
| `GITHUB_TOKEN` | GitHub Packages, private repos |
| `NPM_TOKEN` | Private npm registry |
| `PYPI_PASSWORD` | Private PyPI index |
| `MAVEN_PASSWORD` | Private Maven repository |

### Test Database Connections

For running integration tests:

| Secret Name | Example Format |
|-------------|----------------|
| `DATABASE_TEST_URL` | `postgresql://user:pass@host:5432/testdb` |
| `REDIS_TEST_URL` | `redis://:password@host:6379/0` |
| `MONGODB_TEST_URI` | `mongodb+srv://user:pass@cluster.mongodb.net/testdb` |

## Troubleshooting

### Secret Not Available in Job

**Symptoms:** Environment variable is empty or not set

**Solutions:**
1. Verify the secret name matches exactly (case-sensitive)
2. Check that the secret was created in the correct workspace
3. Ensure you're referencing it correctly: `$SECRET_NAME` or `${SECRET_NAME}`

### Job Fails After Secret Update

**Symptoms:** Jobs that previously worked now fail

**Solutions:**
1. Verify the new secret value is correct
2. Check that the format hasn't changed (e.g., base64 encoding)
3. Test with a new "Test setup" run

### Secret Value Appears in Logs

**Symptoms:** Sensitive data visible in job output

**Solutions:**
1. This shouldn't happen - Devplan automatically redacts secret values
2. Contact support if you observe unredacted secrets
3. Rotate the secret immediately if exposed

### "Secret with this name already exists"

**Symptoms:** Cannot create a secret with desired name

**Solutions:**
1. Use a different name
2. If updating an existing secret, use the Update function instead
3. Delete the old secret first if it's no longer needed

## Secrets Table Reference

The secrets table displays the following information:

| Column | Description |
|--------|-------------|
| **Name** | The secret identifier (with copy button) |
| **Last Updated** | When the secret value was last changed |
| **Created By** | User who created the secret |
| **Actions** | Menu for Update/Delete operations |

## Next Steps

- Learn how to use secrets in [Setup Scripts](./setup)
- Understand the full [Running Tasks](./run) workflow
- Return to the [Cloud Run Overview](./)

**Questions?** Contact support at info@devplan.com
