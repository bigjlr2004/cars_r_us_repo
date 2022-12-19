import { getData, setData } from "./dataAccess.js"
const technologys = getData("technology")

document.addEventListener(
    "change",
    (changeEvent) => {
        //the following code checks to see if the user clicked on the id specified when the dropdown menu was created
        if (changeEvent.target.id === "tech") {
            // this returns the options value to the variable Chosen Option
           setData(parseInt(changeEvent.target.value),"technology")

          
        }
    }
)

export const technologyHtml = () => {
 
    let html = `
    <div class="box"> <section>
    <label for="tech-types">Technology:  </label>`

    html += `<select id="tech" for="tech-types">`//sets the resource id for the event listener and the label holder
    html += '<option value="0">Select a technology package: </option>' //default option for dropdown menu
    
    const arrayOfOptions = technologys.map(tech => {
        return `<option value="${tech.id}">${tech.type}</option>`
    }
    )
    html += arrayOfOptions.join("") +  "</select></section></div>"

    return html
}