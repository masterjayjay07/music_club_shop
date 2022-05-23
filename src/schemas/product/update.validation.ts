import * as Yup from 'yup'

const validatorProductUpdate = {
  schema: {

    body: {
      yupSchema: Yup.object().shape({
        name:Yup.string(),
        price:Yup.number(),
        img_url:Yup.string(),
        type:Yup.string(),
        quantity_stock:Yup.number(),
        rating:Yup.number(),
        label:Yup.string(),
        description:Yup.string(),
      }),
      validateOptions: {
          abortEarly: false,
      },
    },
  },
}

export default validatorProductUpdate