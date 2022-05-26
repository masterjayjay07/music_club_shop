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

import { expressYupMiddleware } from "express-yup-middleware";
import validatorUserCreate from "../../schemas/user/create.validation";
import validatorUserUpdate from "../../schemas/user/update.validation";
import validatorUserLogin from "../../schemas/user/login.validation";
import verifyIfYouAreTryingToUpdateOrDeleteAdminUser from "../../middlewares/verifyIfYouAreTryingToUpdateOrDeleteAdminUser.middleware";

const userRouter = Router();
userRouter.post(
  "/",
  expressYupMiddleware({ schemaValidator: validatorUserCreate }),
  userCreateController
);
userRouter.post(
  "/login",
  expressYupMiddleware({ schemaValidator: validatorUserLogin }),
  userLoginController
);

userRouter.get(
  "/",
  verifyTokenAuthenticationMiddleware,
  verifyAdminMiddleware,
  userListController
);
userRouter.get(
  "/profile",
  verifyTokenAuthenticationMiddleware,
  userProfileController
);

userRouter.get(
  "/:id",
  verifyTokenAuthenticationMiddleware,
  verifyIfItsAdmOrOwnerMiddleware,
  userListOneController
);

userRouter.patch(
  "/:id",
  verifyTokenAuthenticationMiddleware,
  verifyIfItsAdmOrOwnerMiddleware,
  verifyIfYouAreTryingToUpdateOrDeleteAdminUser,
  expressYupMiddleware({ schemaValidator: validatorUserUpdate }),
  userUpdateController
);

userRouter.delete(
  "/:id",
  verifyTokenAuthenticationMiddleware,
  verifyIfItsAdmOrOwnerMiddleware,
  verifyIfYouAreTryingToUpdateOrDeleteAdminUser,
  userDeleteSelfController
);

export default userRouter;
