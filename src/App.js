import React, { useEffect, useState } from "react";
import { GanttComponent, Inject, ColumnsDirective, ColumnDirective, DayMarkers, Selection, Toolbar } from "@syncfusion/ej2-react-gantt";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("https://bbscashflow.onrender.com/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Error connecting to backend"));
  }, []);

  const tasks = [
    { TaskID: 1, TaskName: "Project Kickoff", StartDate: new Date("2025-08-01"), Duration: 5 },
    { TaskID: 2, TaskName: "Design Phase", StartDate: new Date("2025-08-06"), Duration: 10 },
    { TaskID: 3, TaskName: "Construction", StartDate: new Date("2025-08-17"), Duration: 20 },
  ];

  return (
    <div style={{ margin: "20px" }}>
      <h1>Multi-project Cashflow Tracker</h1>
      <p>Status: {message}</p>
      <GanttComponent dataSource={tasks} taskFields={{ id: "TaskID", name: "TaskName", startDate: "StartDate", duration: "Duration" }} allowSelection={true} toolbar={["Add", "Edit", "Delete", "Update", "Cancel"]} height="400px">
        <ColumnsDirective>
          <ColumnDirective field="TaskID" width="80" />
          <ColumnDirective field="TaskName" headerText="Task Name" width="250" />
          <ColumnDirective field="StartDate" headerText="Start Date" />
          <ColumnDirective field="Duration" />
        </ColumnsDirective>
        <Inject services={[DayMarkers, Selection, Toolbar]} />
      </GanttComponent>
    </div>
  );
}

export default App;

