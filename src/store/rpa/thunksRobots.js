
import {
  addRobot,
  deleteRobot,
  setRobotsTribunal,
  updateDisponibilidadRobot,
} from "./rpaSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
export const startSetRobots = (id_tribunal) => {
  return async (dispatch) => {
    const f = new FormData();
    f.append("id_tribunal", id_tribunal);
    try {
      const robots_emulation = [
        {
          disponibilidad: true,
          estado_robot: 0,
          id_area: 134,
          id_listarobot: 15,
          id_robot: 65,
          id_tribunal: 8,
          nombre_area: "Civil",
          nombre_robot: "Ingreso de exhortos",
          nombre_tribunal: "Juzgado de Letras de Pitrufquen",
        },
        {
          disponibilidad: true,
          estado_robot: 0,
          id_area: 55,
          id_listarobot: 13,
          id_robot: 14,
          id_tribunal: 8,
          nombre_area: "Administración",
          nombre_robot: "Gestion de SII",
          nombre_tribunal: "Juzgado de Letras de Pitrufquen",
        },
        {
          disponibilidad: true,
          estado_robot: 0,
          id_area: 55,
          id_listarobot: 13,
          id_robot: 24,
          id_tribunal: 12,
          nombre_area: "Administración",
          nombre_robot: "Gestion de SII",
          nombre_tribunal: "Corporación Administrativa Poder Judicial Temuco",
        },
        {
          disponibilidad: true,
          estado_robot: 0,
          id_area: 134,
          id_listarobot: 14,
          id_robot: 86,
          id_tribunal: 8,
          nombre_area: "Civil",
          nombre_robot: "Devolucion de exhortos",
          nombre_tribunal: "Juzgado de Letras de Pitrufquen",
        },
        {
          disponibilidad: true,
          estado_robot: 0,
          id_area: 134,
          id_listarobot: 15,
          id_robot: 49,
          id_tribunal: 12,
          nombre_area: "Civil",
          nombre_robot: "Ingreso de exhortos",
          nombre_tribunal: "Corporación Administrativa Poder Judicial Temuco",
        },
        {
          disponibilidad: true,
          estado_robot: 0,
          id_area: 55,
          id_listarobot: 13,
          id_robot: 61,
          id_tribunal: 11,
          nombre_area: "Administración",
          nombre_robot: "Gestion de SII",
          nombre_tribunal: "Juzgado de Garantia Temuco",
        },
        {
          disponibilidad: true,
          estado_robot: 0,
          id_area: 134,
          id_listarobot: 14,
          id_robot: 13,
          id_tribunal: 7,
          nombre_area: "Civil",
          nombre_robot: "Devolucion de exhortos",
          nombre_tribunal: "Juzgado de Letras y Garantia de Pucon",
        },
        {
          disponibilidad: true,
          estado_robot: 0,
          id_area: 134,
          id_listarobot: 15,
          id_robot: 97,
          id_tribunal: 7,
          nombre_area: "Civil",
          nombre_robot: "Ingreso de exhortos",
          nombre_tribunal: "Juzgado de Letras y Garantia de Pucon",
        },
        {
          disponibilidad: true,
          estado_robot: 1,
          id_area: 55,
          id_listarobot: 13,
          id_robot: 113,
          id_tribunal: 7,
          nombre_area: "Administración",
          nombre_robot: "Gestion de SII",
          nombre_tribunal: "Juzgado de Letras y Garantia de Pucon",
        },
        {
          disponibilidad: true,
          estado_robot: 1,
          id_area: 55,
          id_listarobot: 12,
          id_robot: 114,
          id_tribunal: 7,
          nombre_area: "Administración",
          nombre_robot: "Informe Activos Fijos",
          nombre_tribunal: "Juzgado de Letras y Garantia de Pucon",
        },
        {
          disponibilidad: false,
          estado_robot: 0,
          id_area: 55,
          id_listarobot: 16,
          id_robot: 122,
          id_tribunal: 7,
          nombre_area: "Administración",
          nombre_robot: "Resumen Mensual",
          nombre_tribunal: "Juzgado de Letras y Garantia de Pucon",
        },
        {
          disponibilidad: true,
          estado_robot: 0,
          id_area: 134,
          id_listarobot: 15,
          id_robot: 128,
          id_tribunal: 21,
          nombre_area: "Civil",
          nombre_robot: "Ingreso de exhortos",
          nombre_tribunal: "Juzgado de Letras de Nueva Imperial",
        },
        {
          disponibilidad: true,
          estado_robot: 0,
          id_area: 134,
          id_listarobot: 14,
          id_robot: 127,
          id_tribunal: 21,
          nombre_area: "Civil",
          nombre_robot: "Devolucion de exhortos",
          nombre_tribunal: "Juzgado de Letras de Nueva Imperial",
        },
        {
          disponibilidad: true,
          estado_robot: 0,
          id_area: 127,
          id_listarobot: 19,
          id_robot: 123,
          id_tribunal: 7,
          nombre_area: "Familia",
          nombre_robot: "Archivos Familia",
          nombre_tribunal: "Juzgado de Letras y Garantia de Pucon",
        },
      ];
      
      dispatch(setRobotsTribunal(robots_emulation));
    } catch (error) {
      console.log(error);
    }
  };
};

export const startAsociaRobot = (
  id_area,
  id_listarobot,
  nombre_area,
  nombre_listarobot,
  trib,
  setRobots,
  robots
) => {
  return async (dispatch) => {
    const f = new FormData();
    f.append("id_listarobot", id_listarobot);
    f.append("id_tribunal", trib);
    try {
      dispatch(
        addRobot({
          id_listarobot: id_listarobot,
          nombre_robot: nombre_listarobot,
          id_area: id_area,
          nombre_area: nombre_area,
          id_robot: 111111,
          disponibilidad: true,
          estado_robot: 0,
          id_tribunal: trib,
          nombre_tribunal: "asdasdasd",
        })
      );
      setRobots([
        ...robots,
        {
          id_listarobot: id_listarobot,
          nombre_robot: nombre_listarobot,
          id_area: id_area,
          nombre_area: nombre_area,
          id_robot: 111111,
          disponibilidad: true,
          estado_robot: 0,
          id_tribunal: trib,
          nombre_tribunal: "asdasdasd",
        },
      ]);
      MySwal.fire("¡Bien!", `Se ha agregado el robot `, "success");
    } catch (error) {
      MySwal.fire("¡Algo ha salido mal!", error.response.data.message, "error");
    }
  };
};

export const startSetDisponibilidad = (id_robot, disponibilidad) => {
  return async (dispatch) => {
    const f = new FormData();
    f.append("id_robot", id_robot);
    f.append("disponibilidad", disponibilidad);
    try {
      dispatch(updateDisponibilidadRobot({ id_robot, disponibilidad }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const startDeleteRobot = (
  id_robot,
  nombre_robot,
  nombre_tribunal,
  robots,
  setRobots
) => {
  return async (dispatch) => {
    const f = new FormData();
    f.append("id_robot", id_robot);
    try {
      const status = 200;
      if (status === 200) {
        dispatch(deleteRobot(id_robot));
        MySwal.fire(
          "¡Eliminado!",
          `${nombre_robot} ha sido eliminado con éxito del ${nombre_tribunal}.`,
          "success"
        );
        // console.log(robots)
        const nuevadata = robots.filter((robot) => robot.id_robot !== id_robot);
        setRobots(nuevadata);
      }
    } catch (error) {
      console.log(error);
      MySwal.fire(
        "¡Algo ha salido mal!",
        `${nombre_robot} no ha podido ser eliminado.`,
        "error"
      );
    }
  };
};
