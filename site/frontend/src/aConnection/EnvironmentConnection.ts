class EnvironmentConnection {
  private PORT = 5177;
  private ENV = "default";
  private MACHINE = "default";
  private APP = "default";

  constructor() {
    this.PORT = import.meta.env.VITE_PORT;
    this.ENV = import.meta.env.VITE_ENV;
    this.MACHINE = import.meta.env.VITE_MACHINE;
    this.APP = import.meta.env.VITE_APP;
  }

  public getEnv() {
    return {
      PORT: this.PORT,
      ENV: this.ENV,
      MACHINE: this.MACHINE,
      APP: this.APP,
    }
  }
}

const environmentConnection = new EnvironmentConnection();
export const getEnv = environmentConnection.getEnv();
