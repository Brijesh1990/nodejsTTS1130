function validation()
{
    if(document.frm.fname.value=="")
    {
        alert('Enter your firstName *')
        document.frm.fname.focus();
        return false;
    }
    var f=/^[A-Za-z]+$/;
    if(!f.test(document.frm.fname.value))
    
    {
        alert('Only accept alphabetic character *')
        document.frm.fname.focus();
        return false;
    }
    if(document.frm.lname.value=="")
    {
        alert('Enter your LastName *')
        document.frm.lname.focus();
        return false;
    }
    var l=/^[A-Za-z]+$/;
    if(!l.test(document.frm.lname.value))
    
    {
        alert('Only accept lastName alphabetic character *')
        document.frm.lname.focus();
        return false;
    }


    if(document.frm.em.value=="")
    {
        alert('Enter your email *')
        document.frm.em.focus();
        return false;
    }
    var e= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!e.test(document.frm.em.value))
    
    {
        alert('Please enter valid email Address *')
        document.frm.em.focus();
        return false;
    }

   
}