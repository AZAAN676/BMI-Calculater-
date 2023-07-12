function calc()
{
   let weight= document.querySelector("#kg").value;
   let height= document.querySelector("#meter").value;
   let res=weight/(height*height);
   document.querySelector("#change").innerHTML=`your BMI:  ${res}`

}

function calcu()
{
let feet= document.querySelector("#feet").value;
let inch= document.querySelector("#inch").value;
let ans=(feet*0.3048)+(inch*0.0254)
   document.querySelector("#hello").innerHTML=`In meter: ${ans}`

}

