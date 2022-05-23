import * as Yup from 'yup'

const validatorOrderUpdate = {
  schema: {

    body: {
      yupSchema: Yup.object().shape({
        status:Yup.string(), 
        typeOfPayment:Yup.string(),
        street:Yup.string(), 
        number:Yup.number(), 
        cep:Yup.string(), 
        neighborhood:Yup.string(), 
        country:Yup.string(), 
        complement:Yup.string(),
        city:Yup.string()
      }),
      validateOptions: {
          abortEarly: false,
      },
    },

  },
}

export default validatorOrderUpdate