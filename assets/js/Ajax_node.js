function addURLParam(n,e,o){return n+=-1==n.indexOf("?")?"?":"&",n+=encodeURIComponent(e)+"="+encodeURIComponent(o)}function serialize(n){var e=[];return e.push(encodeURIComponent("name")+"="+encodeURIComponent(n)),e.join("&")}$(document).ready(function(){$("button").click(function(){var n=$("#name").val();$.get("http://127.0.0.1:3000/users/getData",{name:n},function(n){console.log("res:"),console.log(n)}),xhr.send()})});