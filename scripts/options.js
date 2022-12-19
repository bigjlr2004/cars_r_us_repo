import { getData, setData } from "./dataAccess.js"


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "car_option") {
            setData(parseInt(event.target.value),"option") //this sets the state with the target value of what was selected
        }
    }
)

const options = getData("options")
export const CarOptions = () => {
    let html = `<ul class="multiplier">`

    // Use .map() for converting objects to <li> elements
    const listOptionsArray = options.map(option => {

        return `<li>
        <input type="radio" name="car_option" value="${option.id}" /> ${option.type}
    </li>`
})
    
   

    // Join all of the strings in the array into a single string
    html += listOptionsArray.join("")

    html += "</ul>"
    return html
}