(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{sU4t:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),a=t("daqC"),u=t("t/Na"),o=function(){function l(l){this.http=l,this.headers=new u.g({"Content-Type":"application/json",Token:localStorage.getItem("Token")}),this.url="https://newmeanstrakapi.herokuapp.com/api/company"}return l.prototype.Create_company=function(l){return this.http.post(this.url+"/",l,{headers:this.headers})},l.prototype.get_company=function(){return this.http.get(this.url+"/get_all",{headers:this.headers})},l.ngInjectableDef=e.Tb({factory:function(){return new l(e.Xb(u.c))},token:l,providedIn:"root"}),l}(),i=function(){function l(l,n){this._todoService=l,this.companyService=n,this.newTodoText="",this.err=!1,this.todoList=this._todoService.getTodoList(),this.get_companys()}return l.prototype.ngOnInit=function(){},l.prototype.getNotDeleted=function(){return this.todoList.filter(function(l){return!l.deleted})},l.prototype.get_companys=function(){var l=this;this.companyService.get_company().subscribe(function(n){console.log(n),l.company_list=n})},l.prototype.addToDoItem=function(l){var n=this;console.log(this.newTodoText),this.companyService.Create_company({company_name:this.newTodoText}).subscribe(function(l){console.log(l),l.errors?n.err=!0:(n.err=!1,n.get_companys())})},l}(),b={breadcrumb:"Company"},c=function(){return function(){}}(),r=t("pMnS"),d=t("t68o"),s=t("zbXB"),p=t("NcP4"),m=t("xYTU"),f=t("bujt"),h=t("UodH"),F=t("lLAP"),g=t("wFw1"),H=t("Mr+X"),w=t("SMsm"),_=t("6UMx"),y=t("0/Q6"),x=t("21Lb"),v=t("OzfB"),C=t("Ip0R"),k=t("lzlj"),N=t("FVSy"),S=t("dJrM"),T=t("seP3"),M=t("Wf4p"),P=t("Fzqc"),j=t("dWZg"),I=t("gIcY"),L=t("b716"),A=t("/VYK"),O=t("bse0"),q=e.vb({encapsulation:0,styles:[[".todo-list[_ngcontent-%COMP%]{height:267px}.mat-chip.info-chip[_ngcontent-%COMP%]{padding:4px 8px;min-height:26px;font-size:12px;font-weight:400}.mat-chip.info-chip[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{margin-right:4px}"]],data:{}});function E(l){return e.Rb(0,[(l()(),e.xb(0,0,null,null,1,"i",[["style","color: red;"]],null,null,null,null,null)),(l()(),e.Pb(-1,null,[" you Can Not Add Any Company."]))],null,null)}function R(l){return e.Rb(0,[(l()(),e.xb(0,0,null,null,4,"button",[["color","warn"],["mat-icon-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=0!=(l.parent.context.$implicit.deleted=!0)&&e),e},f.d,f.b)),e.wb(1,180224,null,0,h.b,[e.k,F.h,[2,g.a]],{color:[0,"color"]},null),(l()(),e.xb(2,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,H.b,H.a)),e.wb(3,9158656,null,0,w.b,[e.k,w.d,[8,null],[2,w.a]],null,null),(l()(),e.Pb(-1,0,["delete_forever"]))],function(l,n){l(n,1,0,"warn"),l(n,3,0)},function(l,n){l(n,0,0,e.Hb(n,1).disabled||null,"NoopAnimations"===e.Hb(n,1)._animationMode),l(n,2,0,e.Hb(n,3).inline,"primary"!==e.Hb(n,3).color&&"accent"!==e.Hb(n,3).color&&"warn"!==e.Hb(n,3).color)})}function D(l){return e.Rb(0,[(l()(),e.xb(0,0,null,null,14,"mat-list-option",[["checkboxPosition","before"],["class","mat-list-item mat-list-option"],["role","option"],["tabindex","-1"]],[[2,"mat-list-item-disabled",null],[2,"mat-list-item-with-avatar",null],[2,"mat-primary",null],[2,"mat-warn",null],[1,"aria-selected",0],[1,"aria-disabled",0]],[[null,"mouseenter"],[null,"mouseleave"],[null,"focus"],[null,"blur"],[null,"click"]],function(l,n,t){var a=!0;return"focus"===n&&(a=!1!==e.Hb(l,1)._handleFocus()&&a),"blur"===n&&(a=!1!==e.Hb(l,1)._handleBlur()&&a),"click"===n&&(a=!1!==e.Hb(l,1)._handleClick()&&a),"mouseenter"===n&&(a=0!=(l.context.$implicit.isActive=!0)&&a),"mouseleave"===n&&(a=0!=(l.context.$implicit.isActive=!1)&&a),a},_.c,_.a)),e.wb(1,1294336,[[10,4]],3,y.d,[e.k,e.h,y.f],{checkboxPosition:[0,"checkboxPosition"]},null),e.Nb(603979776,11,{_avatar:0}),e.Nb(603979776,12,{_icon:0}),e.Nb(603979776,13,{_lines:1}),(l()(),e.xb(5,0,null,0,9,"div",[["fxLayoutAlign","space-between center"]],null,null,null,null,null)),e.wb(6,737280,null,0,x.c,[v.h,e.k,[8,null],v.l],{align:[0,"align"]},null),(l()(),e.xb(7,0,null,null,2,"span",[["class","text-truncate"]],null,null,null,null,null)),(l()(),e.xb(8,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Pb(9,null,[" Company ID: ",""])),(l()(),e.xb(10,0,null,null,2,"span",[["class","text-truncate"]],null,null,null,null,null)),(l()(),e.xb(11,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Pb(12,null,["Company Name: ",""])),(l()(),e.mb(16777216,null,null,1,null,R)),e.wb(14,16384,null,0,C.l,[e.T,e.Q],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,1,0,"before"),l(n,6,0,"space-between center"),l(n,14,0,n.context.$implicit.isActive)},function(l,n){l(n,0,0,e.Hb(n,1).disabled,e.Hb(n,1)._avatar||e.Hb(n,1)._icon,"primary"===e.Hb(n,1).color,"warn"===e.Hb(n,1).color,e.Hb(n,1).selected.toString(),e.Hb(n,1).disabled.toString()),l(n,9,0,null==n.context.$implicit?null:n.context.$implicit.company_id),l(n,12,0,null==n.context.$implicit?null:n.context.$implicit.company_name)})}function $(l){return e.Rb(0,[(l()(),e.xb(0,0,null,null,46,"mat-card",[["class","mat-card"],["style","margin-left: 10%; margin-right: 10%;"]],null,null,null,k.d,k.a)),e.wb(1,49152,null,0,N.a,[],null,null),(l()(),e.xb(2,0,null,0,6,"mat-card-header",[["class","mat-card-header"],["fxLayoutAlign","center"]],null,null,null,k.c,k.b)),e.wb(3,737280,null,0,x.c,[v.h,e.k,[8,null],v.l],{align:[0,"align"]},null),e.wb(4,49152,null,0,N.e,[],null,null),(l()(),e.xb(5,0,null,1,3,"mat-card-subtitle",[["class","mat-card-subtitle"]],null,null,null,null,null)),e.wb(6,16384,null,0,N.h,[],null,null),(l()(),e.xb(7,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Pb(-1,null,["Company List"])),(l()(),e.xb(9,0,null,0,37,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),e.wb(10,16384,null,0,N.d,[],null,null),(l()(),e.xb(11,0,null,null,27,"div",[["fxLayoutAlign","space-between"]],null,null,null,null,null)),e.wb(12,737280,null,0,x.c,[v.h,e.k,[8,null],v.l],{align:[0,"align"]},null),(l()(),e.xb(13,0,null,null,20,"mat-form-field",[["class","w-100 mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,S.b,S.a)),e.wb(14,7520256,null,9,T.c,[e.k,e.h,[2,M.j],[2,P.c],[2,T.a],j.a,e.C,[2,g.a]],null,null),e.Nb(603979776,1,{_controlNonStatic:0}),e.Nb(335544320,2,{_controlStatic:0}),e.Nb(603979776,3,{_labelChildNonStatic:0}),e.Nb(335544320,4,{_labelChildStatic:0}),e.Nb(603979776,5,{_placeholderChild:0}),e.Nb(603979776,6,{_errorChildren:1}),e.Nb(603979776,7,{_hintChildren:1}),e.Nb(603979776,8,{_prefixChildren:1}),e.Nb(603979776,9,{_suffixChildren:1}),(l()(),e.xb(24,0,null,1,7,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["placeholder","Company Add ..."]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(l,n,t){var a=!0,u=l.component;return"input"===n&&(a=!1!==e.Hb(l,25)._handleInput(t.target.value)&&a),"blur"===n&&(a=!1!==e.Hb(l,25).onTouched()&&a),"compositionstart"===n&&(a=!1!==e.Hb(l,25)._compositionStart()&&a),"compositionend"===n&&(a=!1!==e.Hb(l,25)._compositionEnd(t.target.value)&&a),"blur"===n&&(a=!1!==e.Hb(l,30)._focusChanged(!1)&&a),"focus"===n&&(a=!1!==e.Hb(l,30)._focusChanged(!0)&&a),"input"===n&&(a=!1!==e.Hb(l,30)._onInput()&&a),"ngModelChange"===n&&(a=!1!==(u.newTodoText=t)&&a),a},null,null)),e.wb(25,16384,null,0,I.d,[e.H,e.k,[2,I.a]],null,null),e.Mb(1024,null,I.l,function(l){return[l]},[I.d]),e.wb(27,671744,null,0,I.q,[[8,null],[8,null],[8,null],[6,I.l]],{model:[0,"model"]},{update:"ngModelChange"}),e.Mb(2048,null,I.m,null,[I.q]),e.wb(29,16384,null,0,I.n,[[4,I.m]],null,null),e.wb(30,999424,null,0,L.b,[e.k,j.a,[6,I.m],[2,I.p],[2,I.g],M.d,[8,null],A.a,e.C],{placeholder:[0,"placeholder"]},null),e.Mb(2048,[[1,4],[2,4]],T.d,null,[L.b]),(l()(),e.mb(16777216,null,1,1,null,E)),e.wb(33,16384,null,0,C.l,[e.T,e.Q],{ngIf:[0,"ngIf"]},null),(l()(),e.xb(34,0,null,null,4,"button",[["color","primary"],["mat-mini-fab",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.addToDoItem(t)&&e),e},f.d,f.b)),e.wb(35,180224,null,0,h.b,[e.k,F.h,[2,g.a]],{color:[0,"color"]},null),(l()(),e.xb(36,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,H.b,H.a)),e.wb(37,9158656,null,0,w.b,[e.k,w.d,[8,null],[2,w.a]],null,null),(l()(),e.Pb(-1,0,["add"])),(l()(),e.xb(39,0,null,null,7,"div",[["class","todo-list"],["perfectScrollbar",""]],null,null,null,null,null)),e.wb(40,999424,null,0,O.c,[e.C,e.w,e.k,e.E,[2,O.a]],{config:[0,"config"]},null),(l()(),e.xb(41,0,null,null,5,"mat-selection-list",[["aria-multiselectable","true"],["class","mat-selection-list mat-list-base"],["role","listbox"]],[[8,"tabIndex",0],[1,"aria-disabled",0]],[[null,"blur"],[null,"keydown"]],function(l,n,t){var a=!0;return"blur"===n&&(a=!1!==e.Hb(l,43)._onTouched()&&a),"keydown"===n&&(a=!1!==e.Hb(l,43)._keydown(t)&&a),a},_.d,_.b)),e.Mb(5120,null,I.l,function(l){return[l]},[y.f]),e.wb(43,1753088,null,1,y.f,[e.k,[8,null]],null,null),e.Nb(603979776,10,{options:1}),(l()(),e.mb(16777216,null,0,1,null,D)),e.wb(46,278528,null,0,C.k,[e.T,e.Q,e.v],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,3,0,"center"),l(n,12,0,"space-between"),l(n,27,0,t.newTodoText),l(n,30,0,"Company Add ..."),l(n,33,0,t.err),l(n,35,0,"primary"),l(n,37,0),l(n,40,0,""),l(n,46,0,t.company_list)},function(l,n){l(n,13,1,["standard"==e.Hb(n,14).appearance,"fill"==e.Hb(n,14).appearance,"outline"==e.Hb(n,14).appearance,"legacy"==e.Hb(n,14).appearance,e.Hb(n,14)._control.errorState,e.Hb(n,14)._canLabelFloat,e.Hb(n,14)._shouldLabelFloat(),e.Hb(n,14)._hasFloatingLabel(),e.Hb(n,14)._hideControlPlaceholder(),e.Hb(n,14)._control.disabled,e.Hb(n,14)._control.autofilled,e.Hb(n,14)._control.focused,"accent"==e.Hb(n,14).color,"warn"==e.Hb(n,14).color,e.Hb(n,14)._shouldForward("untouched"),e.Hb(n,14)._shouldForward("touched"),e.Hb(n,14)._shouldForward("pristine"),e.Hb(n,14)._shouldForward("dirty"),e.Hb(n,14)._shouldForward("valid"),e.Hb(n,14)._shouldForward("invalid"),e.Hb(n,14)._shouldForward("pending"),!e.Hb(n,14)._animationsEnabled]),l(n,24,1,[e.Hb(n,29).ngClassUntouched,e.Hb(n,29).ngClassTouched,e.Hb(n,29).ngClassPristine,e.Hb(n,29).ngClassDirty,e.Hb(n,29).ngClassValid,e.Hb(n,29).ngClassInvalid,e.Hb(n,29).ngClassPending,e.Hb(n,30)._isServer,e.Hb(n,30).id,e.Hb(n,30).placeholder,e.Hb(n,30).disabled,e.Hb(n,30).required,e.Hb(n,30).readonly&&!e.Hb(n,30)._isNativeSelect||null,e.Hb(n,30)._ariaDescribedby||null,e.Hb(n,30).errorState,e.Hb(n,30).required.toString()]),l(n,34,0,e.Hb(n,35).disabled||null,"NoopAnimations"===e.Hb(n,35)._animationMode),l(n,36,0,e.Hb(n,37).inline,"primary"!==e.Hb(n,37).color&&"accent"!==e.Hb(n,37).color&&"warn"!==e.Hb(n,37).color),l(n,41,0,e.Hb(n,43).tabIndex,e.Hb(n,43).disabled.toString())})}function z(l){return e.Rb(0,[(l()(),e.xb(0,0,null,null,1,"app-company",[],null,null,null,$,q)),e.wb(1,114688,null,0,i,[a.a,o],null,null)],function(l,n){l(n,1,0)},null)}var Q=e.tb("app-company",i,z,{},{},[]),X=t("eDkP"),Y=t("4tE/"),U=t("M2Lx"),B=t("o3x0"),K=t("jQLj"),V=t("mVsa"),Z=t("uGex"),J=t("v9Dh"),W=t("ZYjt"),G=t("4epT"),ll=t("OkvK"),nl=t("wmQ5"),tl=t("ZYCi"),el=t("hUWP"),al=t("3pJQ"),ul=t("V9q+"),ol=t("4c35"),il=t("qAlS"),bl=t("u7R8"),cl=t("de3e"),rl=t("/dO6"),dl=t("YhbO"),sl=t("jlZm"),pl=t("r43C"),ml=t("LC5p"),fl=t("Z+uX"),hl=t("Blfk"),Fl=t("9It4"),gl=t("Nsh5"),Hl=t("w+lc"),wl=t("kWGw"),_l=t("vARd"),yl=t("y4qS"),xl=t("BHnd"),vl=t("La40"),Cl=t("8mMr"),kl=t("Lwpp"),Nl=t("PCNd"),Sl=t("YSh2");t.d(n,"CompanysModuleNgFactory",function(){return Tl});var Tl=e.ub(c,[],function(l){return e.Eb([e.Fb(512,e.j,e.gb,[[8,[r.a,d.a,s.b,s.a,p.a,m.a,m.b,Q]],[3,e.j],e.A]),e.Fb(4608,C.n,C.m,[e.x,[2,C.H]]),e.Fb(4608,I.w,I.w,[]),e.Fb(4608,u.i,u.o,[C.d,e.E,u.m]),e.Fb(4608,u.p,u.p,[u.i,u.n]),e.Fb(5120,u.a,function(l){return[l]},[u.p]),e.Fb(4608,u.l,u.l,[]),e.Fb(6144,u.j,null,[u.l]),e.Fb(4608,u.h,u.h,[u.j]),e.Fb(6144,u.b,null,[u.h]),e.Fb(4608,u.f,u.k,[u.b,e.t]),e.Fb(4608,u.c,u.c,[u.f]),e.Fb(4608,v.j,v.i,[v.d,v.g]),e.Fb(5120,e.b,function(l,n){return[v.m(l,n)]},[C.d,e.E]),e.Fb(4608,X.c,X.c,[X.i,X.e,e.j,X.h,X.f,e.t,e.C,C.d,P.c,[2,C.h]]),e.Fb(5120,X.j,X.k,[X.c]),e.Fb(5120,Y.a,Y.b,[X.c]),e.Fb(4608,U.c,U.c,[]),e.Fb(4608,M.d,M.d,[]),e.Fb(5120,B.c,B.d,[X.c]),e.Fb(135680,B.e,B.e,[X.c,e.t,[2,C.h],[2,B.b],B.c,[3,B.e],X.e]),e.Fb(4608,K.i,K.i,[]),e.Fb(5120,K.a,K.b,[X.c]),e.Fb(5120,V.c,V.j,[X.c]),e.Fb(4608,M.c,M.y,[[2,M.h],j.a]),e.Fb(5120,Z.a,Z.b,[X.c]),e.Fb(5120,J.b,J.c,[X.c]),e.Fb(4608,W.e,M.e,[[2,M.i],[2,M.n]]),e.Fb(5120,G.c,G.a,[[3,G.c]]),e.Fb(5120,ll.b,ll.a,[[3,ll.b]]),e.Fb(5120,nl.b,nl.a,[[3,nl.b]]),e.Fb(4608,a.a,a.a,[]),e.Fb(4608,o,o,[u.c]),e.Fb(1073742336,C.c,C.c,[]),e.Fb(1073742336,tl.p,tl.p,[[2,tl.u],[2,tl.l]]),e.Fb(1073742336,I.v,I.v,[]),e.Fb(1073742336,I.i,I.i,[]),e.Fb(1073742336,O.d,O.d,[]),e.Fb(1073742336,u.e,u.e,[]),e.Fb(1073742336,u.d,u.d,[]),e.Fb(1073742336,v.e,v.e,[]),e.Fb(1073742336,P.a,P.a,[]),e.Fb(1073742336,x.b,x.b,[]),e.Fb(1073742336,el.a,el.a,[]),e.Fb(1073742336,al.a,al.a,[]),e.Fb(1073742336,ul.a,ul.a,[[2,v.k],e.E]),e.Fb(1073742336,M.n,M.n,[[2,M.f],[2,W.f]]),e.Fb(1073742336,j.b,j.b,[]),e.Fb(1073742336,M.x,M.x,[]),e.Fb(1073742336,M.v,M.v,[]),e.Fb(1073742336,M.s,M.s,[]),e.Fb(1073742336,ol.g,ol.g,[]),e.Fb(1073742336,il.c,il.c,[]),e.Fb(1073742336,X.g,X.g,[]),e.Fb(1073742336,Y.c,Y.c,[]),e.Fb(1073742336,h.c,h.c,[]),e.Fb(1073742336,bl.e,bl.e,[]),e.Fb(1073742336,N.g,N.g,[]),e.Fb(1073742336,U.d,U.d,[]),e.Fb(1073742336,cl.d,cl.d,[]),e.Fb(1073742336,cl.c,cl.c,[]),e.Fb(1073742336,rl.d,rl.d,[]),e.Fb(1073742336,B.k,B.k,[]),e.Fb(1073742336,F.a,F.a,[]),e.Fb(1073742336,K.j,K.j,[]),e.Fb(1073742336,dl.c,dl.c,[]),e.Fb(1073742336,sl.a,sl.a,[]),e.Fb(1073742336,M.o,M.o,[]),e.Fb(1073742336,pl.b,pl.b,[]),e.Fb(1073742336,w.c,w.c,[]),e.Fb(1073742336,A.c,A.c,[]),e.Fb(1073742336,T.e,T.e,[]),e.Fb(1073742336,L.c,L.c,[]),e.Fb(1073742336,ml.b,ml.b,[]),e.Fb(1073742336,y.c,y.c,[]),e.Fb(1073742336,V.i,V.i,[]),e.Fb(1073742336,V.f,V.f,[]),e.Fb(1073742336,M.z,M.z,[]),e.Fb(1073742336,M.p,M.p,[]),e.Fb(1073742336,Z.d,Z.d,[]),e.Fb(1073742336,J.e,J.e,[]),e.Fb(1073742336,G.d,G.d,[]),e.Fb(1073742336,fl.c,fl.c,[]),e.Fb(1073742336,hl.c,hl.c,[]),e.Fb(1073742336,Fl.c,Fl.c,[]),e.Fb(1073742336,gl.h,gl.h,[]),e.Fb(1073742336,Hl.a,Hl.a,[]),e.Fb(1073742336,wl.c,wl.c,[]),e.Fb(1073742336,_l.e,_l.e,[]),e.Fb(1073742336,ll.c,ll.c,[]),e.Fb(1073742336,yl.p,yl.p,[]),e.Fb(1073742336,xl.m,xl.m,[]),e.Fb(1073742336,vl.k,vl.k,[]),e.Fb(1073742336,Cl.b,Cl.b,[]),e.Fb(1073742336,kl.e,kl.e,[]),e.Fb(1073742336,nl.c,nl.c,[]),e.Fb(1073742336,Nl.a,Nl.a,[]),e.Fb(1073742336,c,c,[]),e.Fb(256,u.m,"XSRF-TOKEN",[]),e.Fb(256,u.n,"X-XSRF-TOKEN",[]),e.Fb(256,rl.a,{separatorKeyCodes:[Sl.f]},[]),e.Fb(256,M.g,M.k,[]),e.Fb(1024,tl.j,function(){return[[{path:"",redirectTo:"CompanyComponent",pathMatch:"full"},{path:"",component:i,data:b}]]},[])])})}}]);