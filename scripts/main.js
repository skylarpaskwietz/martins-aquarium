import { getFish, getTips, getLocations } from "./database.js";
import { FishList, mostHolyFish, soldierFish, nonHolyFish } from "./fish/FishList.js";
import { TipsList } from "./tips/TipList.js";
import { LocationListt } from "./locations/locations.js";

const allFish = getFish()
const allTips = getTips()
const allLocations = getLocations()
// const myHolyFish = mostHolyFish()
// const mySoldierFish = soldierFish()
// const unHolyFish = nonHolyFish()

for (const fish of allFish) {
    console.log(fish)
}
for (const tipss of allTips) {
    console.log(tipss)
}
for (const thisLocation of allLocations) {
    console.log(thisLocation)
}
// for (const fish of myHolyFish) {
//     console.log(fish)
// }
// for (const fish of mySoldierFish) {
//     console.log(fish)
// }
// for (const fish of unHolyFish) {
//     console.log(fish)
// }

const parentHTMLElement = document.querySelector("#container")

parentHTMLElement.innerHTML = FishList()

const tipParentHTMLElement = document.querySelector("#tipContainer")

tipParentHTMLElement.innerHTML = TipsList()

const locationParentHTMLElement = document.querySelector("#locationContainer")

locationParentHTMLElement.innerHTML = LocationListt()




// parentHTMLElement.innerHTML = mostHolyFish()
// parentHTMLElement.innerHTML = soldierFish()
// parentHTMLElement.innerHTML = nonHolyFish()