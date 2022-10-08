function subtot()
{
    var p=parseInt(document.getElementById("price").value);
    var q=parseInt(document.getElementById("qty").value);
    var total=p*q;
    document.getElementById("tot").innerHTML=+total;
}