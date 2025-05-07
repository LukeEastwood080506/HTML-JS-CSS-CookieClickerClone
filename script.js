// Initialize variables
let cookies = 0;
let cookiesPerSecond = 0;

let autoclickerCost = 15;
let autoclickers = 0;
let autoclickerUpgradeCost = 10000;
let autoclickerUpgrades = 0;
let autoclickerMultiplier = 1;

let grandmaCost = 100;
let grandmas = 0;
let grandmaUpgradeCost = 50000;
let grandmaUpgrades = 0;
let grandmaMultiplier = 1;

let farmCost = 1100;
let farms = 0;
let farmUpgradeCost = 500000;
let farmUpgrades = 0;
let farmMultiplier = 1;

let mineCost = 12000;
let mines = 0;
let mineUpgradeCost = 6000000;
let mineUpgrades = 0;
let mineMultiplier = 1;

let factoryCost = 130000;
let factories = 0;
let factoryUpgradeCost = 60000000;
let factoryUpgrades = 0;
let factoryMultiplier = 1;

// Function that adds the cookies per second to the total cookies
function generateCookies() {
    cookies += cookiesPerSecond * 0.1; // Multiplies by 0.1 to match the speed that the function is called
    document.getElementById("cookiesCount").innerText = "Cookies: " + Math.round(cookies);
}

function calculateCPS() {
    // Calculates the cookies per second based on the number of buildings owned and their multipliers
    cookiesPerSecond = (autoclickers * autoclickerMultiplier * 1) 
    + (grandmas * grandmaMultiplier * 5) 
    + (farms * farmMultiplier * 25) 
    + (mines * mineMultiplier * 100) 
    + (factories * factoryMultiplier * 250);
    document.getElementById("cps").innerText = "Cookies per second: " + cookiesPerSecond;
}

// Function that saves the game state to local storage
function saveGame() {
    // Stores all of the current game variables in an object
    const gameState = {
        cookies: cookies,
        cookiesPerSecond: cookiesPerSecond,
        autoclickers: autoclickers,
        autoclickerCost: autoclickerCost,
        autoclickerUpgrades: autoclickerUpgrades,
        autoclickerUpgradeCost: autoclickerUpgradeCost,
        autoclickerMultiplier: autoclickerMultiplier,
        grandmas: grandmas,
        grandmaCost: grandmaCost,
        grandmaUpgrades: grandmaUpgrades,
        grandmaUpgradeCost: grandmaUpgradeCost,
        grandmaMultiplier: grandmaMultiplier,
        farms: farms,
        farmCost: farmCost,
        farmUpgrades: farmUpgrades,
        farmUpgradeCost: farmUpgradeCost,
        farmMultiplier: farmMultiplier,
        mines: mines,
        mineCost: mineCost,
        mineUpgrades: mineUpgrades,
        mineUpgradeCost: mineUpgradeCost,
        mineMultiplier: mineMultiplier,
        factories: factories,
        factoryCost: factoryCost,
        factoryUpgrades: factoryUpgrades,
        factoryUpgradeCost: factoryUpgradeCost,
        factoryMultiplier: factoryMultiplier
    };
    // Converts the object to a JSON string and saves it to local storage
    localStorage.setItem('cookieClickerSave', JSON.stringify(gameState));
}

// Runs the generateCookies function every tenth of a second and the saveGame function every 30 seconds
setInterval(generateCookies, 100);
setInterval(saveGame, 30000);

// Event listener for when the user presses keys
document.addEventListener("keydown", function (event) {
    // If "s" is pressed, save the game
    if (event.key === "s") {
        saveGame();
        alert("Game saved!");
    }

    // If "l" is pressed, load the game
    if (event.key === "l") {
        loadGame();
        alert("Game loaded!");
    }
});

// Function to load the game state from local storage
function loadGame() {
    // Loads the game state from local storage and parses it into an object
    const parsedGame = JSON.parse(localStorage.getItem('cookieClickerSave'));
    // If the game state exists, set all of the game variables to the saved values
    if (parsedGame) {
        cookies = parsedGame.cookies;
        cookiesPerSecond = parsedGame.cookiesPerSecond;
        autoclickers = parsedGame.autoclickers;
        autoclickerCost = parsedGame.autoclickerCost;
        autoclickerUpgrades = parsedGame.autoclickerUpgrades;
        autoclickerUpgradeCost = parsedGame.autoclickerUpgradeCost;
        autoclickerMultiplier = parsedGame.autoclickerMultiplier;
        grandmas = parsedGame.grandmas;
        grandmaCost = parsedGame.grandmaCost;
        grandmaUpgrades = parsedGame.grandmaUpgrades;
        grandmaUpgradeCost = parsedGame.grandmaUpgradeCost;
        grandmaMultiplier = parsedGame.grandmaMultiplier;
        farms = parsedGame.farms;
        farmCost = parsedGame.farmCost;
        farmUpgrades = parsedGame.farmUpgrades;
        farmUpgradeCost = parsedGame.farmUpgradeCost;
        farmMultiplier = parsedGame.farmMultiplier;
        mines = parsedGame.mines;
        mineCost = parsedGame.mineCost;
        mineUpgrades = parsedGame.mineUpgrades;
        mineUpgradeCost = parsedGame.mineUpgradeCost;
        mineMultiplier = parsedGame.mineMultiplier;
        factories = parsedGame.factories;
        factoryCost = parsedGame.factoryCost;
        factoryUpgrades = parsedGame.factoryUpgrades;
        factoryUpgradeCost = parsedGame.factoryUpgradeCost;
        factoryMultiplier = parsedGame.factoryMultiplier;
        updateDisplays();
    }
}

// Function to update the displays with the current game state
function updateDisplays() {
    document.getElementById("cookiesCount").innerText = "Cookies: " + Math.round(cookies);
    document.getElementById("cps").innerText = "Cookies per second: " + Math.round(cookiesPerSecond);
    document.getElementById("autoclicker-cost").innerText = "Cost: " + Math.round(autoclickerCost);
    document.getElementById("autoclickers-owned").innerText = "Owned: " + Math.round(autoclickers);
    document.getElementById("autoclicker-upgrade-cost").innerText = "Upgrade Cost: " + Math.round(autoclickerUpgradeCost);
    document.getElementById("autoclicker-upgrades-owned").innerText = "Upgrades: " + Math.round(autoclickerUpgrades);
    document.getElementById("grandma-cost").innerText = "Cost: " + Math.round(grandmaCost);
    document.getElementById("grandmas-owned").innerText = "Owned: " + Math.round(grandmas);
    document.getElementById("grandma-upgrade-cost").innerText = "Upgrade Cost: " + Math.round(grandmaUpgradeCost);
    document.getElementById("grandma-upgrades-owned").innerText = "Upgrades: " + Math.round(grandmaUpgrades);
    document.getElementById("farm-cost").innerText = "Cost: " + Math.round(farmCost);
    document.getElementById("farms-owned").innerText = "Owned: " + Math.round(farms);
    document.getElementById("farm-upgrade-cost").innerText = "Upgrade Cost: " + Math.round(farmUpgradeCost);
    document.getElementById("farm-upgrades-owned").innerText = "Upgrades: " + Math.round(farmUpgrades);
    document.getElementById("mine-cost").innerText = "Cost: " + Math.round(mineCost);
    document.getElementById("mines-owned").innerText = "Owned: " + Math.round(mines);
    document.getElementById("mine-upgrade-cost").innerText = "Upgrade Cost: " + Math.round(mineUpgradeCost);
    document.getElementById("mine-upgrades-owned").innerText = "Upgrades: " + Math.round(mineUpgrades);
    document.getElementById("factory-cost").innerText = "Cost: " + Math.round(factoryCost);
    document.getElementById("factories-owned").innerText = "Owned: " + Math.round(factories);
    document.getElementById("factory-upgrade-cost").innerText = "Upgrade Cost: " + Math.round(factoryUpgradeCost);
    document.getElementById("factory-upgrades-owned").innerText = "Upgrades: " + Math.round(factoryUpgrades);
}

// Event listener for when the user clicks the cookie
document.getElementById("cookie").onclick = function () {
    // Adds the cookies per click to the total cookies and updates the display
    cookies += 1 * autoclickerMultiplier;
    document.getElementById("cookiesCount").innerText = "Cookies: " + Math.round(cookies);
    // Adds an animation to the cookie when clicked, making it scale and rotate
    document.getElementById("cookie").animate(
        [
            { transform: "scale(0.9) rotate(" + (Math.random() * 10) + "deg)" },
            { transform: "scale(1.0) rotate(0deg)" }
        ],
        { duration: 100 }
    );
}

// Event listeners for when the user clicks the buy buttons, each follow the same pattern
document.getElementById("id-autoclicker-buy").onclick = function () {
    // Checks if the user has enough cookies to buy the building
    if (cookies >= autoclickerCost) {
        // If so, subtracts the cost from the total cookies and updates the display
        cookies -= autoclickerCost;
        autoclickers++;
        autoclickerCost = autoclickerCost * 1.15;
        document.getElementById("autoclicker-cost").innerText = "Cost: " + Math.round(autoclickerCost);
        document.getElementById("autoclickers-owned").innerText = "Owned: " + autoclickers;
        calculateCPS();
    }
}

document.getElementById("id-grandma-buy").onclick = function () {
    if (cookies >= grandmaCost) {
        cookies -= grandmaCost;
        grandmas++;
        cookiesPerSecond += 5 * grandmaMultiplier;
        grandmaCost = grandmaCost * 1.15;
        document.getElementById("grandma-cost").innerText = "Cost: " + Math.round(grandmaCost);
        document.getElementById("grandmas-owned").innerText = "Owned: " + grandmas;
    }
}

document.getElementById("id-farm-buy").onclick = function () {
    if (cookies >= farmCost) {
        cookies -= farmCost;
        farms++;
        farmCost = farmCost * 1.15;
        document.getElementById("farm-cost").innerText = "Cost: " + Math.round(farmCost);
        document.getElementById("farms-owned").innerText = "Owned: " + farms;
        calculateCPS();
    }
}

document.getElementById("id-mine-buy").onclick = function () {
    if (cookies >= mineCost) {
        cookies -= mineCost;
        mines++;
        mineCost = mineCost * 1.15;
        document.getElementById("mine-cost").innerText = "Cost: " + Math.round(mineCost);
        document.getElementById("mines-owned").innerText = "Owned: " + mines;
        calculateCPS();
    }
}

document.getElementById("id-factory-buy").onclick = function () {
    if (cookies >= factoryCost) {
        cookies -= factoryCost;
        factories++;
        factoryCost = factoryCost * 1.15;
        document.getElementById("factory-cost").innerText = "Cost: " + Math.round(factoryCost);
        document.getElementById("factories-owned").innerText = "Owned: " + factories;
        calculateCPS();
    }
}

// Event listeners for when the user clicks the upgrade buttons, each follow the same pattern
document.getElementById("id-autoclicker-upgrade-buy").onclick = function () {
    // Checks if the user has enough cookies to buy the upgrade
    if (cookies >= autoclickerUpgradeCost) {
        // If so, subtracts the cost from the total cookies and updates the display
        cookies -= autoclickerUpgradeCost;
        autoclickerUpgrades++;
        autoclickerMultiplier *= 2; 
        autoclickerUpgradeCost = Math.floor(autoclickerUpgradeCost * 10);
        document.getElementById("autoclicker-upgrade-cost").innerText = "Cost: " + autoclickerUpgradeCost;
        document.getElementById("autoclicker-upgrades-owned").innerText = "Owned: " + autoclickerUpgrades;
        calculateCPS();
    }
}

document.getElementById("id-grandma-upgrade-buy").onclick = function () {
    if (cookies >= grandmaUpgradeCost) {
        cookies -= grandmaUpgradeCost;
        grandmaUpgrades++;
        grandmaMultiplier *= 2;
        grandmaUpgradeCost = Math.floor(grandmaUpgradeCost * 10);
        document.getElementById("grandma-upgrade-cost").innerText = "Cost: " + grandmaUpgradeCost;
        document.getElementById("grandma-upgrades-owned").innerText = "Upgrades: " + grandmaUpgrades;
        calculateCPS();
    }
}

document.getElementById("id-farm-upgrade-buy").onclick = function () {
    if (cookies >= farmUpgradeCost) {
        cookies -= farmUpgradeCost;
        farmUpgrades++;
        farmMultiplier *= 2;
        farmUpgradeCost = Math.floor(farmUpgradeCost * 10);
        document.getElementById("farm-upgrade-cost").innerText = "Cost: " + farmCost;
        document.getElementById("farm-upgrades-owned").innerText = "Owned: " + farmUpgrades;
        calculateCPS();
    }
}

document.getElementById("id-mine-upgrade-buy").onclick = function () {
    if (cookies >= mineUpgradeCost) {
        cookies -= mineUpgradeCost;
        mineUpgrades++;
        mineMultiplier *= 2;
        mineUpgradeCost = Math.floor(mineUpgradeCost * 10);
        document.getElementById("mine-upgrade-cost").innerText = "Cost: " + mineCost;
        document.getElementById("mine-upgrades-owned").innerText = "Owned: " + mineUpgrades;
        calculateCPS();
    }
}

document.getElementById("id-factory-upgrade-buy").onclick = function () {
    if (cookies >= factoryUpgradeCost) {
        cookies -= factoryUpgradeCost;
        factoryUpgrades++;
        factoryMultiplier *= 2;
        factoryUpgradeCost = Math.floor(factoryUpgradeCost * 10);
        document.getElementById("factory-upgrade-cost").innerText = "Cost: " + factoryCost;
        document.getElementById("factorie-upgrades-owned").innerText = "Owned: " + factoryUpgrades;
        calculateCPS();
    }
}

// Load the game state when the page loads
window.onload = loadGame(), updateDisplays();