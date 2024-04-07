# AWSSQSNodeSender
This repository contains a simple Node.js application that demonstrates sending messages to an Amazon Simple Queue Service (SQS) queue using the AWS SDK for JavaScript.


## Prerequisites
Before running this application, ensure you have the following prerequisites installed:

- Node.js
- Docker (if you want to run the application in a Docker container)


## Running the Application

### Locally
- Clone this repository to your local machine.
- Install dependencies by running:
```bash
npm install
```
- Set up your AWS credentials by either configuring the AWS CLI or setting the AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY environment variables or use AWS Configure or use an AWS Role
- Run the application locally using:
```bash
node sender.js
```

### Using Docker
- Clone this repository to your local machine.
- Build the Docker image using the provided Dockerfile running:
```bash
docker build -t awssqsnodesender .
```
- Run the Docker container running: 
```bash
docker run -e AWS_SECRET_ACCESS_KEY="1a2b3c4d5e6f7g8h9i" -e AWS_ACCESS_KEY_ID="1a2b3c4d5e6f7g8h9i" -e AWS_SESSION_TOKEN="1a2b3c4d5e6f7g8h9i" -p 3000:3000 awssqsnodesender
```


## Usage
Once the application is running, you can access the following endpoints:

- /sender1: Sends a message related to iPhone 13 information to the SQS queue.
- /sender2: Sends a message related to a TEDxTalk event to the SQS queue.
- /sender3: Sends a message related to PlayStation 5 details to the SQS queue.

You can access these endpoints using a web browser or tools like cURL or Postman.
Ensure you have set up the SQS queue in your AWS account and adjust the queue URL in the code as necessary.


## Configuration
Ensure you have the necessary AWS credentials configured or provide them through environment variables. Additionally, replace the placeholders AWS-REGION, ACCOUNT-NUMBER, and SQS-NAME in the SQS_QUEUE_URL variable with your actual AWS region, account number, and SQS queue name.