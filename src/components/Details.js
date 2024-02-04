function Details({person}){
    const {name,age} = person;
    return(
        <>
            <h1>Name: {name}</h1>
            <h2>Age: {age}</h2>
        </>
    );
}

export default function Generate(){
    const person = {name:"Swastik",age:20};
    return(
        <Details person={person}/>
    );
}