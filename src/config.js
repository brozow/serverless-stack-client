const dev = {
  STRIPE_KEY: "pk_test_auoWBKItAO84jaYWD8Kt5Zlp009ZtYye1b",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-eu9gnhghgty8"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://notes-api.brozow.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_SmpVbUKUw",
    APP_CLIENT_ID: "46iekn33rdiuh585poqtlcadtq",
    IDENTITY_POOL_ID: "us-east-1:03eb4108-5eb0-44b9-9730-2954c494c086"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_auoWBKItAO84jaYWD8Kt5Zlp009ZtYye1b",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-16uwu2y9gqg8n"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://notes-api.brozow.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_vKYwBibzF",
    APP_CLIENT_ID: "369mhaob84irg2lmk8navsc7lf",
    IDENTITY_POOL_ID: "us-east-1:9a24b735-51c6-475b-9612-b31241904c80"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
