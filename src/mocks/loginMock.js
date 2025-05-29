export function login(user, password) {
  const validUser = 'coderUser'
  const validPassword = 'coder123'

  if (!user) return 'No se ha proporcionado un usuario'
  if (!password) return 'No se ha proporcionado un password'

  if (user !== validUser) return 'Credenciales incorrectas'
  if (password !== validPassword) return 'Contraseña incorrecta'

  return 'logueado'
}
