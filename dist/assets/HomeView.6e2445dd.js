import{_ as o,r as i,o as n,c as l,a as e,b as r,w as a,d as _}from"./index.ac9836b7.js";const c={name:"blog",data(){return{message:""}},methods:{anchoPage(t){t(),window.innerWidth>850?caja_trasera_register.style.display="block":(caja_trasera_register.style.display="block",caja_trasera_register.style.opacity="1",contenedor_login_register.style.left="0px",formulario_register.style.display="none")},register(t){t(),window.innerWidth>850?(formulario_register.style.display="block",contenedor_login_register.style.left="410px",caja_trasera_register.style.opacity="0"):(formulario_register.style.display="block",contenedor_login_register.style.left="0px",caja_trasera_register.style.display="none")}}},d={class:"contenedor__todo"},p={class:"caja__trasera"},u={class:"caja__trasera-login"},g=e("h3",null,"\xBFYa tienes una cuenta?",-1),h=e("p",null,"Inicia sesi\xF3n para entrar en la p\xE1gina",-1),y=e("button",{id:"btn__iniciar-sesion"},"Iniciar Sesi\xF3n",-1),f={class:"caja__trasera-register"},m=e("h3",null,"\xBFA\xFAn no tienes una cuenta?",-1),b=e("p",null,"Reg\xEDstrate para que puedas iniciar sesi\xF3n",-1),x=e("button",{id:"btn__registrarse"},"Reg\xEDstrarse ",-1),v=_('<div class="contenedor__login-register"><form action="" class="formulario__register"><h2>Reg\xEDstrarse</h2><input type="text" placeholder="Nombre completo"><input type="text" placeholder="Correo Electronico"><input type="text" placeholder="Usuario"><input type="password" placeholder="Contrase\xF1a"><button><a href="../web LuisTuarez 4TOB/index.html" class="boton">Registrarse</a></button></form></div>',1);function w(t,j,k,B,C,N){const s=i("router-link");return n(),l("div",null,[e("main",null,[e("div",d,[e("div",p,[e("div",u,[g,h,r(s,{to:"/login"},{default:a(()=>[y]),_:1})]),e("div",f,[m,b,r(s,{to:"/register"},{default:a(()=>[x]),_:1})])]),v])])])}var V=o(c,[["render",w]]);export{V as default};