import { Router } from "express";
import { checkBirthdays, deleteBirthday, registerBirthday, updateBirth } from "../controllers/birthday-controllers";
var router = Router();
router.post("/birth", registerBirthday);
router.get("/birth", checkBirthdays);
router["delete"]("/birth", deleteBirthday);
router.patch("/birth", updateBirth);
export default router;
