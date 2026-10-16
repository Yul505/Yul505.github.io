(function(){
var T={en:{
"nav.i":"Home","nav.h":"Skills","nav.p":"Projects","nav.c":"Contact",
"i.rol":"Junior front-end developer",
"i.h1":"Clear interfaces, designed around people",
"i.lead":"I'm Yuliia. After more than fifteen years in urban planning, I build websites with the same idea: everything in its place, and an obvious path for whoever arrives.",
"i.b1":"See my projects","i.b2":"Contact me","i.sobre":"About me",
"i.p1":"Junior web developer with official training in web programming and layout, and hands-on experience in real projects. I work with HTML5, CSS3, JavaScript, PHP, SQL and WordPress.",
"i.p2":"My career began in urban planning, where for more than fifteen years I used digital technologies with one clear aim: making information more accessible to people. I completed two official professional certificates (Level 2 and Level 3) at Fundesplai and Nascor Formación, and applied them in internships at ACF Greenhit and AFA Bisbat d'Ègara.",
"i.d1":"Based in","i.d1v":"Castelldefels, Barcelona","i.d2":"Training","i.d2v":"Professional certificates IFCD0110 and IFCD0210","i.d3":"Looking for","i.d3v":"My first role as a front-end developer",
"i.mot":"Motivation","i.cita":"When I built my first web page, something clicked.",
"i.m1":"I realised web development combines exactly what I love: structure, logic and focus on the user. From there I decided to train seriously and learn by working on real projects.",
"i.m2":"I know how to find a path to results and I value teamwork. I make up for my lack of experience in the sector with real motivation and proven ability to learn. I want to keep growing through live projects.",
"i.stack":"What I work with","i.ver":"See all my skills",
"p.h1":"Projects","p.lead":"A selection of what I have built and improved. Each card shows the technology, the type of work and where to see the code.",
"p.t":"Type","p.k":"Technologies","p.code":"View code",
"c.h1":"Contact","c.lead":"Got an opportunity, a project or just a question? Write to me and I will reply as soon as I can.",
"c.n":"Name","c.e":"Email","c.m":"Message","c.btn":"Write message"
}};
var els=document.querySelectorAll("[data-i18n]");
els.forEach(function(e){e.setAttribute("data-es",e.innerHTML)});
function set(l){
 document.documentElement.lang=l;
 els.forEach(function(e){var k=e.getAttribute("data-i18n");e.innerHTML=(l==="en"&&T.en[k])?T.en[k]:e.getAttribute("data-es")});
 document.querySelectorAll(".lang button").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.l===l)});
 try{localStorage.setItem("lang",l)}catch(x){}
}
document.querySelectorAll(".lang button").forEach(function(b){b.addEventListener("click",function(){set(b.dataset.l)})});
var s="es";try{s=localStorage.getItem("lang")||"es"}catch(x){}
if(s!=="es")set(s);
var f=document.getElementById("form");
if(f)f.addEventListener("submit",function(e){e.preventDefault();var d=new FormData(f);
 location.href="mailto:shiyan82uga@gmail.com?subject="+encodeURIComponent("Contacto desde yulishy.com: "+d.get("nombre"))+"&body="+encodeURIComponent(d.get("mensaje")+"\n\n"+d.get("nombre")+" ("+d.get("email")+")");});
})();
