import React, { useState } from "react";

const storage = {
    numberTwo: 182,
    textTwo: "Miguel Pereira..."
}

const storageContext = React.createContext(storage);

const Storage = props => {
    const [state, setState] = useState(storage);

    function updateState(key, value) {
        setState({
            ...state,
            [key]: value
        })
    }

    return (
        <storageContext.Provider
            value={{
                textTwo: state.textTwo,
                numberTwo: state.numberTwo,
                setText: e => updateState('textTwo', e),
                setNumber: n => updateState('numberTwo', n)
            }}
        >
            {props.children}
        </storageContext.Provider>
    )
}

export default Storage;
export { storageContext };