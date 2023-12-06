import { check } from "express-validator";

export const registerUser = [
  check("name", "El nombre es requerido").not().isEmpty(),
  check("apellido", "El apellido es requerido").not().isEmpty(),
  check("email", "El email es requerido").notEmpty().isEmail(),
  check("password", "La contrasenia debe ser de 6 o mas caracteres").isLength({
    min: 6,
  }),
  check("telefono", "Solo numeros!").notEmpty().isInt(),
];

export const loginUser = [
  check("email", "El email es requerido").notEmpty().isEmail(),
  check("password", "La contrasenia debe ser de 6 o mas caracteres").isLength({
    min: 6,
  }),
];

export const mascotaAdopcion = [
  check("nombre", "El nombre es requerido").notEmpty(),
  check("descripcion", "La descripcion es requerida").notEmpty(),
  check("edad", "La edad es requerida y debe ser un numero").notEmpty().isInt(),
  check("especie", "La especie de la mascota es requerida").notEmpty(),
  check("raza", "La raza de la mascota es requerida").notEmpty(),
];

export const mascotaPerdido = [
  check("nombre", "El nombre es requerido").notEmpty(),
  check("descripcion", "La descripcion es requerida").notEmpty(),
  check("edad", "La edad es requerida y debe ser un numero").isInt(),
  check("especie", "La especie de la mascota es requerida").notEmpty(),
  check("raza", "La raza de la mascota es requerida").notEmpty(),
  check(
    "ultima_vez",
    "Debes proporcionar la ultima vez que viste a tu mascota"
  ).notEmpty(),
  check("recompensa", "La recompensa es requerida").notEmpty(),
];
