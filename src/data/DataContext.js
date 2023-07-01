import React from "react";

const data = {
    number: 123,
    text: "Context API..."
}

const DataContext = React.createContext(null);

export { data, DataContext };