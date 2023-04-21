import { Octokit } from "octokit";

const octokit = new Octokit({
    auth: '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'
})

await octokit.request('GET /repos/{owner}/{repo}/contents', {
    owner: 'unknown0verlord',
    repo: 'PotatoClickerDevBuild',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

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

let biggerYields = 0;
let moreFields = 0;
let looserLaws = 0;
let districtExpansion = 0;
let moreBooths = 0;

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

console.log(HttpRequest("localhost:3000/patch", method="get"));


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
// checkUpgrades() updates button color when player has enough potatoes, checking every 1/4 second
// upgrades() takes number input from button press and directs to correct function
/////////////////////////////////////////////////////////////////////////////////

function checkUpgrades() {
    document.getElementById("farmerDesc").innerHTML = "This Honest Man gives you his potatoes (" + farmerPpSadd + " PpS)";
    document.getElementById("farmDesc").innerHTML = "A whole farm dedicated to your potatoes. (" + farmPpSadd +" PpS)";
    document.getElementById("factoryDesc").innerHTML = "Streamline Production in Potato Factories. (" + factoryPpSadd +" PpS)";
    document.getElementById("districtDesc").innerHTML = "An entire district of factories dedicated to Potatoes. (" + districtPpSadd +" PpS)";
    document.getElementById("conventionDesc").innerHTML = "Host a convention for potatoes - \"Potato-Con\"! (" + conventionPpSadd +" PpS)";
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
    } else if (number == 5) {
        if (potatoes >= districtCost) {
            increaseDistrictCount();
        }
    } else if (number == 6) {
        if (potatoes >= conventionCost) {
            increaseConventionCount();
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

function increaseDistrictCount() {
    district += 1;
    potatoes -= districtCost;
    districtCost = Math.floor(5000 * (1.15 ** district));
    PpS += districtPpSadd;

    if (potatoes < districtCost) {
        document.getElementById("industrialDistrict").style.backgroundColor = '#006600';
    }

    document.getElementById("varCount").innerHTML = "Potatoes: " + potatoes;
    document.getElementById("PpSCount").innerHTML = "PpS: " + PpS;
    document.getElementById("districtCount").innerHTML = "Industrial District: " + district;
    document.getElementById("districtText").innerHTML = "Industrial District &nbsp;&nbsp; || &nbsp;&nbsp;  Cost: " + districtCost;
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

    document.getElementById("varCount").innerHTML = "Potatoes: " + potatoes;
    document.getElementById("PpSCount").innerHTML = "PpS: " + PpS;
    document.getElementById("conventionCount").innerHTML = "Potato Convention: " + convention;
    document.getElementById("conventionText").innerHTML = "Potato Convention &nbsp;&nbsp; || &nbsp;&nbsp;  Cost: " + conventionCost;
    console.log(convention);
}


// Upgrade Functions
//////////////////////////////////////////////

function buyBiggerYields() {
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

function buyMoreFields() {
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

function buyLooserLaws() {
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

function buyDistrictExpansion() {
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

function buyMoreBooths() {
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
    
    localStorage.setItem("biggerYields", biggerYields);
    localStorage.setItem("moreFields", moreFields);
    localStorage.setItem("looserLaws", looserLaws);
    localStorage.setItem("districtExpansion", districtExpansion);
    localStorage.setItem("moreBooths", moreBooths);

    
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

        biggerYields = Number(localStorage.getItem("biggerYields"));
        moreFields = Number(localStorage.getItem("moreFields"));
        looserLaws = Number(localStorage.getItem("looserLaws"));
        districtExpansion = Number(localStorage.getItem("districtExpansion"));
        moreBooths = Number(localStorage.getItem("moreBooths"));

    
        document.getElementById("varCount").innerHTML = "Potatoes: " + potatoes;
        document.getElementById("PpSCount").innerHTML = "PpS: " + PpS;
        document.getElementById("spudCount").innerHTML = "Spud Spitter: " + spudSpitter;
        document.getElementById("spudText").innerHTML = "Spud Spitter &nbsp;&nbsp; || &nbsp;&nbsp;  Cost: " + spudSpitterCost;
        document.getElementById("farmerCount").innerHTML = "Potato Farmer: " + farmer;
        document.getElementById("farmerText").innerHTML = "Potato Farmer &nbsp;&nbsp; || &nbsp;&nbsp;  Cost: " + farmerCost;
        document.getElementById("farmerDesc").innerHTML = "This Honest Man gives you his potatoes (" + farmerPpSadd + " PpS)";
        document.getElementById("farmCount").innerHTML = "Potato Farm: " + farm;
        document.getElementById("farmText").innerHTML = "Potato Farm &nbsp;&nbsp; || &nbsp;&nbsp;  Cost: " + farmCost;
        document.getElementById("farmDesc").innerHTML = "A whole farm dedicated to your potatoes. (" + farmPpSadd +" PpS)";
        document.getElementById("factoryCount").innerHTML = "Potato Factory: " + factory;
        document.getElementById("factoryText").innerHTML = "Potato Factory &nbsp;&nbsp; || &nbsp;&nbsp;  Cost: " + factoryCost;
        document.getElementById("factoryDesc").innerHTML = "Streamline Production in Potato Factories. (" + factoryPpSadd +" PpS)";
        document.getElementById("districtText").innerHTML = "Industrial District &nbsp;&nbsp; || &nbsp;&nbsp;  Cost: " + districtCost;
        document.getElementById("districtDesc").innerHTML = "An entire district of factories dedicated to Potatoes. (" + districtPpSadd +" PpS)";
        document.getElementById("conventionDesc").innerHTML = "Host a convention for potatoes - \"Potato-Con\"! (" + conventionPpSadd +" PpS)";
    
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
    }
    
}

function deleteData() {
    if (confirm("Are you Sure?") == true) {
        localStorage.clear();
        alert("Data Cleared! Reload the Page to see your Changes.");
    }
}




