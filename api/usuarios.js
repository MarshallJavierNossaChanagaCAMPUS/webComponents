let headers = new Headers({
    "Content-Type": "application/json"
});
let puerto = 4001;

const postUser = async(arg) =>{
    let config = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(arg)
    }
    return (await ( await fetch(`http://localhost:${puerto}/usuarios`, config)))
}

const getAllUser = async() =>{
    let config = {
        method: "GET",
        headers: headers
    }
    return (await ( await fetch(`http://localhost:${puerto}/usuarios`, config)))
}