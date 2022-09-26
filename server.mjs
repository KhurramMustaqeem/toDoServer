import express from 'express';
import cors from 'cors';
const server = express();
const port = process.env.PORT || 3000;

let todoServer = [];

server.use(express.json());
server.use(cors());
server.post('/todo', (req, res) => {
  
todoServer.push(req.body.text);
res.send({
  message : "Your todo is saved", 
  data : todoServer
})

});

server.get('/todos', (req, res) => {
  
  res.send({
    message :  "Here is your todo list",
    data : todoServer
  })
});

server.get('/coffee', (req, res) => {
  console.log(`someone is looking for coffee`);
  res.send('Here is your coffee sir')
});

server.listen(port, () => {
  console.log(`App listning on port ${port}`);
});