# Root Makefile for School-Monitor monorepo

.PHONY: all
all: build

# Install dependencies for both NestJS backend and Next.js frontend
.PHONY: install
install:
	cd backend && npm install
	cd frontend && npm install

# Build both applications
.PHONY: build
build:
	cd backend && npm run build
	cd frontend && npm run build

# Run unit tests across modules
.PHONY: test
test:
	cd backend && npm run test --if-present
	cd frontend && npm run test --if-present

# Run local development cluster via Docker-Compose
.PHONY: dev
dev:
	docker-compose up --build

# Stop Docker containers
.PHONY: down
down:
	docker-compose down

# Clean build outputs
.PHONY: clean
clean:
	cd backend && rm -rf dist/
	cd frontend && rm -rf build/ .next/
