let potatoes = 0;
let potatoUp = 1;
let PpS = 10;

let spudSpitter = 0;
let spudSpitterCost = 10;

let farmer = 0;
let farmerCost = 50;

function clickFirstButton() {
    increasePotatoes();
    document.getElementById("varCount").innerHTML = "Potatoes: " + potatoes;
    checkUpgrades();
}

setInterval(() => {activatePpS();}, 1000);


function checkUpgrades(number) {
    if (potatoes >= spudSpitterCost && number == 1) {
        increaseSpudCount();
    } else if (potatoes >= spudSpitterCost) {
        document.getElementById("spudSpitter").style.backgroundColor = '#33cc33';
    }

    if (potatoes >= spudSpitterCost && number == 2) {
        increaseFarmerCount();
    } else if (potatoes >= farmerCost) {
        document.getElementById("potatoFarmer").style.backgroundColor = '#33cc33';
    }
}


function increaseSpudCount() {
    spudSpitter += 1;
    potatoes -= spudSpitterCost;
    spudSpitterCost = Math.floor(spudSpitterCost ** 1.08);
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
    farmerCost = Math.floor(farmerCost ** 1.04);
    PpS += 1;

    if (potatoes < farmerCost) {
        document.getElementById("potatoFarmer").style.backgroundColor = '#006600';
    }

    document.getElementById("varCount").innerHTML = "Potatoes: " + potatoes;
    document.getElementById("farmerCount").innerHTML = "Potato Farmer: " + farmer;
    document.getElementById("farmerText").innerHTML = "Potato Farmer &nbsp;&nbsp; || &nbsp;&nbsp;  Cost: " + farmerCost;
    console.log(farmer);
}


//////////////////////////////////////////////

function increasePotatoes() {
    potatoes += potatoUp
}

function activatePpS() {
    potatoes += PpS;
    document.getElementById("varCount").innerHTML = "Potatoes: " + potatoes;
    checkUpgrades();
}