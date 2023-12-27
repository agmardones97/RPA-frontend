
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  addTribunal,
  deleteTribunal,
  setTribunales,
  updateTribunal,
} from "./rpaSlice";
import { updateTribunalAuth } from "../auth";

const MySwal = withReactContent(Swal);

export const startGetTribunales = () => {
  return async (dispatch) => {
    try {
      const tribunales_emulation = [
        {
          codigo_tribunal: 0,
          id_area: [134],
          id_tribunal: 12,
          ip: "10.9.21.192",
          nombre: "Corporación Administrativa Poder Judicial Temuco",
        },
        {
          codigo_tribunal: 937,
          id_area: [55],
          id_tribunal: 11,
          ip: "10.9.91.142",
          nombre: "Juzgado de Garantia Temuco",
        },
        {
          codigo_tribunal: 211,
          id_area: [55, 134, 127],
          id_tribunal: 8,
          ip: "10.13.248.179",
          nombre: "Juzgado de Letras de Pitrufquen",
        },
        {
          codigo_tribunal: 214,
          id_area: [134, 127, 55, 138],
          id_tribunal: 7,
          ip: "10.13.248.192",
          nombre: "Juzgado de Letras y Garantia de Pucon",
        },
        {
          codigo_tribunal: 213,
          id_area: [134],
          id_tribunal: 21,
          ip: "10.13.248.192",
          nombre: "Juzgado de Letras de Nueva Imperial",
        },
      ];
      dispatch(setTribunales(tribunales_emulation));
    } catch (error) {
      console.log(error);
    }
  };
};

export const startAddNewTribunal = (newTribunal) => {
  return async (dispatch) => {
    const f = new FormData();
    f.append("nombre_tribunal", newTribunal.nombre_tribunal);
    f.append("codigo_tribunal", newTribunal.codigo_tribunal);
    f.append("ip", newTribunal.ip);
    f.append("id_area", newTribunal.id_area);
    f.append("user_sitci", "");
    f.append("pass_sitci", "");
    
    try {
      
      dispatch(
        addTribunal({
          codigo_tribunal: newTribunal.codigo_tribunal,
          id_area: newTribunal.id_area,
          id_tribunal: 111111,
          ip: newTribunal.ip,
          nombre: newTribunal.nombre_tribunal,
        })
      );
      MySwal.fire(
        "¡Bien!",
        `Se ha agregado ${newTribunal.nombre_tribunal} con éxito.`,
        "success"
      );
    } catch (error) {
      console.log(error.response.data.message);
      MySwal.fire("¡Algo ha salido mal!", error.response.data.message, "error");
    }
  };
};

export const startDeleteTribunal = ({ id_tribunal, nombre }) => {
  return async (dispatch) => {
    const f = new FormData();
    f.append("id_tribunal", id_tribunal);
    try {
      const status = 200;
      if (status === 200) {
        dispatch(deleteTribunal(id_tribunal));
        MySwal.fire(
          "¡Eliminado!",
          `${nombre} ha sido eliminado con éxito.`,
          "success"
        );
      }
    } catch (error) {
      MySwal.fire(
        "¡Algo ha salido mal!",
        `${nombre} no ha podido ser eliminado.`,
        "error"
      );
    }
  };
};

export const startUpdateTribunal = (updTribunal) => {
  return async (dispatch) => {
    const f = new FormData();
    f.append("id_tribunal", updTribunal.id_tribunal);
    f.append("nombre_tribunal", updTribunal.nombre);
    f.append("codigo_tribunal", updTribunal.codigoTribunal);
    f.append("ip", updTribunal.ip);
    f.append("id_area", updTribunal.id_area);
    f.append("user_sitci", "");
    f.append("pass_sitci", "");
    try {
     
      dispatch(updateTribunal(updTribunal));
      if (updTribunal.id_tribunal === updTribunal.current_tribunal)
        dispatch(updateTribunalAuth(updTribunal));

      MySwal.fire(
        "¡Bien!",
        `El Tribunal ha sido actualizado con éxito.`,
        "success"
      );
    } catch (error) {
      console.log(error);
      MySwal.fire("¡Algo ha salido mal!", error, "error");
    }
  };
};
