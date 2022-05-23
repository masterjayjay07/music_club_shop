import * as Yup from 'yup'

const validatorCartAdd = {
  schema: {

    body: {
      yupSchema: Yup.object().shape({
        productId:Yup.string().required()
      }),
      validateOptions: {
        abortEarly: false,
      },
    },

  },
}

export default validatorCartAdd