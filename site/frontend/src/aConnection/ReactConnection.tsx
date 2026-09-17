import React from "react";
import { getEnv } from "./EnvironmentConnection";


const ReactConnection = () => {
  // Render check
  console.log(`React connection created for ${getEnv.APP || "POC01-ReactNodeSetup"}...`);
  console.log(`(For ${getEnv.ENV || "development"} environment on ${getEnv.MACHINE || "local"} machine)`);

  // JSX
  return (
    <React.Fragment>
      {/* ReactConnection */}

      <div>
        <h1>React Connection</h1>
        <p>React connection created for {`${getEnv.APP || "POC01-ReactNodeSetup"}`}...</p>
        <p>{`(For ${getEnv.ENV || "development"} environment on ${getEnv.MACHINE || "local"} machine)`}</p>
      </div>

    </React.Fragment>
  )
}

export default ReactConnection;
