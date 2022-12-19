import { paintHtml } from "./paint.js"
import { technologyHtml } from "./technology.js"
import { wheelsHtml } from "./wheels.js"
import { interiorHtml } from "./interior.js"
import {Orders } from "./orders.js"
import { addCustomOrder } from "./dataAccess.js"
import { CarOptions } from "./options.js"

document.addEventListener(
    "click",
    (event) => {
        if(event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const carsLayout = () => {
    return `
        <h1>Cars 'R Us: Personal Car Builder</h1>
        ${CarOptions()}
        <article class="choices">
           
            ${paintHtml()}
            ${technologyHtml()}
            ${wheelsHtml()}
            ${interiorHtml()}
      
        </article>
        <article>
            <button id="orderButton">Place Car Order</button>
        </article>
        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}