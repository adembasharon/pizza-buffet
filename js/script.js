const myHeader=document.getElementById("header-sec");
const mySize=document.getElementById("size1");
const myQuantity=document.getElementById("size2");
const myCrust=document.getElementById("size3");
const myTrap=document.getElementById("size4");
const myBtn=document.getElementById("main1");
const myButton=document.getElementById("main2");
const myMain=document.getElementById("main3");
const myWeight=document.getElementById("main4");
const displayOrder=document.getElementById("empty-paragraph");
const complete=document.getElementById("complete")

console.log(complete)
// Add Pizza
const addBtn=document.getElementsByClassName("add-btn");
const addBtnArray=Array.from(addBtn);
const myToppings=document.getElementsByClassName("toppings");
 const toppingArray=Array.from(myToppings);
 const grandTotal=[];

 


addBtnArray.forEach(element=>{
element.addEventListener("click",(e)=>{
    const nodes = e.target.parentElement.parentElement.childNodes;
    const pizzaName = nodes[1].textContent;
    const pizzaSize=nodes[3].firstChild.nextSibling.value;
const pizzaQuantity=nodes[5].firstChild.nextSibling.value;
const pizzaCrust=nodes[7].firstChild.nextSibling.value;
const pizzaToppingsArray = [];


const pizzaTotal=pizzaSize*pizzaQuantity;


toppingArray.forEach(topping=>{
if(topping.checked){
   pizzaToppingsArray.push(topping.value)
}
})
const displayOrderItems=document.createElement("div");
displayOrderItems.classList.add("d-flex", "justify-content-between", "order-list");
displayOrderItems.innerHTML=`

<p>${pizzaName}</p>
<p>${pizzaSize}</p>
<p>${pizzaQuantity}</p>
<p>${pizzaCrust}</p>
<p>${pizzaToppingsArray.join(",")}</p>
<p>${pizzaTotal}</p>
`
displayOrder.appendChild(displayOrderItems)

grandTotal.push(pizzaTotal);
const totals = grandTotal.reduce((previousValue , currentValue)=>{
   return previousValue+currentValue
    },0)

    complete.innerHTML=`
<p>Thank You For Shopping with Pizza Buffet Your Order Will Be Delivered at Your DoorStep, Your ToTal is ${totals}</p>`
console.log(totals);

    //const newPizza = new Pizza()
})
})




function Pizza(name,size,quantity,crust,topping,total){
    this.name=name;
    this.size=size;
    this.quantity=quantity;
    this.crust=crust;
    this.topping=topping;
    this.total=total;
}

Pizza.prototype.addPizza = function(pizza){
    const pizzaContainer = document.createElement("div");
    pizzaContainer.className = "pizzaItem";
    pizzaContainer.innerHTML=`<p>${pizza.name}</p>
    <p>${pizza.size}</p>
    <p>${pizza.quantity}</p>
    <p>${pizza.crust}</p>
    <p>${pizza.topping}</p>
    <p>${pizza.total}</p>`;


}










console.log(addBtnArray)
window.addEventListener("scroll", ()=>{

    if(window.scrollY >=50) {
         myHeader.classList.add("fixed");

         

            
    }
    else{
        myHeader.classList.remove("fixed");
    }




}

)
myBtn.addEventListener("click",()=>{
mySize.style.display="block"
myQuantity.style.display="none"
myCrust.style.display="none"
myTrap.style.display="none"
}

)


    

    myButton.addEventListener("click",()=>{
        mySize.style.display="none"
        myQuantity.style.display="block"
        myCrust.style.display="none"
        myTrap.style.display="none"
        }
        
        )
        

        myMain.addEventListener("click",()=>{
            mySize.style.display="none"
            myQuantity.style.display="none"
            myCrust.style.display="block"
            myTrap.style.display="none"
            }
            
            )
            
            

            myWeight.addEventListener("click",()=>{
                mySize.style.display="none"
                myQuantity.style.display="none"
                myCrust.style.display="none"
                myTrap.style.display="block"
                }
                
                )
                
      
                







