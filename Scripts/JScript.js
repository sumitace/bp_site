//function ChangeDdlMultipleLocation(mySelect)
//{
//    var urllocation=null;
//    myIndex = mySelect.selectedIndex; 
//    myValue = mySelect.options[myIndex].value; 
//    urllocation=window.location.pathname;
//    urllocation = urllocation+"?location="+myValue;   
//    window.location = urllocation;
//}
//function ChangeDdlMultipleLocation(mySelect)
//{
//    var urllocation=null;
//    myIndex = mySelect.selectedIndex; 
//    myValue = mySelect.options[myIndex].value; 
//    urllocation=window.location.pathname;
//    urllocation = urllocation+"?location="+myValue;   
//    window.location = urllocation;
//}
function ImageChange(btnid)
{  
    oldDivId = "div" + document.getElementById("lblCurrentImage").title;
    document.getElementById(oldDivId).style.display="none"; 
    if(btnid.title=="Next")
    {
        curval = parseInt(document.getElementById("lblCurrentImage").title)+1;        
        document.getElementById("lblCurrentImage").title = curval.toString();            
    }
    else if(btnid.title=="Previous")
    {
        curval = parseInt(document.getElementById("lblCurrentImage").title)-1;
        document.getElementById("lblCurrentImage").title = curval.toString();
    }
    else if(btnid.title=="First")
    {
        curval = "1";
        document.getElementById("lblCurrentImage").title = curval.toString();     
    }
    else if(btnid.title=="Last")
    {
        curval = document.getElementById("lblTotalImage").title;
        document.getElementById("lblCurrentImage").title = curval.toString();
    }
    else
    {                                            
        curval = btnid.value;
        document.getElementById("lblCurrentImage").title = btnid.value;
    }
        
    newDivId = "div"+curval;
    document.getElementById(newDivId).style.display="block";
            
    if(document.getElementById("lblCurrentImage").title!="1")
    {
        document.getElementById("btnPrevious").removeAttribute("disabled");      
        document.getElementById("btnFirst").removeAttribute("disabled");
    }
    else
    {
        document.getElementById("btnPrevious").setAttribute("disabled","true");
        document.getElementById("btnFirst").setAttribute("disabled","true");
    }
    
    if(document.getElementById("lblCurrentImage").title!=document.getElementById("lblTotalImage").title)
    {
        document.getElementById("btnNext").removeAttribute("disabled"); 
        document.getElementById("btnLast").removeAttribute("disabled");
    }
    else
    {
        document.getElementById("btnNext").setAttribute("disabled","true");
        document.getElementById("btnLast").setAttribute("disabled","true");
    }
    
    selecteIdValue = curval;
    
    document.getElementById("btn1").className="btnHomePageNumberButtonStyle";
    document.getElementById("btn2").className="btnHomePageNumberButtonStyle";
    document.getElementById("btn3").className="btnHomePageNumberButtonStyle";
    document.getElementById("btn4").className="btnHomePageNumberButtonStyle";
    document.getElementById("btn5").className="btnHomePageNumberButtonStyle"; 
           
    if(selecteIdValue<=3)
    {
        startVal = 1;
        endVal = 5; 
        if(selecteIdValue==1)
        {
            document.getElementById("btn1").className="btnHomePageSelectedNumberButtonStyle";
        }
        else if(selecteIdValue==2)
        {
            document.getElementById("btn2").className="btnHomePageSelectedNumberButtonStyle";
        } 
        else if(selecteIdValue==3)
        {
            document.getElementById("btn3").className="btnHomePageSelectedNumberButtonStyle";
        }
    } 
    else if(selecteIdValue >= parseInt(document.getElementById("lblTotalImage").title)-2)
    {
        startVal = parseInt(document.getElementById("lblTotalImage").title) - 4;
        endVal = document.getElementById("lblTotalImage").title;
        if(selecteIdValue >= parseInt(document.getElementById("lblTotalImage").title))
        {
            document.getElementById("btn5").className="btnHomePageSelectedNumberButtonStyle";
        }
        else if(selecteIdValue >= parseInt(document.getElementById("lblTotalImage").title)-1)
        {
            document.getElementById("btn4").className="btnHomePageSelectedNumberButtonStyle";
        }
        else if(selecteIdValue >= parseInt(document.getElementById("lblTotalImage").title)-2)
        {
            document.getElementById("btn3").className="btnHomePageSelectedNumberButtonStyle";
        } 
    }
    else
    {
        startVal = parseInt(selecteIdValue)-2;
        endVal = parseInt(selecteIdValue)+2;
        document.getElementById("btn3").className="btnHomePageSelectedNumberButtonStyle";
    }
    j=startVal;
    for(i=1;i<=5;i++)
    {
        var bid = "btn"+i.toString();
        document.getElementById(bid).value = j; 
        j++;
    }     
}
/* function for viewinf flash file how it works demo */
 function openWin(url, w, h) 
 {
      var winprop = "width=" + w + ",height=" + h + ",location=no,status=no,menubar=no,toolbar=no";
    openwin = window.open(url,'',winprop);
 }

function ChangeRestaurant(url)
{
    window.location(url);
}