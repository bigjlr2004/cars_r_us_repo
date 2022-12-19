import { getData } from "./dataAccess.js"
//calls the database to get the metals 
const technology = getData("technology")
const interior = getData("interior")
const paint = getData("paint")
const wheels = getData("wheel")
const options = getData("options")


const buildOrderListItem = (order) => {
    
    //retuns the metal object that matches the metal id for the order
    const foundTech = technology.find(
    (technology) => {
        return technology.id === order.technologyId
    }
)
const foundWheel = wheels.find(
    (wheel) => {
        return wheel.id === order.wheelId
    }
)
const foundOption = options.find(
    (option) => {
        return option.id === order.optionId
    }
)

const foundInterior = interior.find(
    (interior) => {
        return interior.id === order.interiorId
    }
)
const foundPaint = paint.find(
    (paint) => {
        return paint.id === order.paintId
    }
)
const totalCost = (foundTech.price + foundPaint.price + foundInterior.price + foundWheel.price) * foundOption.price

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})

    return `<li>
        Order #${order.id}  for a ${foundPaint.name} ${foundOption.type} with ${foundInterior.type} Interior, a
        ${foundWheel.type} Wheels Package, and a ${foundTech.type} that 
        cost ${costString} was placed. 
    </li>`
}



export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getData("customOrders")

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
