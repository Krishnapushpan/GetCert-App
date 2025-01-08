# GetCert-App
GetCert app  is a React.js-enabled certificate issuance platform designed to securely issue, view, and verify certificates.
Issue certificates instantly with pre-designed templates, ensuring consistency and professionalism.Add recipient details, course information, date of issue, and other specific data seamlessly.The GetCert App is a powerful tool for modern organizations looking to digitize and simplify the certificate management process 
# Prerequisites
Node.js

React

npm

MongoDB

Docker installed on your machine

Docker Compose installed on your machine
# Installation
Getting Started Clone the Repository First, clone the repository from GitHub: git clone [repo url] cd Docker Next, use Docker Compose to build and run the containers: docker-compose up --build

This command will build the Docker images and start the containers for the application and MongoDB database.Once the containers are running, you can access the application in your web browser at:

http://localhost:3000

To stop the containers, press Ctrl+C in the terminal where docker-compose is running, then use:

docker-compose down

This will stop and remove the containers.
# Project Structure
backend: Contains the Express.js server code and docker file.

frontend: Contains the HTML, Tailwind CSS, and JavaScript files for the user interface and docker file.

docker-compose.yml: Docker Compose configuration file for setting up the application and MongoDB containers.
# Overall Workflow
Authenticate:Sign up or log in.

Perform Actions:

Only Admin can issue certificates 
users can see the certificate by search with id in the home 

# Contact
Email: krishnapushpan2003@gmail.com




