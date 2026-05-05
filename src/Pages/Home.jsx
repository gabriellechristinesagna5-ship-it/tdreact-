import React from "react";
import DisplayCarts from "../components/DisplayCarts";

const Home = () => {
  return (
    <main className="main-home">
        <div className="home-banner">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <DisplayCarts />
    </main>
  )
}
export default Home;