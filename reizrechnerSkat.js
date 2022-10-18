// rausfinden was x - je nach buben
// rausfinden was y - je nach Farbe
// x*y 
// spezialfarben null, nullouvert usw



const reizrechnerSkat = (farbe, ...buben)=>{
    let x, y;
    farbe = farbe.toLowerCase()
    // buben = buben.split(" ").toLowerCase()

    // Finding x
    if (farbe === "grand" ){
        x = 24
    }
    if (farbe === "kreuz" || farbe === "spades"){
        x = 12
    }
    if (farbe === "pik"|| farbe === "clubs"){
        x = 11
    }
    if (farbe === "herz"|| farbe === "hearts"){
        x = 10
    }
    if (farbe === "karo"|| farbe === "diamonds"){
        x = 9
    }
    // defining specials: null, null hand, null ouvert and null ouvert hand
    if (farbe === "null"){
        return 23
    }
    if (farbe === "null hand"){
        return 35
    }
    if (farbe === "null ouvert"){
        return 46
    }
    if (farbe === "null ouvert hand"){
        return 59   
    }
    // Finding y
    // mit 1, spiel 2
    if (
    ((buben.includes("kreuz") || buben.includes("spades"))
    && (buben.includes("pik") === false || buben.includes("clubs") === false))
    // ohne 1, spiel 2
    || 
    ((buben.includes("kreuz") === false || buben.includes("spades") === false)
    && (buben.includes("pik") || buben.includes("clubs")))
    )
    {
        y = 2
        return x*y
    }
    // mit 2, spiel 3
    if (
        ((buben.includes("kreuz")|| buben.includes("spades"))
        && (buben.includes("pik")|| buben.includes("clubs") ))
    // ohne zwei spiel 3
    || ((buben.includes("kreuz")=== false || buben.includes("spades") === false)
    && (buben.includes("pik") === false || buben.includes("clubs") === false))
    )
    {
        y = 3
        return x*y
    }
    // ohne 3 spiel 4
    if ((buben.includes("kreuz")=== false || buben.includes("spades") === false)
    && (buben.includes("pik") === false || buben.includes("clubs") === false)
    && (buben.includes("herz") === false || buben.includes("hearts") === false)
    || 
    //mit 3 spiel 4
    (buben.includes("kreuz")|| buben.includes("spades")
    && (buben.includes("pik")|| buben.includes("clubs"))
    && (buben.includes("herz") || buben.includes("hearts"))))
    {
        y = 4
        return x*y
    }
    // ohne 4 spiel 5
    if (( buben.length === 0)
    || 
    // mit 4 spiel 5
    (((buben.includes("kreuz") || buben.includes("spades"))
    && (buben.includes("pik") || buben.includes("clubs"))
    && (buben.includes("herz") || buben.includes("hearts"))
    && (buben.includes("karo") || buben.includes("diamonds"))
    )))
    {
        y = 5
        return x*y
    }

}

console.log(reizrechnerSkat("kreuz", "kreuz", "herz"))
console.log(reizrechnerSkat("null"))
console.log(reizrechnerSkat("pik", "pik", "herz"))

