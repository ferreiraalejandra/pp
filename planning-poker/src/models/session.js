export const isValidSessionData = (data) => {
  // retorno true si los datos son validos o false si son invalidos
  const { name } = data
  if (name == null || name == '' || name.length < 3) return false

  return true
}

export const sendSessionData = async data => {
  console.log('🐋🐋🐋🐋🐋🐋 sending to server...')

  //enviar los datos
}