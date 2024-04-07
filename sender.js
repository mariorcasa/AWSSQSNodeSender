const express = require('express')
const { SendMessageCommand, SQSClient } = require("@aws-sdk/client-sqs")
const client = new SQSClient({
  region: "us-east-1"
});
const SQS_QUEUE_URL = "https://sqs.AWS-REGION.amazonaws.com/ACCOUNT-NUMBER/SQS-NAME";
const app = express()
const port = 3000

app.use(express.json());

app.get('/sender1', async (req, res) => {
  console.log("Executing Sender 1")
  const command = new SendMessageCommand({
    QueueUrl: SQS_QUEUE_URL,
    DelaySeconds: 10,
    MessageAttributes: {
      ProductName: {
        DataType: "String",
        StringValue: "iPhone 13",
      },
      Manufacturer: {
        DataType: "String",
        StringValue: "Apple Inc.",
      },
      ReleaseDate: {
        DataType: "String",
        StringValue: "September 24, 2021",
      },
      Color: {
        DataType: "String",
        StringValue: "Midnight",
      },
    },
    MessageBody:
      "Information about the latest iPhone 13 model released by Apple Inc., available in Midnight color variant.",
  });

  const response = await client.send(command);
  console.log(response);
  console.log("Sender 1 Complete")
  res.status(200).json(response);
})

app.get('/sender2', async (req, res) => {
  console.log("Executing Sender 2")
  const command = new SendMessageCommand({
    QueueUrl: SQS_QUEUE_URL,
    DelaySeconds: 10,
    MessageAttributes: {
      EventName: {
        DataType: "String",
        StringValue: "TEDxTalk",
      },
      Speaker: {
        DataType: "String",
        StringValue: "Dr. Jane Goodall",
      },
      Topic: {
        DataType: "String",
        StringValue: "Conservation and Primatology",
      },
      Location: {
        DataType: "String",
        StringValue: "New York City",
      },
    },
    MessageBody:
      "Details about the upcoming TEDxTalk event featuring Dr. Jane Goodall discussing conservation and primatology, to be held in New York City.",    
  });

  const response = await client.send(command);
  console.log(response);  
  console.log("Sender 2 Complete")
  res.status(200).json(response);
})

app.get('/sender3', async (req, res) => {
  console.log("Executing Sender 3")
  const command = new SendMessageCommand({
    QueueUrl: SQS_QUEUE_URL,
    DelaySeconds: 10,
    MessageAttributes: {
      ProductName: {
        DataType: "String",
        StringValue: "PlayStation 5",
      },
      Manufacturer: {
        DataType: "String",
        StringValue: "Sony Interactive Entertainment",
      },
      ReleaseDate: {
        DataType: "String",
        StringValue: "November 12, 2020",
      },
      Price: {
        DataType: "Number",
        StringValue: "499.99",
      },
      Available: {
        DataType: "String",
        StringValue: "true",
      },
      Colors: {
        DataType: "String",
        StringValue: "[\"White\", \"Black\"]",
      },
    },
    MessageBody:
      "Details about the PlayStation 5 gaming console by Sony Interactive Entertainment. Released on November 12, 2020, priced at $499.99. Available in both White and Black colors.",
  });
  const response = await client.send(command);
  console.log(response);  
  console.log("Sender 3 Complete")
  res.status(200).json(response);
})


app.listen(port, () => {
  console.log(`Sender listening on port ${port}`)
})