(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),k=r,d=u["".concat(l,".").concat(k)]||u[k]||m[k]||p;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<p;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6028:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return l},default:function(){return c}});var a=n(2122),r=n(9756),p=(n(7294),n(3905)),i={sidebar_position:3,sidebar_label:"App splitting"},o={unversionedId:"concepts/app-splitting",id:"concepts/app-splitting",isDocsHomePage:!1,title:"\u0420\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",description:"\u041f\u0440\u043e \u0440\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438",source:"@site/../docs/concepts/app-splitting.md",sourceDirName:"concepts",slug:"/concepts/app-splitting",permalink:"/docs/concepts/app-splitting",editUrl:"https://github.com/feature-sliced/documentation/edit/master/website/../docs/concepts/app-splitting.md",version:"current",lastUpdatedAt:1621951497,formattedLastUpdatedAt:"25.05.2021",sidebar_label:"App splitting",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"App splitting"},sidebar:"tutorialSidebar",previous:{title:"\u041e \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u043d\u043e\u0441\u0442\u0435\u0439 \u0438 \u043e \u0444\u043e\u0440\u043c\u0443\u043b\u0438\u0440\u043e\u0432\u043a\u0435 \u0437\u0430\u0434\u0430\u0447",permalink:"/docs/concepts/needs-driven"},next:{title:"\u0412\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",permalink:"/docs/concepts/cross-communication"}},l=[{value:"Group: <code>Layers</code>",id:"group-layers",children:[{value:"\u041f\u043e\u0440\u044f\u0434\u043e\u043a \u0441\u043b\u043e\u0435\u0432",id:"\u043f\u043e\u0440\u044f\u0434\u043e\u043a-\u0441\u043b\u043e\u0435\u0432",children:[]}]},{value:"Group: <code>Slices</code>",id:"group-slices",children:[]},{value:"Group: <code>Segments</code>",id:"group-segments",children:[{value:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f",id:"\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f",children:[]}]},{value:"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435",id:"\u0441\u043c-\u0442\u0430\u043a\u0436\u0435",children:[]}],s={toc:l};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u041f\u0440\u043e \u0440\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438")),(0,p.kt)("hr",null),(0,p.kt)("h2",{id:"group-layers"},"Group: ",(0,p.kt)("inlineCode",{parentName:"h2"},"Layers")),(0,p.kt)("p",null,"\u041f\u0435\u0440\u0432\u044b\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f: \u043f\u043e ",(0,p.kt)("strong",{parentName:"p"},"\u0441\u043a\u043e\u0443\u043f\u0443 \u0432\u043b\u0438\u044f\u043d\u0438\u044f")," \u043c\u043e\u0434\u0443\u043b\u044f"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("strong",{parentName:"p"},"\u0421\u0430\u043c\u043e\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430"),": ",(0,p.kt)("em",{parentName:"p"},'"\u041a \u043a\u0430\u043a\u043e\u043c\u0443 \u0441\u043b\u043e\u044e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0441\u044f \u043c\u043e\u0434\u0443\u043b\u044c?"'))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"\u2514\u2500\u2500 src/\n    \u251c\u2500\u2500 app/                    # \u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u044e\u0449\u0430\u044f \u043b\u043e\u0433\u0438\u043a\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\n    \u251c\u2500\u2500 processes/              # (\u041e\u043f\u0446.) \u041f\u0440\u043e\u0446\u0435\u0441\u0441\u044b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u043f\u0440\u043e\u0442\u0435\u043a\u0430\u044e\u0449\u0438\u0435 \u043d\u0430\u0434 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u043c\u0438\n    \u251c\u2500\u2500 pages/                  # \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\n    \u251c\u2500\u2500 features/               # \u041a\u043b\u044e\u0447\u0435\u0432\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\n    \u251c\u2500\u2500 entities/               # \u0411\u0438\u0437\u043d\u0435\u0441-\u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438\n    \u2514\u2500\u2500 shared/                 # \u041f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u043c\u043e\u0434\u0443\u043b\u0438\n")),(0,p.kt)("h3",{id:"\u043f\u043e\u0440\u044f\u0434\u043e\u043a-\u0441\u043b\u043e\u0435\u0432"},"\u041f\u043e\u0440\u044f\u0434\u043e\u043a \u0441\u043b\u043e\u0435\u0432"),(0,p.kt)("p",null,"\u0415\u0441\u043b\u0438 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043d\u0430 \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u0441\u043b\u043e\u0435\u0432 - \u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u0434\u0432\u0435 \u0437\u0430\u043a\u043e\u043d\u043e\u043c\u0435\u0440\u043d\u043e\u0441\u0442\u0438:"),(0,p.kt)("h4",{id:"\u043f\u043e-\u0443\u0440\u043e\u0432\u043d\u044e-\u0437\u043d\u0430\u043d\u0438\u044f\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438"},"\u041f\u043e \u0443\u0440\u043e\u0432\u043d\u044e \u0437\u043d\u0430\u043d\u0438\u044f/\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("inlineCode",{parentName:"p"},"app > *processes > ... > entities > shared"))),(0,p.kt)("p",null,'\u041c\u043e\u0434\u0443\u043b\u044c "\u0437\u043d\u0430\u0435\u0442" \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e \u0441\u0435\u0431\u044f \u0438 \u043d\u0438\u0436\u0435\u043b\u0435\u0436\u0430\u0449\u0438\u0435 \u043c\u043e\u0434\u0443\u043b\u0438, \u043d\u043e \u043d\u0435 \u0432\u044b\u0448\u0435 \u043b\u0435\u0436\u0430\u0449\u0438\u0435'),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"\u042d\u0442\u043e \u0436\u0435 \u0432\u043b\u0438\u044f\u0435\u0442 \u0438 \u043d\u0430 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0435 \u0438\u043c\u043f\u043e\u0440\u0442\u044b")),(0,p.kt)("h4",{id:"\u043f\u043e-\u0443\u0440\u043e\u0432\u043d\u044e-\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438-\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439"},"\u041f\u043e \u0443\u0440\u043e\u0432\u043d\u044e \u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("inlineCode",{parentName:"p"},"shared > entities > ... > *processes > app"))),(0,p.kt)("p",null,"\u0427\u0435\u043c \u043d\u0438\u0436\u0435 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d \u043c\u043e\u0434\u0443\u043b\u044c - \u0442\u0435\u043c \u043e\u043f\u0430\u0441\u043d\u0435\u0435 \u0432\u043d\u043e\u0441\u0438\u0442\u044c \u0432 \u043d\u0435\u0433\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"\u0422.\u043a. \u0441\u043a\u043e\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043e \u043e\u043d \u0437\u0430\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d \u0432\u043e \u043c\u043d\u043e\u0433\u0438\u0445 \u0432\u044b\u0448\u0435\u043b\u0435\u0436\u0430\u0449\u0438\u0445 \u0441\u043b\u043e\u044f\u0445")),(0,p.kt)("h2",{id:"group-slices"},"Group: ",(0,p.kt)("inlineCode",{parentName:"h2"},"Slices")),(0,p.kt)("p",null,"\u0412\u0442\u043e\u0440\u043e\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f: \u043f\u043e ",(0,p.kt)("strong",{parentName:"p"},"\u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0411\u041b")),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"\u041c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u044f \u043d\u0435 \u0432\u043b\u0438\u044f\u0435\u0442 \u043d\u0430 \u044d\u0442\u043e\u0442 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0438 \u0432\u0441\u0435 \u043a\u0440\u0430\u0439\u043d\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 ",(0,p.kt)("a",{parentName:"em",href:"https://github.com/feature-sliced/documentation/discussions/65"},"\u043e\u0442 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430"))),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("strong",{parentName:"p"},"\u0421\u0430\u043c\u043e\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430"),": ",(0,p.kt)("em",{parentName:"p"},'"\u041a\u0430\u043a\u0443\u044e \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0411\u041b \u0437\u0430\u0442\u0440\u0430\u0433\u0438\u0432\u0430\u0435\u0442 \u043c\u043e\u0434\u0443\u043b\u044c?"')),(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("em",{parentName:"p"},"\u0414\u043e \u044d\u0442\u043e\u0433\u043e - \u043d\u0430\u0434\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0441\u044f \u0441\u043e \u0441\u043a\u043e\u0443\u043f\u043e\u043c \u0432\u043b\u0438\u044f\u043d\u0438\u044f (layer)"))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"\u251c\u2500\u2500 app/\n|   # \u041d\u0435 \u0438\u043c\u0435\u0435\u0442 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0445 \u0441\u043b\u0430\u0439\u0441\u043e\u0432, \n|   # \u0442.\u043a. \u0442\u0430\u043c \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442\u0441\u044f \u043b\u043e\u0433\u0438\u043a\u0430 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0432\u0441\u0435\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430\n\u251c\u2500\u2500 processes/\n|   # \u0421\u043b\u0430\u0439\u0441\u044b \u0434\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u0445\n|   \u251c\u2500\u2500 order\n|   \u251c\u2500\u2500 auth\n|   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 pages/\n|   # \u0421\u043b\u0430\u0439\u0441\u044b \u0434\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\n|   \u251c\u2500\u2500 profile\n|   \u251c\u2500\u2500 sign-up\n|   \u251c\u2500\u2500 feed\n|   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 features/\n|   # \u0421\u043b\u0430\u0439\u0441\u044b \u0434\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u0445\n|   \u251c\u2500\u2500 auth-by-phone\n|   \u251c\u2500\u2500 inline-post\n|   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 entities/\n|   # \u0421\u043b\u0430\u0439\u0441\u044b \u0431\u0438\u0437\u043d\u0435\u0441-\u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439 \u0434\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0431\u043e\u043b\u0435\u0435 \u0441\u043b\u043e\u0436\u043d\u043e\u0439 \u0411\u041b\n|   \u251c\u2500\u2500 viewer\n|   \u251c\u2500\u2500 posts\n|   \u251c\u2500\u2500 i18n\n|   \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 shared/\n    # \u0421\u0430\u043c \u043f\u043e \u0441\u0435\u0431\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043b\u0430\u0439\u0441, \n    # \u0442.\u043a. \u0437\u0434\u0435\u0441\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u043c\u043e\u0434\u0443\u043b\u0438, \u0431\u0435\u0437 \u043f\u0440\u0438\u0432\u044f\u0437\u043a\u0438 \u043a \u0411\u041b\n")),(0,p.kt)("h2",{id:"group-segments"},"Group: ",(0,p.kt)("inlineCode",{parentName:"h2"},"Segments")),(0,p.kt)("p",null,"\u0422\u0440\u0435\u0442\u0438\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f: \u043f\u043e ",(0,p.kt)("strong",{parentName:"p"},"\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e \u043c\u043e\u0434\u0443\u043b\u044f \u0432 \u043a\u043e\u0434\u0435 \u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438")),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("strong",{parentName:"p"},"\u0421\u0430\u043c\u043e\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430"),": ",(0,p.kt)("em",{parentName:"p"},'"\u041a\u0430\u043a\u0443\u044e \u0447\u0430\u0441\u0442\u044c \u0442\u0435\u0445. \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043b\u043e\u0433\u0438\u043a\u0438 \u0437\u0430\u0442\u0440\u0430\u0433\u0438\u0432\u0430\u0435\u0442 \u043c\u043e\u0434\u0443\u043b\u044c?"')),(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("em",{parentName:"p"},"\u0414\u043e \u044d\u0442\u043e\u0433\u043e - \u043d\u0430\u0434\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0441\u044f \u0441\u043e \u0441\u043a\u043e\u0443\u043f\u043e\u043c \u0432\u043b\u0438\u044f\u043d\u0438\u044f (\u0441\u043b\u043e\u0439) \u0438 \u0434\u043e\u043c\u0435\u043d\u043d\u043e\u0439 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u044c\u044e (\u0441\u043b\u0430\u0439\u0441\u043e\u043c)"))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"{layer}/\n    \u251c\u2500\u2500 {slice}/\n    |   \u251c\u2500\u2500 ui/                     # UI-\u043b\u043e\u0433\u0438\u043a\u0430 (components, ui-widgets, ...)\n    |   \u251c\u2500\u2500 model/                  # \u0411\u0438\u0437\u043d\u0435\u0441-\u043b\u043e\u0433\u0438\u043a\u0430 (store, actions, effects, reducers, ...)\n    |   \u251c\u2500\u2500 lib/                    # \u0418\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043d\u0430\u044f \u043b\u043e\u0433\u0438\u043a\u0430 (utils/helpers)\n    |   \u251c\u2500\u2500 config*/                # \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f (\u043f\u0440\u043e\u0435\u043a\u0442\u0430 / \u0441\u043b\u0430\u0439\u0441\u0430)\n    |   \u2514\u2500\u2500 api*/                   # \u041b\u043e\u0433\u0438\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043a API (api instances, requests, ...)\n")),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"\u041f\u0440\u0438 \u044d\u0442\u043e\u043c, \u043a\u0430\u0436\u0434\u044b\u0439 \u0441\u0435\u0433\u043c\u0435\u043d\u0442 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d ",(0,p.kt)("strong",{parentName:"em"},"\u043a\u0430\u043a \u0432 \u0432\u0438\u0434\u0435 \u0444\u0430\u0439\u043b\u0430, \u0442\u0430\u043a \u0438 \u0432 \u0432\u0438\u0434\u0435 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438")," - \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0438 \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u0432")),(0,p.kt)("h3",{id:"\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f"},"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f"),(0,p.kt)("p",null,"\u041c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u043b\u0430\u0441\u044c \u0441 \u0446\u0435\u043b\u044c\u044e - \u043d\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0432\u0430\u0442\u044c \u0438 \u043d\u0435 \u0443\u0442\u0440\u0443\u0436\u0434\u0430\u0442\u044c \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432 \u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c\u0438 \u0432\u044b\u0431\u043e\u0440\u0430 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0439 ",(0,p.kt)("em",{parentName:"p"},"(\u0445\u043e\u0442\u0435\u043b\u043e\u0441\u044c, \u0447\u0442\u043e\u0431\u044b ",(0,p.kt)("strong",{parentName:"em"},"\u043b\u044e\u0431\u043e\u0439 \u0438\u0437 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u043e\u0432 \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u043b\u044e\u0431\u043e\u043c \u0441\u043b\u043e\u0435"),")")),(0,p.kt)("p",null,"\u041e\u0434\u043d\u0430\u043a\u043e \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/feature-sliced/documentation/discussions/"},"\u0434\u0438\u0441\u043a\u0443\u0441\u0441\u0438\u0439 \u0438 \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u043e\u0431\u0448\u0438\u0440\u043d\u043e\u0433\u043e \u043e\u043f\u044b\u0442\u0430")," - \u0431\u044b\u043b\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043e, \u0447\u0442\u043e \u043b\u0443\u0447\u0448\u0435 \u0438 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u043d\u0435\u0435 ",(0,p.kt)("strong",{parentName:"p"},"\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u043a\u0430\u0436\u0434\u044b\u0439 \u0441\u043b\u043e\u0439 \u043d\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u0432\u043d\u0443\u0442\u0440\u0438 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u044b"),"."),(0,p.kt)("h4",{id:"\u043e\u0431\u0449\u0438\u0435-\u043f\u0440\u0430\u0432\u0438\u043b\u0430"},"\u041e\u0431\u0449\u0438\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"(","*",") \u0427\u0435\u043c ",(0,p.kt)("strong",{parentName:"li"},"\u0432\u044b\u0448\u0435 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d")," \u0441\u043b\u043e\u0439 - \u0442\u0435\u043c \u0431\u043e\u043b\u044c\u0448\u0435 \u043e\u043d \u0437\u043d\u0430\u0435\u0442 \u043f\u0440\u043e \u0411\u041b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0438 \u043d\u0430\u043e\u0431\u043e\u0440\u043e\u0442"),(0,p.kt)("li",{parentName:"ul"},"(","*","*",") API \u043b\u043e\u0433\u0438\u043a\u0443 ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/66"},"\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f")," \u043a\u043b\u0430\u0441\u0442\u044c \u0432 ",(0,p.kt)("inlineCode",{parentName:"li"},"shared"),", \u0447\u0442\u043e\u0431\u044b \u043b\u043e\u0433\u0438\u043a\u0430 \u043d\u0435 \u0440\u0430\u0441\u043f\u044b\u043b\u044f\u043b\u0430\u0441\u044c \u043f\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0443",(0,p.kt)("blockquote",{parentName:"li"},(0,p.kt)("p",{parentName:"blockquote"},"\u041a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e - \u043e\u043d\u0430 \u043e\u0431\u0449\u0430\u044f \u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0430 \u0432 \u0432\u0438\u0434\u0435 \u0435\u0434\u0438\u043d\u044b\u0445 \u0438\u043d\u0441\u0442\u0430\u043d\u0441\u043e\u0432"),(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("strong",{parentName:"p"},'Edge-case "exceptions"'),": ",(0,p.kt)("em",{parentName:"p"},"GraphQL"),", ",(0,p.kt)("em",{parentName:"p"},"react-query hooks"))))),(0,p.kt)("h4",{id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435-\u0434\u043b\u044f-\u0441\u043b\u043e\u0435\u0432"},"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0441\u043b\u043e\u0435\u0432"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"app"),": \u043d\u0435 \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044f \u0441\u043b\u0430\u0439\u0441\u044b \u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043b\u043e\u0433\u0438\u043a\u0443 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438",(0,p.kt)("blockquote",{parentName:"li"},(0,p.kt)("p",{parentName:"blockquote"},"\u0418\u043c\u0435\u044e\u0449\u0438\u0435\u0441\u044f \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u044b \u043d\u0435 \u0441\u043e\u0432\u0441\u0435\u043c \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0442, \u0430 \u043f\u043e\u0442\u043e\u043c\u0443 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u043e\u0431\u044b\u0447\u043d\u043e ",(0,p.kt)("inlineCode",{parentName:"p"},"/hocs"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"/styles")," \u0438 \u0442.\u0434."),(0,p.kt)("p",{parentName:"blockquote"},"\u041e\u0447\u0435\u043d\u044c \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0438 \u0432\u0440\u044f\u0434 \u043b\u0438 \u0440\u0435\u0448\u0430\u0435\u0442\u0441\u044f \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0435\u0439"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"processes"),": \u0441\u043b\u0430\u0439\u0441\u044b \u0432\u043d\u0443\u0442\u0440\u0438 \u0432\u043a\u043b\u044e\u0447\u0430\u044e\u0442 \u0432 \u0441\u0435\u0431\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0438\u0437\u043d\u0435\u0441-\u043b\u043e\u0433\u0438\u043a\u0443, \u0431\u0435\u0437 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f (","*",")",(0,p.kt)("blockquote",{parentName:"li"},(0,p.kt)("p",{parentName:"blockquote"},"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0435 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u044b: ",(0,p.kt)("inlineCode",{parentName:"p"},"lib"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"model"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"**api")))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"pages"),": \u0441\u043b\u0430\u0439\u0441\u044b \u0432\u043d\u0443\u0442\u0440\u0438 \u0432\u043a\u043b\u044e\u0447\u0430\u044e\u0442 \u0432 \u0441\u0435\u0431\u044f ui- \u0438 model- \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044e \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0444\u0438\u0447\u0435\u0439 \u0434\u043b\u044f \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b",(0,p.kt)("blockquote",{parentName:"li"},(0,p.kt)("p",{parentName:"blockquote"},"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0435 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u044b: ",(0,p.kt)("inlineCode",{parentName:"p"},"ui"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"lib"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"model"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"**api")))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"features"),": \u0441\u043b\u0430\u0439\u0441\u044b \u0432\u043d\u0443\u0442\u0440\u0438 \u0432\u043a\u043b\u044e\u0447\u0430\u044e\u0442 \u0432 \u0441\u0435\u0431\u044f \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044e \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439 \u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u0411\u041b \u0432 \u043c\u043e\u0434\u0435\u043b\u0438 + \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",(0,p.kt)("blockquote",{parentName:"li"},(0,p.kt)("p",{parentName:"blockquote"},"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0435 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u044b: ",(0,p.kt)("inlineCode",{parentName:"p"},"ui"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"lib"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"model"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"**api")))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"entities"),": \u0441\u043b\u0430\u0439\u0441\u044b \u0432\u043d\u0443\u0442\u0440\u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442 \u0440\u0430\u0437\u0440\u043e\u0437\u043d\u0435\u043d\u043d\u044b\u0439 \u043d\u0430\u0431\u043e\u0440 \u043f\u043e\u0434\u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",(0,p.kt)("blockquote",{parentName:"li"},(0,p.kt)("p",{parentName:"blockquote"},"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0435 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u044b: ",(0,p.kt)("inlineCode",{parentName:"p"},"ui"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"lib"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"model"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"**api")))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"shared"),": \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043d\u0443\u044e \u043b\u043e\u0433\u0438\u043a\u0443 \u0431\u0435\u0437 \u0411\u041b ","*",")",(0,p.kt)("blockquote",{parentName:"li"},(0,p.kt)("p",{parentName:"blockquote"},"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0435 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u044b: ",(0,p.kt)("inlineCode",{parentName:"p"},"ui"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"lib"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"api"))))),(0,p.kt)("h2",{id:"\u0441\u043c-\u0442\u0430\u043a\u0436\u0435"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/31"},"(\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435) \u0410\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0438 \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438, \u0438\u0445 \u0446\u0435\u043b\u0438 \u0438 \u043d\u0435\u0439\u043c\u0438\u043d\u0433")),(0,p.kt)("li",{parentName:"ul"},"\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u044f \u043f\u043e \u043d\u0435\u0439\u043c\u0438\u043d\u0433\u0443 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439",(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/31#discussioncomment-464894"},"\u041e\u043f\u0440\u043e\u0441 \u043f\u043e \u043d\u0435\u0439\u043c\u0438\u043d\u0433\u0443")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/20"},(0,p.kt)("inlineCode",{parentName:"a"},"processes")," vs ",(0,p.kt)("inlineCode",{parentName:"a"},"flows")," vs ...")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/68"},(0,p.kt)("inlineCode",{parentName:"a"},"model")," vs ",(0,p.kt)("inlineCode",{parentName:"a"},"store")," vs ...")))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://t.me/atomicdesign/18951"},"\u041f\u0435\u0440\u0432\u0438\u0447\u043d\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0439")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://www.pluralsight.com/guides/how-to-organize-your-react-+-redux-codebase"},"(\u0421\u0442\u0430\u0442\u044c\u044f) \u041f\u0440\u043e \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044e \u043a\u043e\u0434\u043e\u0432\u043e\u0439 \u0431\u0430\u0437\u044b ",(0,p.kt)("em",{parentName:"a"},"\u0441 \u043f\u043e\u043b\u043d\u044b\u043c \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435\u043c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043f\u043e\u0434\u0445\u043e\u0434\u043e\u0432"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://alexmngn.medium.com/why-react-developers-should-modularize-their-applications-d26d381854c1"},"(\u0421\u0442\u0430\u0442\u044c\u044f) \u041f\u0440\u043e \u043c\u043e\u0434\u0443\u043b\u044f\u0440\u0438\u0437\u0430\u0446\u0438\u044e \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs/reference/layers"},"Reference: Layers")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs/reference/segments"},"Reference: Segments"))))}c.isMDXComponent=!0}}]);