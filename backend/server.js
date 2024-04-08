import express  from "express";
const app=express()
const port =process.env.PORT || 3000;
app.get('/',(req,res)=>{
    res.send('server is connected succcessfully')
});
app.get('/api/data',(req,res)=>{
    const data=[
          {
            "id": 1,
            "name": "John",
            "age": 30
          },
          {
            "id": 2,
            "name": "Alice",
            "age": 25
          },
          {
            "id": 3,
            "name": "Michael",
            "age": 35
          },
          {
            "id": 4,
            "name": "Emily",
            "age": 28
          },
          {
            "id": 5,
            "name": "David",
            "age": 40
          }
        ]
    res.send(data)
})
app.listen(port,()=>{
console.log(`server is running at ${port}`)
})