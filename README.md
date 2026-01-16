# Material by Supplier Extension

A SAP Fiori elements extension app for the RAP / Material Supplier core project
(core repo: `rap-material-supplier`). It builds on the core OData service and adds a focused UI5
extension layer around the `MatProv` entity.

This extension demonstrates:
- List Report/Object Page extensions for supplier-focused material data
- Structured Object Page sections with header KPIs and workflow actions
- Local annotations and metadata tailored to the extension
- Curated mock dataset for realistic local demos

## Local setup

Prerequisite: Node.js LTS

```
npm install
npm start
```

This runs with local mock data by default. If you want the dedicated mock profile:
```
npm run start-mock
```

## Scope

This repo includes the UI5 extension app, local annotations/metadata, and the UI5 tooling configs
needed to run and deploy the extension.

## Non-goals

This repo does not own the backend service, business logic, or system landscape configuration. It is
not a full clone of the core app and does not introduce new functional requirements.
