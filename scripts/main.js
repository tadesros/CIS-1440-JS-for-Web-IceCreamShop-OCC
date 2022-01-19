

window.addEventListener('load', start);

//window.onload = start; //equivalent

function start() {
    let theButton = document.querySelector('#btnGetTotal');
    //document.getElementbyId('btnGetTotal'); //older style
    theButton.addEventListener('click', calculateTotal);
}//end function

function calculateTotal() {
    let totalOutput = document.querySelector('#total');
    let flavor = document.querySelector('#flavor').value;


    let cherries = document.querySelector('#cherries').checked;
    let nuts = document.querySelector('#nuts').checked;

    let total = 1.25;

    if (cherries) {
        total += 0.25; //Total = total + 0.25
    }
    if (nuts) {
        total += 0.25;
    }

    //Output to the span
    totalOutput.innerHTML = "Total:  $" + total;


}