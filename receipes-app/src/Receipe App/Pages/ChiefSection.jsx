import CardChief from "./CardChief";

export default function ChiefSection(){
    const chiefs = [
        {
            name: "Juan Carlos",
            img: "/Cheifs pictures/CHEIF 1.jpg",
            receipeCount: "10",
            cuisine: "Mexican",
        },
        {
            name: "Jone Croftline",
            img: "/Cheifs pictures/CHEIF 3.jpg",
            receipeCount: "05",
            cuisine: "Japanese",
        },
        {
            name: "Erich Maria",
            img: "/Cheifs pictures/CHEIF 2.jpg",
            receipeCount: "13",
            cuisine: "Italien",
        },
        {
            name: "Chris Browny",
            img: "Cheifs pictures/CHEIF 4.jpg",
            receipeCount: "08",
            cuisine: "American",
        },
        {
            name: "Black Mohaydin",
            img: "/Cheifs pictures/CHEIF 5.jpg",
            receipeCount: "16",
            cuisine: "Moroccain",
        },
        {
            name: "Black lively",
            img: "/Cheifs pictures/CHEIF 6.jpg",
            receipeCount: "09",
            cuisine: "French",
        },
    ]
    return(
        <div className="section chiefs">

            <h1 className="title">Our Top Chiefs</h1>
            <div className="top-chiefs-container">
                {chiefs.map(chief => 
                    <CardChief key ={chief.name} chief={chief}/>
                )}
            </div>
        </div>
    )
}