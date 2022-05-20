import { Router } from "express";

import userCreateController from "../../controllers/user/userCreate.controller";
import userDeleteSelfController from "../../controllers/user/userDeleteSelf.controller";
import userListController from "../../controllers/user/userList.controller";
import userListOneController from "../../controllers/user/userListOne.controller";
import userLoginController from "../../controllers/user/userLogin.controller";
import userProfileController from "../../controllers/user/userProfile.controller";
import userUpdateController from "../../controllers/user/userUpdate.controller";

import verifyTokenAuthenticationMiddleware from "../../middlewares/authToken.middleware";
import verifyAdminMiddleware from "../../middlewares/verifyAdmin.middleware";
import verifyIfItsAdmOrOwnerMiddleware from "../../middlewares/verifyIfItsAdmOrOwner.middleware";
import verifyUserExistanceMiddleware from "../../middlewares/verifyUserExistance.middleware";

const userRouter = Router();

userRouter.post("/", userCreateController);
userRouter.post("/login", userLoginController);

userRouter.use(verifyTokenAuthenticationMiddleware);


userRouter.get("/",verifyAdminMiddleware, userListController);
userRouter.get("/profile", userProfileController);
userRouter.patch("/:id", userUpdateController);


userRouter.use(
  "/:id",
  verifyUserExistanceMiddleware,
  verifyIfItsAdmOrOwnerMiddleware
);

userRouter.get("/:id", userListOneController);
userRouter.delete("/:id", userDeleteSelfController);

export default userRouter;
