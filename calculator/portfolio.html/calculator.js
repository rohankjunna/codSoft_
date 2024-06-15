let result=document.getElementById("inputext")
let calculate=(Number)=>{
    result.value= result.value+Number;
}
let Result= () => {
    try {
        result.value=eval(result.value)
    }
    catch(error) {
        alert("Enter the vaild input");
        
    }
}
function clr(){
result .value="";
}
function del(){
    result.value=result.value.slice(0,-1);


}

