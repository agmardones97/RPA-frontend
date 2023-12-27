// import { login, logout } from "./";
import { setAreas, addArea, deleteArea, updateArea } from "./rpaSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

// -------------- CRUD AREAS ------------------

export const startGetAreas = () => {
  return async (dispatch) => {
    try {
      const areas_emulation = [
        {
          id_area: 127,
          nombre_area: "Familia",
        },
        {
          id_area: 134,
          nombre_area: "Civil",
        },
        {
          id_area: 55,
          nombre_area: "Administración",
        },
        {
          id_area: 138,
          nombre_area: "Cobranza",
        },
        {
          id_area: 139,
          nombre_area: "Laboral",
        },
      ];
      dispatch(setAreas(areas_emulation));
    } catch (error) {
      console.log(error);
    }
  };
};

export const startAddNewArea = (newArea) => {
  return async (dispatch) => {
    const f = new FormData();
    f.append("nombre_area", newArea);
    // const token = window.localStorage.getItem("rpa-jwt");
    try {
      const area_emulation = {
        id_area: 1111111,
        nombre_area: newArea,
      };
      dispatch(addArea(area_emulation));
      MySwal.fire(
        "¡Bien!",
        `El área ${newArea} ha sido agregada con éxito. (Se eliminará al recargar)`,
        "success"
      );
    } catch (error) {
      MySwal.fire(
        "¡Algo ha salido mal!",
        `El área ${newArea} no ha podido ser agregada.`,
        "error"
      );
    }
  };
};

export const startUpdateArea = ({ id_area, nombre_area, value }) => {
  return async (dispatch) => {
    const f = new FormData();
    f.append("id_area", id_area);
    f.append("nombre_area", nombre_area);
    f.append("nuevo_nombre", value);
    try {
      const status = 200;
      if (status === 200) {
        dispatch(updateArea({ id_area, value }));
        MySwal.fire(
          "¡Actualizado!",
          `El área ${nombre_area} fue modificada por ${value} con éxito.`,
          "success"
        );
      }
    } catch (error) {
      MySwal.fire(
        "¡Algo ha salido mal!",
        `El área ${nombre_area} no ha podido ser modificada.`,
        "error"
      );
    }
  };
};

export const startDeleteArea = ({ id_area, nombre_area }) => {
  return async (dispatch) => {
    const f = new FormData();
    f.append("id_area", id_area);
    f.append("nombre_area", nombre_area);
    try {
      
      const status = 200;
      if (status === 200) {
        dispatch(deleteArea({ id_area, nombre_area }));
        MySwal.fire(
          "¡Eliminado!",
          `El área ${nombre_area} ha sido eliminada con éxito.`,
          "success"
        );
      }
    } catch (error) {
      MySwal.fire(
        "¡Algo ha salido mal!",
        `El área ${nombre_area} no ha podido ser eliminada.`,
        "error"
      );
    }
  };
};
