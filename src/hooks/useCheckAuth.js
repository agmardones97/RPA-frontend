import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/auth";

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const jwt_token = window.localStorage.getItem("rpa-jwt");

  const onAuthStateChange = async () => {
    if (jwt_token) {
      const result = 'ok'
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
      {
        result === "ok"
          ? dispatch(login(user_emulation))
          : dispatch(logout());
      }
    } else {
      dispatch(logout());
    }
  };

  useEffect(() => {
    onAuthStateChange();
  }, []);

  return {
    status,
  };
};
