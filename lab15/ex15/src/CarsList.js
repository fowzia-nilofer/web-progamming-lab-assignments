import React from "react";

function CarsList(){
    const cars = [
        {id: 1, name: "Toyota"},
        {id: 2, name: "Honda"},
        {id: 3, name: "Ford"}
    ];
    const fruits = ["Apple","Banana","Watermelon","Strawberry"];
    return(
        <>
            <ul>
                {cars.map((i) => (
                    <li key={i.id}>{i.name}</li>
                ))}
            </ul>
            <ul>
                {fruits.map((fruit,index)=>
                    <li key={index}>{fruit}</li>
                )}
            </ul>
        </>
    );
}

export default CarsList;