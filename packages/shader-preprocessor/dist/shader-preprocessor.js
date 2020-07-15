/*!
 * @pixi-essentials/shader-preprocessor - v1.0.0
 * Compiled Wed, 15 Jul 2020 15:46:05 UTC
 *
 * @pixi-essentials/shader-preprocessor is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
this.PIXI=this.PIXI||{};var _pixi_essentials_shader_preprocessor=function(e,t){"use strict";var r=/%([\w$]+)(\([\w$, ]*\))?%/g,a=function(){function e(e,r,a){void 0===a&&(a="pixi-shader-template"),this.vertexTemplateSrc=e||t.Program.defaultVertexSrc,this.fragmentTemplateSrc=r||t.Program.defaultFragmentSrc,this.name=a,this.programCache=new Map,this.vertexMacroData=this.extractData(this.vertexTemplateSrc),this.fragmentMacroData=this.extractData(this.fragmentTemplateSrc)}return e.prototype.generateProgram=function(e,r){var a=this.processData(this.vertexTemplateSrc,this.vertexMacroData,e),n=this.processData(this.fragmentTemplateSrc,this.fragmentMacroData,e),i=a+n,s=this.programCache.get(i);if(s)return s;var o=new t.Program(a,n,r||this.name||"pixi-processed-shader");return this.programCache.set(i,o),o},e.prototype.extractData=function(e){for(var t,a=[],n=new RegExp(r);null!==(t=n.exec(e));){var i=t[1],s=t[2];s&&(s=s.slice(1,-1).split(",").map((function(e){return e.trim()}))),a.push({id:i,args:s,position:{start:t.index,end:t.index+t[0].length},type:s?"function":"field"})}return a},e.prototype.processData=function(e,t,r){for(var a=e,n=t.length-1;n>=0;n--){var i=t[n],s=r[i.id],o="";o="function"==typeof s?s.apply(void 0,i.args):""+s,a=a.slice(0,i.position.start)+o+a.slice(i.position.end)}return a},e}(),n=function(){function e(){}return e.generateShader=function(r,a,n,i,s){var o=e.from(r,a,s).generateProgram(i,s);return new t.Shader(o,n)},e.from=function(t,r,n){var i=t+r,s=e.managedTemplates[i];return s||(s=e.managedTemplates[i]=new a(t,r,n)),s},e.managedTemplates={},e}();return e.ProgramTemplate=a,e.ShaderPreprocessor=n,e}({},core);Object.assign(this.PIXI,_pixi_essentials_shader_preprocessor);
//# sourceMappingURL=shader-preprocessor.js.map
