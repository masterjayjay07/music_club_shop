
import * as Yup from 'yup'

const validatorUserUpdate = {
  schema: {

    body: {
      yupSchema: Yup.object().shape({
        name:Yup.string(),
        email:Yup.string().email(),
        user_name:Yup.string(),
        birth_date:Yup.string(),
        password:Yup.string(),
        is_adm:Yup.boolean(),
      }),
      validateOptions: {
          abortEarly: false,
      },
    },
  },
}

export default validatorUserUpdate