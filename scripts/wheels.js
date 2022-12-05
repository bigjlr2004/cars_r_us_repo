
import { getWheels, setWheel  } from "./database.js"
const wheels = getWheels()

document.addEventListener(
    "change",
    (changeEvent) => {
        //the following code checks to see if the user clicked on the id specified when the dropdown menu was created
        if (changeEvent.target.id === "wheels") {
            // this returns the options value to the variable Chosen Option
           setWheel(parseInt(changeEvent.target.value))

          
        }
    }
)

export const wheelsHtml = () => {

    return `<div class="box"> <section> <label for="wheel-types">Wheels:  </label>
        <select id="wheels" for="wheel-types">
        <option value="0">Select a wheel size: </option>
        ${
            wheels.map(
                (wheel) => {
                    return `<option value="${wheel.id}">${wheel.type}</option>`
                }
            ).join("")
        }
        </select></section></div>
    `
}