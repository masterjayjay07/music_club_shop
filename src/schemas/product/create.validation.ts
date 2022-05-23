import * as Yup from "yup";

const validatorProductCreate = {
  schema: {
    body: {
      yupSchema: Yup.object().shape({
        name:Yup.string().required(),
        price:Yup.number().required(),
        img_url:Yup.string().required(),
        type:Yup.string().required(),
        quantity_stock:Yup.number().required(),
        rating:Yup.number().required(),
        label:Yup.string().required(),
        description:Yup.string().required(),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};

export default validatorProductCreate;
