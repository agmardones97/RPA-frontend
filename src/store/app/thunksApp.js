
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
import { setEnEjecucion, setExhortosCivil, setJueces } from "./appSlice";
// import { useSelector } from "react-redux";

const MySwal = withReactContent(Swal);

export const startGetJueces = (id_tribunal) => {
  return async (dispatch) => {
    try {
      const jueces_emulation = [
        {
          apellido_materno: "Gonzalez",
          apellido_paterno: "Maureira",
          cargo: "Juez                          ",
          codigo_tribunal: 214,
          nombre_tribunal: "Juzgado de Letras y Gar.de Pucón                  ",
          primer_nombre: "Jose",
          segundo_nombre: "Luis",
        },
        {
          apellido_materno: "Alarcon",
          apellido_paterno: "Madrid",
          cargo: "Juez                          ",
          codigo_tribunal: 214,
          nombre_tribunal: "Juzgado de Letras y Gar.de Pucón                  ",
          primer_nombre: "Francisco",
          segundo_nombre: "Ignacio",
        },
        {
          apellido_materno: "Monjes",
          apellido_paterno: "Castillo",
          cargo: "Juez                          ",
          codigo_tribunal: 214,
          nombre_tribunal: "Juzgado de Letras y Gar.de Pucón                  ",
          primer_nombre: "Marcia",
          segundo_nombre: "Patricia",
        },
        {
          apellido_materno: "Zalazar",
          apellido_paterno: "Torres",
          cargo: "Juez                          ",
          codigo_tribunal: 214,
          nombre_tribunal: "Juzgado de Letras y Gar.de Pucón                  ",
          primer_nombre: "Juan",
          segundo_nombre: "Manuel",
        },
      ];

      dispatch(setJueces(jueces_emulation));
    } catch (error) {
      console.log(error);
    }
  };
};

export const startGetExhortosCivil = (id_tribunal) => {
  return async (dispatch) => {
    try {


      const message = {}

      dispatch(setExhortosCivil(message));
    } catch (error) {
      console.log(error);
    }
  };
};

export const startCheckEjecucion = (id_tribunal) => {
  return async (dispatch) => {
    try {
      const f = new FormData();
      f.append("id_tribunal", id_tribunal);
      const message = '1'
      if (message.length == 1) {
        dispatch(
          setEnEjecucion({
            id_robot: message[0].id_robot,
            nombre_robot: message[0].nombre_listarobot,
            ejecutando: true,
          })
        );
      } else {
        dispatch(
          setEnEjecucion({
            id_robot: null,
            nombre_robot: null,
            ejecutando: false,
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const startExeIngresoDeExhortos = ({
  email,
  user_sitci,
  pass_sitci,
  juez,
  id_robot,
  nombre_robot,
  ip,
  id_tribunal,
}) => {
  return async (dispatch) => {
    const f = new FormData();
    f.append("correo", email);
    f.append("user_sitci", user_sitci);
    f.append("pass_sitci", pass_sitci);
    f.append("juez", juez);
    f.append("ip", ip);
    f.append("id_robot", id_robot);
    f.append("id_tribunal", id_tribunal);
    try {
      dispatch(setEnEjecucion({ nombre_robot, id_robot, ejecutando: true }));
      const status = 200;
      const data = "error";
      if (status === 200) {
        if (data === "success") {
          MySwal.fire(
            "¡Ejecutado!",
            `${nombre_robot} ejecutado con éxito. Espera el resultado en el correo ${email}`,
            "success"
          );
        } else {
          MySwal.fire(
            "¡Error!",
            `Ocurrió un error ejecutando el robot ${nombre_robot}. Esto se debe a la desconexión del backend con la maqueta actaual. `,
            "error"
          );
        }
        dispatch(
          setEnEjecucion({
            nombre_robot: null,
            id_robot: null,
            ejecutando: false,
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const startExeDevolucionDeExhortos = ({
  email,
  user_sitci,
  pass_sitci,
  juez,
  id_robot,
  nombre_robot,
  ip,
  id_tribunal,
  archivo,
  id_listarobot,
}) => {
  return async (dispatch) => {
    const f = new FormData();
    f.append("correo", email);
    f.append("user_sitci", user_sitci);
    f.append("pass_sitci", pass_sitci);
    f.append("juez", juez);
    f.append("ip", ip);
    f.append("id_robot", id_robot);
    f.append("id_tribunal", id_tribunal);
    f.append("archivo", archivo);
    f.append("id_listarobot", id_listarobot);

    try {
      dispatch(setEnEjecucion({ nombre_robot, id_robot, ejecutando: true }));
      const status = 200;
      const data = "error";
      if (status === 200) {
        if (data === "success") {
          MySwal.fire(
            "¡Ejecutado!",
            `${nombre_robot} ejecutado con éxito. Espera el resultado en el correo ${email}`,
            "success"
          );
        } else {
          MySwal.fire(
            "¡Error!",
            `Ocurrió un error ejecutando el robot ${nombre_robot}. Esto se debe a la desconexión del backend con la maqueta actaual. `,
            "error"
          );
        }
        dispatch(
          setEnEjecucion({
            nombre_robot: null,
            id_robot: null,
            ejecutando: false,
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const startExeArchivosFamilia = ({
  email,
  user_sitfa,
  pass_sitfa,
  juez,
  id_robot,
  nombre_robot,
  ip,
  id_tribunal,
  archivo,
  id_listarobot,
}) => {
  return async (dispatch) => {
    const f = new FormData();
    f.append("correo", email);
    f.append("user_sitfa", user_sitfa);
    f.append("pass_sitfa", pass_sitfa);
    f.append("juez", juez);
    f.append("ip", ip);
    f.append("id_robot", id_robot);
    f.append("id_tribunal", id_tribunal);
    f.append("archivo", archivo);
    f.append("id_listarobot", id_listarobot);

    try {
      dispatch(setEnEjecucion({ nombre_robot, id_robot, ejecutando: true }));
      // const { data, status } = await .post(
      //   `/ejecutaRobotArchivoFamilia/`,
      //   f,
      //   {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //       Authorization: `Bearer ${token}`,
      //     },
      //   }
      // );
      const status = 200;
      const data = "error";
      if (status === 200) {
        console.log(data);
        if (data === "success") {
          MySwal.fire(
            "¡Ejecutado!",
            `${nombre_robot} ejecutado con éxito. Espera el resultado en el correo ${email}`,
            "success"
          );
        } else {
          MySwal.fire(
            "¡Error!",
            `Ocurrió un error ejecutando el robot ${nombre_robot}. Esto se debe a la desconexión del backend con la maqueta actaual. `,
            "error"
          );
        }
        dispatch(
          setEnEjecucion({
            nombre_robot: null,
            id_robot: null,
            ejecutando: false,
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const startExeGestionDeSii = ({
  email,
  user_sii,
  pass_sii,
  id_robot,
  nombre_robot,
  ip,
  id_tribunal,
  archivo,
  id_listarobot,
}) => {
  return async (dispatch) => {
    const f = new FormData();

    f.append("correo", email);
    f.append("user_sii", user_sii);
    f.append("pass_sii", pass_sii);
    f.append("ip", ip);
    f.append("id_robot", id_robot);
    f.append("id_tribunal", id_tribunal);
    f.append("id_listarobot", id_listarobot);
    f.append("archivo", archivo);

    try {
      dispatch(setEnEjecucion({ nombre_robot, id_robot, ejecutando: true }));
      // const { data, status } = await .post(`/ejecutaRobotGestSii/`, f, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //     Authorization: `Bearer ${token}`,
      //   },
      // });
      const status = 200;
      const data = "error";
      if (status === 200) {
        if (data === "success") {
          MySwal.fire(
            "¡Ejecutado!",
            `${nombre_robot} ejecutado con éxito. Espera el resultado en el correo ${email}`,
            "success"
          );
        } else {
          MySwal.fire(
            "¡Error!",
            `Ocurrió un error ejecutando el robot ${nombre_robot}. Esto se debe a la desconexión del backend con la maqueta actaual. `,
            "error"
          );
        }
        dispatch(
          setEnEjecucion({
            nombre_robot: null,
            id_robot: null,
            ejecutando: false,
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const startExeInformeActivoFijo = ({
  email,
  user_cgu,
  pass_cgu,
  id_robot,
  nombre_robot,
  ip,
  id_tribunal,
  id_listarobot,
  cen_fin,
}) => {
  return async (dispatch) => {
    const f = new FormData();

    f.append("correo", email);
    f.append("user_cgu", user_cgu);
    f.append("pass_cgu", pass_cgu);
    f.append("ip", ip);
    f.append("id_robot", id_robot);
    f.append("id_tribunal", id_tribunal);
    f.append("id_listarobot", id_listarobot);
    f.append("cen_fin", cen_fin);

    try {
      dispatch(setEnEjecucion({ nombre_robot, id_robot, ejecutando: true }));
      const status = 200;
      const data = "error";
      if (status === 200) {
        if (data === "success") {
          MySwal.fire(
            "¡Ejecutado!",
            `${nombre_robot} ejecutado con éxito. Espera el resultado en el correo ${email}`,
            "success"
          );
        } else {
          MySwal.fire(
            "¡Error!",
            `Ocurrió un error ejecutando el robot ${nombre_robot}. Esto se debe a la desconexión del backend con la maqueta actaual. `,
            "error"
          );
        }
        dispatch(
          setEnEjecucion({
            nombre_robot: null,
            id_robot: null,
            ejecutando: false,
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const startExeTranscripcion = ({ email, id_tribunal, archivo }) => {
  return async (dispatch) => {
    console.log(email, id_tribunal, archivo);
    const f = new FormData();
    f.append("correo", email);
    f.append("id_tribunal", id_tribunal);
    f.append("archivo", archivo);
    f.append("nombre_archivo", archivo.name);

    try {
      MySwal.fire({
        icon: "info",
        title: "Se enviará el audio al servidor...",
        text: "Esto podría tomar unos minutos. No cierres esta página.",
        showLoaderOnConfirm: true,
        preConfirm: async () => {
          const status = 200;
          const data = "error";
          if (status === 200) {
            if (data === "success") {
              MySwal.fire(
                "¡Ejecutado!",
                `Transcripción ejecutada con éxito. Espera el resultado en el correo ${email}`,
                "success"
              );
            } else {
              MySwal.fire(
                "¡Error!",
                `Ocurrió un error ejecutando el robot ${nombre_robot}. Esto se debe a la desconexión del backend con la maqueta actaual. `,
                "error"
              );
            }
            dispatch(
              setEnEjecucion({
                nombre_robot: null,
                id_robot: null,
                ejecutando: false,
              })
            );
          }
        },
        allowOutsideClick: () => !MySwal.isLoading(),
      });
    } catch (error) {
      console.log(error);
    }
  };
};
