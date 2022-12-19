import {database} from "./database.js"

export const getData = (data) => {
    return database[data].map(arr => ({...arr}))
}

export const setData  = (data,option) => {
    database.orderBuilder[`${option}Id`] = data}

    export const addCustomOrder = () => {
        //Copy the current state of user choices
        const newOrder = {...database.orderBuilder}
        if(newOrder.optionId && newOrder.wheelId && newOrder.interiorId && newOrder.technologyId && newOrder.paintId){
    
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
    else 
    window.alert(`Please make sure all options are selected.`)
}