const initialState = {
    users: [
        {
            id: 1,
            name: "Thomas",
        },
        {
            id: 2,
            name: "Sian",
        }
    ],
    currentUser: {
        id: 1,
        name: "Thomas",
    },
    gifts: [{
        id: "New Keyboard",
        description: 'Cherry MX silver keys TKL',
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/812-9gZiusL._SL1500_.jpg",
        reserved: 2,
    }, {
        id: "Valve Index",
        description: "Valves latest VR headset",
        imageUrl: "https://www.wareable.com/media/images/2020/01/dsc-0307-1579249636-yKwM-column-width-inline.jpg",
        reserved: undefined,
    }, {
        id: "IntelliJ IDEA Ultimate",
        description: "IDE to replace VSCode",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/IntelliJ_IDEA_Logo.svg/1200px-IntelliJ_IDEA_Logo.svg.png",
        reserved: 2,
    }]
}