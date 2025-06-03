
export const requiredRule = (v: string | number) => {
  return !!v || 'Campo obrigatório';
};

export const requiredFileRule = (v: File[]) => {
  return !!v.length || 'Campo obrigatório';
};

export const requiredArrayRule = (v: any[]) => {
  return !!v.length || 'Campo obrigatório';
};

export const emailRule = (v: string) => {
  if (v === null || v === undefined) return true;

  return /.+@.+\..+/.test(v) || 'E-mail inválido';
};

export const minRule = (min: number) => (v: number) => {
  if (v === null || v === undefined) return true;

  return v >= min || `O valor deve ser maior ou igual a ${min}`;
};

export const maxRule = (max: number) => (v: number) => {
  if (v === null || v === undefined) return true;

  return v <= max || `O valor deve ser menor ou igual a ${max}`;
};

export const minLenghtRule = (min: number) => (v: string) => {
  if (v === null || v === undefined) return true;

  return String(v).length >= min || `O valor deve conter no mínimo ${min} caracteres`;
};

export const maxLenghtRule = (max: number) => (v: string) => {
  if (v === null || v === undefined) return true;

  return String(v).length <= max || `O valor não pode conter mais do que ${max} caracteres`;
};

export const minValueRule = (minValue: number) => (v: number) => {
  if (v === null || v === undefined) return true;

  return v >= minValue || `O valor mínimo permitido é ${minValue}`;
};

export const maxValueRule = (maxValue: number) => (v: number) => {
  if (v === null || v === undefined) return true;

  return v <= maxValue || `O valor máximo permitido é ${maxValue}`;
};

export const betweenRule = (min: number, max: number) => (v: number) => {
  if (v === null || v === undefined) return true;

  v >= min && v <= max || `O valor deve estar entre ${min} e ${max}`;
};

export const integerRule = (v: number | string) => {
  if (v === null || v === undefined) return true;

  return Number.isInteger(Number(v)) || 'O valor deve ser um número inteiro';
};

export const confirmedRule = (originalValue: string) => (confirmation: string) => {
  if (confirmation === null || confirmation === undefined) return true;

  return confirmation === originalValue || 'Os valores não coincidem';
};

export const notEqualRule = (valueThatShouldNotBeEqual: string, options?: { message?: string }) => (value: string) => {
  if (value === null || value === undefined) return true;
  if (valueThatShouldNotBeEqual === null || valueThatShouldNotBeEqual === undefined) return true;
  return value !== valueThatShouldNotBeEqual || (options?.message || 'Os valores não podem ser iguais');
};

export const forcarErro = (errorMessage = 'error internal input') => {
  return  errorMessage;
};

export default {
  requiredRule,
  requiredFileRule,
  requiredArrayRule,
  emailRule,
  minRule,
  maxRule,
  minLenghtRule,
  maxLenghtRule,
  minValueRule,
  maxValueRule,
  betweenRule,
  integerRule,
  confirmedRule,
  notEqualRule,
  forcarErro
};
