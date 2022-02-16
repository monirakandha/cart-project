
// document.getElementById('product-plus').addEventListener('click',function(){
//     const ProductInput = document.getElementById('phone-quantity');
//     let productNumber = ProductInput.value;
//     productNumber = parseInt(productNumber)+1;
//     ProductInput.value = productNumber;
//     const totalCost = document.getElementById('product-price');
//     totalCost.innerText = 1219 * productNumber;
//     const totalPriceProduct = totalCost.innerText;

//     const newSubtotal = document.getElementById('phone-quantity').value;
//     const phoneCost = newSubtotal * 1219;
//     const thePhone = document.getElementById('subtotal');
//     thePhone.innerText = phoneCost;
// });
// document.getElementById('product-minus').addEventListener('click',function(){
//     const ProductInput = document.getElementById('phone-quantity');
//     let productNumber = ProductInput.value;
//     productNumber = parseInt(productNumber)-1;
//     ProductInput.value = productNumber;
//     const totalCost = document.getElementById('product-price');
//     totalCost.innerText = 1219 * productNumber;
    
//     //update subtotal
//     const newSubtotal = document.getElementById('phone-quantity').value;
//     const phoneCost = newSubtotal * 1219;
//     const thePhone = document.getElementById('subtotal');
//     thePhone.innerText = phoneCost;
// });

// document.getElementById('case-plus').addEventListener('click',function(){
//     const ProductInput = document.getElementById('case-quantity');
//     let productNumber = ProductInput.value;
//     productNumber = parseInt(productNumber)+1;
//     ProductInput.value = productNumber;
//     const totalCost = document.getElementById('case-price');
   
//     totalCost.innerText = 59 * productNumber;


//     //update subtotal
//     const newSubtotal = document.getElementById('case-quantity').value;
//     const caseCost = newSubtotal * 59;
//     const theCase = document.getElementById('subtotal');
//     theCase.innerText = caseCost;
  
// });

// document.getElementById('case-minus').addEventListener('click',function(){
//     const ProductInput = document.getElementById('case-quantity');
//     let productNumber = ProductInput.value;
//     productNumber = parseInt(productNumber)-1;
//     ProductInput.value = productNumber;
//     const totalCost = document.getElementById('case-price');
//     totalCost.innerText = 59 * productNumber;
//         //update subtotal
//         const newSubtotal = document.getElementById('case-quantity').value;
//         const caseCost = newSubtotal * 59;
//         const theCase = document.getElementById('subtotal');
//         theCase.innerText = caseCost;
        
// })
function updateNumber(product,price,isIncreasing){
    // get product price and handle product increse drecse event handle 
    const ProductInput = document.getElementById(product+'-quantity');
    let productNumber = ProductInput.value;
    if(isIncreasing){
        productNumber = parseInt(productNumber)+1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber)-1;
    }
    ProductInput.value = productNumber;  

    // prodcut cart price handle 
    const totalCost = document.getElementById(product+'-price');
    totalCost.innerText = productNumber * price ;
    calculation();
}


// get all button event and handle all event 
document.getElementById('product-plus').addEventListener('click',function(){
updateNumber('phone',1219,true);
});

document.getElementById('product-minus').addEventListener('click',function(){
    updateNumber('phone',1219,false);
});
document.getElementById('case-plus').addEventListener('click',function(){
    updateNumber('case',59,true);
});
document.getElementById('case-minus').addEventListener('click',function(){
    updateNumber('case',1219,false);
});
//update subtotal
function subTotalCalculation(product){
    const pricetInputText = document.getElementById(product+'-quantity');
    pricetInput = parseInt(pricetInputText.value);
    return pricetInput;
}

function calculation(){
    const phoneCost = subTotalCalculation('phone') * 1219;
    const caseCost = subTotalCalculation('case') * 59;
    const totalSubtoal = phoneCost + caseCost;
    const tax = totalSubtoal / 10;
    const total_amount = totalSubtoal + tax;

    // update in html 
    document.getElementById('subtotal').innerText = totalSubtoal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('price-total').innerText = total_amount;
}