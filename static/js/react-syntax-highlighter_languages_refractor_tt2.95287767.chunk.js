(this["webpackJsonptss-react_landingpage"]=this["webpackJsonptss-react_landingpage"]||[]).push([[137,81],{658:function(e,t,n){"use strict";function a(e){!function(e){function t(e,t){return"___"+e.toUpperCase()+t+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,a,r,i){if(n.language===a){var s=n.tokenStack=[];n.code=n.code.replace(r,(function(e){if("function"===typeof i&&!i(e))return e;for(var r,o=s.length;-1!==n.code.indexOf(r=t(a,o));)++o;return s[o]=e,r})),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,a){if(n.language===a&&n.tokenStack){n.grammar=e.languages[a];var r=0,i=Object.keys(n.tokenStack);!function s(o){for(var g=0;g<o.length&&!(r>=i.length);g++){var u=o[g];if("string"===typeof u||u.content&&"string"===typeof u.content){var l=i[r],c=n.tokenStack[l],p="string"===typeof u?u:u.content,d=t(a,l),f=p.indexOf(d);if(f>-1){++r;var k=p.substring(0,f),E=new e.Token(a,e.tokenize(c,n.grammar),"language-"+a,c),S=p.substring(f+d.length),m=[];k&&m.push.apply(m,s([k])),m.push(E),S&&m.push.apply(m,s([S])),"string"===typeof u?o.splice.apply(o,[g,1].concat(m)):u.content=m}}else u.content&&s(u.content)}return o}(n.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]},827:function(e,t,n){"use strict";var a=n(658);function r(e){e.register(a),function(e){e.languages.tt2=e.languages.extend("clike",{comment:/#.*|\[%#[\s\S]*?%\]/,keyword:/\b(?:BLOCK|CALL|CASE|CATCH|CLEAR|DEBUG|DEFAULT|ELSE|ELSIF|END|FILTER|FINAL|FOREACH|GET|IF|IN|INCLUDE|INSERT|LAST|MACRO|META|NEXT|PERL|PROCESS|RAWPERL|RETURN|SET|STOP|TAGS|THROW|TRY|SWITCH|UNLESS|USE|WHILE|WRAPPER)\b/,punctuation:/[[\]{},()]/}),e.languages.insertBefore("tt2","number",{operator:/=[>=]?|!=?|<=?|>=?|&&|\|\|?|\b(?:and|or|not)\b/,variable:{pattern:/[a-z]\w*(?:\s*\.\s*(?:\d+|\$?[a-z]\w*))*/i}}),e.languages.insertBefore("tt2","keyword",{delimiter:{pattern:/^(?:\[%|%%)-?|-?%]$/,alias:"punctuation"}}),e.languages.insertBefore("tt2","string",{"single-quoted-string":{pattern:/'[^\\']*(?:\\[\s\S][^\\']*)*'/,greedy:!0,alias:"string"},"double-quoted-string":{pattern:/"[^\\"]*(?:\\[\s\S][^\\"]*)*"/,greedy:!0,alias:"string",inside:{variable:{pattern:/\$(?:[a-z]\w*(?:\.(?:\d+|\$?[a-z]\w*))*)/i}}}}),delete e.languages.tt2.string,e.hooks.add("before-tokenize",(function(t){e.languages["markup-templating"].buildPlaceholders(t,"tt2",/\[%[\s\S]+?%\]/g)})),e.hooks.add("after-tokenize",(function(t){e.languages["markup-templating"].tokenizePlaceholders(t,"tt2")}))}(e)}e.exports=r,r.displayName="tt2",r.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_tt2.95287767.chunk.js.map