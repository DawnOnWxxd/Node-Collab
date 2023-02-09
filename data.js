let people = [
    {id:1, name:"AAA"},
    {id:2, name:"BBB"},
    {id:3, name:"CCC"},
    {id:4, name:"DDD"},
    {id:5, name:"EEE"},
]

const add = (name)=>{
    const id_ = people.length + 1
    people.push({id:id_, name:`${name}`})
    
}


module.exports = {people,add};