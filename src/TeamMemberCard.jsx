import femaleProfile from "./img/femaleProfile.jpg";
import maleProfile from "./img/maleProfile.jpg";

const TeamMemberCard = ({employee, selectedTeam, handleEmployeeCardClick}) => {
  return (
    <div
      id={employee.id}
      className={
        employee.teamName === selectedTeam ? "card m-2 standout" : "card m-2"
      }
      style={{ cursor: "pointer" }}
      onClick={handleEmployeeCardClick}
    >
      <img
        src={employee.gender === "male" ? maleProfile : femaleProfile}
        alt="Profile"
        className="card-img-top"
      ></img>
      <div className="card-body">
        <h5 className="card-title">Full Name: {employee.fullName}</h5>
        <p className="card-text">
          Designation: <b>{employee.designation}</b>
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
