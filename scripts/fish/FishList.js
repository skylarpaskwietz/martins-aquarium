import { getFish } from "../database.js";

export const FishList = () => {
     const fishes = getFish()

     let htmlString = '<article class="fishList">'

     for (const fish of fishes) {
        htmlString += `<section class="fishCard">
        <div><img  class="fish__image" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.size}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.diet}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
} 

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []
    const holyHolyFish = getFish()
    for (const theHoliness of holyHolyFish) {
        if (theHoliness.size % 3 === 0 )
        holyFish.push(theHoliness)
    }   return holyFish
}

export const soldierFish = () => {
    //5, 10, 15, 20, etc... fish
    const soldiers = []
    const battleFish = getFish()
    for (const souljaFish of battleFish) {
        if (souljaFish.size % 5 === 0)
        soldiers.push(souljaFish)
    }   return soldiers
}

export const nonHolyFish = () => {
    // Any fish nnot multiple of 3 0r 5
    const regularFish = []
    const regularRegularFish = getFish()
    for (const regular of regularRegularFish){
        if (regular.size % 3 !== 0 && regular.size % 5 !== 0)
        regularFish.push(regular)
    }   return regularFish
}