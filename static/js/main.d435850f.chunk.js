(this["webpackJsonpreact-bit-show"]=this["webpackJsonpreact-bit-show"]||[]).push([[0],{19:function(e,a,t){e.exports={form:"Search_form__VDoAB",myUl:"Search_myUl__3Zwl1",myLi:"Search_myLi__27Y0S",myLiResults:"Search_myLiResults__3T_vi",linkUl:"Search_linkUl__y04BI",img:"Search_img__Wrgui",name:"Search_name__1j5JQ"}},21:function(e,a,t){e.exports={card:"SeasonCard_card__2i8cW",episode:"SeasonCard_episode__qeM0a",date:"SeasonCard_date__1Y0Oe",link:"SeasonCard_link__2HhTQ",image:"SeasonCard_image__23Ogf"}},23:function(e,a,t){e.exports={wrapper:"Header_wrapper__1Kk1V",header:"Header_header__7NPnF",title:"Header_title__1DF2d",content:"Header_content__1hkM6",linkTitle:"Header_linkTitle__3XsFc"}},24:function(e,a,t){e.exports={card:"CastCard_card__3Vbco",name:"CastCard_name__2Tsg_",character:"CastCard_character__2dqwl",img:"CastCard_img__1Jxjp"}},26:function(e,a,t){e.exports={show:"Shows_show__2nNoN",card:"Shows_card__2p0nD",link:"Shows_link__fml8d",name:"Shows_name__1gPXz"}},27:function(e,a,t){e.exports={card:"CrewCard_card__2eUV_",name:"CrewCard_name__1G2Z1",type:"CrewCard_type__2s8q1",img:"CrewCard_img__2CBI9"}},29:function(e,a,t){e.exports={title:"AkasPage_title__1C2sr",name:"AkasPage_name__dmcoZ",card:"AkasPage_card__3dMXY",center:"AkasPage_center__3fUc3"}},30:function(e,a,t){e.exports={card:"Episodes_card__3XhEd",name:"Episodes_name__nU_x3",img:"Episodes_img__3OQ-s"}},35:function(e,a,t){e.exports={footer:"Footer_footer__1W5uq",title:"Footer_title__fg5ci"}},36:function(e,a,t){e.exports={title:"EpisodesPage_title__Bvazd",img:"EpisodesPage_img__3QLi2"}},48:function(e,a,t){e.exports={title:"HomePage_title__1QRyo"}},53:function(e,a,t){e.exports={title:"SeasonsPage_title__27yZ7"}},54:function(e,a,t){e.exports={title:"CastPage_title__FjYOl"}},55:function(e,a,t){e.exports={title:"CrewPage_title__3zCSO"}},58:function(e,a,t){e.exports=t(91)},6:function(e,a,t){e.exports={title:"InfoPage_title__2pfqY",title1:"InfoPage_title1__2x7cF",img:"InfoPage_img__YqZNg",full:"InfoPage_full__2xHOC",summary:"InfoPage_summary__x7p-U",rating:"InfoPage_rating__38m6o",div:"InfoPage_div__3Z6G3",span:"InfoPage_span__1XXXX",centerSm:"InfoPage_centerSm__TXzqa"}},63:function(e,a,t){},89:function(e,a,t){},91:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(22),r=t.n(c),l=(t(63),t(3)),i=t(4),m=t(11),o=t(10),u=t(48),h=t.n(u),g=t(26),d=t.n(g),f=t(93),E=t(97),p=t(12),_=function(e){var a=e.name,t=e.avatar,n=e.id;return s.a.createElement(f.a,{className:d.a.show,lg:3,md:6,sm:12},s.a.createElement(p.b,{className:d.a.link,to:"/info/".concat(n)},s.a.createElement(E.a,{className:d.a.card,style:{width:"100%"}},t?s.a.createElement(E.a.Img,{variant:"top",src:t,alt:a}):s.a.createElement(E.a.Img,{variant:"top",src:"../../image/no-image.jpg",alt:a}),s.a.createElement(E.a.Body,null,s.a.createElement(E.a.Title,{className:d.a.name},a)))))},v=function(e){return e.shows.sort((function(e,a){return e.rating>a.rating?-1:1})).map((function(e,a){if(a<52)return s.a.createElement(_,{key:e.id,name:e.name,avatar:e.avatar,id:e.id})}))},w=t(51),N=t.n(w).a.create({baseURL:"".concat("http://api.tvmaze.com","/")}),k=function e(a){Object(l.a)(this,e),this.id=null===a?"":a.id,this.name=null===a?"No Name":a.name,this.avatar=null===a.image?"":a.image.medium,this.avatarInfo=null===a.image?"":a.image.original,this.rating=null===a.rating?"":a.rating.average,this.summary=""===a.summary?"No summary on this series...":a.summary},y=new(function(){function e(){Object(l.a)(this,e)}return Object(i.a)(e,[{key:"getShows",value:function(){return N.get("shows").then((function(e){return e.data})).then((function(e){return e.map((function(e){return new k(e)}))})).catch((function(e){return console.log(e)}))}},{key:"getSingleShow",value:function(e){return N.get("shows/".concat(e)).then((function(e){return e.data})).then((function(e){return new k(e)})).catch((function(e){return console.log(e)}))}}]),e}()),b=t(94),S=t(95),j=t(23),O=t.n(j),C=t(96),L=t(19),x=t.n(L),D=new(function(){function e(){Object(l.a)(this,e)}return Object(i.a)(e,[{key:"search",value:function(e){return N.get("search/shows?q=".concat(e)).then((function(e){return e.data.slice(0,5)})).catch((function(e){return console.log(e)}))}}]),e}()),I=t(98),P=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).fetchSearchResults=function(e){D.search(e).then((function(e){n.setState({results:e})}))},n.handleChange=function(e){var a=e.target.value;n.setState({value:a,loading:!0},(function(){n.fetchSearchResults(a)}))},n.removeValue=function(){n.setState({value:"",results:[]})},n.state={value:"",results:[],loading:!1},n}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.state.value;return s.a.createElement(s.a.Fragment,null,s.a.createElement(I.a,{className:x.a.form,onChange:this.handleChange,type:"text",value:a,placeholder:"Search"}),this.state.results&&s.a.createElement("ul",{className:x.a.myUl},0===this.state.results.length&&""!==a&&s.a.createElement("li",{className:x.a.myLiResults},"no results..."),this.state.results.map((function(a){return s.a.createElement(p.b,{className:x.a.linkUl,to:"/info/".concat(a.show.id)},s.a.createElement("li",{onClick:e.removeValue,className:x.a.myLi},a.show&&a.show.image&&a.show.image.medium?s.a.createElement("img",{className:x.a.img,src:a.show.image.medium,width:"7%"}):s.a.createElement("img",{className:x.a.img,src:"../../image/no-image.jpg",width:"7%"}),s.a.createElement("p",{className:x.a.name}," ",a.show.name)))}))))}}]),t}(s.a.Component),T=function(){return s.a.createElement(b.a,{fluid:!0,className:O.a.wrapper},s.a.createElement(C.a,{className:O.a.header,variant:"dark",bg:"dark"},s.a.createElement(b.a,{className:O.a.content},s.a.createElement(p.b,{className:O.a.linkTitle,to:"/"},s.a.createElement("h1",{className:O.a.title},s.a.createElement("i",{className:"fa fa-tv"})," TV Series")),s.a.createElement(P,null))))},A=(t(89),function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"sk-cube-grid"},s.a.createElement("div",{className:"sk-cube sk-cube1"}),s.a.createElement("div",{className:"sk-cube sk-cube2"}),s.a.createElement("div",{className:"sk-cube sk-cube3"}),s.a.createElement("div",{className:"sk-cube sk-cube4"}),s.a.createElement("div",{className:"sk-cube sk-cube5"}),s.a.createElement("div",{className:"sk-cube sk-cube6"}),s.a.createElement("div",{className:"sk-cube sk-cube7"}),s.a.createElement("div",{className:"sk-cube sk-cube8"}),s.a.createElement("div",{className:"sk-cube sk-cube9"})))}),F=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={shows:[],isLoading:!1},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),y.getShows().then((function(a){e.setState({shows:a})})).finally((function(){return e.setState({isLoading:!1})}))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(T,null),s.a.createElement(b.a,null,s.a.createElement(S.a,null,s.a.createElement(f.a,{lg:12},s.a.createElement("h1",{className:h.a.title},"Popular Shows")),s.a.createElement(f.a,{lg:12,md:12,sm:12}," ",this.state.isLoading&&s.a.createElement(A,null)," "),s.a.createElement(v,{shows:this.state.shows,isLoading:this.state.isLoading}))))}}]),t}(s.a.Component),B=t(6),U=t.n(B),M=function e(a){Object(l.a)(this,e),this.id=null===a?"":a.id,this.premiereDate=null===a.premiereDate?"no premiere date":a.premiereDate,this.endDate=null===a.endDate?"no end date":a.endDate,this.image=null===a.image?"":a.image.medium},z=new(function(){function e(){Object(l.a)(this,e)}return Object(i.a)(e,[{key:"getSeasons",value:function(e){return N.get("shows/".concat(e,"/seasons")).then((function(e){return e.data})).then((function(e){return e.map((function(e){return new M(e)}))})).catch((function(e){return console.log(e)}))}}]),e}()),R=function e(a){Object(l.a)(this,e),this.id=null===a.person?"":a.person.id,this.name=null===a.person.name?"no this person name":a.person.name,this.character=null===a.character.name?"no this character name":a.character.name,this.image=null===a.person.image?"":a.person.image.medium},X=new(function(){function e(){Object(l.a)(this,e)}return Object(i.a)(e,[{key:"getCast",value:function(e){return N.get("shows/".concat(e,"/cast")).then((function(e){return e.data})).then((function(e){return e.map((function(e){return new R(e)}))})).catch((function(e){return console.log(e)}))}}]),e}()),q=function e(a){Object(l.a)(this,e),this.id=null===a.person?"":a.person.id,this.name=null===a.person?"no this person name":a.person.name,this.type=null===a.type?"no type":a.type,this.image=null===a.person.image?"":a.person.image.medium},H=new(function(){function e(){Object(l.a)(this,e)}return Object(i.a)(e,[{key:"getCrew",value:function(e){return N.get("shows/".concat(e,"/crew")).then((function(e){return e.data})).then((function(e){return e.map((function(e){return new q(e)}))})).catch((function(e){return console.log(e)}))}}]),e}()),V=function e(a){Object(l.a)(this,e),this.name=null===a.name?"no this name":a.name,this.country=null===a.country?"no this country name":a.country.name,this.timezone=null===a.country?"no timezone":a.country.timezone},Y=new(function(){function e(){Object(l.a)(this,e)}return Object(i.a)(e,[{key:"getAka",value:function(e){return N.get("shows/".concat(e,"/akas")).then((function(e){return e.data})).then((function(e){return e.map((function(e){return new V(e)}))})).catch((function(e){return console.log(e)}))}}]),e}()),Z=function(e){var a=e.premiereDate,t=e.endDate;return s.a.createElement("li",null,a," - ",t)},Q=function(e){return e.seasons.slice(0,5).map((function(e){return s.a.createElement(Z,{premiereDate:e.premiereDate,endDate:e.endDate})}))},J=function(e){var a=e.name;return s.a.createElement("li",null,a)},W=function(e){return e.cast.slice(0,5).map((function(e){return s.a.createElement(J,{name:e.name})}))},K=function(e){var a=e.name,t=e.type;return s.a.createElement("li",null,t,": ",a)},G=function(e){return e.crew.slice(0,5).map((function(e){return s.a.createElement(K,{name:e.name,type:e.type})}))},$=function(e){var a=e.name,t=e.country;return s.a.createElement("li",null,a,": ",t)},ee=function(e){return e.akas.slice(0,5).map((function(e){return s.a.createElement($,{name:e.name,country:e.country})}))},ae=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).fetchInfoPage=function(){y.getSingleShow(n.props.match.params.id).then((function(e){n.setState({singleShow:e})})),z.getSeasons(n.props.match.params.id).then((function(e){n.setState({seasons:e})})),X.getCast(n.props.match.params.id).then((function(e){n.setState({cast:e})})),H.getCrew(n.props.match.params.id).then((function(e){n.setState({crew:e})})),Y.getAka(n.props.match.params.id).then((function(e){n.setState({akas:e})})).finally((function(){return n.setState({isLoading:!1})}))},n.state={singleShow:[],seasons:[],cast:[],crew:[],akas:[],isLoading:!1},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({isLoading:!0}),this.fetchInfoPage()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.id!==e.match.params.id&&this.fetchInfoPage()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(T,null),s.a.createElement(b.a,null,s.a.createElement(S.a,null,s.a.createElement(f.a,{lg:12,md:12,sm:12}," ",this.state.isLoading&&s.a.createElement(A,null)," "),this.state.singleShow?s.a.createElement(f.a,{lg:12,md:12,sm:12},s.a.createElement("h1",{className:U.a.title},this.state.singleShow.name)):s.a.createElement(f.a,{lg:12,md:12,sm:12},s.a.createElement("h1",{className:U.a.title},"No Title"))),s.a.createElement(S.a,null,s.a.createElement(f.a,{lg:6,md:6,sm:12},this.state.singleShow.avatarInfo?s.a.createElement("img",{className:U.a.img,src:this.state.singleShow.avatarInfo}):s.a.createElement("img",{className:U.a.img,src:"../../image/no-image.jpg"}),this.state.singleShow.rating?s.a.createElement("h5",{className:U.a.rating},"Rating: ",this.state.singleShow.rating):s.a.createElement("h5",{className:U.a.rating},"Rating: ",s.a.createElement("span",{className:U.a.span},"there is no rating for this series"))),s.a.createElement(f.a,{lg:6,md:6,sm:12},s.a.createElement(S.a,null,this.state.seasons&&s.a.createElement(f.a,{lg:12},s.a.createElement("h4",{className:U.a.centerSm},"SEASONS (",this.state.seasons.length,")"),s.a.createElement("ul",{className:U.a.list},s.a.createElement(Q,{seasons:this.state.seasons})),0===this.state.seasons.length?s.a.createElement("div",{className:U.a.div}):s.a.createElement("ul",null,s.a.createElement(p.b,{to:"/info/seasons/".concat(this.props.match.params.id)},s.a.createElement("li",{className:U.a.full}," . . . click for season details")))),this.state.cast&&s.a.createElement(f.a,{lg:12},s.a.createElement("h4",{className:U.a.centerSm},"CAST (",this.state.cast.length,")"),s.a.createElement("ul",{className:U.a.list},s.a.createElement(W,{cast:this.state.cast})),0===this.state.cast.length?s.a.createElement("div",{className:U.a.div}):s.a.createElement("ul",null,s.a.createElement(p.b,{to:"/info/cast/".concat(this.props.match.params.id)},s.a.createElement("li",{className:U.a.full}," . . . click for cast details")))),this.state.crew&&s.a.createElement(f.a,{lg:12},s.a.createElement("h4",{className:U.a.centerSm},"CREW (",this.state.crew.length,")"),s.a.createElement("ul",{className:U.a.list},s.a.createElement(G,{crew:this.state.crew})),0===this.state.crew.length?s.a.createElement("div",{className:U.a.div}):s.a.createElement("ul",null,s.a.createElement(p.b,{to:"/info/crew/".concat(this.props.match.params.id)},s.a.createElement("li",{className:U.a.full}," . . . click for crew details")))),this.state.akas&&s.a.createElement(f.a,{lg:12},s.a.createElement("h4",{className:U.a.centerSm},"AKA's (",this.state.akas.length,")"),s.a.createElement("ul",{className:U.a.list},s.a.createElement(ee,{akas:this.state.akas})),0===this.state.akas.length?s.a.createElement("div",null):s.a.createElement("ul",null,s.a.createElement(p.b,{to:"/info/akas/".concat(this.props.match.params.id)},s.a.createElement("li",{className:U.a.full}," . . .  click for aka's details"))))))),s.a.createElement(S.a,null,s.a.createElement(f.a,{lg:12},s.a.createElement("h3",{className:"".concat(U.a.title1," ").concat(U.a.centerSm)},"Show Details")),this.state.singleShow?s.a.createElement(f.a,{lg:12},s.a.createElement("p",{className:U.a.summary},this.state.singleShow.summary)):s.a.createElement(f.a,{lg:12},s.a.createElement("p",{className:U.a.summary},"No details on the show")))))}}]),t}(s.a.Component),te=t(35),ne=t.n(te),se=function(){return s.a.createElement(b.a,{fluid:!0,className:ne.a.footer},s.a.createElement(b.a,null,s.a.createElement(S.a,null,s.a.createElement(f.a,{lg:12,md:12,sm:12,xs:12}," ",s.a.createElement("h5",{className:ne.a.title},"\xa9 2020 Copyright Nikola Miti\u0107")))))},ce=t(8),re=t(53),le=t.n(re),ie=t(21),me=t.n(ie),oe=t(99),ue=function(e){var a=e.premiereDate,t=e.endDate,n=(e.episode,e.image),c=e.id;return s.a.createElement(f.a,{className:me.a.show,lg:3,md:6,sm:12},s.a.createElement(E.a,{className:me.a.card,style:{width:"100%"}},n?s.a.createElement(E.a.Img,{variant:"top",src:n}):s.a.createElement(E.a.Img,{className:me.a.image,variant:"top",src:"../../image/no-image.jpg"}),s.a.createElement(E.a.Body,null,s.a.createElement(E.a.Title,{className:me.a.date},a," - ",t),s.a.createElement(p.b,{className:me.a.link,to:"/info/seasons/episodes/".concat(c)},s.a.createElement(oe.a,{className:me.a.episode},"Episodes")))))},he=function(e){return e.seasons.map((function(e){return s.a.createElement(ue,{key:e.id,id:e.id,premiereDate:e.premiereDate,endDate:e.endDate,image:e.image,episode:e.episode})}))},ge=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={seasons:[],isLoading:!1},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),z.getSeasons(this.props.match.params.id).then((function(a){e.setState({seasons:a})})).finally((function(){return e.setState({isLoading:!1})}))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(T,null),s.a.createElement(b.a,null,s.a.createElement(S.a,null,s.a.createElement(f.a,{lg:12,md:12,sm:12}," ",this.state.isLoading&&s.a.createElement(A,null)," "),s.a.createElement(f.a,{lg:12},s.a.createElement("h3",{className:le.a.title},"SEASONS (",this.state.seasons.length,")"))),s.a.createElement(S.a,null,s.a.createElement(he,{seasons:this.state.seasons}))))}}]),t}(s.a.Component),de=t(54),fe=t.n(de),Ee=t(24),pe=t.n(Ee),_e=function(e){var a=e.name,t=e.character,n=e.image;return s.a.createElement(f.a,{className:pe.a.show,lg:3,md:6,sm:12},s.a.createElement(E.a,{className:pe.a.card,style:{width:"100%"}},n?s.a.createElement(E.a.Img,{variant:"top",src:n}):s.a.createElement(E.a.Img,{className:pe.a.img,variant:"top",src:"../../image/no-image.jpg"}),s.a.createElement(E.a.Body,null,s.a.createElement(E.a.Title,{className:pe.a.name},a),s.a.createElement(E.a.Title,{className:pe.a.character},"(",t,")"))))},ve=function(e){return e.cast.map((function(e){return s.a.createElement(_e,{name:e.name,character:e.character,image:e.image})}))},we=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={cast:[],isLoading:!1},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),X.getCast(this.props.match.params.id).then((function(a){e.setState({cast:a})})).finally((function(){return e.setState({isLoading:!1})}))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(T,null),s.a.createElement(b.a,null,s.a.createElement(S.a,null,s.a.createElement(f.a,{lg:12,md:12,sm:12}," ",this.state.isLoading&&s.a.createElement(A,null)," "),s.a.createElement(f.a,{lg:12},s.a.createElement("h3",{className:fe.a.title},"Cast (",this.state.cast.length,")"))),s.a.createElement(S.a,null,s.a.createElement(ve,{cast:this.state.cast}))))}}]),t}(s.a.Component),Ne=t(55),ke=t.n(Ne),ye=t(27),be=t.n(ye),Se=function(e){var a=e.type,t=e.name,n=e.image;return s.a.createElement(f.a,{lg:3,md:6,sm:12},s.a.createElement(E.a,{className:be.a.card,style:{width:"100%"}},n?s.a.createElement(E.a.Img,{variant:"top",src:n}):s.a.createElement(E.a.Img,{className:be.a.img,variant:"top",src:"../../../image/no-image.jpg"}),s.a.createElement(E.a.Body,null,s.a.createElement(E.a.Title,{className:be.a.type},a),s.a.createElement(E.a.Title,{className:be.a.name},t))))},je=function(e){return e.crew.map((function(e){return s.a.createElement(Se,{name:e.name,type:e.type,image:e.image})}))},Oe=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={crew:[],isLoading:!1},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),H.getCrew(this.props.match.params.id).then((function(a){e.setState({crew:a})})).finally((function(){return e.setState({isLoading:!1})}))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(T,null),s.a.createElement(b.a,null,s.a.createElement(S.a,null,s.a.createElement(f.a,{lg:12,md:12,sm:12}," ",this.state.isLoading&&s.a.createElement(A,null)," "),s.a.createElement(f.a,{lg:12},s.a.createElement("h3",{className:ke.a.title},"Crew (",this.state.crew.length,")"))),s.a.createElement(S.a,null,s.a.createElement(je,{crew:this.state.crew}))))}}]),t}(s.a.Component),Ce=t(29),Le=t.n(Ce),xe=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={akas:[],isLoading:!1},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),Y.getAka(this.props.match.params.id).then((function(a){e.setState({akas:a})})).finally((function(){return e.setState({isLoading:!1})}))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(T,null),s.a.createElement(b.a,null,s.a.createElement(S.a,null,s.a.createElement(f.a,{lg:12,md:12,sm:12}," ",this.state.isLoading&&s.a.createElement(A,null)," "),s.a.createElement(f.a,{lg:12,md:12,sm:12},s.a.createElement("h4",{className:Le.a.title},"AKA's (",this.state.akas.length,")"),this.state.akas.map((function(e){return s.a.createElement(E.a,{className:Le.a.card},s.a.createElement(E.a.Body,{className:Le.a.name},e.name," : ",e.country),s.a.createElement(E.a.Body,null," timezone: ",e.timezone))}))))))}}]),t}(s.a.Component),De=t(36),Ie=t.n(De),Pe=function e(a){Object(l.a)(this,e),this.id=null===a?"":a.id,this.name=null===a.name?"no this episode name":a.name,this.image=null===a.image?"":a.image.medium},Te=new(function(){function e(){Object(l.a)(this,e)}return Object(i.a)(e,[{key:"getEpisodes",value:function(e){return N.get("seasons/".concat(e,"/episodes")).then((function(e){return e.data})).then((function(e){return e.map((function(e){return new Pe(e)}))})).catch((function(e){return console.log(e)}))}}]),e}()),Ae=t(30),Fe=t.n(Ae),Be=function(e){var a=e.name,t=e.image;return s.a.createElement(f.a,{lg:3,md:6,sm:12},s.a.createElement(E.a,{className:Fe.a.card,style:{width:"100%"}},t?s.a.createElement(E.a.Img,{variant:"top",src:t}):s.a.createElement(E.a.Img,{className:Fe.a.img,variant:"top",src:"../../image/no-image.jpg"}),s.a.createElement(E.a.Body,null,s.a.createElement(E.a.Title,{className:Fe.a.name},a))))},Ue=function(e){return e.episodes.map((function(e){return s.a.createElement(Be,{name:e.name,image:e.image})}))},Me=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={episodes:[],isLoading:!1},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),Te.getEpisodes(this.props.match.params.id).then((function(a){e.setState({episodes:a})})).finally((function(){return e.setState({isLoading:!1})}))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(T,null),s.a.createElement(b.a,null,s.a.createElement(S.a,null,s.a.createElement(f.a,{lg:12,md:12,sm:12}," ",this.state.isLoading&&s.a.createElement(A,null)," "),this.state.episodes&&s.a.createElement(f.a,{lg:12},s.a.createElement("h3",{className:Ie.a.title},"Episodes (",this.state.episodes.length,")"))),s.a.createElement(S.a,null,this.state.episodes?s.a.createElement(Ue,{episodes:this.state.episodes}):s.a.createElement(f.a,{className:Ie.a.img,lg:12}," ",s.a.createElement("img",{src:"../../../image/not_found.png"})))))}}]),t}(s.a.Component);var ze=function(){return s.a.createElement("div",{className:"page-container"},s.a.createElement("div",{className:"content"},s.a.createElement(ce.c,null,s.a.createElement(ce.a,{exact:!0,path:"/",component:F}),s.a.createElement(ce.a,{exact:!0,path:"/info/:id",component:ae}),s.a.createElement(ce.a,{exact:!0,path:"/info/seasons/:id",component:ge}),s.a.createElement(ce.a,{exact:!0,path:"/info/cast/:id",component:we}),s.a.createElement(ce.a,{exact:!0,path:"/info/crew/:id",component:Oe}),s.a.createElement(ce.a,{exact:!0,path:"/info/akas/:id",component:xe}),s.a.createElement(ce.a,{exact:!0,path:"/info/seasons/episodes/:id",component:Me}))),s.a.createElement(se,null))};t(90);r.a.render(s.a.createElement(p.a,null,s.a.createElement(ze,null)),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.d435850f.chunk.js.map