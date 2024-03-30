let user_name = prompt("당신의 이름을 입력해 주세요")
console.log(user_name)
let babo = confirm(user_name+" 당신은 바보입니까?")


const babo_check = () =>{
    if(babo == true){
        alert("잘 알고계시네요!")
    }else{
        alert("그렇지 않습니다🧐당신은 바보가 분명합니다🤓")
    }
}

babo_check()