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

let district = 0;
let districtCost = 5000;
let districtPpSadd = 50;

let convention = 0;
let conventionCost = 20000;
let conventionPpSadd = 100;

let merchandise = 0;
let merchandiseCost = 100000;
let merchandisePpSadd = 500;

let biggerYields = 0;
let moreFields = 0;
let looserLaws = 0;
let districtExpansion = 0;
let moreBooths = 0;
let sleekerDesigns = 0;

let patch = "v1.1.0";



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
    document.getElementById("varCount").innerHTML = "Potatoes: " + potatoes.toLocaleString();
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

// Check Version every minute
setInterval(() => {checkVersion();}, 60000);

// Most Important Functions
// checkUpgrades() updates button color when player has enough potatoes, checking every 1/4 second
// upgrades() takes number input from button press and directs to correct function
/////////////////////////////////////////////////////////////////////////////////

function checkUpgrades() {
    document.getElementById("farmerDesc").innerHTML = "This Honest Man gives you his potatoes (" + farmerPpSadd.toLocaleString() + " PpS)";
    document.getElementById("farmDesc").innerHTML = "A whole farm dedicated to your potatoes. (" + farmPpSadd.toLocaleString() +" PpS)";
    document.getElementById("factoryDesc").innerHTML = "Streamline Production in Potato Factories. (" + factoryPpSadd.toLocaleString() +" PpS)";
    document.getElementById("districtDesc").innerHTML = "An entire district of factories dedicated to Potatoes. (" + districtPpSadd.toLocaleString() +" PpS)";
    document.getElementById("conventionDesc").innerHTML = "Host a convention for potatoes - \"Potato-Con\"! (" + conventionPpSadd.toLocaleString() +" PpS)";
    document.getElementById("merchandiseDesc").innerHTML = "Sell Merchandise with Potato Branding. (" + merchandisePpSadd.toLocaleString() + " PpS)";
    document.getElementById("PpSCount").innerHTML = "PpS: " + PpS.toLocaleString();

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

    if (potatoes >= districtCost) {
        document.getElementById("industrialDistrict").style.backgroundColor = '#33cc33';
    } else {
        document.getElementById("industrialDistrict").style.backgroundColor = '#006600';
    }

    if (potatoes >= conventionCost) {
        document.getElementById("potatoConvention").style.backgroundColor = '#33cc33';
    } else {
        document.getElementById("potatoConvention").style.backgroundColor = '#006600';
    }

    if (potatoes >= merchandiseCost) {
        document.getElementById("potatoMerchandise").style.backgroundColor = '#33cc33';
    } else {
        document.getElementById("potatoMerchandise").style.backgroundColor = '#006600';
    }




    if (biggerYields == 0) {
        if (potatoes >= 500) {
            document.getElementById("firstUpgrade").style.backgroundColor = '#33cc33';
        } else {
            document.getElementById("firstUpgrade").style.backgroundColor = '#006600';
        }
    } else {
        document.getElementById("firstUpgrade").style.backgroundColor = 'grey';
    }

    if (moreFields == 0) {
        if (potatoes >= 3000) {
            document.getElementById("secondUpgrade").style.backgroundColor = '#33cc33';
        } else {
            document.getElementById("secondUpgrade").style.backgroundColor = '#006600';
        }
    } else {
        document.getElementById("secondUpgrade").style.backgroundColor = 'grey';
    }

    if (looserLaws == 0) {
        if (potatoes >= 10000) {
            document.getElementById("thirdUpgrade").style.backgroundColor = '#33cc33';
        } else {
            document.getElementById("thirdUpgrade").style.backgroundColor = '#006600';
        }
    } else {
        document.getElementById("thirdUpgrade").style.backgroundColor = 'grey';
    }

    if (districtExpansion == 0) {
        if (potatoes >= 50000) {
            document.getElementById("fourthUpgrade").style.backgroundColor = '#33cc33';
        } else {
            document.getElementById("fourthUpgrade").style.backgroundColor = '#006600';
        }
    } else {
        document.getElementById("fourthUpgrade").style.backgroundColor = 'grey';
    }

    if (moreBooths == 0) {
        if (potatoes >= 200000) {
            document.getElementById("fifthUpgrade").style.backgroundColor = '#33cc33';
        } else {
            document.getElementById("fifthUpgrade").style.backgroundColor = '#006600';
        }
    } else {
        document.getElementById("fifthUpgrade").style.backgroundColor = 'grey';
    }

    if (sleekerDesigns == 0) {
        if (potatoes >= 1000000) {
            document.getElementById("sixthUpgrade").style.backgroundColor = '#33cc33';
        } else {
            document.getElementById("sixthUpgrade").style.backgroundColor = '#006600';
        }
    } else {
        document.getElementById("sixthUpgrade").style.backgroundColor = 'grey';
    }
}

function towers(number) {
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
    } else if (number == 5) {
        if (potatoes >= districtCost) {
            increaseDistrictCount();
        }
    } else if (number == 6) {
        if (potatoes >= conventionCost) {
            increaseConventionCount();
        }
    } else if (number == 7) {
        if (potatoes >= merchandiseCost) {
            increaseMerchandiseCount();
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

    document.getElementById("varCount").innerHTML = "Potatoes: " + potatoes.toLocaleString();
    document.getElementById("spudCount").innerHTML = "Spud Spitter: " + spudSpitter.toLocaleString();
    document.getElementById("spudText").innerHTML = "Spud Spitter &nbsp;&nbsp; || &nbsp;&nbsp;  Cost: " + spudSpitterCost.toLocaleString();
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

    document.getElementById("varCount").innerHTML = "Potatoes: " + potatoes.toLocaleString();
    document.getElementById("PpSCount").innerHTML = "PpS: " + PpS.toLocaleString();
    document.getElementById("farmerCount").innerHTML = "Potato Farmer: " + farmer.toLocaleString();
    document.getElementById("farmerText").innerHTML = "Cost: " + farmerCost.toLocaleString();
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

    document.getElementById("varCount").innerHTML = "Potatoes: " + potatoes.toLocaleString();
    document.getElementById("PpSCount").innerHTML = "PpS: " + PpS.toLocaleString();
    document.getElementById("farmCount").innerHTML = "Potato Farm: " + farm.toLocaleString();
    document.getElementById("farmText").innerHTML = "Cost: " + farmCost.toLocaleString();
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

    document.getElementById("varCount").innerHTML = "Potatoes: " + potatoes.toLocaleString();
    document.getElementById("PpSCount").innerHTML = "PpS: " + PpS.toLocaleString();
    document.getElementById("factoryCount").innerHTML = "Potato Factory: " + factory.toLocaleString();
    document.getElementById("factoryText").innerHTML = "Cost: " + factoryCost.toLocaleString();
    console.log(factory);
}

function increaseDistrictCount() {
    district += 1;
    potatoes -= districtCost;
    districtCost = Math.floor(5000 * (1.15 ** district));
    PpS += districtPpSadd;

    if (potatoes < districtCost) {
        document.getElementById("industrialDistrict").style.backgroundColor = '#006600';
    }

    document.getElementById("varCount").innerHTML = "Potatoes: " + potatoes.toLocaleString();
    document.getElementById("PpSCount").innerHTML = "PpS: " + PpS.toLocaleString();
    document.getElementById("districtCount").innerHTML = "Industrial District: " + district.toLocaleString();
    document.getElementById("districtText").innerHTML = "Cost: " + districtCost.toLocaleString();
    console.log(district);
}

function increaseConventionCount() {
    convention += 1;
    potatoes -= conventionCost;
    conventionCost = Math.floor(20000 * (1.15 ** convention));
    PpS += conventionPpSadd;

    if (potatoes < conventionCost) {
        document.getElementById("potatoConvention").style.backgroundColor = '#006600';
    }

    document.getElementById("varCount").innerHTML = "Potatoes: " + potatoes.toLocaleString();
    document.getElementById("PpSCount").innerHTML = "PpS: " + PpS.toLocaleString();
    document.getElementById("conventionCount").innerHTML = "Potato Convention: " + convention.toLocaleString();
    document.getElementById("conventionText").innerHTML = "Cost: " + conventionCost.toLocaleString();
    console.log(convention);
}

function increaseMerchandiseCount() {
    mechandise += 1;
    potatoes -= merchandiseCost;
    merchandiseCost = Math.floor(100000 * (1.15 ** merchandise));
    PpS += merchandisePpSadd;

    if (potatoes < merchandiseCost) {
        document.getElementById("potatoMerchandise").style.backgroundColor = '#006600';
    }

    document.getElementById("varCount").innerHTML = "Potatoes: " + potatoes.toLocaleString();
    document.getElementById("PpSCount").innerHTML = "PpS: " + PpS.toLocaleString();
    document.getElementById("merchaniseCount").innerHTML = "Potato Merchandise: " + merchandise.toLocaleString();
    document.getElementById("merchandiseText").innerHTML = "Cost: " + merchandiseCost.toLocaleString();
    console.log(merchandise);
}


// Upgrade Function
//////////////////////////////////////////////

function upgrades(number) {
    
    // Buy More Yields
    if (number == 1) {
        if (biggerYields == 0) {
            if (potatoes >= 500) {
                PpS -= farmerPpSadd*farmer
                PpS += (2*farmerPpSadd)*farmer
                potatoes -= 500
                farmerPpSadd *= 2;
                biggerYields = 1;
            }
        }
    }

    // Buy More Fields
    if (number == 2) {
        if (moreFields == 0) {
            if (potatoes >= 3000) {
                PpS -= farmPpSadd*farm
                PpS += (2*farmPpSadd)*farm
                potatoes -= 3000;
                farmPpSadd *= 2;
                moreFields = 1;
            }
        }
    }

    // Looser Laws
    if (number == 3) {
        if (looserLaws == 0) {
            if (potatoes >= 10000) {
                PpS -= factoryPpSadd*factory
                PpS += (2*factoryPpSadd)*factory
                potatoes -= 10000;
                factoryPpSadd *= 2;
                looserLaws = 1;
            }
        }
    }

    // Buy District Expansion
    if (number == 4) {
        if (districtExpansion == 0) {
            if (potatoes >= 50000) {
                PpS -= districtPpSadd*district
                PpS += (2*districtPpSadd)*district
                potatoes -= 50000;
                districtPpSadd *= 2;
                districtExpansion = 1;
            }
        }
    }

    // Buy More Booths
    if (number == 5) {
        if (moreBooths == 0) {
            if (potatoes >= 200000) {
                PpS -= conventionPpSadd*convention
                PpS += (2*conventionPpSadd)*convention
                potatoes -= 200000;
                conventionPpSadd *= 2;
                moreBooths = 1;
            }
        }
    }

    // Buy Sleeker Designs
    if (number == 6) {
        if (sleekerDesigns == 0) {
            if (potatoes >= 1000000) {
                PpS -= merchandisePpSadd*merchandise
                PpS += (2*merchandisePpSadd)*merchandise
                potatoes -= 1000000;
                merchandisePpSadd *= 2;
                sleekerDesigns = 1;
            }
        }
    }
}

// Core Functions
//////////////////////////////////////////////

function increasePotatoes() {
    potatoes += potatoUp
}

function activatePpS() {
    potatoes += PpS;
    document.getElementById("varCount").innerHTML = "Potatoes: " + potatoes.toLocaleString();
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
    localStorage.setItem("farmerPpSadd", farmerPpSadd);
    localStorage.setItem("farm", farm);
    localStorage.setItem("farmCost", farmCost);
    localStorage.setItem("farmPpSadd", farmPpSadd);
    localStorage.setItem("factory", factory);
    localStorage.setItem("factoryCost", factoryCost);
    localStorage.setItem("factoryPpSadd", factoryPpSadd);
    localStorage.setItem("district", district);
    localStorage.setItem("districtCost", districtCost);
    localStorage.setItem("districtPpSadd", districtPpSadd);
    localStorage.setItem("convention", convention);
    localStorage.setItem("conventionCost", conventionCost);
    localStorage.setItem("conventionPpSadd", conventionPpSadd);
    localStorage.setItem("merchandise", merchandise);
    localStorage.setItem("merchandiseCost", merchandiseCost);
    localStorage.setItem("merchandisePpSadd", merchandisePpSadd);
    
    localStorage.setItem("biggerYields", biggerYields);
    localStorage.setItem("moreFields", moreFields);
    localStorage.setItem("looserLaws", looserLaws);
    localStorage.setItem("districtExpansion", districtExpansion);
    localStorage.setItem("moreBooths", moreBooths);
    localStorage.setItem("sleekerDesigns", sleekerDesigns);

    
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
        farmerPpSadd = Number(localStorage.getItem("farmerPpSadd"));
        farm = Number(localStorage.getItem("farm"));
        farmCost = Number(localStorage.getItem("farmCost"));
        farmPpSadd = Number(localStorage.getItem("farmPpSadd"));
        factory = Number(localStorage.getItem("factory"));
        factoryCost = Number(localStorage.getItem("factoryCost"));
        factoryPpSadd = Number(localStorage.getItem("factoryPpSadd"));
        district = Number(localStorage.getItem("district"));
        districtCost= Number(localStorage.getItem("districtCost"));
        districtPpSadd = Number(localStorage.getItem("districtPpSadd"));
        convention = Number(localStorage.getItem("convention"));
        conventionCost = Number(localStorage.getItem("conventionCost"));
        conventionPpSadd = Number(localStorage.getItem("conventionPpSadd"));
        merchandise = Number(localStorage.getItem("merchandise"));
        merchandiseCost = Number(localStorage.getItem("merchandiseCost"));
        merchandisePpSadd = Number(localStorage.getItem("merchandisePpSadd"));

        biggerYields = Number(localStorage.getItem("biggerYields"));
        moreFields = Number(localStorage.getItem("moreFields"));
        looserLaws = Number(localStorage.getItem("looserLaws"));
        districtExpansion = Number(localStorage.getItem("districtExpansion"));
        moreBooths = Number(localStorage.getItem("moreBooths"));
        sleekerDesigns = Number(localStorage.getItem("sleekerDesigns"));

    
        document.getElementById("varCount").innerHTML = "Potatoes: " + potatoes.toLocaleString();
        document.getElementById("PpSCount").innerHTML = "PpS: " + PpS.toLocaleString();

        document.getElementById("spudCount").innerHTML = "Spud Spitter: " + spudSpitter.toLocaleString();
        document.getElementById("spudText").innerHTML = "Cost: " + spudSpitterCost.toLocaleString();

        document.getElementById("farmerCount").innerHTML = "Potato Farmer: " + farmer.toLocaleString();
        document.getElementById("farmerText").innerHTML = "Cost: " + farmerCost.toLocaleString();
        document.getElementById("farmerDesc").innerHTML = "This Honest Man gives you his potatoes (" + farmerPpSadd.toLocaleString() + " PpS)";

        document.getElementById("farmCount").innerHTML = "Potato Farm: " + farm.toLocaleString();
        document.getElementById("farmText").innerHTML = "Cost: " + farmCost.toLocaleString();
        document.getElementById("farmDesc").innerHTML = "A whole farm dedicated to your potatoes. (" + farmPpSadd.toLocaleString() +" PpS)";

        document.getElementById("factoryCount").innerHTML = "Potato Factory: " + factory.toLocaleString();
        document.getElementById("factoryText").innerHTML = "Cost: " + factoryCost.toLocaleString();
        document.getElementById("factoryDesc").innerHTML = "Streamline Production in Potato Factories. (" + factoryPpSadd.toLocaleString() +" PpS)";

        document.getElementById("districtCount").innerHTML = "Industrial District: " + district.toLocaleString();
        document.getElementById("districtText").innerHTML = "Cost: " + districtCost.toLocaleString();
        document.getElementById("districtDesc").innerHTML = "An entire district of factories dedicated to Potatoes. (" + districtPpSadd.toLocaleString() +" PpS)";

        document.getElementById("conventionCount").innerHTML = "Potato Convention: " + convention.toLocaleString();
        document.getElementById("conventionText").innerHTML = "Cost: " + conventionCost.toLocaleString();
        document.getElementById("conventionDesc").innerHTML = "Host a convention for potatoes - \"Potato-Con\"! (" + conventionPpSadd.toLocaleString() +" PpS)";

        document.getElementById("merchandiseCount").innerHTML = "Potato Merchandise: " + merchandise.toLocaleString();
        document.getElementById("merchandiseText").innerHTML = "Cost: " + merchandiseCost.toLocaleString();
        document.getElementById("merchandiseDesc").innerHTML = "Sell Merchandise with Potato Branding. (" + merchandisePpSadd.toLocaleString() + " PpS)";
    
        if (biggerYields == 1) {
            document.getElementById("firstUpgrade").style.backgroundColor = 'grey';
        }

        if (moreFields == 1) {
            document.getElementById("secondUpgrade").style.backgroundColor = 'grey';
        }

        if (looserLaws == 1) {
            document.getElementById("thirdUpgrade").style.backgroundColor = 'grey';
        }

        if (districtExpansion == 1) {
            document.getElementById("fourthUpgrade").style.backgroundColor = 'grey';
        }

        if (moreBooths == 1) {
            document.getElementById("fifthUpgrade").style.backgroundColor = 'grey';
        }

        if (sleekerDesigns == 1) {
            document.getElementById("sixthUpgrade").style.backgroundColor = 'grey';
        }
    }
    
}

function deleteData() {
    if (confirm("Are you Sure?") == true) {
        localStorage.clear();
        alert("Data Cleared! Reload the Page to see your Changes.");
    }
}

// http request for patch version
//////////////////////////////////////////////

function checkVersion() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/Unknown0verlord/PotatoClickerGame/master/package.json", true);
    xhr.send(null);
    xhr.responseType = "json";
    xhr.onload = function() {
        let responseObj = xhr.response;
        console.log("Repository version is " + responseObj.version);
        console.log("Running version " + patch);
        if (patch != responseObj.version) {
            document.getElementById("patchCheck").innerHTML = "Your Version of Potato Clicker is out of date. Consider Saving and Reloading the Page."
        } else {
            document.getElementById("patchCheck").innerHTML = ""
        }
    }
}