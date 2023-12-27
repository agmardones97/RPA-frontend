
import { updateUsuarioAuth } from "../auth";
import {
  addUsuario,
  setUsuarios,
  deleteUsuario,
  updateUsuario,
} from "./rpaSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const startGetUsuarios = (id_tribunal) => {
  return async (dispatch) => {
    try {
      const usuarios_emulation = [
        {
          apellido: "asdasdasdasd",
          correo: "asdasdasdasdasd@pjud.cl",
          id_tribunal: 11,
          id_usuario: 45,
          nombre: "Rodrigo",
          rut: "123456123123-2",
          tipo_usuario: "admin",
          tribunal: "Juzgado de Garantia Temuco",
        },
        {
          apellido: "asdasdasdasd",
          correo: "asdjasdkjnasd@pjud.cl",
          id_tribunal: 7,
          id_usuario: 48,
          nombre: "Patricia",
          rut: "1234123123-F",
          tipo_usuario: "admin",
          tribunal: "Juzgado de Letras y Garantia de Pucon",
        },
        {
          apellido: "asdasdasdasd",
          correo: "asdasdasd@pjud.cl",
          id_tribunal: 7,
          id_usuario: 49,
          nombre: "Héctor",
          rut: "12312314123-L",
          tipo_usuario: "user",
          tribunal: "Juzgado de Letras y Garantia de Pucon",
        },
        {
          apellido: "asdasdasdasdasd",
          correo: "asdkjasbdkajsbd@pjud.cl",
          id_tribunal: 8,
          id_usuario: 27,
          nombre: "Nicolás",
          rut: "123781238123-B",
          tipo_usuario: "admin",
          tribunal: "Juzgado de Letras de Pitrufquen",
        },
        {
          apellido: "asdkajbsdkajsbdasd",
          correo: "asdjaksjdakdjs@pjud.cl",
          id_tribunal: 8,
          id_usuario: 51,
          nombre: "Eduardo",
          rut: "12312398123",
          tipo_usuario: "sudo",
          tribunal: "Juzgado de Letras de Pitrufquen",
        },
      ];
      dispatch(setUsuarios(usuarios_emulation));
    } catch (error) {
      console.log(error);
    }
  };
};

export const startAddNewUsuario = (newUsuario) => {
  return async (dispatch) => {
    const f = new FormData();
    f.append("nombre", newUsuario.nombre);
    f.append("apellido", newUsuario.apellido);
    f.append("rut", newUsuario.rut);
    f.append("correo", newUsuario.correo);
    f.append("contrasena", newUsuario.contrasena);
    f.append("repiteContrasena", newUsuario.repiteContrasena);
    f.append("tipo_usuario", newUsuario.tipo_usuario);
    f.append("id_tribunal", newUsuario.id_tribunal);
    try {
      const usuario = {
        apellido: newUsuario.apellido,
        correo: newUsuario.correo,
        id_tribunal: newUsuario.id_tribunal,
        id_usuario: 11111111,
        nombre: newUsuario.nombre,
        rut: newUsuario.rut,
        tipo_usuario: newUsuario.tipo_usuario,
        tribunal: "Nombre de Tribunal genérico",
      };
      dispatch(addUsuario(usuario));
      MySwal.fire(
        "¡Bien!",
        `El usuario ${newUsuario.nombre} ${newUsuario.apellido} ha sido agregado con éxito.`,
        "success"
      );
    } catch (error) {
      console.log(error.response.data.message);
      MySwal.fire("¡Algo ha salido mal!", error.response.data.message, "error");
    }
  };
};

export const startDeleteUsuario = ({ id_usuario, nombre, apellido }) => {
  return async (dispatch) => {
    const f = new FormData();
    f.append("id_usuario", id_usuario);
    f.append("nombre", nombre);
    f.append("apellido", apellido);
    
    try {
      
      const status = 200;
      if (status === 200) {
        dispatch(deleteUsuario(id_usuario));
        MySwal.fire(
          "¡Eliminado!",
          `El usuario ${nombre} ${apellido} ha sido eliminado con éxito.`,
          "success"
        );
      }
    } catch (error) {
      MySwal.fire(
        "¡Algo ha salido mal!",
        `El usuario ${nombre} ${apellido} no ha podido ser eliminado.`,
        "error"
      );
    }
  };
};

export const startUpdateUsuario = (updateUser) => {
  return async (dispatch) => {
    const f = new FormData();
    f.append("id_usuario", updateUser.id_usuario);
    f.append("nombre", updateUser.nombre);
    f.append("apellido", updateUser.apellido);
    f.append("rut", updateUser.rut);
    f.append("correo", updateUser.correo);
    f.append("tipo_usuario", updateUser.tipo_usuario);
    f.append("id_tribunal", updateUser.id_tribunal);
    try {
      dispatch(updateUsuario(updateUser));
      if (updateUser.id_usuario === updateUser.current_idUser)
        dispatch(updateUsuarioAuth(updateUser));
      MySwal.fire(
        "¡Bien!",
        `El usuario ${updateUser.nombre} ${updateUser.apellido} ha sido actualizado con éxito.`,
        "success"
      );
    } catch (error) {
      console.log(error);
      MySwal.fire("¡Algo ha salido mal!", error, "error");
    }
  };
};
