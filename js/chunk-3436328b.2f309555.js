(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3436328b"],{"2d8b":function(t,e,i){},"3f8c5":function(t,e,i){"use strict";var s=i("2d8b"),a=i.n(s);a.a},"81d4":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"movieDetails"},[i("MovieInfo")],1)},a=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-container",[i("div",{staticClass:"movieInfo",style:{backgroundImage:"url("+t.imgUrl+t.movieDetailInfo.backdrop_path+")"}},[i("div",{staticClass:"inner-wrap"},[i("b-row",[i("b-col",{attrs:{md:"4"}},[i("img",{staticClass:"moviePoster",attrs:{src:t.imgUrl+t.movieDetailInfo.poster_path,alt:""}})]),i("b-col",{attrs:{md:"8"}},[i("div",{staticClass:"details"},[i("h1",[i("span",{staticClass:"title"},[t._v(t._s(t.movieDetailInfo.original_title))]),t._v(" "),i("span",{staticClass:"release-date"},[t._v("("+t._s(t.movieDetailInfo.release_date.slice(0,4))+")")])]),i("h3",[t._v("Overview:")]),i("p",{staticClass:"overview"},[t._v(t._s(t.movieDetailInfo.overview))]),i("h4",[t._v("Genres:")]),i("ul",{staticClass:"genre-list"},t._l(t.movieDetailInfo.genres,(function(e){return i("li",[t._v(t._s(e.name))])})),0),i("div",{staticClass:"budget"},[t._v(" Budget: "),i("span",{staticClass:"amount"},[t._v(t._s(t.movieDetailInfo.budget)+" $")])]),i("div",{staticClass:"runtime"},[t._v(" Runtime: "),i("span",{staticClass:"time"},[t._v(t._s(t.movieDetailInfo.runtime)+" minutes")])]),t.movieDetailInfo.isFavorite?i("div",{staticClass:"favorite"},[i("p",[t._v("* This film is on your favorite")])]):t._e()])])],1)],1)])]),i("b-container",[i("b-row",t._l(t.allRecommendatios.slice(0,4),(function(e){return i("b-col",{attrs:{cols:"6",md:"3",sm:"3"}},[i("img",{staticClass:"moviePoster",attrs:{src:t.imgUrl+e.poster_path,alt:""},on:{click:function(i){return t.openMovieDetails(e.id)}}})])})),1)],1)],1)},n=[],l=i("2f62"),r={name:"MovieInfo",data:function(){return{imgUrl:"https://image.tmdb.org/t/p/original"}},computed:Object(l["c"])(["movieDetailInfo","allRecommendatios"]),methods:Object(l["b"])(["openMovieDetails"])},c=r,v=(i("3f8c5"),i("2877")),m=Object(v["a"])(c,o,n,!1,null,"6f75e156",null),u=m.exports,f={name:"MovieDetails",components:{MovieInfo:u}},d=f,_=Object(v["a"])(d,s,a,!1,null,null,null);e["default"]=_.exports}}]);
//# sourceMappingURL=chunk-3436328b.2f309555.js.map