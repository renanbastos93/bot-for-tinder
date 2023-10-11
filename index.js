function like(){
    document.querySelectorAll('button').forEach(item => {
        item.innerText=="LIKE" && item.click()
    });
};

function run(time){
    return setInterval(like, time);
}

let idInterval = run(1000); // 1 second

function pause(id){
    clearInterval(id);
}
