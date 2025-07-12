import { useState, useEffect } from "react"

const RestraMenu =()=>{


    const [resmenu, setResmenu] = useState(null)

    useEffect(()=>{
        fetchMenu();
        // console.log("nandhu");
    },[]);

    const fetchMenu = async ()=>{
        const response = await fetch(
            "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.5366218&lng=78.4844811&restaurantId=550107&submitAction=ENTER"
        )
        const json = await response.json();
        console.log(json);

        setResmenu(json.data);

    };
    const {name, city} = resmenu?.cards[2]?.card?.card?.info || {};

    return resmenu === null ? <h4>Loading....</h4>: (
        <div className="menu">
            <h1>name of Restaurant : {name}</h1>
            <h1>{city}</h1>

            <h1>Menu</h1>
            <ul>
                <li>Shorma</li>
                <li>Biryani</li>
                <li>Chicken 65</li>
            </ul>
        </div>
    )
}

export default RestraMenu