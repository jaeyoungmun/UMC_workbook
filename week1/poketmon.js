
function click(){
    const $ul = document.getElementById('ul');
    
    let list = "";
    for(let i=0; i<3000;i++){
        list += `<li>${i}<li>`
    }
    $ul.innerHTML = list;

        // num.textname = i;
        // num.appendChild('ul')
        // console.log(num);
}
