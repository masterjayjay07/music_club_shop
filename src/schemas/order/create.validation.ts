import * as Yup from 'yup'

const validatorOrderCreate = {
  schema: {

    body: {
      yupSchema: Yup.object().shape({
        status:Yup.string().required(), 
        typeOfPayment:Yup.string().required(),
        street:Yup.string().required(), 
        number:Yup.number().required(), 
        cep:Yup.string().required(), 
        neighborhood:Yup.string().required(), 
        country:Yup.string().required(), 
        complement:Yup.string().required(),
        city:Yup.string().required()
    }),
    validateOptions: {
      abortEarly: false,
    },
    },

  },
}

export default validatorOrderCreate