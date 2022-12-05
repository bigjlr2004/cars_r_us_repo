/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
const database = {
    orderBuilder: {}, // this database is used to store the state

    paint: [
        { id: 1, name: "Silver", price: 500 },
        { id: 2, name: "Midnight Blue", price: 710 },
        { id: 3, name: "Firebrick Red", price: 965 },
        { id: 4, name: "SpringGreen", price: 799}
    ],
    interior: [
        { id: 1, type: "Beige Fabric", price: 405 },
        { id: 2, type: "Charcoal Fabric", price: 782 },
        { id: 3, type: "White Leather", price: 1470 },
        { id: 4, type: "Black Leather", price: 1997 }
    ],
    technology: [
        { id: 1, type: "Basic", price: 499 },
        { id: 2, type: "Navigation", price: 699.99 },
        { id: 3, type: "Visibility", price: 899 },
        { id: 4, type: "Ultra", price: 795.45 }
    ],
    wheel: [
        { id: 1, type: "17-inch Pair Radial", price: 800 },
        { id: 2, type: "17-inch Pair Radial Black", price: 900 },
        { id: 3, type: "18-inch Pair Spoke Silver", price: 1100 },
        { id: 4, type: "18-inch Pair Spoke Black", price: 1200 }
    ],
    customOrders: [
        {
            id: 1,
            wheelId: 3,
            interiorId: 4,
            technologyId: 2,
            paintId: 3,
            timestamp: 1614659931693
        }
    ]
}
export const addCustomOrder = () => {
    //Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    //add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    //add a timestamp to the order
    newOrder.timestamp = Date.now()

    //add the new order object to custom orders state
    database.customOrders.push(newOrder)

    //reset the temporary state for user choices
    database.orderBuilder = {}

    //Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getCustomOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const getPaint = () => {
    return database.paint.map(paint => ({...paint}))
}
export const getTechnology = () => {
    return database.technology.map(tech => ({...tech}))
}

export const getWheels = () => {
    return database.wheel.map(wheel => ({...wheel}))
}

export const getInterior = () => {
    return database.interior.map(interior => ({...interior}))
}

export const setInterior  = (id) => {
    database.orderBuilder.interiorId = id
}
export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}