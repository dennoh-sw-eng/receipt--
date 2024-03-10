function calculateTotal() {
    const itemPrices = document.getElementsByClassName('item-price');
    let totalAmount = 0;
  
    for (let i = 0; i < itemPrices.length; i++) {
      const priceString = itemPrices[i].innerText.trim().substring(3); // Remove 'Ksh' and trim any spaces
      const price = parseFloat(priceString);
      totalAmount += price;
    }
  
    return totalAmount;
  }
  
  function updateTotals() {
    const tax = 1.50;
    const totalAmount = calculateTotal();
    const grandTotal = totalAmount + tax;
  
    const totalElement = document.querySelector('#total-amount');
    const grandTotalElement = document.querySelector('#grand-total-amount');
  
    totalElement.innerText = `Ksh${totalAmount.toFixed(2)}`;
    grandTotalElement.innerText = `Ksh${grandTotal.toFixed(2)}`;
  }
  function printReceipt() {
    updateTotals();
  window.print();
}
  
  updateTotals();
  