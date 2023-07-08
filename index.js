function like(){
    document.querySelector("#u490315748 > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div.Mt\\(a\\).Px\\(4px\\)--s.Pos\\(r\\).Expand.H\\(--recs-card-height\\)--ml.Maw\\(--recs-card-width\\)--ml > div > div > div.Pos\\(a\\).B\\(0\\).Iso\\(i\\).W\\(100\\%\\).Start\\(0\\).End\\(0\\) > div > div.Mx\\(a\\).Fxs\\(0\\).Sq\\(70px\\).Sq\\(60px\\)--s.Bd.Bdrs\\(50\\%\\).Bdc\\(\\$c-ds-border-gamepad-like-default\\) > button").click()
};

function run(time){
    return setInterval(like, time);
}

let idInterval = run(1000); // 1 second

function pause(id){
    clearInterval(id);
}
