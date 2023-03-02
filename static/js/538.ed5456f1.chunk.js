"use strict";(self.webpackChunkgallery=self.webpackChunkgallery||[]).push([[538],{538:function(e,r,a){a.r(r);var t=a(4165),n=a(5861),s=a(2791),i=a(3044),o=a(6151),l=a(4708),u=a(6940),m=a(533),c=a(1889),d=a(4554),h=a(890),p=a(9164),x=a(403),f=a(7689),g=a(1087),v=a(5705),Z=a(6727),b=a(1243),j=a(184);r.default=function(){var e=(0,f.s0)(),r=Z.Ry({firstName:Z.Z_("Enter your first name").min(3,"must be at least 3 characters long").required("First name is required"),lastName:Z.Z_("Enter your last name").min(3,"must be at least 3 characters long").required("Last name is required"),username:Z.Z_("Enter your user name").min(3,"must be at least 3 characters long").required("User name is required").test("Unique username","Username already in use",function(){var e=(0,n.Z)((0,t.Z)().mark((function e(r){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.Z.get("https://dummyjson.com/users/search?q=".concat(r));case 3:if(!(e.sent.data.total>0)){e.next=6;break}return e.abrupt("return",!1);case 6:return e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}()),email:Z.Z_("Enter your email").email("Enter a valid email").required("Email is required").test("Unique Email","Email already in use",function(){var e=(0,n.Z)((0,t.Z)().mark((function e(r){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.Z.get("https://dummyjson.com/users/search?q=".concat(r));case 3:if(!(e.sent.data.total>0)){e.next=6;break}return e.abrupt("return",!1);case 6:return e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}()),password:Z.Z_("Enter your password").min(8,"Password should be of minimum 8 characters length").required("Password is required"),phone:Z.Z_().required("Phone number is required").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid").min(10,"too short").max(10,"too long")}),a={firstName:"",lastName:"",username:"",email:"",password:"",phone:""},y=(0,v.TA)({initialValues:a,validationSchema:r,onSubmit:function(){var r=(0,n.Z)((0,t.Z)().mark((function r(a){var n,s,i,o;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log(a),r.prev=1,n={headers:{"Content-Type":"application/json"}},s=JSON.stringify(a),r.next=6,b.Z.post("https://dummyjson.com/users/add",s,n);case 6:i=r.sent,o=i.data,console.log(o),localStorage.clear("signup_vals"),e("/"),r.next=18;break;case 13:r.prev=13,r.t0=r.catch(1),console.log(r.t0),alert(r.t0.response.data.message),y.setSubmitting(!1);case 18:case"end":return r.stop()}}),r,null,[[1,13]])})));return function(e){return r.apply(this,arguments)}}()});return s.useEffect((function(){localStorage.getItem("token")&&e("/");var r=JSON.parse(localStorage.getItem("signup_vals"));r&&y.setValues(r)}),[]),s.useEffect((function(){y.values!==a&&localStorage.setItem("signup_vals",JSON.stringify(y.values))}),[y.values]),(0,j.jsxs)(p.Z,{component:"main",maxWidth:"xs",children:[(0,j.jsx)(l.ZP,{}),(0,j.jsxs)(d.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,j.jsx)(i.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,j.jsx)(x.Z,{})}),(0,j.jsx)(h.Z,{component:"h1",variant:"h5",children:"Sign up"}),(0,j.jsxs)(d.Z,{component:"form",noValidate:!0,onSubmit:y.handleSubmit,sx:{mt:3},children:[(0,j.jsxs)(c.ZP,{container:!0,spacing:2,children:[(0,j.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,j.jsx)(u.Z,{autoComplete:"given-name",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,value:y.values.firstName,onChange:y.handleChange,error:y.touched.firstName&&y.errors.firstName,helperText:y.touched.firstName&&y.errors.firstName})}),(0,j.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,j.jsx)(u.Z,{required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"family-name",value:y.values.lastName,onChange:y.handleChange,error:y.touched.lastName&&y.errors.lastName,helperText:y.touched.lastName&&y.errors.lastName})}),(0,j.jsx)(c.ZP,{item:!0,xs:12,children:(0,j.jsx)(u.Z,{required:!0,fullWidth:!0,id:"username",label:"User Name",name:"username",autoComplete:"username",value:y.values.username,onChange:y.handleChange,error:y.errors.username,helperText:y.errors.username})}),(0,j.jsx)(c.ZP,{item:!0,xs:12,children:(0,j.jsx)(u.Z,{required:!0,fullWidth:!0,id:"email",label:"Email Address",type:"email",name:"email",autoComplete:"email",value:y.values.email,onChange:y.handleChange,error:y.errors.email,helperText:y.errors.email})}),(0,j.jsx)(c.ZP,{item:!0,xs:12,children:(0,j.jsx)(u.Z,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password",value:y.values.password,onChange:y.handleChange,error:y.touched.password&&y.errors.password,helperText:y.touched.password&&y.errors.password})}),(0,j.jsx)(c.ZP,{item:!0,xs:12,children:(0,j.jsx)(u.Z,{required:!0,fullWidth:!0,name:"phone",label:"Phone",type:"number",id:"phone",autoComplete:"phone",value:y.values.phone,onChange:y.handleChange,error:y.touched.phone&&y.errors.phone,helperText:y.touched.phone&&y.errors.phone})})]}),(0,j.jsx)(o.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},disabled:y.isSubmitting,children:"Sign Up"}),(0,j.jsx)(c.ZP,{container:!0,justifyContent:"flex-end",children:(0,j.jsx)(c.ZP,{item:!0,children:(0,j.jsx)(g.rU,{to:"signin",children:(0,j.jsx)(m.Z,{variant:"body2",children:"Already have an account? Sign in"})})})})]})]})]})}}}]);
//# sourceMappingURL=538.ed5456f1.chunk.js.map