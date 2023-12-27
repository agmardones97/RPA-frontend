
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { addListaRobot, deleteListarobot, setListarobot, updateListarobot } from "./rpaSlice";
const MySwal = withReactContent(Swal);

export const startGetListarobots = () => {
  return async (dispatch) => {
    try {
      const listarobot_emulation = [
        {
            "id_area": 55,
            "id_listarobot": 13,
            "nombre_area": "Administración",
            "nombre_listarobot": "Gestion de SII"
        },
        {
            "id_area": 55,
            "id_listarobot": 12,
            "nombre_area": "Administración",
            "nombre_listarobot": "Informe Activos Fijos"
        },
        {
            "id_area": 134,
            "id_listarobot": 14,
            "nombre_area": "Civil",
            "nombre_listarobot": "Devolucion de exhortos"
        },
        {
            "id_area": 134,
            "id_listarobot": 15,
            "nombre_area": "Civil",
            "nombre_listarobot": "Ingreso de exhortos"
        },
        {
            "id_area": 55,
            "id_listarobot": 16,
            "nombre_area": "Administración",
            "nombre_listarobot": "Resumen Mensual"
        },
        {
            "id_area": 127,
            "id_listarobot": 19,
            "nombre_area": "Familia",
            "nombre_listarobot": "Archivos Familia"
        }
    ]
      
      dispatch(setListarobot(listarobot_emulation));
    } catch (error) {
      console.log(error);
    }
  };
};

export const startAddNewListaRobot = ({
  nombreLrobot,
  areaLrobot,
  nombreArea,
}) => {
  return async (dispatch) => {
    const f = new FormData();
    f.append("nombre_listarobot", nombreLrobot);
    f.append("id_area", areaLrobot);
    try {
      
      dispatch(
        addListaRobot({
          id_listarobot: 11111111,
          nombre_listarobot: nombreLrobot,
          id_area: 111,
          nombre_area: nombreArea,
        })
      );
      MySwal.fire(
        "¡Bien!",
        `Se ha agregado el robot ${nombreLrobot} con éxito en la competencia ${nombreArea}.`,
        "success"
      );
    } catch (error) {
      MySwal.fire("¡Algo ha salido mal!", error.response.data.message, "error");
    }
  };
};

export const startDeleteListarobot = ({ id_listarobot, nombre_listarobot }) => {
  return async (dispatch) => {
    const f = new FormData();
    f.append("id_listarobot", id_listarobot);
    try {
      
      const status = 200;
      if (status === 200) {
        dispatch(deleteListarobot(id_listarobot));
        MySwal.fire(
          "¡Eliminado!",
          `${nombre_listarobot} ha sido eliminado con éxito.`,
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

export const startUpdateListarobot = ({
  nombreLrobot,
  areaLrobot,
  nombreArea,
  id_listarobot,
}) => {
  return async (dispatch) => {
    const f = new FormData();
    f.append("id_listarobot", id_listarobot);
    f.append("nombre_listarobot", nombreLrobot);
    f.append("id_area", areaLrobot);
    
    try {
      
      const data = {
        nombre_listarobot: nombreLrobot,
        id_area: areaLrobot,
        nombre_area:nombreArea,
        id_listarobot:id_listarobot

      }
      dispatch(updateListarobot(data));
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
