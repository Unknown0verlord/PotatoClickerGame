let potatoes = 0;
let potatoUp = 1;
let PpS = 0;

let spudSpitter = 0;
let spudSpitterCost = 10;

let farmer = 0;
let farmerCost = 50;
let farmerPpSadd = 1;

let farm = 0;
let farmCost = 300;
let farmPpSadd = 5;

let factory = 0;
let factoryCost = 1000;
let factoryPpSadd = 20;

let biggerYields = false;
let moreFields = false;

// const variables = {
//     "potatoes": potatoes,
//     "potatoUp": potatoUp,
//     "PpS": PpS,
//     "spudSpitter": spudSpitter,
//     "spudSpitterCost": spudSpitterCost,
//     "farmer": farmer,
//     "farmerCost": farmerCost,
//     "farm": farm,
//     "farmCost": farmCost,
//     "factory": factory,
//     "factoryCost": factoryCost
// }



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

// Check afforability, every 1/4 second
setInterval(() => {checkUpgrades();}, 250);

// Autosave
setInterval(() => {
    setSessionVariables();
    document.getElementById("saveText").innerHTML = "Game Saved";

    setTimeout(() => {
        document.getElementById("saveText").innerHTML = "";
    }, 3000);
}, 60000)

// Most Important Functions
// checkUpgrades() updates button color when player has enough potatoes, checking every half second
// upgrades() takes number input from button press and directs to correct function
/////////////////////////////////////////////////////////////////////////////////

function checkUpgrades() {
    document.getElementById("farmerDesc").innerHTML = "This Honest Man gives you his potatoes (" + farmerPpSadd + " PpS)";
    document.getElementById("farmDesc").innerHTML = "A whole farm dedicated to your potatoes. (" + farmPpSadd +" PpS)";
    document.getElementById("PpSCount").innerHTML = "PpS: " + PpS;

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

    if (potatoes >= factoryCost) {
        document.getElementById("potatoFactory").style.backgroundColor = '#33cc33';
    } else {
        document.getElementById("potatoFactory").style.backgroundColor = '#006600';
    }


    if (biggerYields == false) {
        if (potatoes >= 200) {
            document.getElementById("firstUpgrade").style.backgroundColor = '#33cc33';
        } else {
            document.getElementById("firstUpgrade").style.backgroundColor = '#006600';
        }
    } else {
        document.getElementById("firstUpgrade").style.backgroundColor = 'grey';
    }

    if (moreFields == false) {
        if (potatoes >= 1000) {
            document.getElementById("secondUpgrade").style.backgroundColor = '#33cc33';
        } else {
            document.getElementById("secondUpgrade").style.backgroundColor = '#006600';
        }
    } else {
        document.getElementById("secondUpgrade").style.backgroundColor = 'grey';
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
        if (potatoes >= farmCost) {
            increaseFarmCount();
        }
    } else if (number == 4) {
        if (potatoes >= factoryCost) {
            increaseFactoryCount();
        }
    }
}

// Tower buying functions
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
    PpS += farmerPpSadd;

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
    PpS += farmPpSadd;

    if (potatoes < farmCost) {
        document.getElementById("potatoFarm").style.backgroundColor = '#006600';
    }

    document.getElementById("varCount").innerHTML = "Potatoes: " + potatoes;
    document.getElementById("PpSCount").innerHTML = "PpS: " + PpS;
    document.getElementById("farmCount").innerHTML = "Potato Farm: " + farm;
    document.getElementById("farmText").innerHTML = "Potato Farm &nbsp;&nbsp; || &nbsp;&nbsp;  Cost: " + farmCost;
    console.log(farm);
}

function increaseFactoryCount() {
    factory += 1;
    potatoes -= factoryCost;
    factoryCost = Math.floor(1000 * (1.15 ** factory));
    PpS += factoryPpSadd;

    if (potatoes < factoryCost) {
        document.getElementById("potatoFactory").style.backgroundColor = '#006600';
    }

    document.getElementById("varCount").innerHTML = "Potatoes: " + potatoes;
    document.getElementById("PpSCount").innerHTML = "PpS: " + PpS;
    document.getElementById("factoryCount").innerHTML = "Potato Factory: " + factory;
    document.getElementById("factoryText").innerHTML = "Potato Factory &nbsp;&nbsp; || &nbsp;&nbsp;  Cost: " + factoryCost;
    console.log(factory);
}

// Upgrade Functions
//////////////////////////////////////////////

function buyBiggerYields() {
    if (potatoes >= 200) {
        PpS -= farmerPpSadd*farmer
        PpS += (2*farmerPpSadd)*farmer
        farmerPpSadd *= 2;
        biggerYields = true;
    }
}

function buyMoreFields() {
    if (potatoes >= 1000) {
        PpS -= farmPpSadd*farm
        PpS += (2*farmPpSadd)*farm
        farmPpSadd *= 2;
        moreFields = true;
    }
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

// Data Functions
//////////////////////////////////////////////

function setSessionVariables(number) {
    // for (i=0;i<variables.length;i++) {
    //     sessionStorage.setItem(Object.keys(variables)[i], Object.values(variables)[i]);
    // }
    localStorage.setItem("potatoes", potatoes);
    localStorage.setItem("potatoUp", potatoUp);
    localStorage.setItem("PpS", PpS);
    localStorage.setItem("spudSpitter", spudSpitter);
    localStorage.setItem("spudSpitterCost", spudSpitterCost);
    localStorage.setItem("farmer", farmer);
    localStorage.setItem("farmerCost", farmerCost);
    localStorage.setItem("farm", farm);
    localStorage.setItem("farmCost", farmCost);
    localStorage.setItem("factory", factory);
    localStorage.setItem("factoryCost", factoryCost);
    
    // Only activates when Save button is pressed
    if (number == 1) {
        document.getElementById("saveText").innerHTML = "Game Saved";

        setTimeout(() => {
            document.getElementById("saveText").innerHTML = "";
        }, 3000);
    }
    
}

function retrieveSessionVariables() {
    // for (i=0;i<variables.length;i++) {
    //     session[i] = sessionStorage[i];
    //     console.log(sessionStorage[i]);
    // }
    // console.log(session);
    
    if (Number(localStorage.getItem("potatoes")) != 0) {
        potatoes = Number(localStorage.getItem("potatoes"));
        potatoUp = Number(localStorage.getItem("potatoUp"));
        PpS = Number(localStorage.getItem("PpS"));
        spudSpitter = Number(localStorage.getItem("spudSpitter"));
        spudSpitterCost = Number(localStorage.getItem("spudSpitterCost"));
        farmer = Number(localStorage.getItem("farmer"));
        farmerCost = Number(localStorage.getItem("farmerCost"));
        farm = Number(localStorage.getItem("farm"));
        farmCost = Number(localStorage.getItem("farmCost"));
        factory = Number(localStorage.getItem("factory"));
        factoryCost = Number(localStorage.getItem("factoryCost"));
    
        document.getElementById("varCount").innerHTML = "Potatoes: " + potatoes;
        document.getElementById("PpSCount").innerHTML = "PpS: " + PpS;
        document.getElementById("spudCount").innerHTML = "Spud Spitter: " + spudSpitter;
        document.getElementById("spudText").innerHTML = "Spud Spitter &nbsp;&nbsp; || &nbsp;&nbsp;  Cost: " + spudSpitterCost;
        document.getElementById("farmerCount").innerHTML = "Potato Farmer: " + farmer;
        document.getElementById("farmerText").innerHTML = "Potato Farmer &nbsp;&nbsp; || &nbsp;&nbsp;  Cost: " + farmerCost;
        document.getElementById("farmCount").innerHTML = "Potato Farm: " + farm;
        document.getElementById("farmText").innerHTML = "Potato Farm &nbsp;&nbsp; || &nbsp;&nbsp;  Cost: " + farmCost;
        document.getElementById("factoryCount").innerHTML = "Potato Factory: " + factory;
        document.getElementById("factoryText").innerHTML = "Potato Factory &nbsp;&nbsp; || &nbsp;&nbsp;  Cost: " + factoryCost;
    }
    
}

function deleteData() {
    if (confirm("Are you Sure?") == true) {
        localStorage.clear();
        alert("Data Cleared!");
    }
}