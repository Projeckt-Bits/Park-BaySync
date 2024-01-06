"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { get, ref, set } from "firebase/database";
import { database } from "../../firebase";
import TimeElapsed from "./timer";
var StringBay1 = "";
var StringBay2 = "";
var StringBay3 = "";
var StringBay4 = "";
var StringBay5 = "";



export default function Home() {
  UpdateCaller();


  return (
    <main className={styles.main}>
      <div className={styles.heading}>
        <h1>Park BaySync - The Intelligent Automated Parking Solution!</h1>
      </div>
      <div className={styles.center}>
        <div className={styles.card}>
          <h2>Parking Bay 1</h2>
          <h4>Status</h4>
          <h5 id="p1">{StringBay1}</h5>
        </div>

        <div className={styles.card}>
          <h2>Parking Bay 2</h2>
          <h4>Status</h4>
          <h5 id="p2">{StringBay2}</h5>
        </div>

        <div className={styles.card}>
          <h2>Parking Bay 3</h2>
          <h4>Status</h4>
          <h5 id="p3">{StringBay3}</h5>
        </div>

        <div className={styles.card}>
          <h2>Parking Bay 4</h2>
          <h4>Status</h4>
          <h5 id="p4">{StringBay4}</h5>
        </div>

        <div className={styles.card}>
          <h2>Parking Bay 5</h2>
          <h4>Status</h4>
          <h5 id="p5">{StringBay5}</h5>
        </div>
      </div>
    </main>
  );
}

function Updates() {
  const docRefBay1 = ref(database, "EmptyBays/Bay1/State");
  get(docRefBay1).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      if (snapshot.val() == "NO") {
        StringBay1 = "Vacant";
        console.log(StringBay1);
        document.getElementById("p1").innerHTML = StringBay1;
        document.getElementById("p1").style.backgroundColor = "green";
      } else {
        StringBay1 = "Occupied";
        console.log(StringBay1);
        document.getElementById("p1").innerHTML = StringBay1;
        document.getElementById("p1").style.backgroundColor = "red";
      }
    }
  });

  const docRefBay2 = ref(database, "EmptyBays/Bay2/State");
  get(docRefBay2).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      if (snapshot.val() == "NO") {
        StringBay2 = "Vacant";
        console.log(StringBay2);
        document.getElementById("p2").innerHTML = StringBay2;
        document.getElementById("p2").style.backgroundColor = "green";
      } else {
        StringBay2 = "Occupied";
        console.log(StringBay2);
        document.getElementById("p2").innerHTML = StringBay2;
        document.getElementById("p2").style.backgroundColor = "red";
      }
    }
  });

  const docRefBay3 = ref(database, "EmptyBays/Bay3/State");
  get(docRefBay3).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      if (snapshot.val() == "NO") {
        StringBay3 = "Vacant";
        console.log(StringBay3);
        document.getElementById("p3").innerHTML = StringBay3;
        document.getElementById("p3").style.backgroundColor = "green";
      } else {
        StringBay3 = "Occupied";
        console.log(StringBay3);
        document.getElementById("p3").innerHTML = StringBay3;
        document.getElementById("p3").style.backgroundColor = "red";
      }
    }
  });

  const docRefBay4 = ref(database, "EmptyBays/Bay4/State");
  get(docRefBay4).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      if (snapshot.val() == "NO") {
        StringBay4 = "Vacant";
        console.log(StringBay4);
        document.getElementById("p4").innerHTML = StringBay4;
        document.getElementById("p4").style.backgroundColor = "green";
      } else {
        StringBay4 = "Occupied";
        console.log(StringBay4);
        document.getElementById("p4").innerHTML = StringBay4;
        document.getElementById("p4").style.backgroundColor = "red";
      }
    }
  });

  const docRefBay5 = ref(database, "EmptyBays/Bay5/State");
  get(docRefBay5).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      if (snapshot.val() == "NO") {
        StringBay5 = "Vacant";
        console.log(StringBay5);
        document.getElementById("p5").innerHTML = StringBay5;
        document.getElementById("p5").style.backgroundColor = "green";
      } else {
        StringBay5 = "Occupied";
        console.log(StringBay5);
        document.getElementById("p5").innerHTML = StringBay5;
        document.getElementById("p5").style.backgroundColor = "red";
      }
    }
  });

  const docRefEntryGate = ref(database, "EmptyBays/EntryGate/State");
  get(docRefEntryGate).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    }
  });
}

function UpdateCaller() {
    Updates();
}
