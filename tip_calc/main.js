window.addEventListener("load", function(){
    let bill = document.getElementById("bill");
    let people = document.getElementById("people");
    const customTip = document.querySelector('#custom');
    let tip = 0;
    let percentage = 0;
    let num_people= 0;
    let tip_person = 0;
    let bill_person = 0;
    
    const compute = function(){
        if(percentage!=0 && tip!=0 && num_people!=0){
            tip_person = (percentage*(tip/100))/num_people;
            bill_person = (tip + percentage)/num_people;
            document.querySelector("#tip-person").innerHTML = "$" + Math.round(tip_person);
            document.querySelector("#bill-person").innerHTML = "$" + Math.round(bill_person);
        }
    }

    bill.addEventListener('keyup', function(){
        percentage = parseInt(bill.value); 
        compute();       
    })

    document.querySelectorAll(".percent").forEach(function(b){
        b.onclick = function(){
            var num_tip = b.dataset.tip;
            tip = parseInt(num_tip);
            compute();
        }
    })
    customTip.addEventListener('keyup', function(){
        tip = parseInt(customTip.value);
        // console.log(2,tip);
        compute();
    })

    people.addEventListener('keyup', function(){
        num_people = parseInt(people.value);
        compute();
    })
    document.querySelector('#reset').onclick = function(){
        location.reload();
    }
    
    
    
});