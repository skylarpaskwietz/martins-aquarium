import { getTips } from "../database.js";

export const TipsList = () => {
    const tips = getTips()

    let htmlString = '<article class ="tipsList">'

    for (const tip of tips) {
    
        htmlString += `<section class ="tipCard">
                <div class ="tipName">${tip.tip}</div>
                </section>`
    }
    htmlString += `</article>`
    
    return htmlString
}