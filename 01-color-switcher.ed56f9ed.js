!function(){var t,e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]");function d(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}r.setAttribute("disabled",""),e.addEventListener("click",(function(){e.setAttribute("disabled",""),r.removeAttribute("disabled"),t=setInterval(d,1e3)})),r.addEventListener("click",(function(){e.removeAttribute("disabled"),r.setAttribute("disabled",""),clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.ed56f9ed.js.map
