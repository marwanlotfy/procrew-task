# ProCrew-Task

procrew is task source code repo 

## Installation

```bash
git clone https://github.com/marwanlotfy/procrew-task.git procrew-task
```

## Usage
I assume that you have webserver already listen on port `80`
so the app will be listen on port `81`
so feel free to change the exposed port for api-gateway image 
```bash
cd procrew-task
docker-compose up
```
Now you can create new user by send `POST` request to   
[http://localhost:81/user](http://localhost:81/user)

And you can list created user by visit 
[http://localhost:81/user](http://localhost:81/user)

from the browser or `GET` request from [postman]([https://www.postman.com/downloads/)

## Database Diagram
![Database Diagram](https://github.com/marwanlotfy/procrew-task/blob/master/user_repository_db_digram.png)

## Features

![Watch the video](https://www.loom.com/i/96a07b3588ac4de2900952897e965fd0)](https://www.loom.com/share/cb37ef5da739466f8edc5930277bffcb)