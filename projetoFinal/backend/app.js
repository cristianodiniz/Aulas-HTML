var express = require("express");
var bodyParser = require("body-parser");
var connectMultiparty = require("connect-multiparty");
var http = require("http");
var fs = require("fs");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(connectMultiparty());
//app.use(multiparty());

app.use((req, res, next) => {
  //res.header('Access-Control-Allow-Origin', 'https://crm.tolidistribuidora.com.br')
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

var serverHttp = http.createServer(app);

var io = require("socket.io").listen(serverHttps);
app.set("sck", io);

io.on("connection", function(socket) {
  console.log("Usuário conectou");

  console.log(socket.client.conn.remoteAddress);
  console.log(socket.handshake.url);
  socket.on("disconnect", function() {
    console.log("Usuário desconectou");
  });
});

app.post("/nova_tarefa", function(req, res) {
  var dadosForm = req.body;
  console.log("Notificando USU_ID" + dadosForm.usu_id);
  app.get("sck").emit("USU_ID" + dadosForm.usu_id, dadosForm);
  res.send("ok");
});

serverHttp.listen(9091, function() {
  console.log("Servidor online 9091");
});
