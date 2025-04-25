# Person CRUD Application

## Overview

A simple Person CRUD application using Spring Boot, Next.js, and PostgreSQL. The application allows users to perform basic CRUD operations on person data, all running in Docker containers.

## Technologies

- Backend: Spring Boot (Java)

- Frontend: Next.js (React.js)

- Database: PostgreSQL

- Containerization: Docker

## Getting started (Docker)

### 1. Clone repository

~~~sh
git clone https://github.com/fckdyth/person-manager.git
cd person-manager
~~~

### 2. Start the app

~~~sh
docker compose -f 'docker-compose.yml' up -d --build
~~~

### 3. Access

- ### Open browser and go to <a href="http://localhost:3000" target="_blank">localhost:3000</a>

- ### API available at <a href="http://localhost:8080" target="_blank">localhost:8080</a>

### 4. Stop the app

~~~sh
docker compose -f 'docker-compose.yml' down 
~~~

## Manual setup (without Docker)

### 1. Set up PostgreSQL and create the necessary database.

### 2. Start the Spring Boot application

~~~sh
./gradlew build

./gradlew bootRun
~~~

### 3. Start the Next.js application

~~~sh
npm install

npm run dev
~~~