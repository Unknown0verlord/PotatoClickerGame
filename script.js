let potatoes = 0;
let potatoUp = 1;
let PpS = 0;

let spudSpitter = 0;
let spudSpitterCost = 10;

let farmer = 0;
let farmerCost = 50;

let farm = 0;
let farmCost = 300;

// "Make a Potato!" button  calls this
function clickFirstButton() {
    increasePotatoes();
    document.getElementById("varCount").innerHTML = "Potatoes: " + potatoes;
}

function progressBar() {
    var elem = document.getElementById("progressBar");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
}

// PpS implementation
setInterval(() => {activatePpS();}, 1000);
setInterval(() => {checkUpgrades();}, 500);

// Most Important Functions
// checkUpgrades() updates button color when player has enough potatoes, checking every half second
// upgrades() takes number input from button press and directs to correct function
/////////////////////////////////////////////////////////////////////////////////

function checkUpgrades() {
    if (potatoes >= spudSpitterCost) {
        document.getElementById("spudSpitter").style.backgroundColor = '#33cc33';
    } else {
        document.getElementById("spudSpitter").style.backgroundColor = '#006600';
    }

    if (potatoes >= farmerCost) {
        document.getElementById("potatoFarmer").style.backgroundColor = '#33cc33';
    } else {
        document.getElementById("potatoFarmer").style.backgroundColor = '#006600';
    }

    if (potatoes >= farmCost) {
        document.getElementById("potatoFarm").style.backgroundColor = '#33cc33';
    } else {
        document.getElementById("potatoFarm").style.backgroundColor = '#006600';
    }
}

function upgrades(number) {
    if (number == 1) {
        if (potatoes >= spudSpitterCost) {
            increaseSpudCount();
        }
    } else if (number == 2) {
        if (potatoes >= farmerCost) {
            increaseFarmerCount();
        }
    } else if (number == 3) {
        if (potatoes >= farmCost && number == 3) {
            increaseFarmCount();
        }
    }
}


//////////////////////////////////////////////////////////////////////////////////

function increaseSpudCount() {
    spudSpitter += 1;
    potatoes -= spudSpitterCost;
    spudSpitterCost = Math.floor(10 * (1.25 ** spudSpitter));
    potatoUp += 1;

    if (potatoes < spudSpitterCost) {
        document.getElementById("spudSpitter").style.backgroundColor = '#006600';
    }

    document.getElementById("varCount").innerHTML = "Potatoes: " + potatoes;
    document.getElementById("spudCount").innerHTML = "Spud Spitter: " + spudSpitter;
    document.getElementById("spudText").innerHTML = "Spud Spitter &nbsp;&nbsp; || &nbsp;&nbsp;  Cost: " + spudSpitterCost;
    console.log(spudSpitter);
}

function increaseFarmerCount() {
    farmer += 1;
    potatoes -= farmerCost;
    farmerCost = Math.floor(50 * (1.15 ** farmer));
    PpS += 1;

    if (potatoes < farmerCost) {
        document.getElementById("potatoFarmer").style.backgroundColor = '#006600';
    }

    document.getElementById("varCount").innerHTML = "Potatoes: " + potatoes;
    document.getElementById("PpSCount").innerHTML = "PpS: " + PpS;
    document.getElementById("farmerCount").innerHTML = "Potato Farmer: " + farmer;
    document.getElementById("farmerText").innerHTML = "Potato Farmer &nbsp;&nbsp; || &nbsp;&nbsp;  Cost: " + farmerCost;
    console.log(farmer);
}

function increaseFarmCount() {
    farm += 1;
    potatoes -= farmCost;
    farmCost = Math.floor(300 * (1.15 ** farm));
    PpS += 5;

    if (potatoes < farmCost) {
        document.getElementById("potatoFarm").style.backgroundColor = '#006600';
    }

    document.getElementById("varCount").innerHTML = "Potatoes: " + potatoes;
    document.getElementById("PpSCount").innerHTML = "PpS: " + PpS;
    document.getElementById("farmCount").innerHTML = "Potato Farm: " + farm;
    document.getElementById("farmText").innerHTML = "Potato Farm &nbsp;&nbsp; || &nbsp;&nbsp;  Cost: " + farmCost;
    console.log(farm);
}

// Core Functions
//////////////////////////////////////////////

function increasePotatoes() {
    potatoes += potatoUp
}

function activatePpS() {
    potatoes += PpS;
    document.getElementById("varCount").innerHTML = "Potatoes: " + potatoes;
    progressBar();
}