import React from "react";
import { GanttComponent, Inject, ColumnsDirective, ColumnDirective, DayMarkers, Selection, Edit } from "@syncfusion/ej2-react-gantt";
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-react-gantt/styles/material.css";

function App() {
  const tasks = [
    {
      TaskID: 1,
      TaskName: "Project Planning",
      StartDate: new Date("2025-08-05"),
      EndDate: new Date("2025-08-10"),
      Progress: 60
    },
    {
      TaskID: 2,
      TaskName: "Design Phase",
      StartDate: new Date("2025-08-11"),
      EndDate: new Date("2025-08-15"),
      Progress: 30
    },
    {
      TaskID: 3,
      TaskName: "Construction",
      StartDate: new Date("2025-08-16"),
      EndDate: new Date("2025-08-25"),
      Progress: 10
    }
  ];

  const taskFields = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    progress: "Progress"
  };

  return (
    <div style={{ margin: 20 }}>
      <h1>Multi-project Cashflow Tracker</h1>
      <GanttComponent
        dataSource={tasks}
        taskFields={taskFields}
        allowSelection={true}
        allowTaskbarEditing={true}
        height="400px"
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="ID" width="60" textAlign="Left" />
          <ColumnDirective field="TaskName" headerText="Task Name" width="200" />
          <ColumnDirective field="StartDate" headerText="Start Date" />
          <ColumnDirective field="EndDate" headerText="End Date" />
          <ColumnDirective field="Progress" headerText="Progress" />
        </ColumnsDirective>
        <Inject services={[DayMarkers, Selection, Edit]} />
      </GanttComponent>
    </div>
  );
}

export default App;
