// @ts-nocheck
import app from "./dist/server/app.js";
import { nodeListener } from "domco/listener";
import { createServer } from "node:http";

createServer(nodeListener(app.fetch)).listen(3000);
