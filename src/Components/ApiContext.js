import React from "react";

const ApiContext = React.createContext({
    items: [],
    addItem: (item) => {}
})

export default ApiContext;