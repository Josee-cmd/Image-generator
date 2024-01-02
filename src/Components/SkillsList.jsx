// SkillsList.jsx
import { useState, useEffect } from "react";
import Card from "./Card";
import { Data } from "../Data/Data";
import FormSkills from "./FormSkills";
/*-------------------------------------------*/
function SkillsList() {
  const [skill, setSkill] = useState([]);

  function createSkill({ list }) {
    setSkill((prevSkills) => [
      ...prevSkills,
      {
        id:
          prevSkills.length > 0 ? prevSkills[prevSkills.length - 1].id + 1 : 1,
        skill: list,
      },
    ]);
  }

  const deleteSkill = (id) => {
    setSkill(
      skill.filter(function callBack(key) {
        return key.id !== id;
      })
    );
  };

  /* 
  Esta es otra manera de hacerlo de manera mas resumida
  en AppComponents.jsx se implementa
  
  const deleteSkill = (id) => {
   setSkill(skill.filter((key)=> key.id !== id))
   };*/

  useEffect(() => {
    // Cargar los datos desde Data.js
    setSkill(Data);
  }, []);

  if (skill.length === 0) {
    return (
      <>
        <h1>El usuario no cuenta con habilidades.</h1>;
        <FormSkills myFuction={createSkill} />
      </>
    );
  }

  return (
    <div>
      <FormSkills myFuction={createSkill} />
      <Card list={skill} handleDelete={deleteSkill} />
    </div>
  );
}

export default SkillsList;
