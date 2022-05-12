let scr=document.getElementById("screen");

let table=document.querySelectorAll("table");
let button=document.querySelectorAll("button");
let btn=document.querySelectorAll("#btn");
let scrvalue="";
let screenValue="";
for(item of button)
{
    

    item.addEventListener("click",(e)=>
    {
        scrvalue=e.target.innerText;
        if(scrvalue=='=')
        {
            scr.value=eval(screenValue);

        }
        else if(scrvalue==='X')
        {
            screenValue+='*';
            scrvalue.innerText='*';
            scr.value=screenValue;
        }
        else if(scrvalue=='C')
        {
            screenValue="";
           scr.value="";            
        }
        else
        {
            screenValue+=scrvalue;
        
            scr.value=screenValue;        
        }
    })
}