const dev = {
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1f9pad7o73bpl"
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://yktgq19q5e.execute-api.ap-southeast-2.amazonaws.com/dev/"
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_isuxxmvAT",
    APP_CLIENT_ID: "56vkh8ce6rk4f508suj5nfa69i",
    IDENTITY_POOL_ID: "ap-southeast-2:2d42d7b4-389b-4b17-828d-a127fe87ce78"
  }
};

const prod = {
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1ei4dh93v1dia"
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://81z0812dg8.execute-api.ap-southeast-2.amazonaws.com/prod/"
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_W5I7FN2TC",
    APP_CLIENT_ID: "66onapuluu3lslh8d4nb1d206r",
    IDENTITY_POOL_ID: "ap-southeast-2:071bf908-07c0-4d50-b68a-362edc58535f"
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
