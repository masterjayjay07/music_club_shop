import * as Yup from 'yup'

const validatorUserLogin = {
  schema: {

    body: {
      yupSchema: Yup.object().shape({
        email:Yup.string().email(),
        user_name:Yup.string(),
        password:Yup.string().required(),
      }),
      validateOptions: {
          abortEarly: false,
      },
    },
  },
}

export default validatorUserLogin