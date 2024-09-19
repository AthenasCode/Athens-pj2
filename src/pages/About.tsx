//import { useState, useEffect } from "react";
import { Main } from "../layout/Main";
//import { User } from "../types/stakeholders.type";

export function About() {
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
          ESTO ES ABOUT.TSX
        </h1>
        <p>
          asgdbyuiasbdiawbfdiauhdniuwand
        </p>
      </section>
    </Main>
  );
}
