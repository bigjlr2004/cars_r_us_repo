
import { getData, setData } from "./dataAccess.js"
const paints = getData("paint")
document.addEventListener(
    "change",
    (changeEvent) => {
        //the following code checks to see if the user clicked on the id specified when the dropdown menu was created
        if (changeEvent.target.id === "paint") {
            // this returns the options value to the variable Chosen Option
           setData(parseInt(changeEvent.target.value),"paint")

          
        }
    }
)
export const paintHtml = () => {
    let html = `
    <div class="box"> <section class="paint options">
    <label for="paint-types">Paint:  </label>`

    html += `<select id="paint" for="paint-types">`//sets the resource id for the event listener and the label holder
    html += '<option value="0">Select a paint package</option>' //default option for dropdown menu


    //for of loop to crete drop down list choices from paint database
    for (const paint of paints) {

        html += `<option
             value="${paint.id}" /> ${paint.name}
        </option>`
    }

    html += "</select></section></div>"
    return html
}