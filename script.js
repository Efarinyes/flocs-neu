

document.querySelectorAll('.floc')
.forEach((floc) => {
    floc.style.top = '-10%';
    floc.style.left = 100*Math.random() + '%';
    setInterval(() => {
        incrementar(5 * Math.random());
    }, 100);

function incrementar(quantitat) {
let top = parseInt(floc.style.top);
let left = parseInt(floc.style.left);
floc.style.left = left + quantitat + '%';
floc.style.top = top + quantitat + '%';
if (top + quantitat >= 100) {
    floc.style.top = '-10%';
}
if (left + quantitat >= 100) {
    floc.style.left = '-10%';
}
console.log(floc.style.top);
console.log('left',floc.style.left);
}
})