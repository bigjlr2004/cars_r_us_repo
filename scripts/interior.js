import { getData, setData } from "./dataAccess.js"
const interiors = getData("interior")

export const interiorHtml = () => {
    document.addEventListener(
        "change",
        (changeEvent) => {
            //the following code checks to see if the user clicked on the id specified when the dropdown menu was created
            if (changeEvent.target.id === "interiors") {
                // this returns the options value to the variable Chosen Option
               setData(parseInt(changeEvent.target.value),"interior")
    
              
            }
        }
    )


    return `<div class="box"> <section> <label for="interior-types">Interior:  </label>
        <select id="interiors" for="interior-types">
        <option value="0">Select an interior style: </option>
        ${
            interiors.map(
                (interior) => {
                    return `<option value="${interior.id}">${interior.type}</option>`
                }
            ).join("")
        }
        </select></section></div>
    `
}
