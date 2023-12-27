import{j as e,B as Q,G as r,T as n,r as o,u as X,a as Y,b as f,c as Z,s as ee,I as ae,d as re,e as ie,S as te,A as ne,f as oe,g as m,F as E,h as se,i as le,k as ce,M as de,l as pe,m as ue,w as me,n as he}from"./index-b20ded46.js";const xe=(g,c)=>({instructivoArchFam:s=>e.jsx(Q,{sx:{width:"500px",borderTopLeftRadius:"30px"},role:"presentation",onClick:c(s,!1),onKeyDown:c(s,!1),className:"help",children:e.jsxs(r,{container:!0,spacing:0,direction:"row",justifyContent:"center",alignItems:"center",alignContent:"center",mt:3,children:[e.jsxs(r,{item:!0,m:1,ml:3,m3:3,children:[e.jsx(n,{variant:"h4",color:"primary",mb:1,children:"Descripción del proceso."}),e.jsx(n,{variant:"caption",color:"primary",children:'El robot, utilizando la planilla excel entregada en el formulario, recorrerá cada rit existente para intentar realizar el proceso de archivo. Es importante saber que la planilla excel debe ser llenada por quién pretende ejecutar el proceso ya que mientras funcione el proceso, solo se validará que la causa pueda ser archivada si su estado administrativo corresponde a "Concluido". A continuación una descripción del proceso paso a paso:'}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(n,{variant:"caption",color:"primary",children:"Ingresará con las credenciales entregadas a la plataforma SITFA."})}),e.jsx("li",{children:e.jsx(n,{variant:"caption",color:"primary",children:"Ingresará primer rit de la planilla excel."})}),e.jsx("li",{children:e.jsx(n,{variant:"caption",color:"primary",children:'Verificará estado administrativo en la causa. Si es "Concluida", se pintará de color verde inidicando que se archivó. De lo contrario, se pintará de color amarillo indicando que no puede ser archivada.'})}),e.jsx("li",{children:e.jsx(n,{variant:"caption",color:"primary",children:'Se asignará el Juez indicado en el formulario y se agregará la nomenclatura "Archívese".'})}),e.jsx("li",{children:e.jsx(n,{variant:"caption",color:"primary",children:"Se grabará y se ingresará el texto correspondiente utilizando una plantilla creada previamente por el Tribunal. La cuál será cerrada inmediatamente y guardada."})}),e.jsx("li",{children:e.jsx(n,{variant:"caption",color:"primary",children:"Finalmente grabará el trámite y hará el envío a despacho para continuar nuevamente con el siguiente rit en la planilla excel."})})]})]}),e.jsxs(r,{item:!0,m:1,ml:3,m3:3,children:[e.jsx(n,{variant:"h4",color:"primary",mb:1,children:"Instrucciones de ejecución."}),e.jsx(n,{variant:"caption",color:"primary",children:"Este robot funciona trabajando directamente en la plataforma SITFA, Ingresando con las credenciales entregadas en el formulario simulando a un funcionario con la labor de archivar causas en materia de familia. Para asegurar su funcionamiento es necesario seguir los siguientes pasos:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx(n,{variant:"caption",color:"primary",children:"Revisar las credenciales de acceso a la plataforma SITFA utilizando Internet Explorer:"}),e.jsx("ul",{children:e.jsx("li",{children:e.jsx(n,{variant:"caption",color:"primary",children:e.jsx("a",{href:"http://www.familia.pjud/",children:"http://www.familia.pjud/"})})})})]}),e.jsx("li",{children:e.jsx(n,{variant:"caption",color:"primary",children:"Realizar la conexión vía escritorio remoto con el equipo que se configuró para la ejecución de los procesos de robotización."})}),e.jsx("li",{children:e.jsx(n,{variant:"caption",color:"primary",children:"Probar la conexión desde la página web hacia el escritorio remoto."})}),e.jsx("li",{children:e.jsx(n,{variant:"caption",color:"primary",children:"Comprobar que filas de archivo excel corresponden con las señaladas en la plantilla."})}),e.jsx("li",{children:e.jsx(n,{variant:"caption",color:"primary",children:'Verificar que se haya creado la plantilla "Archivese" en la plataforma SITFA para que el robot pueda utilizarla.'})}),e.jsx("li",{children:e.jsx(n,{variant:"caption",color:"primary",children:"Completar el formulario e iniciar el robot."})})]})]})]})})}),fe=()=>{const g=me(he),[c,b]=o.useState({top:!1,left:!1,bottom:!1,right:!1}),s=(a,t)=>i=>{i&&i.type==="keydown"&&(i.key==="Tab"||i.key==="Shift")||b({...c,[a]:t})},{instructivoArchFam:q}=xe(c,s),v=X(),{id_robot:w}=Y(),{jueces:h,enEjecucion:z}=f(a=>a.app),[{nombre_robot:V,id_listarobot:L}]=f(a=>a.rpa.robotsTribunal.filter(t=>t.id_robot==w)),{id_tribunal:U,ip:N}=f(a=>a.auth.tribunal),[p,D]=o.useState(!1),[d,R]=o.useState(!1),[y,_]=o.useState(null),[k,C]=o.useState(""),[x,j]=o.useState(!1),[W,S]=o.useState("El archivo debe ser formato Excel (.xls o .xlsx)"),B=a=>{_(a.target.files[0]),a.target.value.split(".").pop()==="xls"||a.target.value.split(".").pop()==="xlsx"&&a.target.value.length!==0?(C(a.target.value),j(!1),S("")):(j(!0),S("El archivo debe ser formato Excel (.xls o .xlsx)"),C(""),_(null))},J={email:"",user_sitfa:"",pass_sitfa:"",juez:"",devoluciones:""},M={email:[[a=>a.includes("@"),"El correo debe tener una @."]],user_sitfa:[[a=>a.length>=3,"Usuario Sitfa debe tener más de 3 letras."]],pass_sitfa:[[a=>a.length>=3,"Contraseña Sitfa debe tener más de 3 letras."]],juez:[[a=>a.length>=3,"No se ha seleccionado ningún juez."]]},{email:P,emailValid:I,user_sitfa:G,user_sitfaValid:T,pass_sitfa:H,pass_sitfaValid:A,juez:K,juezValid:F,isFormValid:O,onInputChange:u,formState:l}=Z(J,M),$=a=>{if(a.preventDefault(),D(!0),!O||!x||y===null){j(!0);return}if(z.ejecutando){g.fire("¡Error!","Actualmente se está ejecutando otro proceso, espera a que este termine para intentarlo nuevamente. En la parte superior de la página puedes comprobar que proceso está siendo ejecutado.","warning");return}R(!0),l.id_robot=w,l.nombre_robot=V,l.ip=N,l.id_tribunal=U,l.archivo=y,l.id_listarobot=L,v(ue({...l}))};return o.useEffect(()=>{v(ee("Archivos Familia"))},[]),e.jsxs(r,{container:!0,spacing:0,direction:"row",children:[e.jsx(r,{item:!0,className:"animate__animated animate__fadeIn",children:e.jsx(r,{container:!0,spacing:0,justifyContent:"right",children:e.jsxs(r,{item:!0,children:[e.jsx(ae,{onClick:s("right",!0),"aria-label":"Ayuda",size:"large",sx:{color:"primary.main",position:"fixed",right:50,outline:"0px"},style:{outline:0},children:e.jsx(re,{title:"Instrucciones",arrow:!0,children:e.jsx(ie,{sx:{fontSize:30}})})}),e.jsx(te,{anchor:"right",open:c.right,onClose:s("right",!1),onOpen:s("right",!0),className:"drawerhelp",children:q("right")})]})})}),e.jsx(r,{container:!0,spacing:1,direction:"row",justifyContent:"center",alignItems:"center",alignContent:"center",wrap:"wrap",children:e.jsxs(r,{item:!0,lg:6,children:[e.jsx(r,{container:!0,spacing:3,direction:"row",justifyContent:"center",alignItems:"center",className:"animate__animated animate__fadeIn",children:e.jsx(r,{item:!0,children:e.jsx(ne,{sizes:"normal",sx:{width:56,height:56,bgcolor:"#4a6d88"},children:e.jsx(oe,{})})})}),e.jsx(r,{container:!0,spacing:1,direction:"column",justifyContent:"center",alignItems:"center",className:"animate__animated animate__fadeIn",children:e.jsx(r,{item:!0,mt:1,children:e.jsx(n,{variant:"h5",color:"primary",children:"Configurar Robot"})})}),e.jsx(r,{container:!0,spacing:0,direction:"column",alignItems:"center",justifyContent:"center",className:"animate__animated animate__fadeIn",children:e.jsx(r,{item:!0,xs:3,sx:{padding:0,borderRadius:3,width:{sm:450}},children:e.jsx("form",{onSubmit:$,encType:"multipart/form-data",children:e.jsxs(r,{container:!0,spacing:0,children:[e.jsx(r,{item:!0,xs:12,sx:{marginTop:2},children:e.jsx(m,{label:"Email",type:"email",placeholder:"Email",fullWidth:!0,name:"email",variant:"outlined",value:P,onChange:u,error:!!I&&p,helperText:I,disabled:d})}),e.jsx(r,{item:!0,xs:12,sx:{marginTop:2},children:e.jsx(m,{label:"Usuario Sitfa",type:"text",placeholder:"Usuario Sitfa",fullWidth:!0,name:"user_sitfa",variant:"outlined",value:G,onChange:u,error:!!T&&p,helperText:T,disabled:d})}),e.jsx(r,{item:!0,xs:12,sx:{marginTop:2},children:e.jsx(m,{label:"Contraseña Sitfa",type:"password",placeholder:"Contraseña Sitfa",fullWidth:!0,name:"pass_sitfa",variant:"outlined",value:H,onChange:u,error:!!A&&p,helperText:A,disabled:d})}),e.jsxs(r,{item:!0,xs:12,sx:{marginTop:2},children:[e.jsx(m,{type:"file",fullWidth:!0,name:"devoluciones",variant:"outlined",value:k,onChange:a=>B(a),error:!!x&&p,disabled:d}),e.jsx(E,{error:x,sx:{ml:2},children:W})]}),e.jsx(r,{item:!0,xs:12,sx:{marginTop:2},children:e.jsxs(se,{fullWidth:!0,error:!!F&&p,disabled:d,children:[e.jsx(le,{id:"tipo-usuario-label",children:"Firma Juez"}),e.jsx(ce,{labelId:"juez-label",id:"juez-select",name:"juez",value:K,label:"Firma Juez",onChange:u,defaultValue:"",error:!0,children:h==null?void 0:h.map(a=>e.jsx(de,{value:a.apellido_paterno.trim().toLowerCase().replace(/\w\S*/g,t=>t.replace(/^\w/,i=>i.toUpperCase()))+" "+a.apellido_materno.trim().toLowerCase().replace(/\w\S*/g,t=>t.replace(/^\w/,i=>i.toUpperCase()))+", "+a.primer_nombre.trim().toLowerCase().replace(/\w\S*/g,t=>t.replace(/^\w/,i=>i.toUpperCase()))+" "+a.segundo_nombre.trim().toLowerCase().replace(/\w\S*/g,t=>t.replace(/^\w/,i=>i.toUpperCase())),children:a.apellido_paterno.trim().toLowerCase().replace(/\w\S*/g,t=>t.replace(/^\w/,i=>i.toUpperCase()))+" "+a.apellido_materno.trim().toLowerCase().replace(/\w\S*/g,t=>t.replace(/^\w/,i=>i.toUpperCase()))+", "+a.primer_nombre.trim().toLowerCase().replace(/\w\S*/g,t=>t.replace(/^\w/,i=>i.toUpperCase()))+" "+a.segundo_nombre.trim().toLowerCase().replace(/\w\S*/g,t=>t.replace(/^\w/,i=>i.toUpperCase()))},a.apellido_paterno.trim().toLowerCase().replace(/\w\S*/g,t=>t.replace(/^\w/,i=>i.toUpperCase()))))}),e.jsx(E,{children:F})]})}),e.jsx(r,{item:!0,xs:12,sx:{marginTop:2},children:e.jsx(r,{container:!0,spacing:0,alignItems:"center",justifyContent:"center",children:e.jsx(r,{item:!0,children:e.jsx(pe,{variant:"contained",type:"submit",style:{outline:"none"},disabled:d,children:"Ejecutar"})})})})]})})})})]})})]})};export{fe as default};