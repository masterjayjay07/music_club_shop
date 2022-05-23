import * as Yup from 'yup'

const validatorUserCreate = {
  schema: {

    body: {
      yupSchema: Yup.object().shape({
        name:Yup.string().required(),
        email:Yup.string().email().required(),
        user_name:Yup.string().required(),
        birth_date:Yup.string().required(),
        password:Yup.string().required(),
        is_adm:Yup.boolean(),
        tel:Yup.string().required()
      }),
      validateOptions: {
          abortEarly: false,
      },
    },
  },
}

export default validatorUserCreate