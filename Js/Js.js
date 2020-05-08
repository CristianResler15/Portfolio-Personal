function enviar()
{
var nombre= document.getElementById("Nombre").value;
var email=document.getElementById("email").value;
var txtarea =document.getElementById("txt").value;
if(nombre=="")
{
    alert("Campo de nombre vacio");
}
else if(email=="")
{
    alert("Campo de email vacio ");
}
else if (txtarea=="")
{
    alert("Campo de comentario vacio");
}
}

