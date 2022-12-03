
import { getInterior } from "./database.js"
const interiors = getInterior()

export const interiorHtml = () => {
    let html = `<select for="interior-types">`

    // This is how you have been converting objects to <li> elements
    for (const interior of interiors) {

        html += `<option
             value="${interior.id}" /> ${interior.type}
        </option>`
    }

    html += "</select>"
    return html
}