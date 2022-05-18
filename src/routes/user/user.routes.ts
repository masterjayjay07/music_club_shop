import { Router } from "express";

import userCreateController from "../../controllers/user/userCreate.controller";
import userDeleteSelfController from "../../controllers/user/userDeleteSelf.controller";
import userListController from "../../controllers/user/userList.controller";
import userListOneController from "../../controllers/user/userListOne.controller";
import userLoginController from "../../controllers/user/userLogin.controller";
import userUpdateController from "../../controllers/user/userUpdate.controller";

const userRoutes = Router();

userRoutes.post("/", userCreateController);
userRoutes.get("/", userListController);
userRoutes.post("/login", userLoginController);
userRoutes.delete("/:id", userDeleteSelfController);
userRoutes.patch("/:id", userUpdateController);
userRoutes.get("/:id", userListOneController);

export default userRoutes;
