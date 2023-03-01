"use strict";(self.webpackChunkgallery=self.webpackChunkgallery||[]).push([[538],{538:function(e,a,r){r.r(a);r(2791);var n=r(3044),s=r(6151),t=r(4708),i=r(7810),l=r(533),o=r(1889),u=r(4554),m=r(890),d=r(9164),h=r(403),c=r(1087),p=r(5705),x=r(6727),f=r(1243),Z=r(184);a.default=function(){var e=x.Ry({firstName:x.Z_("Enter your first name").min(3,"must be at least 3 characters long").required("First name is required"),lastName:x.Z_("Enter your last name").min(3,"must be at least 3 characters long").required("Last name is required"),username:x.Z_("Enter your user name").min(3,"must be at least 3 characters long").required("User name is required").test("Unique username","Username already in use",(function(e){return new Promise((function(a,r){f.Z.get("http://localhost:8003/api/u/user/".concat(e,"/available")).then((function(e){a(!0)})).catch((function(e){"The username has already been taken."===e.response.data.content&&a(!1)}))}))})),email:x.Z_("Enter your email").email("Enter a valid email").required("Email is required").test("Unique Email","Email already in use",(function(e){return new Promise((function(a,r){f.Z.get("http://localhost:8003/api/u/user/".concat(e,"/available")).then((function(e){a(!0)})).catch((function(e){"The email has already been taken."===e.response.data.content&&a(!1)}))}))})),password:x.Z_("Enter your password").min(8,"Password should be of minimum 8 characters length").required("Password is required"),phone:x.Z_().required("Phone number is required").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid").min(10,"too short").max(10,"too long")}),a=(0,p.TA)({initialValues:{},validationSchema:e,onSubmit:function(e){alert(JSON.stringify(e,null,2))}});return(0,Z.jsxs)(d.Z,{component:"main",maxWidth:"xs",children:[(0,Z.jsx)(t.ZP,{}),(0,Z.jsxs)(u.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,Z.jsx)(n.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,Z.jsx)(h.Z,{})}),(0,Z.jsx)(m.Z,{component:"h1",variant:"h5",children:"Sign up"}),(0,Z.jsxs)(u.Z,{component:"form",noValidate:!0,onSubmit:a.handleSubmit,sx:{mt:3},children:[(0,Z.jsxs)(o.ZP,{container:!0,spacing:2,children:[(0,Z.jsx)(o.ZP,{item:!0,xs:12,sm:6,children:(0,Z.jsx)(i.Z,{autoComplete:"given-name",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,value:a.values.firstName,onChange:a.handleChange,error:a.touched.firstName&&a.errors.firstName,helperText:a.touched.firstName&&a.errors.firstName})}),(0,Z.jsx)(o.ZP,{item:!0,xs:12,sm:6,children:(0,Z.jsx)(i.Z,{required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"family-name",value:a.values.lastName,onChange:a.handleChange,error:a.touched.lastName&&a.errors.lastName,helperText:a.touched.lastName&&a.errors.lastName})}),(0,Z.jsx)(o.ZP,{item:!0,xs:12,children:(0,Z.jsx)(i.Z,{required:!0,fullWidth:!0,id:"username",label:"User Name",name:"username",autoComplete:"username",value:a.values.username,onBlur:a.handleChange,error:a.touched.username&&a.errors.username,helperText:a.touched.username&&a.errors.username})}),(0,Z.jsx)(o.ZP,{item:!0,xs:12,children:(0,Z.jsx)(i.Z,{required:!0,fullWidth:!0,id:"email",label:"Email Address",type:"email",name:"email",autoComplete:"email",value:a.values.email,onBlur:a.handleChange,error:a.touched.email&&a.errors.email,helperText:a.touched.email&&a.errors.email})}),(0,Z.jsx)(o.ZP,{item:!0,xs:12,children:(0,Z.jsx)(i.Z,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password",value:a.values.password,onChange:a.handleChange,error:a.touched.password&&a.errors.password,helperText:a.touched.password&&a.errors.password})}),(0,Z.jsx)(o.ZP,{item:!0,xs:12,children:(0,Z.jsx)(i.Z,{required:!0,fullWidth:!0,name:"phone",label:"Phone",type:"number",id:"phone",autoComplete:"phone",value:a.values.phone,onChange:a.handleChange,error:a.touched.phone&&a.errors.phone,helperText:a.touched.phone&&a.errors.phone})})]}),(0,Z.jsx)(s.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},disabled:a.isSubmitting,children:"Sign Up"}),(0,Z.jsx)(o.ZP,{container:!0,justifyContent:"flex-end",children:(0,Z.jsx)(o.ZP,{item:!0,children:(0,Z.jsx)(c.rU,{to:"signin",children:(0,Z.jsx)(l.Z,{variant:"body2",children:"Already have an account? Sign in"})})})})]})]})]})}}}]);
//# sourceMappingURL=538.11f83ac4.chunk.js.map