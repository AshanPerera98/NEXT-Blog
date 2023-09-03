import React from "react";
import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={"/site/52708527.jpg"}
          alt="image"
          width={"460"}
          height={"460"}
        />
      </div>
      <h1>ashan</h1>
      <p>blaa blaa blaaaa...</p>
    </section>
  );
}

export default Hero;
