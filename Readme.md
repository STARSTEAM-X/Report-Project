# Report-Project

## Overview

This repository contains a frontend (Vite/React) located in `Frontend/` and a .NET backend located in `Myapp/`.

## Setup

Follow these steps to prepare, run, and build the project on Windows.

### Prerequisites
- Node.js (LTS) and npm or yarn — https://nodejs.org/
- .NET SDK 8.0 or later — https://dotnet.microsoft.com/
- Git (optional but recommended)

### Frontend (development)
1. Open a terminal and change to the frontend folder:

	cd Frontend

2. Install dependencies:

	npm install

3. Run the dev server:

	npm run dev

The frontend will typically be available at http://localhost:5173 (check the Vite output).

### Backend (`Myapp`) (development)
1. Open a separate terminal and change to the backend folder:

	cd Myapp

2. Restore and run with the .NET SDK:

	dotnet restore
	dotnet run

By default the backend will bind to a local port (check `Properties/launchSettings.json` or console output). If you need to set environment variables, use PowerShell or set them in `appsettings.Development.json` as appropriate.

### Build (production)
- Frontend: from `Frontend/` run `npm run build`. The production assets will be in `Frontend/dist`.
- Backend: from `Myapp/` run `dotnet publish -c Release -o ./publish` to produce the distributable files.

### Common commands
- Install frontend deps: `cd Frontend && npm install`
- Start frontend dev: `cd Frontend && npm run dev`
- Start backend dev: `cd Myapp && dotnet run`
- Build frontend: `cd Frontend && npm run build`
- Publish backend: `cd Myapp && dotnet publish -c Release -o ./publish`

### Troubleshooting
- If ports conflict, update the dev server port or stop the other process using that port.
- Ensure Node and .NET SDK versions match the prerequisites.
- If frontend cannot reach backend, verify CORS settings and backend URL/port.

---

If you'd like, I can add specific environment variable examples, CI build steps, or Docker instructions next.
