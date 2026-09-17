import React from "react";


const ReactConnection = () => {
  // Render check
  console.log(`React connection created for ${import.meta.env.VITE_APP || "POC01-ReactNodeSetup"}...`);
  console.log(`(For ${import.meta.env.VITE_ENV || "development"} environment on ${import.meta.env.VITE_MACHINE || "local"} machine)`);

  // JSX
  return (
    <React.Fragment>
      {/* ReactConnection */}

      <div>
        <h1>React Connection</h1>
        <p>React connection created for ${import.meta.env.VITE_APP || "POC01-ReactNodeSetup"}...</p>
        <p>{`(For ${import.meta.env.VITE_ENV || "development"} environment on ${import.meta.env.VITE_MACHINE || "local"} machine)`}</p>
      </div>

    </React.Fragment>
  )
}

export default ReactConnection;
