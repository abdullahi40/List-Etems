const amount = document.querySelector('#amount');
const guests = document.querySelector('#guest');
const quality = document.querySelector('#quality');
const tipAmount = document.querySelector('#tip-amount');

calculate = () =>{
  const tip = ((amount.value * quality.value) / (guest.value)).toFixed(2);
  amount.value = ' ';
  guests.value = ' ';
  quality.value = ' ';
  if(tip === 'NaN'){
    tipAmount.innerHTML = 'Tip $0 each';
    showTipAmont();
  }else{
    tipAmount.innerHTML = 'Tip $' + tip + 'each';
    showTipAmont();
  }
}

showTipAmont = () =>{
  var x = tipAmount;
  x.className = 'show';
  setTimeout(function() {x.className = x.className.replace('show', ' ');}, 3000);

}