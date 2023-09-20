
import React from "react";
import homePhoto from './pexels-fauxels-3184423.jpg';

function HomePage() {
  return (
    <div className="home">
             <h2>Welcome back to Synergy HR! </h2>
             <img src = {homePhoto} className = "home--photo" />
             <h2>Making sure your needs are always met!</h2>
    </div>
  );
}

export default HomePage;
