import { useState, useEffect } from 'react';
import axios from "axios";
import Person from '../components/Person';  


export default function PeoplePage() {
  const [people, setPeople] = useState(null);

  let urlStr = "https://swapi.info/api/people";

  async function getData(urlStr) {
    try {
      let res = await axios.get(urlStr);

      let data = res.data;
      
      data.length = 10;
      return data;
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    async function getAgain(){
      let res = await getData(urlStr);
      getData(res);
    }

    getAgain(); 
  }, []);

  return !people ? (
    <h1>Loading...</h1>
  ) : (
    people.map((person) => (
      <people people={person} key={person.name} />
    ))
  );
}
