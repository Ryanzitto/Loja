import UserActiontypes from "./action-type";

export const registraUsuario = (payload) => ({
  type: UserActiontypes.REGISTRA_USER,
  payload,
});
