import{_ as u,o as l,c as t,a as o,h as i,v as a,F as c,k as d,l as m,d as p,t as f}from"./index.ac9836b7.js";const h={name:"App",data(){return{message:"",errors:[],name:"",autor:"",email:"",contrase\u00F1a:"",contrase\u00F1a2:"",categoria:""}},methods:{checkForm:function(n){n.preventDefault(),this.errors=[],(this.name===""||this.autor===""||this.contrase\u00F1a===""||this.contrase\u00F1a2===""||this.email==""||this.categoria==="")&&this.errors.push("Se requieren que todos los datos est\xE9n completos"),this.contrase\u00F1a!=this.contrase\u00F1a2?this.errors.push("Las contrase\xF1as deben coincidir"):alert("Libro registrado")}}},g={class:"formulario_grupo",id:"grupo_usuario"},b=o("label",{class:"formulario__label"},"Nombre del libro",-1),v={class:"formulario__grupo-input"},E=o("i",{class:"formulario__validacion-estado fas fa-times-circle"},null,-1),O=o("p",{class:"formulario__input-error"},"es obligatorio este campo",-1),R={class:"formulario_grupo",id:"grupo_nombre"},S=o("label",{class:"formulario__label"},"autor",-1),x={class:"formulario__grupo-input"},y=o("i",{class:"formulario__validacion-estado fas fa-times-circle"},null,-1),j=o("p",{class:"formulario__input-error"},"es obligatorio este campo",-1),k={class:"formulario_grupo",id:"grupo_password"},w=o("label",{class:"formulario__label"},"id del libro",-1),T={class:"formulario__grupo-input"},V=o("i",{class:"formulario__validacion-estado fas fa-times-circle"},null,-1),A=o("p",{class:"formulario__input-error"},"el id debe ser de 4 a 8 digitos",-1),D={class:"formulario_grupo",id:"grupo_password2"},I=o("label",{class:"formulario__label"},"Repetir id del libro",-1),L={class:"formulario__grupo-input"},N=o("i",{class:"formulario__validacion-estado fas fa-times-circle"},null,-1),B=o("p",{class:"formulario__input-error"},"el id no coincide",-1),U={class:"formulario_grupo",id:"grupo_correo"},C=o("label",{class:"formulario__label"},"correo del editorial",-1),F={class:"formulario__grupo-input"},M=o("i",{class:"formulario__validacion-estado fas fa-times-circle"},null,-1),P=o("p",{class:"formulario__input-error"},null,-1),q={class:"formulario_grupo",id:"grupo_telefono"},G=o("label",{class:"formulario__label"},"categoria",-1),H={class:"formulario__grupo-input"},X=o("i",{class:"formulario__validacion-estado fas fa-times-circle"},null,-1),z=o("p",{class:"formulario__input-error"},null,-1),J=p('<div class="formulario_grupo formulariogrupo-terminos" id="grupo_terminos"><label class="formulario__label"><input class="formulario__checkbox" type="checkbox" name="terminos" id="terminos"><b class="formulario__span">DESEO REGISTRAR ESTE LIBRO</b></label></div><div class="formulario_mensaje" id="formulario_mensaje"><p><i class="fas fa-exclamation-circle"><b>ATENCION!:</b>DEBES COMPLETAR TODOS LOS CAMPOS</i></p></div><div class="formulario_grupo formulario_grupo-btn-enviar"><p class="formulario_mensaje-exito" id="formulario_mensaje-exito">BIEN! LIBRO REGISTRADO CON EXITO</p><input class="formulario__btn" type="submit" value="Enviar"></div>',3),K={key:0,class:"error",id:"formulario_mensaje"},Q=o("b",{class:"error"},"Porfavor corregir error(s):",-1),W={class:"error"},Y={class:"error"};function Z(n,s,$,oo,e,_){return l(),t("main",null,[o("form",{action:"#",class:"formulario",id:"formulario",onSubmit:s[6]||(s[6]=(...r)=>_.checkForm&&_.checkForm(...r))},[o("div",g,[b,o("div",v,[i(o("input",{type:"text",class:"formulario__input",name:"usuario",id:"usuario","onUpdate:modelValue":s[0]||(s[0]=r=>e.name=r),placeholder:"ej: LA ODISEA"},null,512),[[a,e.name]]),E]),O]),o("div",R,[S,o("div",x,[i(o("input",{type:"text",class:"formulario__input",name:"nombre",id:"nombre","onUpdate:modelValue":s[1]||(s[1]=r=>e.autor=r),placeholder:"ej: HOMERO"},null,512),[[a,e.autor]]),y]),j]),o("div",k,[w,o("div",T,[i(o("input",{type:"password",class:"formulario__input",name:"password","onUpdate:modelValue":s[2]||(s[2]=r=>e.contrase\u00F1a=r),id:"password"},null,512),[[a,e.contrase\u00F1a]]),V]),A]),o("div",D,[I,o("div",L,[i(o("input",{type:"password",class:"formulario__input",name:"password2",id:"password2","onUpdate:modelValue":s[3]||(s[3]=r=>e.contrase\u00F1a2=r)},null,512),[[a,e.contrase\u00F1a2]]),N]),B]),o("div",U,[C,o("div",F,[i(o("input",{type:"email",class:"formulario__input",name:"correo","onUpdate:modelValue":s[4]||(s[4]=r=>e.email=r),id:"correo",placeholder:`ej: \r
catedra@gmail.com`},null,512),[[a,e.email]]),M]),P]),o("div",q,[G,o("div",H,[i(o("input",{type:"telefono",class:"formulario__input",name:"telefono","onUpdate:modelValue":s[5]||(s[5]=r=>e.categoria=r),id:"telefono",placeholder:`ej: \r
TERROR`},null,512),[[a,e.categoria]]),X]),z]),J,e.errors.length?(l(),t("p",K,[Q,o("ul",W,[(l(!0),t(c,null,d(e.errors,r=>(l(),t("li",Y,f(r),1))),256))])])):m("",!0)],32)])}var so=u(h,[["render",Z]]);export{so as default};
