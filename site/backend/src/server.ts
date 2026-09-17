import "./aConnection/EnvironmentConnection.js"
import { getEnv } from "./aConnection/EnvironmentConnection.js";

import http from "http";
import fs from "fs/promises";
import path from "path";


const init = () => {
  // Create node connection
  const nodeConnection = http.createServer( async (request, response) => {

    // For home url
    if (request.url === "/") {
      // Read index.html file
      const indexHTML = await fs.readFile(
        path.join(process.cwd(), "index.html"),
        "utf-8"
      );

      const returnHTML = indexHTML
        .replace("{{ NODE_APP }}", String(getEnv.PORT))
        .replace("{{ NODE_ENV }}", getEnv.ENV)
        .replace("{{ NODE_MACHINE }}", getEnv.MACHINE);

      // Response - write head
      response.writeHead(200, {
        "Content-Type": "text/html",
      });

      // Response - end
      response.end(returnHTML);
      return;
    }

    // For backend.png url
    if (request.url === "/backend.png") {
      // Read backend.png file
      const backendPNG = await fs.readFile(
        path.join(process.cwd(), "public", "backend.png")
      )

      // Response - write head
      response.writeHead(200, {
        "Content-Type": "image/png",
      });

      // Response - end
      response.end(backendPNG);
      return;
    }

    // For other url
    // Response - write head
    response.writeHead(404, {
      "Content-Type": "text/plain"
    });

    // Response - end
    response.end("Intenal Server Error")    
  });

  // Listen node connection
  nodeConnection.listen(getEnv.PORT, () => {
    console.log(`Node connection listening on http://localhost:${getEnv.PORT} at PORT: ${getEnv.PORT}`)
    console.log(`(For ${getEnv.ENV} env of ${getEnv.MACHINE} machine)`)
  })
};

init();
