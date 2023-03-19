import { Router } from "../Assets/Deps.ts";
const router = new Router();
router.get("/api/debug", (context) => {
context.response.body = { success: true, msg: "Hello"};

});
router.get("/api/debug2", (context) =>{
    console.log(context);
})

export default router;