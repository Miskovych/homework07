// JavaScript File
window.addEventListener("load", init, false);

function init() {
    fibtn.addEventListener("click", action, false);
}

function action() {
    var a = 0, b = 1, f = 1,n,fibarr=[1];
    n=fnum.value;
    if (n==1){fibarr[0]=null;}
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
        fibarr.push(f);
    }
    var fibsting="Fibonacci numbers: ";
    fibarr.forEach(function(f,i){
        fibsting+=" "+String(f);
    });
    fibresult.innerHTML = fibsting ;}