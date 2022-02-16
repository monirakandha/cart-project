
document.getElementById('product-plus').addEventListener('click',function(){
    const ProductInput = document.getElementById('phone-quantity');
    let productNumber = ProductInput.value;
    productNumber = parseInt(productNumber)+1;
    ProductInput.value = productNumber;
    const totalCost = document.getElementById('product-price');
    totalCost.innerText = 1219 * productNumber;
    const totalPriceProduct = totalCost.innerText;

    const newSubtotal = document.getElementById('phone-quantity').value;
    const phoneCost = newSubtotal * 1219;
    const thePhone = document.getElementById('subtotal');
    thePhone.innerText = phoneCost;
});
document.getElementById('product-minus').addEventListener('click',function(){
    const ProductInput = document.getElementById('phone-quantity');
    let productNumber = ProductInput.value;
    productNumber = parseInt(productNumber)-1;
    ProductInput.value = productNumber;
    const totalCost = document.getElementById('product-price');
    totalCost.innerText = 1219 * productNumber;
    
    //update subtotal
    const newSubtotal = document.getElementById('phone-quantity').value;
    const phoneCost = newSubtotal * 1219;
    const thePhone = document.getElementById('subtotal');
    thePhone.innerText = phoneCost;
});

document.getElementById('case-plus').addEventListener('click',function(){
    const ProductInput = document.getElementById('case-quantity');
    let productNumber = ProductInput.value;
    productNumber = parseInt(productNumber)+1;
    ProductInput.value = productNumber;
    const totalCost = document.getElementById('case-price');
   
    totalCost.innerText = 59 * productNumber;


    //update subtotal
    const newSubtotal = document.getElementById('case-quantity').value;
    const caseCost = newSubtotal * 59;
    const theCase = document.getElementById('subtotal');
    theCase.innerText = caseCost;
  
});

document.getElementById('case-minus').addEventListener('click',function(){
    const ProductInput = document.getElementById('case-quantity');
    let productNumber = ProductInput.value;
    productNumber = parseInt(productNumber)-1;
    ProductInput.value = productNumber;
    const totalCost = document.getElementById('case-price');
    totalCost.innerText = 59 * productNumber;
        //update subtotal
        const newSubtotal = document.getElementById('case-quantity').value;
        const caseCost = newSubtotal * 59;
        const theCase = document.getElementById('subtotal');
        theCase.innerText = caseCost;
        
})
