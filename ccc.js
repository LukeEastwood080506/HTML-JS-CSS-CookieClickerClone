let cookies = 0;
let cookiesPerClick = 1;
let cookiesPerSecond = 0;

let autoclickerCost = 10;
let autoclickers = 0;
let autoclickerMultiplier = 1;

let grandmaCost = 100;
let grandmas = 0;
let grandmaMultiplier = 1;

let farmCost = 1000;
let farms = 0;
let farmMultiplier = 1;

let mineCost = 10000;
let mines = 0;
let mineMultiplier = 1;

let factoryCost = 100000;
let factories = 0;
let factoryMultiplier = 1;

function generateCookies() {
    cookies += cookiesPerSecond;
    document.getElementById("cookiesCount").innerText = "Cookies: " + cookies;
}

setInterval(generateCookies, 100);

document.getElementById("cookie").onclick = function() {
    cookies += cookiesPerClick;
    document.getElementById("cookiesCount").innerText = "Cookies: " + cookies;
    document.getElementById("cookie").animate(
        [
            { transform: "scale(0.9) rotate(" + (Math.random() * 10) + "deg)" },
            { transform: "scale(1.0) rotate(0deg)" }
        ],
        { duration: 100 }
    );
}

document.getElementById("cps").innerText = "Cookies per second: " + cookiesPerSecond;

document.getElementById("id-autoclicker-buy").onclick = function() {
    if (cookies >= autoclickerCost) {
        cookies -= autoclickerCost;
        autoclickers++;
        cookiesPerSecond += 1 * autoclickerMultiplier;
        autoclickerCost = Math.floor(autoclickerCost * 1.5);
        document.getElementById("autoclicker-cost").innerText = "Cost: " + autoclickerCost;
        document.getElementById("cookiesCount").innerText = "Cookies: " + cookies;
        document.getElementById("cps").innerText = "Cookies per second: " + cookiesPerSecond;
        document.getElementById("autoclickers-owned").innerText = "Owned: " + autoclickers;
    } 
}

document.getElementById("id-grandma-buy").onclick = function() {
    if (cookies >= grandmaCost) {
        cookies -= grandmaCost;
        grandmas++;
        cookiesPerSecond += 5 * grandmaMultiplier;
        grandmaCost = Math.floor(grandmaCost * 1.5);
        document.getElementById("grandma-cost").innerText = "Cost: " + grandmaCost;
        document.getElementById("cookiesCount").innerText = "Cookies: " + cookies;
        document.getElementById("cps").innerText = "Cookies per second: " + cookiesPerSecond;
        document.getElementById("grandmas-owned").innerText = "Owned: " + grandmas;
    } 
}

document.getElementById("id-farm-buy").onclick = function() {
    if (cookies >= farmCost) {
        cookies -= farmCost;
        farms++;
        cookiesPerSecond += 10 * farmMultiplier;
        farmCost = Math.floor(farmCost * 1.5);
        document.getElementById("farm-cost").innerText = "Cost: " + farmCost;
        document.getElementById("cookiesCount").innerText = "Cookies: " + cookies;
        document.getElementById("cps").innerText = "Cookies per second: " + cookiesPerSecond;
        document.getElementById("farms-owned").innerText = "Owned: " + farms;
    } 
}

document.getElementById("id-mine-buy").onclick = function() {
    if (cookies >= mineCost) {
        cookies -= mineCost;
        mines++;
        cookiesPerSecond += 50 * mineMultiplier;
        mineCost = Math.floor(mineCost * 1.5);
        document.getElementById("mine-cost").innerText = "Cost: " + mineCost;
        document.getElementById("cookiesCount").innerText = "Cookies: " + cookies;
        document.getElementById("cps").innerText = "Cookies per second: " + cookiesPerSecond;
        document.getElementById("mines-owned").innerText = "Owned: " + mines;
    } 
}

document.getElementById("id-factory-buy").onclick = function() {
    if (cookies >= factoryCost) {
        cookies -= factoryCost;
        factories++;
        cookiesPerSecond += 200 * factoryMultiplier;
        factoryCost = Math.floor(factoryCost * 1.5);
        document.getElementById("factory-cost").innerText = "Cost: " + factoryCost;
        document.getElementById("cookiesCount").innerText = "Cookies: " + cookies;
        document.getElementById("cps").innerText = "Cookies per second: " + cookiesPerSecond;
        document.getElementById("factories-owned").innerText = "Owned: " + factories;
    } 
}