
const validateCreateUserDto = (req, res, next) => {

    const { nombre, apellido, email, password } = req.body;

    const errors = []

    if(typeof nombre !== 'string' || !nombre.trim()) {
        errors.push({fields: 'nombre', message: 'El nombre debe ser una cadena no vacia'})
    }
    if (typeof apellido !== 'string' || !apellido.trim()) {
        errors.push({ field: 'apellido', message: 'El apellido debe ser una cadena no vacía' });
      }

    if (typeof email !== 'string' || !email.trim()) {
      errors.push({ field: 'email', message: 'El email debe ser una cadena no vacía' });
    }

    if (typeof password !== 'string' || !password.trim()) {
        errors.push({ field: 'password', message: 'El password debe ser una cadena no vacía' });
      }

    if (errors.length > 0) {
        return res.status(400).json({message: 'validation failed', errors})
    }

    next()
}

export default validateCreateUserDto