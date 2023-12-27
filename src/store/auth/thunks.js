import { login, logout } from "./";
export const startLogin = ({ rut, contrasena }) => {
  return async (dispatch) => {
    const f = new FormData();
    f.append("rut", rut);
    f.append("contrasena", contrasena);
    try {
      const user_emulation = {
        "apellido": "Testing",
        "codigo_tribunal": 214,
        "email": "agmardones@pjud.cl",
        "id_area": [
            134,
            127,
            55,
            138
        ],
        "id_tribunal": 7,
        "id_usuario": 20,
        "ip": "10.11.123.456",
        "message": "ok",
        "nombre": "Usuario",
        "nombre_tribunal": "Juzgado de Letras y Garantia de Pucon",
        "pass_sitci": "",
        "role": "sudo",
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMzYzNTgzMCwianRpIjoiNWMwODM3ZTQtZTgwNC00ZWIxLTg4ZjctOTYxZTgxNThhOTBkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MjAsIm5iZiI6MTcwMzYzNTgzMCwiZXhwIjoxNzA2MjI3ODMwfQ.QR10MHdWCd3EXSPIyrwIDrR6Ew7TaexWSGyCFax4t7k",
        "user_sitci": ""
    }
      window.localStorage.setItem("rpa-jwt", user_emulation.token);
      dispatch(login(user_emulation));
    } catch (error) {
      dispatch(logout(error.response.data.message));
    }
  };
};


