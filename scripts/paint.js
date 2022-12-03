
import { getPaint,  } from "./database.js"
const paints = getPaint()

export const paintHtml = () => {
    let html = `<select for="paint-types">`

    // This is how you have been converting objects to <li> elements
    for (const paint of paints) {

        html += `<option
             value="${paint.id}" /> ${paint.name}
        </option>`
    }

    html += "</select>"
    return html
}