export default {
  STRIPE_KEY: "pk_test_auoWBKItAO84jaYWD8Kt5Zlp009ZtYye1b",
  MAX_ATTACHMENT_SIZE: 5000000,   
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploads-brozow"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://bd61hoycf3.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_sKkFifkxC",
    APP_CLIENT_ID: "5msbjljepb20kl3i3cartd8n13",
    IDENTITY_POOL_ID: "us-east-1:b6f139c4-69dd-455d-8dff-ce9ee24d7b2b"
  }
};
