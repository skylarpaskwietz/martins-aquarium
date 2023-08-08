import { getLocations } from "../database.js";

export const LocationListt = () => {
    const locations = getLocations()

    let htmlString = '<article class="locationList"'

    for (const locationn of locations) {
        htmlString += `<section class="locationCard"
        <div> <img class="location_image" src="${locationn.image}" /></div>
        <div class="location_name">${locationn.locationName}</div>
    </section>`
    } 
    htmlString +=`</article`

    return htmlString
}