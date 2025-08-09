import React from 'react';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Edit, Selection } from '@syncfusion/ej2-react-gantt';

const tasks = [
  { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('2025-08-01'), Duration: 5, Progress: 50, GanttColor: 'blue' },
  { TaskID: 2, TaskName: 'Planning', StartDate: new Date('2025-08-06'), Duration: 7, Progress: 30, GanttColor: 'blue' },
  { TaskID: 3, TaskName: 'Execution', StartDate: new Date('2025-08-15'), Duration: 10, Progress: 70, GanttColor: 'blue' }
];

const taskFields = {
  id: 'TaskID',
  name: 'TaskName',
  startDate: 'StartDate',
  duration: 'Duration',
  progress: 'Progress'
};

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Multi-project Cashflow Tracker</h1>
      <GanttComponent
        dataSource={tasks}
        taskFields={taskFields}
        allowSelection={true}
        editSettings={{ allowTaskbarEditing: true, allowEditing: true, allowAdding: true, allowDeleting: true }}
        taskbarHeight={30}
        height="400px"
        rowHeight={40}
      >
        <ColumnsDirective>
          <ColumnDirective field='TaskID' headerText='ID' width='60' />
          <ColumnDirective field='TaskName' headerText='Task Name' width='200' />
          <ColumnDirective field='StartDate' headerText='Start Date' />
          <ColumnDirective field='Duration' headerText='Duration' />
          <ColumnDirective field='Progress' headerText='Progress' />
        </ColumnsDirective>
        <Inject services={[Edit, Selection]} />
      </GanttComponent>
    </div>
  );
}

export default App;
