import dotenv from "dotenv";


class EnvironmentConnection {
  private defaultConfig;
  private PORT;
  private ENV;
  private MACHINE;
  private APP;

  constructor() {
    this.defaultConfig = dotenv.config();

    this.PORT = this.defaultConfig.parsed?.PORT
    this.ENV = this.defaultConfig.parsed?.NODE_ENV
    this.MACHINE = this.defaultConfig.parsed?.NODE_MACHINE
    this.APP = this.defaultConfig.parsed?.NODE_APP

    if (this.MACHINE === "local") {
      const path = this.connectFolder();
      
      this.PORT = process.env.PORT;
      this.ENV = process.env.NODE_ENV;
      this.MACHINE = process.env.NODE_MACHINE;
      this.APP = process.env.NODE_APP;

      console.log(`Environment connection created successfully at path: "${path}"`);
    }
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
      PORT: this.PORT || 7999,
      ENV: this.ENV || "default",
      MACHINE: this.MACHINE || "default",
      APP: this.APP || "default"
    }
  }
};

const environmentConnection = new EnvironmentConnection();
export default environmentConnection;
export const getEnv = environmentConnection.getEnv();
