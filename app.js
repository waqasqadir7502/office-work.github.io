const login = ()=>{
    let  emailLog = document.getElementById("signemail").value
    let  pwdLog = document.getElementById("pwd").value
   
    if(emailLog==="abc@xyz.com" & pwdLog=== "123456" ){
        document.getElementById("log").onclick = function(){
        location.href="./index4.html"}
    }else{alert("your email or password is wrong")}
}

function createTeam() {
    
    document.getElementById("createteam_none").style = "display : block ;"
}


function hiddenBtn(){
    document.getElementById("createteam_none").style = "display : none ;"
}


// function createT(){
//   let e = document.getElementById("category");
//   let as = document.forms[0].category.value;
//   let strUser = e.options[e.selectedIndex].value;
//   console.log(as, strUser);
// }
// e.onchange=show;
// show();