
import { getWheels,  } from "./database.js"
const wheels = getWheels()

export const wheelsHtml = () => {
    let html = `<select for="wheels-types">`

    // This is how you have been converting objects to <li> elements
    for (const wheel of wheels) {

        html += `<option
             value="${wheel.id}" /> ${wheel.type}
        </option>`
    }

    html += "</select>"
    return html
}