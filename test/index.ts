type sex = "men" | "women"

interface Person{
    name: string,
    age: number,
    sex?: sex
}

function getPerson(name: string, age: number) :Person{
    return{
        name,
        age,
        sex: "men"
    }
}

getPerson("min", 21)