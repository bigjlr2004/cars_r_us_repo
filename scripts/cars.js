import { paintHtml } from "./paint.js"
import { technologyHtml } from "./technology.js"
import { wheelsHtml } from "./wheels.js"
import { interiorHtml } from "./interior.js"

export const carsLayout = () => {
    return `
        <h1>Cars 'R Us: Personal Car Builder</h1>
        <article class="choices">
            <div class="box">
            <section class="paint options">
                <label for="paint-types">Paint:</label>
               ${paintHtml()}
            </section>
            </div>
            <div class="box">
            <section class="choices__technology options">
            <label for="technology-types">Technology:</label>
            ${technologyHtml()}
         </section>
         </div>
         <div class="box">
            <section class="choices__wheels options">
            
            <label for="wheels-types">Wheels:</label>
            ${wheelsHtml()}
         </section>
         </div>
         <div class="box">
         <section class="choices_interior options">
            
         <label for="interior-types">Interior:</label>
         ${interiorHtml()}
      </section>
      </div>
        </article>
        <article>
            <button id="orderButton">Place Car Order</button>
        </article>
        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            
        </article>
    `
}