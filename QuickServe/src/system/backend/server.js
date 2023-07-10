const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "bookingdatabase",
});

app.get("/requests", (req, res) => {
  db.query("SELECT * FROM createbooking", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/booking", (req, res) => {
  // const message = "The selected time slot conflicts with an existing booking.";
  const sql =
    "INSERT INTO createbooking (roomID, name, noOfGuest, bookingDate, startTime, totalHours, enquiry, endTime) VALUES (?)";

  const startTime = req.body.time; // Assuming req.body.time is a valid time string
  const totalHours = req.body.totalHours;

  // Convert the startTime to minutes
  const startTimeInMinutes =
    parseInt(startTime.slice(0, 2)) * 60 + parseInt(startTime.slice(3));

  // Calculate the endTime by adding totalHours to startTime
  const endTimeInMinutes = startTimeInMinutes + totalHours * 60;

  // Adjust the endTime if it exceeds 24 hours
  const adjustedEndTimeInMinutes = endTimeInMinutes % (24 * 60);

  // Format the endTime as HH:mm
  const endTime = `${Math.floor(adjustedEndTimeInMinutes / 60)
    .toString()
    .padStart(2, "0")}:${(adjustedEndTimeInMinutes % 60)
    .toString()
    .padStart(2, "0")}`;

  const newStartTime = startTimeInMinutes;
  const newEndTime = adjustedEndTimeInMinutes;

  const roomID = req.body.roomID;
  const bookingDate = req.body.date;

  // Check if the same roomID is booked at the same date during the selected time slot
  const selectSql =
    "SELECT * FROM createbooking WHERE roomID = ? AND bookingDate = ?";
  db.query(selectSql, [roomID, bookingDate], (selectErr, bookingData) => {
    if (selectErr) {
      return res.json("Error");
    }

    const hasConflict = bookingData.some((booking) => {
      const existingStartTime =
        parseInt(booking.startTime.slice(0, 2)) * 60 +
        parseInt(booking.startTime.slice(3));
      const existingEndTime =
        parseInt(booking.endTime.slice(0, 2)) * 60 +
        parseInt(booking.endTime.slice(3));

      if (
        (newStartTime >= existingStartTime && newStartTime < existingEndTime) ||
        (newEndTime > existingStartTime && newEndTime <= existingEndTime)
      ) {
        return true;
      }
      return false;
    });

    if (hasConflict) {
      // Return the alert message to the user
      return res.send(
        '<script>alert("The selected time slot conflicts with an existing booking."); window.location.href = "/";</script>'
      );
    }

    const values = [
      roomID,
      req.body.name,
      req.body.noOfGuest,
      bookingDate,
      req.body.time,
      req.body.totalHours,
      req.body.enquiry,
      endTime,
    ];

    db.query(sql, [values], (err, data) => {
      if (err) return res.json("Error");
      return res.json(data);
    });
  });
});

app.put("/update",(req,res) => {
  const id = req.body.id;
  const roomID = req.body.roomID;
  const name = req.body.name;
  const noOfGuest = req.body.noOfGuest;
  const bookingDate = req.body.bookingDate;
  const startTime = req.body.startTime;
  const totalHours = req.body.totalHours;
  const enquiry = req.body.enquiry;
  const endTime = req.body.endTime;

  db.query('UPDATE createBooking SET roomID=?, name=?, noOfGuest=?, bookingDate=?, startTime=?, totalHours=?, enquiry=?, endTime=? WHERE id=?', [roomID, name, noOfGuest, bookingDate, startTime
  , totalHours, enquiry, endTime, id],
    (err,result) => {
      if(err){
        console.log(err);
        res.status(500).send('There have been an error while updating the current booking room request');
      }else{
        console.log(result);
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM createbooking WHERE id=?", id, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("There is an error deleting this request");
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("listening... on the configured port...");
});
