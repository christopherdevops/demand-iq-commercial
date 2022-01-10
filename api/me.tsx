import base from './base'

export const getValues = async () => {
  return await base
    .get('api/me/')
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log(err)
    })
}

export const setValues = (values: any) => {
  base.put('api/me/', values).catch((err) => {
    console.log(err)
  })
}
