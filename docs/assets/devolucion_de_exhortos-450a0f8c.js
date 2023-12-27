import{j as e,B as Q,G as a,T as n,r as o,u as X,a as Y,b as f,c as Z,s as ee,I as re,d as ae,e as ie,S as te,A as ne,f as oe,g as m,F,h as se,i as le,k as ce,M as de,l as ue,o as pe,w as me,n as he}from"./index-9ee13428.js";const xe=(h,s)=>({instructivoDevExh:l=>e.jsx(Q,{sx:{width:"500px",borderTopLeftRadius:"30px"},role:"presentation",onClick:s(l,!1),onKeyDown:s(l,!1),className:"help",children:e.jsxs(a,{container:!0,spacing:0,direction:"row",justifyContent:"center",alignItems:"center",alignContent:"center",mt:3,children:[e.jsxs(a,{item:!0,m:1,ml:3,m3:3,children:[e.jsx(n,{variant:"h4",color:"primary",mb:1,children:"Descripción del proceso."}),e.jsx(n,{variant:"caption",color:"primary",children:"El robot, utilizando la planilla excel entregada en el formulario, recorrerá cada rit existente para intentar realizar el proceso de devolución de exhorto. Es importante saber que la planilla excel debe ser llenada por quién pretende ejecutar el proceso ya que mientras funcione, no se harán validaciones en la causa."}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(n,{variant:"caption",color:"primary",children:"Ingresará con las credenciales entregadas a la plataforma SITCI."})}),e.jsx("li",{children:e.jsx(n,{variant:"caption",color:"primary",children:"Ingresará primer rit de la planilla excel."})}),e.jsx("li",{children:e.jsx(n,{variant:"caption",color:"primary",children:"Iniciará una nueva resolución."})}),e.jsx("li",{children:e.jsx(n,{variant:"caption",color:"primary",children:'Se asignará el Juez indicado en el formulario, se agregará la nomenclatura "540 - Devuelve con resultado positivo" y se grabará el trámite.'})}),e.jsx("li",{children:e.jsx(n,{variant:"caption",color:"primary",children:'Ingresará en la causa el texto "Atendido el tiempo transcurrido devuélvase el presente exhorto a su tribunal de origen." firmando al final del texto con las siglas "/rpa"'})}),e.jsx("li",{children:e.jsx(n,{variant:"caption",color:"primary",children:"Finalmente grabará el trámite y hará el envío a despacho para continuar nuevamente con el siguiente rit en la planilla excel."})})]})]}),e.jsxs(a,{item:!0,m:1,ml:3,m3:3,children:[e.jsx(n,{variant:"h4",color:"primary",mb:1,children:"Instrucciones de ejecución."}),e.jsx(n,{variant:"caption",color:"primary",children:"Este robot funciona trabajando directamente en la plataforma SITCI, Ingresando con las credenciales entregadas en el formulario simulando a un funcionario con la labor de devolver exhortos en materia de civil. Para asegurar su funcionamiento es necesario seguir los siguientes pasos:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx(n,{variant:"caption",color:"primary",children:"Primero se debe descargar desde la plataforma SITCI aquellas causas en las que se necesite devolver el exhorto. Para eso, desde la plafaroma SITCI se debe seguir la siguiente ruta:"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(n,{variant:"caption",color:"primary",children:["ingresar a la plataforma"," ",e.jsx("a",{href:"http://www.civil.pjud/",children:"http://www.civil.pjud/"}),"."]})}),e.jsx("li",{children:e.jsx(n,{variant:"caption",color:"primary",children:'Desde la pestaña de "Ingreso" seleccionar "Exhortos".'})}),e.jsx("li",{children:e.jsx(n,{variant:"caption",color:"primary",children:'Luego desde el panel de la izquierda seleccionar "Exhortado" y filtrar desde la pestaña "Pend. Dev" por fecha la cuál puede ser de un máximo de 6 meses.'})}),e.jsx("li",{children:e.jsx(n,{variant:"caption",color:"primary",children:"Finalmente guarda ese listado en formato Excel para posteriormente rellenar el formulario que permite ejecutar el robot."})})]})]}),e.jsx("li",{children:e.jsx(n,{variant:"caption",color:"primary",children:"Luego de descargar el excel con los exhortos pendientes de envío, es necesario realizar la conexión vía escritorio remoto con el equipo que se configuró para la ejecución de los procesos de robotización."})}),e.jsx("li",{children:e.jsx(n,{variant:"caption",color:"primary",children:"Probar la conexión desde la página web hacia el escritorio remoto."})}),e.jsx("li",{children:e.jsx(n,{variant:"caption",color:"primary",children:"Completar el formulario e iniciar el robot. El resultado final será entregado vía correo electrónico."})})]})]})]})}),toggleDrawer:s,state:h}),ge=()=>{const h=me(he),[s,v]=o.useState({top:!1,left:!1,bottom:!1,right:!1}),l=(r,t)=>i=>{i&&i.type==="keydown"&&(i.key==="Tab"||i.key==="Shift")||v({...s,[r]:t})},{instructivoDevExh:L}=xe(s,l),b=X(),{id_robot:w}=Y(),{jueces:x,enEjecucion:U}=f(r=>r.app),[{nombre_robot:q,id_listarobot:z}]=f(r=>r.rpa.robotsTribunal.filter(t=>t.id_robot==w)),{id_tribunal:A,ip:V}=f(r=>r.auth.tribunal),[u,N]=o.useState(!1),[d,k]=o.useState(!1),[y,_]=o.useState(null),[P,C]=o.useState(""),[j,g]=o.useState(!1),[R,S]=o.useState("El archivo debe ser formato Excel (.xls o .xlsx)"),W=r=>{_(r.target.files[0]),r.target.value.split(".").pop()==="xls"||r.target.value.split(".").pop()==="xlsx"&&r.target.value.length!==0?(C(r.target.value),g(!1),S("")):(g(!0),S("El archivo debe ser formato Excel (.xls o .xlsx)"),C(""),_(null))},B={email:"",user_sitci:"",pass_sitci:"",juez:"",devoluciones:""},J={email:[[r=>r.includes("@"),"El correo debe tener una @."]],user_sitci:[[r=>r.length>=3,"Usuario Sitci debe tener más de 3 letras."]],pass_sitci:[[r=>r.length>=3,"Contraseña Sitci debe tener más de 3 letras."]],juez:[[r=>r.length>=3,"No se ha seleccionado ningún juez."]]},{email:M,emailValid:I,user_sitci:G,user_sitciValid:E,pass_sitci:H,pass_sitciValid:T,juez:K,juezValid:D,isFormValid:O,onInputChange:p,formState:c}=Z(B,J),$=r=>{if(r.preventDefault(),N(!0),!O||!j||y===null){g(!0);return}if(U.ejecutando){h.fire("¡Error!","Actualmente se está ejecutando otro proceso, espera a que este termine para intentarlo nuevamente. En la parte superior de la página puedes comprobar que proceso está siendo ejecutado.","warning");return}k(!0),c.id_robot=w,c.nombre_robot=q,c.ip=V,c.id_tribunal=A,c.archivo=y,c.id_listarobot=z,b(pe({...c}))};return o.useEffect(()=>{b(ee("Devolución de Exhortos"))},[]),e.jsxs(a,{container:!0,spacing:0,direction:"row",children:[e.jsx(a,{item:!0,className:"animate__animated animate__fadeIn",children:e.jsx(a,{container:!0,spacing:0,justifyContent:"right",children:e.jsxs(a,{item:!0,children:[e.jsx(re,{onClick:l("right",!0),"aria-label":"Ayuda",size:"large",sx:{color:"primary.main",position:"fixed",right:50,outline:"0px"},style:{outline:0},children:e.jsx(ae,{title:"Instrucciones",arrow:!0,children:e.jsx(ie,{sx:{fontSize:30}})})}),e.jsx(te,{anchor:"right",open:s.right,onClose:l("right",!1),onOpen:l("right",!0),className:"drawerhelp",children:L("right")})]})})}),e.jsx(a,{container:!0,spacing:1,direction:"row",justifyContent:"center",alignItems:"center",alignContent:"center",wrap:"wrap",children:e.jsxs(a,{item:!0,lg:6,children:[e.jsx(a,{container:!0,spacing:3,direction:"row",justifyContent:"center",alignItems:"center",className:"animate__animated animate__fadeIn",children:e.jsx(a,{item:!0,children:e.jsx(ne,{sizes:"normal",sx:{width:56,height:56,bgcolor:"#4a6d88"},children:e.jsx(oe,{})})})}),e.jsx(a,{container:!0,spacing:1,direction:"column",justifyContent:"center",alignItems:"center",className:"animate__animated animate__fadeIn",children:e.jsx(a,{item:!0,mt:1,children:e.jsx(n,{variant:"h5",color:"primary",children:"Configurar Robot"})})}),e.jsx(a,{container:!0,spacing:0,direction:"column",alignItems:"center",justifyContent:"center",className:"animate__animated animate__fadeIn",children:e.jsx(a,{item:!0,xs:3,sx:{padding:0,borderRadius:3,width:{sm:450}},children:e.jsx("form",{onSubmit:$,encType:"multipart/form-data",children:e.jsxs(a,{container:!0,spacing:0,children:[e.jsx(a,{item:!0,xs:12,sx:{marginTop:2},children:e.jsx(m,{label:"Email",type:"email",placeholder:"Email",fullWidth:!0,name:"email",variant:"outlined",value:M,onChange:p,error:!!I&&u,helperText:I,disabled:d})}),e.jsx(a,{item:!0,xs:12,sx:{marginTop:2},children:e.jsx(m,{label:"Usuario Sitci",type:"text",placeholder:"Usuario Sitci",fullWidth:!0,name:"user_sitci",variant:"outlined",value:G,onChange:p,error:!!E&&u,helperText:E,disabled:d})}),e.jsx(a,{item:!0,xs:12,sx:{marginTop:2},children:e.jsx(m,{label:"Contraseña Sitci",type:"password",placeholder:"Contraseña Sitci",fullWidth:!0,name:"pass_sitci",variant:"outlined",value:H,onChange:p,error:!!T&&u,helperText:T,disabled:d})}),e.jsxs(a,{item:!0,xs:12,sx:{marginTop:2},children:[e.jsx(m,{type:"file",fullWidth:!0,name:"devoluciones",variant:"outlined",value:P,onChange:r=>W(r),error:!!j&&u,disabled:d}),e.jsx(F,{error:j,sx:{ml:2},children:R})]}),e.jsx(a,{item:!0,xs:12,sx:{marginTop:2},children:e.jsxs(se,{fullWidth:!0,error:!!D&&u,disabled:d,children:[e.jsx(le,{id:"tipo-usuario-label",children:"Firma Juez"}),e.jsx(ce,{labelId:"juez-label",id:"juez-select",name:"juez",value:K,label:"Firma Juez",onChange:p,defaultValue:"",error:!0,children:x==null?void 0:x.map(r=>e.jsx(de,{value:r.apellido_paterno.trim().toLowerCase().replace(/\w\S*/g,t=>t.replace(/^\w/,i=>i.toUpperCase()))+" "+r.apellido_materno.trim().toLowerCase().replace(/\w\S*/g,t=>t.replace(/^\w/,i=>i.toUpperCase()))+", "+r.primer_nombre.trim().toLowerCase().replace(/\w\S*/g,t=>t.replace(/^\w/,i=>i.toUpperCase()))+" "+r.segundo_nombre.trim().toLowerCase().replace(/\w\S*/g,t=>t.replace(/^\w/,i=>i.toUpperCase())),children:r.apellido_paterno.trim().toLowerCase().replace(/\w\S*/g,t=>t.replace(/^\w/,i=>i.toUpperCase()))+" "+r.apellido_materno.trim().toLowerCase().replace(/\w\S*/g,t=>t.replace(/^\w/,i=>i.toUpperCase()))+", "+r.primer_nombre.trim().toLowerCase().replace(/\w\S*/g,t=>t.replace(/^\w/,i=>i.toUpperCase()))+" "+r.segundo_nombre.trim().toLowerCase().replace(/\w\S*/g,t=>t.replace(/^\w/,i=>i.toUpperCase()))},r.apellido_paterno.trim().toLowerCase().replace(/\w\S*/g,t=>t.replace(/^\w/,i=>i.toUpperCase()))))}),e.jsx(F,{children:D})]})}),e.jsx(a,{item:!0,xs:12,sx:{marginTop:2},children:e.jsx(a,{container:!0,spacing:0,alignItems:"center",justifyContent:"center",children:e.jsx(a,{item:!0,children:e.jsx(ue,{variant:"contained",type:"submit",style:{outline:"none"},disabled:d,children:"Ejecutar"})})})})]})})})})]})})]})};export{ge as default};
