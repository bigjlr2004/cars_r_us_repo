/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
export const database = {
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
    options: [
        { id: 1, type: "Car", price: 1 },
        { id: 2, type: "SUV", price: 1.5 },
        { id: 3, type: "Truck", price: 2.25}
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
            optionId: 1,
            wheelId: 3,
            interiorId: 4,
            technologyId: 2,
            paintId: 3,
            timestamp: 1614659931693
        }
    ]
}




