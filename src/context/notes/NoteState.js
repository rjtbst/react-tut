import { useState } from "react"
import NoteContext from "./NoteContext"

//used in about

const NoteState = (props) => {
    const state1 = {
        name: "rjt",
        email: "rjt@abc.com"
    }
    const [state, setState] = useState(state1)
    function update() {
        setTimeout(() => {
            setState({
                name: "kannu",
                email: "kannu@abc.com"
            })
        }, 2000)
    }
    const [price , setPrice] = useState(0)
    function priceUpdate (){
        setPrice(price+10)
    }
    return (
        <NoteContext.Provider value={{update, state, priceUpdate, price }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;