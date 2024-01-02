// Card.jsx
import PropTypes from "prop-types";
import "../Styles/Styles.scss";

export default function Card({list, handleDelete} ) {

  return (
    <>
      {list && (
        <ul className="container">
          {list.map((skill) => (
            <li key={skill.id}>
              <div className="content">
                <span>{skill.skill}</span>
                <button onClick={()=> handleDelete(skill.id)}>X</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

Card.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      skill: PropTypes.string.isRequired,
    })
  ),
  handleDelete:PropTypes.func.isRequired,
};
