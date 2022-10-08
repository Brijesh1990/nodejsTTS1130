var myLoader;
function MainLoader()
{
    myLoader=setTimeout("test()",5000);
}

function test()
{
    document.getElementById("loader").style="display:none";
    document.getElementById("content").style="display:block";
    
}