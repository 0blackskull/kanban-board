import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeGrouping, changeOrdering } from "../redux/displayStateSlice";

export default function DisplayButton() {

    const dispatch = useDispatch()

    const { grouping, ordering } = useSelector((state) => state.display) 

    const displayStates = ["Status", "Users", "Priority"];
    const orderStates = ["Priority", "Title"];

    const [isDisplayMenuOpen, setIsDisplayMenuOpen] = useState(false);

    const toggleDisplayMenu = () => {
        setIsDisplayMenuOpen(!isDisplayMenuOpen);
    };

    return (
        <div>
        <button onClick={toggleDisplayMenu}>
            Display
        </button>
        {isDisplayMenuOpen && (
            <div>
            {/* <button onClick={toggleGrouping}>{ currentDisplayState }</button> */}
            <span>Grouping :</span>
            <div>
                <select key="groups" value={grouping} onChange={(e)=>dispatch(changeGrouping(e.target.value))} id="grouping">
                    {displayStates.map(state => (
                        <option key={state} value={state}>{state}</option>
                    ))}
                </select>
            </div>
            {/* <button onClick={toggleOrdering}>{ currentDisplayState }</button> */}
            <span>Ordering :</span>
            <div>
                <select key="order" value={ ordering } onChange={(e)=>dispatch(changeOrdering(e.target.value))} id="ordering">
                    {orderStates.map(state => (
                        <option key={state} value={state}>{state}</option>
                    ))}
                </select>
            </div>
            </div>
        )}
        </div>
    );
}