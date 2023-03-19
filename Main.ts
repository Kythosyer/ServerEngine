import { Application } from "./Assets/Deps.ts";
import Router from "./Routing/Router.ts";

const env: { [index: string]: string; } = Deno.env.toObject();
const PORT: number = Number(env.PORT) || 2560;
const HOST: string = env.HOST || 'localhost';
const CERTFILE: string = env.CERTFILE;
const KEYFILE: string = env.KEYFILE;


const app = new Application();
//app.use(errorHandler);
app.use(Router.routes());
app.use(Router.allowedMethods());

console.log(`Server running on ${PORT}`);
await app.listen({ port: PORT});

// ({
//     port: PORT,
//     secure: true, 
//     certFile: CERTFILE, 
//     keyFile: KEYFILE,  
// });