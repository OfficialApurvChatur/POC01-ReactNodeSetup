import dotenv from "dotenv";


class EnvironmentConnection {
  private defaultConfig;
  private ENV = "default";
  private BACKEND_URL = "default";
  private FRONTEND_URL = "default";

  constructor() {
    this.defaultConfig = dotenv.config();

    this.ENV = this.defaultConfig.parsed?.NODE_ENV as string;
    this.BACKEND_URL = this.defaultConfig.parsed?.BACKEND_URL as string;
    this.FRONTEND_URL = this.defaultConfig.parsed?.FRONTEND_URL as string;

    const path = this.connectFolder();
    
    this.ENV = process.env.NODE_ENV as string;
    this.BACKEND_URL = process.env.NODE_MACHINE as string;
    this.FRONTEND_URL = process.env.NODE_APP as string;

    console.log(`Environment connection created successfully at path: "${path}"`);
  }

  private connectFolder() {
    const path = `env/.env.${this.ENV}`;

    dotenv.config({
      path: `env/.env.${this.ENV}`,
      override: true
    });

    return path;
  }

  public getEnv() {
    return {
      ENV: this.ENV,
      BACKEND_URL: this.BACKEND_URL,
      FRONTEND_URL: this.FRONTEND_URL
    }
  }
};

const environmentConnection = new EnvironmentConnection();
export default environmentConnection;
export const getEnv = environmentConnection.getEnv();
