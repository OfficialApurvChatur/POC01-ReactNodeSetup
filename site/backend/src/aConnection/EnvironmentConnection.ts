import dotenv from "dotenv";


class EnvironmentConnection {
  private defaultConfig;
  private ENV = "default";
  private MACHINE = "default";
  private PORT = 7999;
  private APP = "default";

  constructor() {
    this.defaultConfig = dotenv.config();

    this.ENV = this.defaultConfig.parsed?.NODE_ENV as string;
    this.MACHINE = this.defaultConfig.parsed?.NODE_MACHINE as string;
    this.PORT = Number(this.defaultConfig.parsed?.PORT) as number;
    this.APP = this.defaultConfig.parsed?.NODE_APP as string;

    if (this.MACHINE === "local") {
      const path = this.connectFolder();      

      console.log(`Environment connection created successfully at path: "${path}"`);
    }
    
    this.ENV = process.env.NODE_ENV as string;
    this.MACHINE = process.env.NODE_MACHINE as string;
    this.PORT = Number(process.env.PORT) as number;
    this.APP = process.env.NODE_APP as string;
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
      MACHINE: this.MACHINE,
      PORT: this.PORT,
      APP: this.APP
    }
  }
};

const environmentConnection = new EnvironmentConnection();
export default environmentConnection;
export const getEnv = environmentConnection.getEnv();
