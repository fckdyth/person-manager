# Person CRUD Application

## Overview

A simple Person CRUD application using Spring Boot, Next.js, and PostgreSQL. The application allows users to perform basic CRUD operations on person data, all running in Docker containers.

## Technologies

- Backend: Spring Boot (Java)

- Frontend: Next.js (React.js)

- Database: PostgreSQL

- Containerization: Docker

## Getting started

### 1. Clone repository

~~~sh
git clone https://github.com/fckdyth/person-manager.git
cd person-manager
~~~

### 2. Start app

~~~sh
docker compose -f 'docker-compose.yml' up -d --build
~~~

## Access

- ### Open browser and go to [localhost:3000](http://localhost:3000)

- ### API available at [localhost:8080](http://localhost:8080)

~~~sh
docker compose -f 'docker-compose.yml' down 
~~~