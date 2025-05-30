# Sunrise

## Code Quality & Analysis

This repository uses [SonarCloud](https://sonarcloud.io/) for automated code analysis.

### How it works

- On every push or pull request to `main`, a GitHub Actions workflow runs SonarCloud analysis.
- Results are visible in the [SonarCloud dashboard](https://sonarcloud.io/dashboard?id=MCarlquist_Sunrise).

### Setup (for maintainers)

1. Go to **Settings > Secrets and variables > Actions** in your GitHub repository.
2. Add a new repository secret named `SONAR_TOKEN` with your SonarCloud token.
3. Project and organization keys are set in `.github/workflows/sonarcloud.yml`.

### SonarCloud Status

[![SonarCloud Status](https://sonarcloud.io/api/project_badges/measure?project=MCarlquist_Sunrise&metric=alert_status)](https://sonarcloud.io/dashboard?id=MCarlquist_Sunrise)