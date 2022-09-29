import { useState } from "react";

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {
  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

  function groupTeamMembers() {
    let teams = [];

    ["TeamA", "TeamB", "TeamC", "TeamD"].forEach((team) => {
      teams.push({
        team: team,
        members: employees.filter((employee) => employee.teamName === team),
        collapsed: selectedTeam !== team,
      });
    });

    return teams;
  }

  function handleTeamClick(event) {
    let transformedGroupData = groupedEmployees.map((groupedData) =>
      groupedData.team === event.currentTarget.id
        ? { ...groupedData, collapsed: !groupedData.collapsed }
        : groupedData
    );
    setGroupedData(transformedGroupData);
    setTeam(event.currentTarget.id);
  }

  return (
    <main className="container">
      {groupedEmployees.map((item) => (
        <div
          key={item.team}
          className="card mt-2"
          style={{ cursor: "pointer" }}
        >
          <h4
            id={item.team}
            className="card-header text-secondary bg-white"
            onClick={handleTeamClick}
          >
            Team Name: {item.team}
          </h4>
          <div
            id={"collapse_" + item.team}
            className={item.collapsed ? "collapse" : ""}
          >
            <hr />
            {item.members.map((member) => (
              <div className="mt-2">
                <h5 className="card-title mt-2">
                  <span className="text-dark">
                    Full Name: {member.fullName}
                  </span>
                </h5>
                <p>Designation: {member.designation}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
};

export default GroupedTeamMembers;
