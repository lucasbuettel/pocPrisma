import { Router } from "express";
import { checkBirthdays/* birthPerMonth, , deleteBirthday,  *//* registerBirthday */,  /* updateBirth */ } from "../controllers/birthdayControllers.js";

const router = Router();

/* router.post("/birth", registerBirthday); */
router.get("/birth", checkBirthdays);
/* router.delete("/birth/:id", deleteBirthday); 
router.patch("/birth/:id", updateBirth);
router.get("/birth/:month", birthPerMonth); */

export default router;