var hh=0;
var mm=0;
var ss=0;
function demo()
{
var s=document.getElementById("s")
var m=document.getElementById("m")
var h=document.getElementById("h");
ss++;
if(ss>=60)
{
ss=0;
mm++;
if(mm>=60)
{
mm=0;
hh++;
}
}

s.innerText=ss;
m.innerText=mm;
h.innerText=hh;
}
setInterval("demo()",1);