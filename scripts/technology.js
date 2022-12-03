
import { getTechnology,  } from "./database.js"
const technologys = getTechnology()

export const technologyHtml = () => {
    let html = `<select for="technology-types">`

    // This is how you have been converting objects to <li> elements
    for (const technology of technologys) {

        html += `<option
             value="${technology.id}" /> ${technology.type}
        </option>`
    }

    html += "</select>"
    return html
}