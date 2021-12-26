const express = require("express");
const mysql = require("mysql");
const { connect, end } = require ("./connect");
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const con = require ("./connect");
// connect to mysql
con.connect((err) => {
    if(err){
        console.log('connection not succeded!');
    }else{
        console.log('connection succeded!');
    }
});
const port = process.env.port || 5001;
app.listen(port);
console.log("server listen..");
let fetch = "Select * from cars";
con.query(fetch,(err,result)=>{
    if(err){
        console.log("Errrr");
    }else{
        console.log('result');
    }
});
//Displaying cars 
app.post("/List", (req, res) => {
  //console.log("eerr");
    //const username = req.body.username;
    //const userpassword = req.body.password;
  
   // console.log(username, userpassword);
    con.query("Select * from cars", (err, result) => {
      if (err) {
        console.log("Error");
        res.send({ err: err });
      }
      if(result) {
        console.log('result');
        res.send(result);
      } else {
        console.log("Shit");
        res.send({ msg: "No User Found" });
      }
    });
  });
  app.post("/Listkarachi", (req, res) => {
    console.log("eerr");
      const username = req.body.username;
      const userpassword = req.body.password;
    
      console.log(username, userpassword);
      con.query("Select * from cars where idlocation = 500", (err, result) => {
        if (err) {
          console.log("Error");
          res.send({ err: err });
        }
        if (result) {
          console.log('result');
          res.send(result);
        } else {
          console.log("Shit");
          res.send({ msg: "No User Found" });
        }
      });
    });
    app.post("/Listlahore", (req, res) => {
      console.log("eerr");
        const username = req.body.username;
        const userpassword = req.body.password;
      
        console.log(username, userpassword);
        con.query("Select * from cars where idlocation = 501", (err, result) => {
          if (err) {
            console.log("Error");
            res.send({ err: err });
          }
          if (result) {
            console.log('result');
            res.send(result);
          } else {
            console.log("Shit");
            res.send({ msg: "No User Found" });
          }
        });
      });
      app.post("/Listislamabad", (req, res) => {
        console.log("eerr");
          const username = req.body.username;
          const userpassword = req.body.password;
        
          console.log(username, userpassword);
          con.query("Select * from cars where idlocation = 502", (err, result) => {
            if (err) {
              console.log("Error");
              res.send({ err: err });
            }
            if (result) {
              console.log('result');
              res.send(result);
            } else {
              console.log("Shit");
              res.send({ msg: "No User Found" });
            }
          });
        });
   
 
    {/*var sql = "INSERT INTO member (email, password) VALUES ('hamza@gmail.com', 'Blue123')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted, ID: " + result.insertId);
  
    });*/}
   
//Login page
  app.post("/Login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    value = [email,password];
    console.log(email, password);
    con.query(
      "select * from member where Email=? and password=?",
      [email, password],
      (err, result) => {
        if (err) {
          console.log(err);
          res.send({ err: err });
        }
        if(result.length == 1){
          console.log("User id Matched");
          console.log(result.length);
          res.send(result);
        }else{
          console.log("Shit");
          res.send({ message: "No user Found" });
         // console.log("Shit");
          //res.send({ msg: "No user Found" });
         // var sql = "INSERT INTO member (email, password) VALUES (?,?)";
          //con.query(sql, [email,password], function (err, result) {
           // if (err) throw err;
            //console.log("1 record inserted, ID: " + result.insertId);
        
       //   });
      }
    }
  );
});
//Sign up page for registration
app.post("/Signup", (req, res) => {
  const email = req.body.email;
    const password = req.body.password;
    value = [email,password];
    console.log(email, password);
    con.query(
      "INSERT INTO member (email, password) VALUES (?,?)",[email,password],function (err, result) {
        if (err) {
          console.log(err);
          res.send({ msg: "enter correct format" });
        }else{
          console.log("1 record inserted, ID: " + result.insertId);
          res.send(result);
        }
      }
    );
  });
  //checkout page
  app.post("/Checkout", (req, res) => {
    const no_plate = req.body.no_plate;
    console.log(no_plate);
    con.query(
      "select * from cars where no_plate = (?)",
      [no_plate],
      (err, result) => {
        if (err) {
          console.log(err);
          res.send({ err: err });
        }
        if(result.length){
          console.log("User id Matched");
          //console.log(result);
          res.send(result);
        }else{
          console.log("Shit");
          res.send({ message: "No user Found" });
         
      }
    }
  );
});
app.post("/checkavailability", (req, res) => {
  const startdate = req.body.startdate;
  const enddate = req.body.enddate;
  const numplate = req.body.no_plate;
  //console.log(startdate,numplate.no_plate)
  con.query(
    'SELECT * FROM booking WHERE no_plate = ? AND ((date_end > ?) AND (date_start < ?));',
    [numplate.no_plate,startdate,enddate],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err });
      }
      if(result.length == 0){
        console.log("car found");
        console.log(result);
        //console.log(result);
        res.send(result);
      }else{
        console.log('car not found');
        res.send({msg:"Car not found"});
       
      }
    }
  );
});

app.post("/calculatedays", (req, res) => {
  const startdate = req.body.startdate;
  const enddate = req.body.enddate;
  const numplate = req.body.no_plate;
  //console.log(startdate,numplate.no_plate)
  con.query(
    "SELECT DATEDIFF(?, ?) as days",
    [enddate,startdate],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err });
      }
      if(result.length){
        //console.log(result);
        console.log(result);
        res.send(String(result[0].days));
        //console.log(result[0]);
      }else{
        console.log('error calculating days');
        res.send("Car not found");
       
      }
    }
  );
});
app.post("/insert", (req, res) => {
    const fullname = req.body.fullname;
    const startdate = req.body.startdate;
    const enddate = req.body.enddate;
    const numplate = req.body.no_plate;
    const email = req.body.email;
    const days = req.body.days
    console.log(days);
    con.query(
      "INSERT INTO customer (customer_name,email,item) VALUES (?,?,?)",[fullname,email,"Car"],function (err, result) {
        if (err) {
          console.log(err);
          res.send({ msg: "enter correct format" });
        }else{
          console.log("1 record inserted in customer, ID: " + result.insertId);
          let ID = result.insertId;
          con.query(
            "INSERT INTO booking (date_start,date_end,no_plate,paidstatus,idcustomer,days) VALUES (?,?,?,?,?,?)",[startdate,enddate,numplate.no_plate,1,ID,days],function (err,result){
              if(err) {
                console.log(err);
                res.send({ msg: "enter correct format" });
              }else{
                console.log("1 record inserted in booking, ID: " + result.insertId);
              }
            }
          )
        }
      }
    );
  });
/*Booking Management*/
  app.post("/carbooking", (req, res) => {
    const startdate = req.body.startdate;
    const enddate = req.body.enddate;
    const email = req.body.email;
   // console.log(startdate,enddate);
    con.query(
      "select idcustomer from customer where email = ? and item = 'Car';",
      [email],
      (err, result) => {
        if (err) {
          console.log(err);
          res.send({ err: err });
        }
        if(result.length==1){
          //console.log(result);
         // console.log(result[0].idcustomer);
          const id = result[0].idcustomer;
          con.query(
            "SELECT idbooking FROM booking WHERE idcustomer = ? AND ((date_end > ?) AND (date_start < ?));",
            [result[0].idcustomer,startdate,enddate],
            (err, response) => {
              if (err) {
                console.log(err);
                res.send({ err: err });
              }
              if(response.length == 0){
               // const book = response[0].idbooking;
                //console.log(result[0].idcustomer);
               // console.log(id);
                con.query(
                  "UPDATE booking SET date_start = ? , date_end = ?  where idcustomer=? ",
                  [startdate,enddate,result[0].idcustomer],
                  function (err, result) {
                    if (err) {
                      console.log(err);
                      res.send({ msg: "enter correct format" });
                    }else{
                      console.log("dates updated  ID: ");
                      //res.send(result);
                      con.query(
                        "SELECT DATEDIFF(?, ?) as days",
                        [enddate,startdate],
                          (err, result) => {
                            if (err) {
                              console.log(err);
                              res.send({ err: err });
                            }
                            if(result.length){
                              //console.log(result);
                             // res.send(String(result[0].days));
                              con.query(
                                "UPDATE booking SET days = ?  where idcustomer=?",
                                [result[0].days,id],
                                (err, response) => {
                                  if (err) {
                                    console.log(err);
                                    res.send({ err: err });
                                  }else{
                                    console.log("days updated  ID: ");
                                    //res.send(String(result[0].days));
                                    con.query(
                                      "select rate from cars where no_plate = (select no_plate from booking where idcustomer = ?)",
                                      [id],
                                      (err, response) => {
                                        if (err) {
                                          console.log(err);
                                          res.send({ err: err });
                                        }else{
                                          console.log(response);
                                          res.send(response);
                                        }
                                      }

                                    )
                                  }
                                }
                              )
                              //console.log(result[0]);
                            }else{
                              console.log('error calculating days');
                              res.send("Car not found");
                            
                            }
                          }
                      )
                    }
              }
          )
          //console.log(result[0]);
        }else{
          console.log(response);
          con.query(
            "select idcustomer from booking where idbooking = ?",
            [response[0].idbooking],
            (err, result) => {
              if (err) {
                console.log(err);
                res.send({ err: err });
              }else if(result[0].idcustomer == id){
                console.log("response matched");
                console.log(result);
                con.query(
                  "UPDATE booking SET date_start = ? , date_end = ?  where idcustomer=? ",
                  [startdate,enddate,id],
                  function (err, result) {
                    if (err) {
                      console.log(err);
                      res.send({ msg: "enter correct format" });
                    }else{
                      console.log("dates updated  ID: " + result.insertId);
                      //res.send(result);
                      con.query(
                        "SELECT DATEDIFF(?, ?) as days",
                        [enddate,startdate],
                          function(err, response){
                            if (err) {
                              console.log(err);
                              res.send({ err: err });
                            }
                            if(response.length){
                              console.log(response);
                              res.send(String(response[0].days));
                              con.query(
                                "UPDATE booking SET days = ?  where idcustomer=?",
                                [response[0].days,id],
                                (err, result) => {
                                  if (err) {
                                    console.log(err);
                                    res.send({ err: err });
                                  }else{
                                    console.log("days updated  ID: ");
                                    con.query(
                                      "select rate from cars where no_plate = (select no_plate from booking where idcustomer = ?)",
                                      [id],
                                      (err, response) => {
                                        if (err) {
                                          console.log(err);
                                          res.send({ err: err });
                                        }else{
                                          console.log(response);
                                          res.send(response);
                                        }
                                      }

                                    )
                                    //res.send(String(result[0].days));
                                  }
                                }
                              )
                              //console.log(result[0]);
                            }else{
                              console.log('error calculating days');
                              res.send("Car not found");
                            
                            }
                          }
                      )
                    }
              }
          )

              }
            }
          )
          res.send("Car not found");
         
        }
      }
    );
    }
  });
});
app.post("/getbookingid", (req, res) => {
  const email = req.body.email;
  con.query(
    "select days from booking where idbooking = (select idbooking from booking where idcustomer = (select idcustomer from customer where email = ?));",
    [email],
    function (err, result) {
      if (err) {
        //console.log(err);
        res.send({ msg: "enter correct format" });
      }else if(result){
        console.log(result);
        res.send(result);
      }else{
        res.send({ msg: "enter correct format" });

      }
    }
  );
});
app.post("/deletecarbooking", (req, res) => {
  const email = req.body.email;
  con.query(
    "DELETE FROM booking where idcustomer = (select idcustomer from customer where email = ? and item ='Car'); ",
    [email],
    function (err, result) {
      if (err) {
        console.log(err);
        res.send({ msg: "enter correct format" });
      }else{
        console.log("deleted");
        //res.send({ msg: "enter correct format" });
        con.query(
          "DELETE from customer where email = ? and item ='Car';",
          [email],
          function (err, result) {
            if (err) {
              console.log(err);
              res.send({ msg: "enter correct format" });
            }else{
              res.send({ msg: "enter correct format" });
            }
          }
        )
      }
    }
  );
});
//Manage bookings ends here
  
//For Admin module
  app.post("/Add", (req, res) => {
      const name =  req.body.name;
      const model =  req.body.model;
      const no_plate = req.body.no_plate;
      const color =  req.body.color;
      const brand =  req.body.brand;
      const seats = req.body.seats;
      const rate = req.body.rate;
      const city = req.body.city;
      con.query(
        "INSERT INTO cars (name,model,no_plate,colour,brand,seats,rate,idlocation) VALUES (?,?,?,?,?,?,?,?)",[name,model,no_plate,color,brand,seats,rate,city],function (err, result) {
          if (err) {
            console.log(err);
            res.send({ msg: "enter correct format" });
          }else{
            console.log("1 record inserted, ID: " + result.insertId);
            res.send(result);
          }
        }
      );
    });
    app.post("/Delete", (req, res) => {
      const no_plate = req.body.no_plate;
      con.query(
        "UPDATE booking SET no_plate = (?) WHERE no_plate = (?); ",[null,no_plate],function (err, result){
          if (err) {
            console.log(err);
            res.send({ msg: "enter correct format" });
          }else{
            console.log("1 record updated, ID: " + result.insertId);
            con.query(
              "DELETE FROM cars WHERE no_plate = (?); ",[no_plate],function (err, result){
                if (err) {
                  console.log(err);
                  res.send({ msg: "enter correct format" });
                }else{
                  console.log("1 record deleted, ID: " + result.insertId);
                  res.send(result);
                }
              }
            );
          }
        }
      );
    });
    app.post("/airbnbAdd", (req, res) => {
      const type = req.body.type;
      const rate = req.body.rate;
      const Class = req.body.class;
      const rooms = req.body.rooms;
      con.query(
        "INSERT INTO airbnb (type,rate,rooms,class) VALUES (?,?,?,?)",[type,rate,rooms,Class],function (err, result) {
          if (err) {
            console.log(err);
            res.send({ msg: "enter correct format" });
          }else{
            console.log("1 record inserted, ID: " + result.insertId);
            res.send(result);
          }
        }
      );
    });
    app.post("/airbnbdelete", (req, res) => {
      const idAirbnb = req.body.idAirbnb;
      con.query(
        "UPDATE airbnbbooking SET idAirbnb = (?) WHERE idAirbnb = (?); ",[null,idAirbnb],function (err, result){
          if (err) {
            console.log(err);
            res.send({ msg: "enter correct format" });
          }else{
            console.log("1 record updated, ID: " + result.insertId);
            con.query(
              "DELETE FROM airbnb WHERE idAirbnb = (?); ",[idAirbnb],function (err, result){
                if (err) {
                  console.log(err);
                  res.send({ msg: "enter correct format" });
                }else{
                  console.log("1 record deleted, ID: " + result.insertId);
                  res.send(result);
                }
              }
            );
          }
        }
      );
    });
//Airbnb section
app.post("/Airbnb", (req, res) => {
  //console.log("eerr");
  const type = req.body.type;
    con.query("Select * from airbnb where type = ?",[type], (err, result) => {
      if (err) {
        console.log("Error");
        res.send({ err: err });
      }
      if (result) {
        //console.log(result);
        res.send(result);
      } else {
        console.log("Shit");
        res.send({ msg: "No User Found" });
      }
    });
  });
  app.post("/type", (req, res) => {
      con.query("select type , count(type) as count from airbnb group by type;", (err, result) => {
        if (err) {
          console.log("Error");
          res.send({ err: err });
        }
        if (result) {
          console.log('result');
          //console.log(result);
          res.send(result);
        } else {
          console.log("Shit");
          res.send({ msg: "No User Found" });
        }
      });
    });
    
  app.post("/ascending", (req, res) => {
    const type = req.body.type;
    con.query("select * from airbnb  where type= ? order by rate asc;", [type],(err, result) => {
      if (err) {
        console.log("Error");
        res.send({ err: err });
      }
      if (result) {
        console.log('result');
        //console.log(result);
        res.send(result);
      } else {
        console.log("Shit");
        res.send({ msg: "No User Found" });
      }
    });
  });
  app.post("/descending", (req, res) => {
    const type = req.body.type;
    con.query("select * from airbnb  where type= ? order by rate desc;", [type],(err, result) => {
      if (err) {
        console.log("Error");
        res.send({ err: err });
      }
      if (result) {
        console.log('result');
        //console.log(result);
        res.send(result);
      } else {
        console.log("Shit");
        res.send({ msg: "No User Found" });
      }
    });
  });
  app.post("/lockarachi", (req, res) => {
    const type = req.body.type;
    con.query("select * from airbnb  where type= ? AND idlocation = 500;", [type],(err, result) => {
      if (err) {
        console.log("Error");
        res.send({ err: err });
      }
      if (result) {
        console.log('result');
        console.log(type);
        //console.log(result);
        res.send(result);
      } else {
        console.log("Shit");
        res.send({ msg: "No User Found" });
      }
    });
  });
  app.post("/loclahore", (req, res) => {
    const type = req.body.type;
    con.query("select * from airbnb  where type= ? AND idlocation=501;", [type],(err, result) => {
      if (err) {
        console.log("Error");
        res.send({ err: err });
      }
      if (result) {
        console.log('result');
        //console.log(result);
        res.send(result);
      } else {
        console.log("Shit");
        res.send({ msg: "No User Found" });
      }
    });
  });
  app.post("/locislamabad", (req, res) => {
    const type = req.body.type;
    con.query("select * from airbnb  where type= ? AND idlocation=502;", [type],(err, result) => {
      if (err) {
        console.log("Error");
        res.send({ err: err });
      }
      if (result) {
        console.log('result');
        //console.log(result);
        res.send(result);
      } else {
        console.log("Shit");
        res.send({ msg: "No User Found" });
      }
    });
  });
  app.post("/lochunza", (req, res) => {
    const type = req.body.type;
    con.query("select * from airbnb  where type= ? AND idlocation=503;", [type],(err, result) => {
      if (err) {
        console.log("Error");
        res.send({ err: err });
      }
      if (result) {
        console.log('result');
        //console.log(result);
        res.send(result);
      } else {
        console.log("Shit");
        res.send({ msg: "No User Found" });
      }
    });
  });
  /*airbnb checkout */
    app.post("/airbnbCheckout", (req, res) => {
    const idAirbnb = req.body.idAirbnb;
    console.log(idAirbnb);
    con.query(
      "select * from airbnb where idAirbnb = (?)",
      [idAirbnb],
      (err, result) => {
        if (err) {
          console.log(err);
          res.send({ err: err });
        }
        if(result.length){
          console.log("User id Matched");
          //console.log(result);
          res.send(result);
        }else{
          console.log("Shit");
          res.send({ message: "No user Found" });
         
      }
    }
  );
});
app.post("/airbnbavailability", (req, res) => {
  const startdate = req.body.startdate;
  const enddate = req.body.enddate;
  const idAirbnb = req.body.idAirbnb;
  //console.log(startdate,numplate.no_plate)
  con.query(
    'SELECT * FROM airbnbbooking WHERE idAirbnb = ? AND ((dateend > ?) AND (datestart < ?));',
    [idAirbnb.idAirbnb,startdate,enddate],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err });
      }
      if(result.length == 0){
        console.log("airbnb found");
        console.log(result);
        //console.log(result);
        res.send(result);
      }else{
        console.log('airbnb not found');
        res.send({msg:"Car not found"});
       
      }
    }
  );
});

app.post("/calculateairbnbdays", (req, res) => {
  const startdate = req.body.startdate;
  const enddate = req.body.enddate;
  const idAirbnb = req.body.idAirbnb;
  console.log(idAirbnb)
  con.query(
    "SELECT DATEDIFF(?, ?) as days",
    [enddate,startdate],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err });
      }
      if(result){
        //console.log(result);
        console.log(result);
        console.log(String(result[0].days))
        res.send(String(result[0].days));
        //console.log(result[0]);
      }else{
        console.log('error calculating days');
        res.send("Car not found");
       
      }
    }
  );
});

app.post("/insertairbnb", (req, res) => {
  const fullname = req.body.fullname;
  const startdate = req.body.startdate;
  const enddate = req.body.enddate;
  const idAirbnb = req.body.idAirbnb;
  const email = req.body.email;
  const days = req.body.days
  console.log(days);
  con.query(
    "INSERT INTO customer (customer_name,email,item) VALUES (?,?,?)",[fullname,email,"Airbnb"],function (err, result) {
      if (err) {
        console.log(err);
        res.send({ msg: "enter correct format" });
      }else{
        console.log("1 record inserted in customer, ID: " + result.insertId);
        let ID = result.insertId;
        console.log(idAirbnb.idAirbnb);
        con.query(
          "INSERT INTO airbnbbooking (datestart,dateend,idAirbnb,paidstatus,idcustomer,days) VALUES (?,?,?,?,?,?)",[startdate,enddate,idAirbnb.idAirbnb,1,ID,days],function (err,result){
            if(err) {
              console.log(err);
              res.send({ msg: "enter correct format" });
            }else{
              console.log("1 record inserted in booking, ID: " + result.insertId);
            }
          }
        )
      }
    }
  );
});
app.post("/airbnbbooking", (req, res) => {
  const startdate = req.body.startdate;
  const enddate = req.body.enddate;
  const email = req.body.email;
 // console.log(startdate,enddate);
  con.query(
    "select idcustomer from customer where email = ? and item = 'Airbnb';",
    [email],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err });
      }
      if(result.length==1){
        //console.log(result);
       // console.log(result[0].idcustomer);
        const id = result[0].idcustomer;
        con.query(
          "SELECT idbooking FROM airbnbbooking WHERE idcustomer = ? AND ((dateend > ?) AND (datestart < ?));",
          [result[0].idcustomer,startdate,enddate],
          (err, response) => {
            if (err) {
              console.log(err);
              res.send({ err: err });
            }
            if(response.length == 0){
             // const book = response[0].idbooking;
              //console.log(result[0].idcustomer);
             // console.log(id);
              con.query(
                "UPDATE airbnbbooking SET datestart = ? , dateend = ?  where idcustomer=? ",
                [startdate,enddate,result[0].idcustomer],
                function (err, result) {
                  if (err) {
                    console.log(err);
                    res.send({ msg: "enter correct format" });
                  }else{
                    console.log("dates updated  ID: ");
                    //res.send(result);
                    con.query(
                      "SELECT DATEDIFF(?, ?) as days",
                      [enddate,startdate],
                        (err, result) => {
                          if (err) {
                            console.log(err);
                            res.send({ err: err });
                          }
                          if(result.length){
                            //console.log(result);
                           // res.send(String(result[0].days));
                            con.query(
                              "UPDATE airbnbbooking SET days = ?  where idcustomer=?",
                              [result[0].days,id],
                              (err, response) => {
                                if (err) {
                                  console.log(err);
                                  res.send({ err: err });
                                }else{
                                  console.log("days updated  ID: ");
                                  //res.send(String(result[0].days));
                                  con.query(
                                    "select rate from airbnb where idAirbnb = (select idAirbnb from airbnbbooking where idcustomer = ?)",
                                    [id],
                                    (err, response) => {
                                      if (err) {
                                        console.log(err);
                                        res.send({ err: err });
                                      }else{
                                        console.log(response);
                                        res.send(response);
                                      }
                                    }

                                  )
                                }
                              }
                            )
                            //console.log(result[0]);
                          }else{
                            console.log('error calculating days');
                            res.send("Car not found");
                          
                          }
                        }
                    )
                  }
            }
        )
        //console.log(result[0]);
      }else{
        console.log(response);
        con.query(
          "select idcustomer from airbnbbooking where idbooking = ?",
          [response[0].idbooking],
          (err, result) => {
            if (err) {
              console.log(err);
              res.send({ err: err });
            }else if(result[0].idcustomer == id){
              console.log("response matched");
              console.log(result);
              con.query(
                "UPDATE airbnbbooking SET datestart = ? , dateend = ?  where idcustomer=? ",
                [startdate,enddate,id],
                function (err, result) {
                  if (err) {
                    console.log(err);
                    res.send({ msg: "enter correct format" });
                  }else{
                    console.log("dates updated  ID: " + result.insertId);
                    //res.send(result);
                    con.query(
                      "SELECT DATEDIFF(?, ?) as days",
                      [enddate,startdate],
                        function(err, response){
                          if (err) {
                            console.log(err);
                            res.send({ err: err });
                          }
                          if(response.length){
                            console.log(response);
                            //res.send(String(response[0].days));
                            con.query(
                              "UPDATE airbnbbooking SET days = ?  where idcustomer=?",
                              [response[0].days,id],
                              (err, result) => {
                                if (err) {
                                  console.log(err);
                                  res.send({ err: err });
                                }else{
                                  console.log("days updated  ID: ");
                                  con.query(
                                    "select rate from airbnb where idAirbnb = (select idAirbnb from airbnbbooking where idcustomer = ?)",
                                    [id],
                                    (err, response) => {
                                      if (err) {
                                        console.log(err);
                                        res.send({ err: err });
                                      }else{
                                        console.log(response);
                                        res.send(response);
                                      }
                                    }

                                  )
                                  //res.send(String(result[0].days));
                                }
                              }
                            )
                            //console.log(result[0]);
                          }else{
                            console.log('error calculating days');
                            res.send("Car not found");
                          
                          }
                        }
                    )
                  }
            }
        )

            }
          }
        )
        res.send("Car not found");
       
      }
    }
  );
  }
});
});
app.post("/getairbookingid", (req, res) => {
  const email = req.body.email;
  con.query(
    "select days from airbnbbooking where idbooking = (select idbooking from airbnbbooking where idcustomer = (select idcustomer from customer where email = ?));",
    [email],
    function (err, result) {
      if (err) {
        //console.log(err);
        res.send({ msg: "enter correct format" });
      }else if(result){
        console.log(result);
        res.send(result);
      }else{
        res.send({ msg: "enter correct format" });

      }
    }
  );
});
app.post("/deleteairbnbbooking", (req, res) => {
  const email = req.body.email;
  con.query(
    "DELETE FROM airbnbbooking where idcustomer = (select idcustomer from customer where email = ? and item ='Airbnb'); ",
    [email],
    function (err, result) {
      if (err) {
        console.log(err);
        res.send({ msg: "enter correct format" });
      }else{
        console.log("deleted");
        con.query(
          "DELETE from customer where email = ? and item ='Airbnb';",
          [email],
          function (err, result) {
            if (err) {
              console.log(err);
              res.send({ msg: "enter correct format" });
            }else{
              res.send({ msg: "enter correct format" });
            }
          }
        )
      }
    }
  );
});