import { useState } from "react";
import PropTypes from "prop-types";
/*--------------------------------------*/
function FormSkills({ myFuction }) {
  const [list, setList] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    myFuction({ list });
    setList('');
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su hablidad"
          onChange={(e) => setList(e.target.value)}
          value={list}
      />
        <button>Send</button>
      </form>
    </div>
  );
}

FormSkills.propTypes = {
  myFuction: PropTypes.func.isRequired,
};

export default FormSkills;
