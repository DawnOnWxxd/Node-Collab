const getReqAll = (req,res)=>{
    console.log("GET REQ")
    res.send("GET REQ ALL")
}

const postReq = (req,res)=>{
    console.log("POST REQ")
    res.send(`POST REQ --body-${req.body.key}`)
}

const getReqSingle = (req,res)=>{
    const {id} = req.params
    console.log("GET REQ")
    res.send(`GET REQ SINGLE --id-${id}`)
}


const patchReq = (req,res)=>{
    console.log("PATCH REQ")
    res.send(`PATCH REQ --id-${req.params.id}`)
}

const deleteReq = (req,res)=>{
    console.log("DELETE REQ")
    res.send(`DELETE REQ --id-${req.params.id}`)
}

module.exports = {
    getReqAll,
    postReq,
    getReqSingle,
    patchReq,
    deleteReq,
}