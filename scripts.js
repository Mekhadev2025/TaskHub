 
const array=[]
const form=document.querySelector("form");
const ul=document.querySelector("ul");

form.addEventListener("submit",(event)=>{
event.preventDefault();
const dvalue=form.querySelector("input").value;
const li=document.createElement("li");
const h2=document.createElement("h2")
const del_btn=document.createElement("button")
const div=document.createElement("div")
const cb=document.createElement("input")
cb.setAttribute("type","checkbox")
const label=document.createElement("label")
let status="Pending"
label.innerText=`Task Status: ${status}`
div.append(label)
div.append(cb)

console.log("hello")
del_btn.innerText="Delete"

h2.append(dvalue)
li.append(h2)
div.append(del_btn)
li.append(div)
ul.append(li)


cb.addEventListener("click",()=>{
    if(cb.checked)
{
status="Completed"
console.log("hurray")
label.innerText=`Task Status: ${status}`
li.style.backgroundColor="#DBDFEA"
del_btn.style.backgroundColor="#8294C4"
data.vstatus=status
console.log(array);
}
else{
    status="Pending"
    label.innerText=`Task Status: ${status}`
    li.style.backgroundColor="#EEEEEE"
    del_btn.style.backgroundColor="black"
    data.vstatus=status
    console.log(array);
}
})

const data ={
    task:dvalue,
    vstatus:status,
    id:Date.now()

}
array.push(data);
console.log(array);



del_btn.addEventListener("click",()=>{
    console.log("deleting container")
    del_btn.parentElement.parentElement.remove()
})

const inp=document.querySelector("input")
inp.value=''


})








