//Grab the income section
var monthlyPay = document.getElementById('monthly_pay');
var monthlyOther = document.getElementById('monthly_other');
var annualTax = document.getElementById('annual_tax');

//Grab the monthly expenses section
var monthlyFood = document.getElementById('monthly_food');
var monthlyClothes = document.getElementById('monthly_clothes');
var monthlyRent = document.getElementById('monthly_rent');
var monthlyUtilities = document.getElementById('monthly_utilities');
var monthlyTransport = document.getElementById('monthly_transportation');
var monthlyHealth = document.getElementById('monthly_health');
var monthlyPersonal = document.getElementById('monthly_personal');
var monthlyMisc = document.getElementById('monthly_miscellaneous');

//Grab the annual expenses section
var annualTuition = document.getElementById('annual_tuition');
var annualCar = document.getElementById('annual_car');
var annualVacation = document.getElementById('annual_vacation');
var annualOther = document.getElementById('annual_other');

//Grab the monthly savings section
var savingEmergency = document.getElementById('saving_emergency');
var savingInvestments = document.getElementById('saving_investments');
var savingRRSP = document.getElementById('saving_rrsp');


// results section
var evaluate2 = document.getElementById('evaluate2');
var results = document.getElementById('results');


var money;

//Grab the error message
var error = document.getElementById('error');

//get output
var showIncome = document.getElementById('show_income');
var showMonthly = document.getElementById('show_Mexpenses');
var showAnnual = document.getElementById('show_Aexpenses');
var showSavings = document.getElementById('show_savings');
var showBudget = document.getElementById('show_budget');


// get loader gif fcile
var loader = document.getElementById('loader');

//get reset section
var resetButton = document.getElementById('reset_button');



//*Events*
//Create an event that the input entered will be sent to the function showManageMoney when the user releases a key

//Income Section
monthlyPay.addEventListener('keyup', showManageMoney); //sent to an element when the user releases a key on the keyboard
monthlyOther.addEventListener('keyup', showManageMoney);
annualTax.addEventListener('keyup', showManageMoney);

//Monthly Expenses section
monthlyFood.addEventListener('keyup', showManageMoney);
monthlyClothes.addEventListener('keyup', showManageMoney);
monthlyRent.addEventListener('keyup', showManageMoney);
monthlyUtilities.addEventListener('keyup', showManageMoney);
monthlyTransport.addEventListener('keyup', showManageMoney);
monthlyHealth.addEventListener('keyup', showManageMoney);
monthlyPersonal.addEventListener('keyup', showManageMoney);
monthlyMisc.addEventListener('keyup', showManageMoney);

//Annual Expenses section
annualTuition.addEventListener('keyup', showManageMoney);
annualCar.addEventListener('keyup', showManageMoney);
annualVacation.addEventListener('keyup', showManageMoney);
annualOther.addEventListener('keyup', showManageMoney);

//Monthly Savings section
savingEmergency.addEventListener('keyup', showManageMoney);
savingInvestments.addEventListener('keyup', showManageMoney);
savingRRSP.addEventListener('keyup', showManageMoney);


evaluate2.addEventListener('click', showloader2); //sent to the function validate when the button is clicked

resetButton.addEventListener('click', reload);

//function to show gif loader image
function showloader2(){
    loader.classList.remove("hidden");
    setTimeout(yourBudgetReview, 1000);
}

function yourBudgetReview(){
    //hides the loading button
    loader.classList.add("hidden");

    results.classList.remove('hidden');

    //income
    var income1 = parseInt(monthlyPay.value);
    var income2 = parseInt(monthlyOther.value);
    var income3 = parseInt(annualTax.value);

    //monthly expenses
    var monthly1 = parseInt(monthlyFood.value);
    var monthly2 = parseInt(monthlyClothes.value);
    var monthly3 = parseInt(monthlyRent.value);
    var monthly4 = parseInt(monthlyUtilities.value);
    var monthly5 = parseInt(monthlyTransport.value);
    var monthly6 = parseInt(monthlyHealth.value);
    var monthly7 = parseInt(monthlyPersonal.value);
    var monthly8 = parseInt(monthlyMisc.value);

    //annual expenses
    var annual1 = parseInt(annualTuition.value);
    var annual2 = parseInt(annualCar.value);
    var annual3 = parseInt(annualVacation.value);
    var annual4 = parseInt(annualOther.value);

    //monthly savings
    var save1 = parseInt(savingEmergency.value);
    var save2 = parseInt(savingInvestments.value);
    var save3 = parseInt(savingRRSP.value);

    //totalling the results
    totalIncome = income1 + income2 + (income3 / 12);
    totalMonthly = monthly1 + monthly2 + monthly3 + monthly4 + monthly5 + monthly6 + monthly7 + monthly8;
    totalAnnual = (annual1 + annual2 + annual3 + annual4) / 12;
    totalSavings = save1 + save2 + save3;

    //calculating total budget
    totalBudget = totalIncome - totalMonthly - totalAnnual - totalSavings;

    //showing the results
    showIncome.innerHTML = "$" + totalIncome.toFixed(2);
    showMonthly.innerHTML = "$" + totalMonthly.toFixed(2);
    showAnnual.innerHTML = "$" + totalAnnual.toFixed(2);
    showSavings.innerHTML = "$" + totalSavings.toFixed(2);
    showBudget.innerHTML = "$" + totalBudget.toFixed(2);

}


function showManageMoney(e)
{
    //Check whether the key enetered is ENTER key or not
    if(e.keyCode==13){
        money = e.target.value; //Once enter key is hit, money will be whatever the value is inside the input.

        //if it's not a number it will show as error
        if(isNaN(money)){
            //display error message
            error.classList.remove('hidden');
            evaluate2.classList.add('hidden');
            results.classList.add('hidden');
        }
        else{

            evaluate2.classList.remove('hidden');
            error.classList.add('hidden'); //make sure the error message is still hidden

        }

    }

}

//reload the page
function reload(){
    location.reload();
}