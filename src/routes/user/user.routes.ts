import { Router } from "express";

import userCreateController from "../../controllers/user/userCreate.controller";
import userDeleteSelfController from "../../controllers/user/userDeleteSelf.controller";
import userListController from "../../controllers/user/userList.controller";
import userListOneController from "../../controllers/user/userListOne.controller";
import userLoginController from "../../controllers/user/userLogin.controller";
import userUpdateController from "../../controllers/user/userUpdate.controller";

const userRouter = Router();

userRouter.post("/", userCreateController);
userRouter.get("/", userListController);
userRouter.post("/login", userLoginController);
userRouter.delete("/:id", userDeleteSelfController);
userRouter.patch("/:id", userUpdateController);
userRouter.get("/:id", userListOneController);

export default userRouter;
