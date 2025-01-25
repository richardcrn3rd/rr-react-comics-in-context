import React, { useContext } from "react";
import StylesContext from "./components/StylesContext";

export default function RequestFormButton() {
    const buttonStyling = useContext(StylesContext)

    return (
        <div>
            <button>
                Click Here!
            </button>
            <input type="submit" value="Submit" style={buttonStyling} />
        </div>
    );
}