//import { useState, useEffect } from "react";
import AdImage from "../components/AdImage";
import { Main } from "../layout/Main";
import { adImage } from "../utils/data";
//import { User } from "../types/stakeholders.type";

export function PLP() {
  //const [isLoading, setIsLoading] = useState(false);
  //const [isSuccess, setIsSuccess] = useState(false);
  //const [isError, setIsError] = useState(false);
  //const [stakeholders, setStakeholders] = useState<User[]>([]);
//
  //useEffect(() => {
  //  const getStakeholders = async () => {
  //    try {
  //      setIsLoading(true);
  //      const result = await fetch(
  //        "https://jsonplaceholder.typicode.com/users"
  //      );
  //      const response = await result.json();
  //      setIsLoading(false);
  //      setIsError(false);
  //      setIsSuccess(true);
  //      setStakeholders(response);
  //    } catch (error) {
  //      setIsLoading(false);
  //      setIsSuccess(false);
  //      setIsError(true);
  //      console.log("Error: ", error);
  //    }
  //  };
  //  getStakeholders();
  //}, []);

  return (
    <Main>
      <section>
        <h1>
          ESTO ES PLP.TSX
        </h1>
        <p>
          asgdbyuiasbdiawbfdiauhdniuwand
        </p>
      </section>
      <section>
        <AdImage
          image={adImage[1].image}
          text={adImage[1].text}
          buttonLink={adImage[1].buttonLink}
        />
      </section>
    </Main>
  );
}
