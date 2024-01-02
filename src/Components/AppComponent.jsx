import SkillsList from "./SkillsList";
import Card from "./Card";
import { UserImg } from "./UserImg";
import { UserInformation } from "./UserInformation";
import {useState} from 'react'
/*--------------------------------------*/
function AppComponent() {
  const [skill, setSkill] = useState([]);

  const deleteSkill = (id) => {
    setSkill(skill.filter((key)=>key.id != id))
  };
  return (
    <>
      <UserImg />
      <UserInformation />
      <SkillsList />
      <Card handleDelete = {deleteSkill} />
    </>
  );
}

export default AppComponent;
