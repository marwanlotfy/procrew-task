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
Click Thumbnail to watch the video !
[![Watch the video](https://www.loom.com/i/bf445c87690f4d728fbdc4c41e028d7b)](https://www.loom.com/share/975f61806b4848f9bce1c3b54cfc3e01?sharedAppSource=personal_library)