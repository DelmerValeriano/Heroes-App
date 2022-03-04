import { HeroList } from "../hero/HeroList";
import React from 'react';


export const DcScreen = () => {
  return (
    <div>
        <h1>DcScreen</h1>
        <hr/>

        <HeroList
          publisher="DC Comics"
        />

    </div>
  )
}
