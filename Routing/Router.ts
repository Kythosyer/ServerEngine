import { Router } from "../Assets/Deps.ts";

import { Plugins } from "../Assets/Plugins.ts";

const pluginManager = new Plugins("./Plugins");
pluginManager.init();
pluginManager.executePlugins();
const router = new Router();
router.get("/api/debug", (context) => {
context.response.body = { success: true, msg: "Hello"};

});
router.get("/api/debug2", (context) =>{
    console.log(context);
})

export { router };