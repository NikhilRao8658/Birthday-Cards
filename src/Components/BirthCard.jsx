import { useEffect, useState } from "react";
import axios from "axios";
export default function Birthday() {
    let [Date, setdate] = useState([]);

    useEffect(() => {
        let api = axios.get('http://localhost:9090/BirthData');
        api.then(values => setdate(values.data))
        .catch((e)=> console.error(e))
    }, []);

    let ClearAll = () => {
        setdate([]); 
    };

    return (
        <>
            <h2 id="Heading-1">{Date.length} Birthdays Today</h2>
           
            <div id="Birth-Cards-P">
                <div id="Birth-Cards">
                    {Date.map(x => {
                        return (
                            <div className="card" key={x.name}>
                                <img src={x.image} alt="not found" id="imagesB" />
                                <ruby id="ruby1">{x.name} <rt>{x.Age}</rt></ruby>
                                <span id="dob">{x.Dob}</span>
                            </div>
                        );
                    })}
                </div>
                <div>
                <button id="clear-all" onClick={ClearAll}>Clear All</button>
            </div>
            </div>
        </>
    );
}
