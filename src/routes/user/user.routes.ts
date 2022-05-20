import { Router } from "express";

import userCreateController from "../../controllers/user/userCreate.controller";
import userDeleteSelfController from "../../controllers/user/userDeleteSelf.controller";
import userListController from "../../controllers/user/userList.controller";
import userListOneController from "../../controllers/user/userListOne.controller";
import userLoginController from "../../controllers/user/userLogin.controller";
import userUpdateController from "../../controllers/user/userUpdate.controller";

import verifyTokenAuthenticationMiddleware from "../../middlewares/authToken.middleware";
import verifyIfItsAdmOrOwnerMiddleware from "../../middlewares/verifyIfItsAdmOrOwner.middleware";
import verifyUserExistanceMiddleware from "../../middlewares/verifyUserExistance.middleware";

const userRouter = Router();

userRouter.post("/", userCreateController);
userRouter.post("/login", userLoginController);

userRouter.use(verifyTokenAuthenticationMiddleware)

userRouter.get("/", userListController);

userRouter.use('/:id',verifyUserExistanceMiddleware,verifyIfItsAdmOrOwnerMiddleware)

userRouter.get("/:id",userListOneController);
userRouter.delete("/:id",  userDeleteSelfController);
userRouter.patch("/:id", userUpdateController);
 
export default userRouter;
