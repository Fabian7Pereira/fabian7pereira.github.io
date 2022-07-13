const form  = document.getElementById('TradeInForm');

const prodlist1 = document.getElementById('productType');
const dataList1 = document.getElementById('list1');
const error1 = document.getElementsByClassName('error1');

const prodlist2Mac = document.getElementById('productSpecificMac');
const specificMac = document.getElementById('specificMac');
const dataList2Mac = document.getElementById('list2a');
const error2a = document.getElementsByClassName('error2a');

const prodlist2iPhone = document.getElementById('productSpecificiPhone');
const specificiPhone = document.getElementById('specificiPhone');
const dataList2iPhone = document.getElementById('list2b');
const error2b = document.getElementsByClassName('error2b');

const prodlist2iPad = document.getElementById('productSpecificiPad');
const specificiPad = document.getElementById('specificiPad');
const dataList2iPad = document.getElementById('list2c');
const error2c = document.getElementsByClassName('error2c');

const prodlist3 = document.getElementById('productCapacity');
const dataList3 = document.getElementById('list3');
const error3 = document.getElementsByClassName('error3');

var checkboxes = document.getElementsByClassName("checkboxes");
const error4 = document.getElementById('error4');

const tradein = document.getElementById('tradein');
const amount = document.getElementById('amount');
const subjectToChange = document.getElementById('subjectToChange');

let opt = "";
var loss = 0;
var total = 0;

prodlist1.addEventListener('change', () => {
    specificMac.style.display = "none";
    prodlist2Mac.setCustomValidity("");
    specificiPhone.style.display = "none";
    prodlist2iPhone.setCustomValidity("");
    specificiPad.style.display = "none";
    prodlist2iPad.setCustomValidity("");
    prodlist3.value = "";
    prodlist3.setCustomValidity("");
    error4.style.display = 'none';
    
    clearCheckbox();
    var type = prodlist1.value.toLowerCase();
    
    if(type.includes('mac')) {
        specificMac.style.display = "block";
        prodlist1.setCustomValidity("");
    } else if(type.includes('iphone')) {
        specificiPhone.style.display = "block"; 
        prodlist1.setCustomValidity("");
    } else if(type.includes('ipad')) {
        specificiPad.style.display = "block";
        prodlist1.setCustomValidity("");
    } else {
        resetDropdown();
        prodlist1.setCustomValidity("Invalid field.");
        prodlist1.value = "";
        prodlist2Mac.value = "";
        prodlist2Mac.setCustomValidity("");
        prodlist2iPhone.value = "";
        prodlist2iPhone.setCustomValidity("");
        prodlist2iPad.value = "";
        prodlist2iPad.setCustomValidity("");
        prodlist3.value = "";
        clearCheckbox();
    }
});

prodlist2Mac.addEventListener('change', () => {
    var mac = prodlist2Mac.value;
    
    prodlist2iPhone.value = " ";
    prodlist2iPad.value = " ";
    prodlist3.value = "";
    clearCheckbox();
    prodlist2Mac.setCustomValidity("");
    
    if(mac == 'MacBook Air 13" 2017 - Core i5 - 5350U - 8GB' || mac == 'MacBook Air Retina 13" 2018 - Core i5 - 8210Y - 8GB' || mac == 'MacBook Air Retina 13" 2019 - Core i5 - 8210Y - 8GB' || mac == 'MacBook Pro 13" 2017 2 TBT3 - Core i5 - 7360U - 8GB'){ 
        resetDropdown();
        opt = document.getElementsByClassName("a");
        for (var i = 0; i < opt.length; i++){
            opt[i].disabled = false;
            opt[i].classList.add("active");
        }
    } else if(mac ==  'MacBook Pro 13" 2018 4 TBT3 - Core i5 - 8259U - 8GB' || mac == 'MacBook Pro M1 13"' || mac == 'MacBook Air M1 13"' || mac == 'Mac Mini M1 - 8 Core GPU' || mac == 'iMac 24" M1 - 8 Core'){
        resetDropdown();
        opt = document.getElementsByClassName("b");
        for (var i = 0; i < opt.length; i++){
            opt[i].disabled = false;
            opt[i].classList.add("active");
        }
              
    } else if(mac == 'MacBook Pro M1 Pro 14"' || mac == 'MacBook Pro M1 Pro 16"'){
        resetDropdown();
        opt = document.getElementsByClassName("c");
        for (var i = 0; i < opt.length; i++){
            opt[i].disabled = false;
            opt[i].classList.add("active");
        }
              
    } else if(mac == 'iMac 24" M1 - 7 Core' || mac == 'iMac 27" 3.1GHz - 6 Core i5'){
        resetDropdown();
        opt = document.getElementsByClassName("d");
        for (var i = 0; i < opt.length; i++){
            opt[i].disabled = false;
            opt[i].classList.add("active");
        }
              
    } else if(mac == 'MacBook Pro M1 Max 14"' || mac == 'MacBook Pro M1 Max 16"' || mac == 'Mac Studio M1 Ultra 20 Core CPU - 48 Core GPU'){
        resetDropdown();
        opt = document.getElementsByClassName("e");
        for (var i = 0; i < opt.length; i++){
            opt[i].disabled = false;
            opt[i].classList.add("active");
        }
              
    } else if(mac == 'Mac Studio M1 Max - 10 Core CPU - 24 Core GPU' || mac == 'iMac 27" 3.3GHz - 6 Core i5'){
        resetDropdown();
        opt = document.getElementsByClassName("f");
        for (var i = 0; i < opt.length; i++){
            opt[i].disabled = false;
            opt[i].classList.add("active");
        }
    } else {
        resetDropdown();
        resetActive();
        prodlist2Mac.setCustomValidity("Invalid field.");
        prodlist2Mac.value = "";
        prodlist3.value = "";
        clearCheckbox();
    }
});

prodlist2iPhone.addEventListener('change', () => {
    var iPhone = prodlist2iPhone.value;
       
    prodlist2Mac.value = " ";
    prodlist2iPad.value = " ";
    prodlist3.value = "";
    clearCheckbox();
    prodlist2iPhone.setCustomValidity("");
    
    if(iPhone == 'iPhone 13 mini' || iPhone == 'iPhone 13' || iPhone == 'iPhone 12 Pro' || iPhone == 'iPhone 12 Pro Max'){ 
        resetDropdown();
        opt = document.getElementsByClassName("g");
        for (var i = 0; i < opt.length; i++){
            opt[i].disabled = false;
            opt[i].classList.add("active");
        }
    } else if(iPhone == 'iPhone 13 Pro' || iPhone == 'iPhone 13 Pro Max'){
        resetDropdown();
        opt = document.getElementsByClassName("h");
        for (var i = 0; i < opt.length; i++){
            opt[i].disabled = false;
            opt[i].classList.add("active");
        }
              
    } else if(iPhone == 'iPhone 12 mini' || iPhone == 'iPhone 12' || iPhone == 'iPhone 11' || iPhone == 'iPhone SE 2022' || iPhone == 'iPhone 8' || iPhone == 'iPhone 8 Plus' || iPhone == 'iPhone XR'){
        resetDropdown();
        opt = document.getElementsByClassName("i");
        for (var i = 0; i < opt.length; i++){
            opt[i].disabled = false;
            opt[i].classList.add("active");
        }
              
    } else if(iPhone == 'iPhone 11 Pro' || iPhone == 'iPhone 11 Pro Max' || iPhone == 'iPhone Xs' || iPhone == 'iPhone Xs Plus'){
        resetDropdown();
        opt = document.getElementsByClassName("j");
        for (var i = 0; i < opt.length; i++){
            opt[i].disabled = false;
            opt[i].classList.add("active");
        }
              
    } else if(iPhone == 'iPhone 7' || iPhone == 'iPhone 7 Plus'){
        resetDropdown();
        opt = document.getElementsByClassName("l");
        for (var i = 0; i < opt.length; i++){
            opt[i].disabled = false;
            opt[i].classList.add("active");
        }
    } else if(iPhone == 'iPhone X'){
        resetDropdown();
        opt = document.getElementsByClassName("m");
        for (var i = 0; i < opt.length; i++){
            opt[i].disabled = false;
            opt[i].classList.add("active");
        }
    } else {
        resetDropdown();
        resetActive();
        prodlist2iPhone.setCustomValidity("Invalid field.");
        prodlist2iPhone.value = "";
        prodlist3.value = "";
        clearCheckbox();
    }
              
});

prodlist2iPad.addEventListener('change', () => {
    var iPad = prodlist2iPad.value;
    
    prodlist2Mac.value = " ";
    prodlist2iPhone.value = " ";
    prodlist3.value = "";
    clearCheckbox();
    prodlist2iPad.setCustomValidity("");
    
    if(iPad == 'iPad Pro 2017 10.5" WiFi + Cellular' || iPad == 'iPad Pro 2017 10.5" WiFi' || iPad == 'iPad Pro 2017 12.9" WiFi + Cellular' || iPad == 'iPad Pro 2017 12.9" WiFi' || iPad == 'iPad Pro 2018 11" WiFi + Cellular' || iPad == 'iPad Pro 2018 11" WiFi'){
        resetDropdown();
        opt = document.getElementsByClassName("j");
        for (var i = 0; i < opt.length; i++){
            opt[i].disabled = false;
            opt[i].classList.add("active");
        }
              
    } else if(iPad == 'iPad Pro 2016 9.7" WiFi + Cellular' || iPad == 'iPad Pro 2016 9.7" WiFi'){
        resetDropdown();
        opt = document.getElementsByClassName("l");
        for (var i = 0; i < opt.length; i++){
            opt[i].disabled = false;
            opt[i].classList.add("active");
        }
    } else if(iPad == 'iPad mini 6 WiFi + Cellular' || iPad == 'iPad mini 6 WiFi' || iPad == 'iPad 9th Gen WiFi + Cellular' || iPad == 'iPad 9th Gen WiFi' || iPad == 'iPad Air 5th Gen WiFi + Cellular' || iPad == 'iPad Air 5th Gen WiFi' || iPad == 'iPad Air 4th Gen WiFi + Cellular' || iPad == 'iPad Air 4th Gen WiFi'){
        resetDropdown();
        opt = document.getElementsByClassName("m");
        for (var i = 0; i < opt.length; i++){
            opt[i].disabled = false;
            opt[i].classList.add("active");
        }
    } else if(iPad == 'iPad 10.2" 2019 WiFi + Cellular' || iPad == 'iPad 10.2" 2019 WiFi' || iPad == 'iPad 9.7" 2017 WiFi + Cellular' || iPad == 'iPad 9.7" 2017 WiFi' || iPad == 'iPad 9.7" 2018 WiFi + Cellular' || iPad == 'iPad 9.7" 2018 WiFi') {
        resetDropdown();
        opt = document.getElementsByClassName("n");
        for (var i = 0; i < opt.length; i++){
            opt[i].disabled = false;
            opt[i].classList.add("active");
        }
    } else if(iPad == 'iPad Air WiFi + Cellular' || iPad == 'iPad Air WiFi' || iPad == 'iPad Air 2 WiFi + Cellular' || iPad == 'iPad Air 2 WiFi' || iPad == 'iPad mini 4 WiFi + Cellular') {
        resetDropdown();
        opt = document.getElementsByClassName("o");
        for (var i = 0; i < opt.length; i++){
            opt[i].disabled = false;
            opt[i].classList.add("active");
        }    
    } else if(iPad == 'iPad mini 4 WiFi') {
        resetDropdown();
        opt = document.getElementsByClassName("p");
        for (var i = 0; i < opt.length; i++){
            opt[i].disabled = false;
            opt[i].classList.add("active");
        }     
    } else if(iPad == 'iPad 8th Gen WiFi + Cellular' || iPad == 'iPad 8th Gen WiFi') {
        resetDropdown();
        opt = document.getElementsByClassName("q");
        
        for (var i = 0; i < opt.length; i++){
            opt[i].disabled = false;
            opt[i].classList.add("active");
        } 
    } else if(iPad == 'iPad Pro M1 11" WiFi + Cellular' || iPad == 'iPad Pro M1 11" WiFi' || iPad == 'iPad Pro M1 12.9" WiFi + Cellular' || iPad == 'iPad Pro M1 12.9" WiFi') {
        resetDropdown();
        opt = document.getElementsByClassName("r");
        for (var i = 0; i < opt.length; i++){
            opt[i].disabled = false;
            opt[i].classList.add("active");
        } 
    } else {
        resetDropdown();
        resetActive();
        prodlist2iPad.setCustomValidity("Invalid field.");
        prodlist2iPad.value = "";
        prodlist3.value = "";
        clearCheckbox();
    }


});

prodlist3.addEventListener('change', () => {    
    var active = document.getElementsByClassName('active');
    var input = prodlist3.value;
    var arr = Array.from(active);
    var arr1 = []
    for(var i = 0; i < arr.length; i++) {
        arr1.push(arr[i].value);
    }
    
    if(arr1.includes(input)){
        prodlist3.setCustomValidity("");
    } else {
        prodlist3.setCustomValidity("Invalid field.");
        prodlist3.value = "";
        clearCheckbox();
    }
});

form.addEventListener('submit', (event) => {
    const checkBoxes = document.querySelectorAll('.checkboxes:checked');
    
    if (prodlist1.value != '' && prodlist2Mac.value != '' && prodlist2iPhone.value != '' && prodlist2iPad.value != '' && prodlist3.value != '' && checkBoxes.length != 0){
        calculatePrice();
        amount.innerText = "";
        
        tradein.style.display = 'inline-block';
        subjectToChange.style.display = 'block';
        amount.style.display = 'inline-block';
        amount.innerText = "N$" + total;
        
        event.preventDefault();
        
        prodlist1.setCustomValidity("");
        prodlist2Mac.setCustomValidity("");
        prodlist2iPhone.setCustomValidity("");
        prodlist2iPad.setCustomValidity("");
        prodlist3.setCustomValidity("");
        error4.style.display = 'none';
    } else {
        event.preventDefault();
    }
    
    if(prodlist1.value == ''){
        prodlist1.setCustomValidity("Invalid field.");
        prodlist2Mac.setCustomValidity("");
        prodlist2iPhone.setCustomValidity("");
        prodlist2iPad.setCustomValidity("");
    } 
    
    if(prodlist2Mac.value == ''){
        prodlist2Mac.setCustomValidity("Invalid field.");
    } 
    
    if(prodlist2iPhone.value == ''){
        prodlist2iPhone.setCustomValidity("Invalid field.");
    } 
    
    if(prodlist2iPad.value == ''){
        prodlist2iPad.setCustomValidity("Invalid field.");
    }
    
    if(prodlist3.value == ''){
        prodlist3.setCustomValidity("Invalid field.");
    }
    
    if (checkBoxes.length == 0) {
        error4.style.display = "block";
    } 
});

function calculatePrice() {
    
    if(prodlist2Mac.value == 'MacBook Air 13" 2017 - Core i5 - 5350U - 8GB') {
        if(prodlist3.value == '128GB'){
            total = 8000;
        } else if(prodlist3.value == '256GB'){
            total = 8500;
        }
    } else if((prodlist2Mac.value == 'MacBook Air Retina 13" 2018 - Core i5 - 8210Y - 8GB') && (prodlist3.value == '128GB' || prodlist3.value == '256GB')) {
        total = 8500;
    } else if(prodlist2Mac.value == 'MacBook Air Retina 13" 2019 - Core i5 - 8210Y - 8GB' || prodlist2Mac.value == 'MacBook Pro 13" 2017 2 TBT3 - Core i5 - 7360U - 8GB') {
        if(prodlist3.value == '128GB'){
           total = 9000;
        } else if(prodlist3.value == '256GB') {
            total = 9500;
        }
    } else if(prodlist2Mac.value == 'MacBook Pro M1 13"' || prodlist2Mac.value == 'iMac 24" M1 - 8 Core') {
        if(prodlist3.value == '256GB'){
           total = 15000;
        } else if(prodlist3.value == '512GB') {
            total = 17000;
        }
    } else if(prodlist2Mac.value == 'MacBook Air M1 13"' || prodlist2Mac.value == 'MacBook Pro 13" 2018 4 TBT3 - Core i5 - 8259U - 8GB') {
        if(prodlist3.value == '256GB'){
           total = 12000;
        } else if(prodlist3.value == '512GB') {
            total = 13000;
        }
    } else if(prodlist2Mac.value == 'Mac Mini M1 - 8 Core GPU') {
        if(prodlist3.value == '256GB'){
           total = 5000;
        } else if(prodlist3.value == '512GB') {
            total = 7000;
        }
    } else if(prodlist2Mac.value == 'MacBook Pro M1 Pro 14"') {
        if(prodlist3.value == '512GB'){
           total = 15000;
        } else if(prodlist3.value == '1TB') {
            total = 17000;
        }
    } else if(prodlist2Mac.value == 'MacBook Pro M1 Pro 16"') {
        if(prodlist3.value == '512GB'){
           total = 17000;
        } else if(prodlist3.value == '1TB') {
            total = 18000;
        }
    } else if(prodlist2Mac.value == 'iMac 24" M1 - 7 Core' && prodlist3.value == '256GB') {
        total = 14000;
    } else if(prodlist2Mac.value == 'iMac 27" 3.1GHz - 6 Core i5' && prodlist3.value == '256GB') {
        total = 15000;
    } else if(prodlist2Mac.value == 'MacBook Pro M1 Max 14"' && prodlist3.value == '1TB') {
        total = 14000;
    } else if(prodlist2Mac.value == 'MacBook Pro M1 Max 16"' && prodlist3.value == '1TB') {
        total = 15000;
    } else if(prodlist2Mac.value == 'Mac Studio M1 Ultra 20 Core CPU - 48 Core GPU' && prodlist3.value == '1TB') {
        total = 40000;
    } else if(prodlist2Mac.value == 'Mac Studio M1 Max - 10 Core CPU - 24 Core GPU' && prodlist3.value == '512GB') {
        total = 20000;
    } else if(prodlist2Mac.value == 'iMac 27" 3.3GHz - 6 Core i5' && prodlist3.value == '512GB') {
        total = 18000;
    } 
    
    if(prodlist2iPhone.value == 'iPhone 13 mini') {
        if(prodlist3.value == '128GB'){
           total = 10000;
        } else if(prodlist3.value == '256GB') {
            total = 11000;
        }  else if(prodlist3.value == '512GB') {
            total = 13000;
        }
    } else if(prodlist2iPhone.value == 'iPhone 13') {
        if(prodlist3.value == '128GB'){
           total = 12000;
        } else if(prodlist3.value == '256GB') {
            total = 13000;
        }  else if(prodlist3.value == '512GB') {
            total = 15000;
        }
    } else if(prodlist2iPhone.value == 'iPhone 12 Pro') {
        if(prodlist3.value == '128GB'){
           total = 12000;
        } else if(prodlist3.value == '256GB') {
            total = 13000;
        }  else if(prodlist3.value == '512GB') {
            total = 14000;
        }
    } else if(prodlist2iPhone.value == 'iPhone 12 Pro Max') {
        if(prodlist3.value == '128GB'){
           total = 14000;
        } else if(prodlist3.value == '256GB') {
            total = 15000;
        }  else if(prodlist3.value == '512GB') {
            total = 16000;
        }
    } else if(prodlist2iPhone.value == 'iPhone 13 Pro') {
        if(prodlist3.value == '128GB'){
           total = 15000;
        } else if(prodlist3.value == '256GB') {
            total = 16000;
        }  else if(prodlist3.value == '512GB') {
            total = 17000;
        } else if(prodlist3.value == '1TB'){
            total = 18000;      
        }
    } else if(prodlist2iPhone.value == 'iPhone 13 Pro Max') {
        if(prodlist3.value == '128GB'){
           total = 16000;
        } else if(prodlist3.value == '256GB') {
            total = 17000;
        }  else if(prodlist3.value == '512GB') {
            total = 19000;
        } else if(prodlist3.value == '1TB'){
            total = 21000;
        }
    } else if(prodlist2iPhone.value == 'iPhone 12 mini' || prodlist2iPhone.value == 'iPhone 11' || prodlist2iPhone.value == 'iPhone SE 2022') {
        if(prodlist3.value == '64GB'){
           total = 8000;
        } else if(prodlist3.value == '128GB') {
            total = 9000;
        }  else if(prodlist3.value == '256GB') {
            total = 10000;
        }
    } else if(prodlist2iPhone.value == 'iPhone 12') {
        if(prodlist3.value == '64GB'){
           total = 10000;
        } else if(prodlist3.value == '128GB') {
            total = 11000;
        }  else if(prodlist3.value == '256GB') {
            total = 12000;
        }
    } else if(prodlist2iPhone.value == 'iPhone 8') {
        if(prodlist3.value == '64GB'){
           total = 4000;
        } else if(prodlist3.value == '128GB') {
            total = 4500;
        }  else if(prodlist3.value == '256GB') {
            total = 5000;
        }
    } else if(prodlist2iPhone.value == 'iPhone 8 Plus') {
        if(prodlist3.value == '64GB'){
           total = 4500;
        } else if(prodlist3.value == '128GB') {
            total = 5000;
        }  else if(prodlist3.value == '256GB') {
            total = 5500;
        }
    } else if(prodlist2iPhone.value == 'iPhone XR') {
        if(prodlist3.value == '64GB'){
           total = 6000;
        } else if(prodlist3.value == '128GB') {
            total = 6500;
        }  else if(prodlist3.value == '256GB') {
            total = 7000;
        }
    } else if(prodlist2iPhone.value == 'iPhone 11 Pro') {
        if(prodlist3.value == '64GB'){
           total = 11000;
        } else if(prodlist3.value == '256GB') {
            total = 12000;
        }  else if(prodlist3.value == '512GB') {
            total = 13000;
        }
    } else if(prodlist2iPhone.value == 'iPhone 11 Pro Max') {
        if(prodlist3.value == '64GB'){
           total = 12000;
        } else if(prodlist3.value == '256GB') {
            total = 13000;
        }  else if(prodlist3.value == '512GB') {
            total = 14000;
        }
    } else if(prodlist2iPhone.value == 'iPhone Xs') {
        if(prodlist3.value == '64GB'){
           total = 6000;
        } else if(prodlist3.value == '256GB') {
            total = 6500;
        }  else if(prodlist3.value == '512GB') {
            total = 7000;
        }
    } else if(prodlist2iPhone.value == 'iPhone Xs Plus') {
        if(prodlist3.value == '64GB'){
           total = 7000;
        } else if(prodlist3.value == '256GB') {
            total = 7500;
        }  else if(prodlist3.value == '512GB') {
            total = 8000;
        }
    } else if(prodlist2iPhone.value == 'iPhone 7') {
        if(prodlist3.value == '32GB'){
           total = 2000;
        } else if(prodlist3.value == '128GB') {
            total = 2500;
        }  else if(prodlist3.value == '256GB') {
            total = 3000;
        }
    } else if(prodlist2iPhone.value == 'iPhone 7 Plus') {
        if(prodlist3.value == '32GB'){
           total = 3000;
        } else if(prodlist3.value == '128GB') {
            total = 3500;
        }  else if(prodlist3.value == '256GB') {
            total = 4000;
        }
    } else if(prodlist2iPhone.value == 'iPhone X') {
        if(prodlist3.value == '64GB'){
           total = 6000;
        } else if(prodlist3.value == '256GB') {
            total = 6500;
        }
    } else if(prodlist2iPad.value == 'iPad Pro 2017 10.5" WiFi + Cellular' || prodlist2iPad.value == 'iPad Pro 2017 10.5" WiFi') {
        if(prodlist3.value == '64GB'){
           total = 4000;
        } else if(prodlist3.value == '256GB') {
            total = 4500;
        } else if(prodlist3.value == '512GB') {
            total = 5000;
        }
    } else if(prodlist2iPad.value == 'iPad Pro 2017 12.9" WiFi + Cellular' || prodlist2iPad.value == 'iPad Pro 2017 12.9" WiFi') {
        if(prodlist3.value == '64GB'){
           total = 4500;
        } else if(prodlist3.value == '256GB') {
            total = 5000;
        } else if(prodlist3.value == '512GB') {
            total = 5500;
        }
    }  else if(prodlist2iPad.value == 'iPad Pro 2018 11" WiFi + Cellular' || prodlist2iPad.value == 'iPad Pro 2018 11" WiFi') {
        if(prodlist3.value == '64GB'){
           total = 7000;
        } else if(prodlist3.value == '256GB') {
            total = 8000;
        } else if(prodlist3.value == '512GB') {
            total = 9000;
        }
    } else if(prodlist2iPad.value == 'iPad Pro 2016 9.7" WiFi + Cellular' || prodlist2iPad.value == 'iPad Pro 2016 9.7" WiFi') {
        if(prodlist3.value == '32GB'){
           total = 2500;
        } else if(prodlist3.value == '128GB') {
            total = 3000;
        } else if(prodlist3.value == '256GB') {
            total = 3500;
        }
    } else if(prodlist2iPad.value == 'iPad mini 6 WiFi + Cellular') {
        if(prodlist3.value == '64GB'){
           total = 6000;
        } else if(prodlist3.value == '256GB') {
            total = 8000;
        }
    } else if(prodlist2iPad.value == 'iPad mini 6 WiFi') {
        if(prodlist3.value == '64GB'){
           total = 4500;
        } else if(prodlist3.value == '256GB') {
            total = 6000;
        }
    } else if(prodlist2iPad.value == 'iPad 9th Gen WiFi + Cellular' || prodlist2iPad.value == 'iPad 9th Gen WiFi') {
        if(prodlist3.value == '64GB'){
           total = 3000;
        } else if(prodlist3.value == '256GB') {
            total = 4000;
        }
    } else if(prodlist2iPad.value == 'iPad Air 5th Gen WiFi + Cellular') {
        if(prodlist3.value == '64GB'){
           total = 8000;
        } else if(prodlist3.value == '256GB') {
            total = 10000;
        }
    } else if(prodlist2iPad.value == 'iPad Air 5th Gen WiFi') {
        if(prodlist3.value == '64GB'){
           total = 6500;
        } else if(prodlist3.value == '256GB') {
            total = 8500;
        }
    } else if(prodlist2iPad.value == 'iPad Air 4th Gen WiFi + Cellular') {
        if(prodlist3.value == '64GB'){
           total = 7000;
        } else if(prodlist3.value == '256GB') {
            total = 9000;
        }
    } else if(prodlist2iPad.value == 'iPad Air 4th Gen WiFi') {
        if(prodlist3.value == '64GB'){
           total = 5500;
        } else if(prodlist3.value == '256GB') {
            total = 7500;
        }
    } else if(prodlist2iPad.value == 'iPad 10.2" 2019 WiFi + Cellular' || prodlist2iPad.value == 'iPad 10.2" 2019 WiFi') {
        if(prodlist3.value == '32GB'){
           total = 4000;
        } else if(prodlist3.value == '128GB') {
            total = 4500;
        }
    } else if(prodlist2iPad.value == 'iPad 9.7" 2017 WiFi + Cellular' || prodlist2iPad.value == 'iPad 9.7" 2017 WiFi') {
        if(prodlist3.value == '32GB'){
           total = 2500;
        } else if(prodlist3.value == '128GB') {
            total = 3000;
        }
    } else if(prodlist2iPad.value == 'iPad 9.7" 2018 WiFi + Cellular' || prodlist2iPad.value == 'iPad 9.7" 2018 WiFi') {
        if(prodlist3.value == '32GB'){
           total = 3000;
        } else if(prodlist3.value == '128GB') {
            total = 4000;
        }
    } else if(prodlist2iPad.value == 'iPad Air WiFi + Cellular' || prodlist2iPad.value == 'iPad Air WiFi') {
        if(prodlist3.value == '32GB'){
           total = 1500;
        } else if(prodlist3.value == '64GB') {
            total = 2000;
        } else if(prodlist3.value == '128GB') {
            total = 2500;
        }
    } else if(prodlist2iPad.value == 'iPad Air 2 WiFi + Cellular' || prodlist2iPad.value == 'iPad Air 2 WiFi' || prodlist2iPad.value == 'iPad mini 4 WiFi + Cellular') {
        if(prodlist3.value == '32GB'){
           total = 2000;
        } else if(prodlist3.value == '64GB') {
            total = 2500;
        } else if(prodlist3.value == '128GB') {
            total = 3000;
        }
    } else if(prodlist2iPad.value == 'iPad mini 4 WiFi') {
        if(prodlist3.value == '64GB') {
            total = 2000;
        } else if(prodlist3.value == '128GB') {
            total = 2500;
        }
    } else if(prodlist2iPad.value == 'iPad 8th Gen WiFi + Cellular' || prodlist2iPad.value == 'iPad 8th Gen WiFi') {
        if(prodlist3.value == '32GB') {
            total = 3500;
        }
    } else if(prodlist2iPad.value == 'iPad Pro M1 11" WiFi + Cellular') {
        if(prodlist3.value == '128GB') {
            total = 11500;
        } else if(prodlist3.value == '256GB') {
            total = 12000;
        } else if(prodlist3.value == '512GB') {
            total = 15000;
        } else if(prodlist3.value == '1TB') {
            total = 16000;
        } else if(prodlist3.value == '2TB') {
            total = 18000;
        }
    } else if(prodlist2iPad.value == 'iPad Pro M1 11" WiFi') {
        if(prodlist3.value == '128GB') {
            total = 9000;
        } else if(prodlist3.value == '256GB') {
            total = 10000;
        } else if(prodlist3.value == '512GB') {
            total = 13000;
        } else if(prodlist3.value == '1TB') {
            total = 14000;
        } else if(prodlist3.value == '2TB') {
            total = 15000;
        }
    } else if(prodlist2iPad.value == 'iPad Pro M1 12.9" WiFi + Cellular') {
        if(prodlist3.value == '128GB') {
            total = 15000;
        } else if(prodlist3.value == '256GB') {
            total = 16000;
        } else if(prodlist3.value == '512GB') {
            total = 17000;
        } else if(prodlist3.value == '1TB') {
            total = 19000;
        } else if(prodlist3.value == '2TB') {
            total = 21000;
        }
    } else if(prodlist2iPad.value == 'iPad Pro M1 12.9" WiFi') {
        if(prodlist3.value == '128GB') {
            total = 13000;
        } else if(prodlist3.value == '256GB') {
            total = 14000;
        } else if(prodlist3.value == '512GB') {
            total = 15000;
        } else if(prodlist3.value == '1TB') {
            total = 17000;
        } else if(prodlist3.value == '2TB') {
            total = 20000;
        }
    }
    
    if(checkboxes[0].checked == true){
        return total;
    } else if(checkboxes[1].checked == true){
        loss = total * 0.10
        total = total - loss;
        return total;
    } else if(checkboxes[2].checked == true){
        loss = total * 0.25
        total = total - loss;
        return total;
    }  
}

function resetDropdown() {
    opt = document.getElementsByClassName('capacity');
    for(var i = 0; i < opt.length; i++){
        opt[i].disabled = true;
    }
}

function resetActive() {
    opt = document.getElementsByClassName('active');
    for(var i = 0; i < opt.length; i++) {
        opt[i].classList.remove('active');
    }
}

function RotateCheckbox(obj) {
    var checked = (obj.checked);
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }
    if(checked)obj.checked = true;
    
    error4.style.display = "none";
}

function clearCheckbox() {
    for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }
}

