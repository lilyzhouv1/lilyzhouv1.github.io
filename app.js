var enterMoney = document.getElementById('enter_money')

var money;

//Grab the error message
var error = document.getElementById('error');
var errorManage = document.getElementById('error_manage');

//get all manage inputs like (roomrent, accessories, emergency, and saving)
var roomrent = document.getElementById('RoomRent');
var accessories = document.getElementById('Accessories');
var emergency = document.getElementById('Emergency');
var saving = document.getElementById('Saving');

//get all output element
var showRoom = document.getElementById('show_room');
var showAccessories = document.getElementById('show_access');
var showEmergency = document.getElementById('show_emergency');
var showSaving = document.getElementById('show_save');

// get loader gif fcile
var loader = document.getElementById('loader');

//Grab the manage division section
var manageDiv = document.getElementById('manage_div');

//get the evaluate button
var evaluate = document.getElementById('evaluate');

//get reset section
var resetButton = document.getElementById('reset_button');

//get result section
var resultSection = document.getElementById('result_section');


//*Events*
//Create an event that the input entered will be sent to the function showManageMoney when the user releases a key
enterMoney.addEventListener('keyup', showManageMoney); //sent to an element when the user releases a key on the keyboard
evaluate.addEventListener('click', showloader); //sent to the function validate when the button is clicked
resetButton.addEventListener('click', reload);

//function to show gif loader image
function showloader(){
    loader.classList.remove("hidden");
    setTimeout(validateManage, 1000);
}

//function to validate input amount and show the manage section

function showManageMoney(e)
{
    //Check whether the key enetered is ENTER key or not
    if(e.keyCode==13){
        money = e.target.value; //Once enter key is hit, money will be whatever the value is inside the input.

        //validate the input value
        if(isNaN(money) || money==0){
            //display error message
            error.classList.remove('hidden');
        }
        else{
            //since money is not 0 or invalid, then show the manage section div
            manageDiv.classList.remove('hidden');
            error.classList.add('hidden'); //make sure the error message is still hidden

        }

    }

}

// function to validate
function validateManage(){
    //hide loader image
    loader.classList.add("hidden");

    //vaidate input fields
    if(roomrent.value =="" || accessories.value=="" || emergency.value=="" || saving.value==""){
        errorManage.innerHTML="Value for input fields is not given. Please provide the value for all inputs"
    }
    else{
        errorManage.innerHTML="";
        //parse the value to integer
        var room_per= parseInt(roomrent.value);
        var access_per=parseInt(accessories.value);
        var emer_per=parseInt(emergency.value);
        var save_per=parseInt(saving.value);

        var total = room_per + access_per + emer_per + save_per;

        //Display erorr message if the total is greater than 100%
        if(total > 100 || total < 0){
            errorManage.innerHTML="The total percentage is exceeding 100%. Please make sure that it doesn't exceed 100%"
        }
        else{
            //validation is complete now calculate the percentage using the function below
            calculate(room_per, access_per, emer_per, save_per);
        }
    }
}

//calculate the percentage
function calculate(roomrent, accessories, emergency, saving){
    var roomrentMoney = ( roomrent/100) * money;
    var accessoriesMoney = ( accessories/100) * money;
    var emergencyMoney = ( emergency/100) * money;
    var savingMoney = ( saving/100) * money;

    showRoom.innerHTML="$"+ roomrentMoney;
    showAccessories.innerHTML = "$"+ accessoriesMoney;
    showEmergency.innerHTML = "$" + emergencyMoney;
    showSaving.innerHTML = "$" + savingMoney;

    resultSection.classList.remove("hidden");
}

//reload the page
function reload(){
    location.reload();
}