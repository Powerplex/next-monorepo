# Monorepo with yarn workspaces

This repository acts as a template for a monorepo architectures. It contains three packages.

- api: the API of the project, exposing some TS types definitions
- design: a design-system project exporting some components (TS + styles components)
- blog: a basic Next app consumming both the "api" and "design" workspaces

## How to start

1 - `cd api && yarn start`

2 - In another terminal: `cd blog && yarn dev`