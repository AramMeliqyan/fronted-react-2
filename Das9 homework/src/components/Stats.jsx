export const Stats = ({totalTasks = 0,completedTasks = 0,unstartedTasks = 0,inProgresTasks = 0}) => {
  console.log(completedTasks);
  
    return (
        <div className="stats">
          <h2>Task Statistics</h2>
          <p>Completed: {completedTasks}/{totalTasks}</p>
          <p>In Progress: {inProgresTasks}/{totalTasks}</p>
          <p>Unstarted: {unstartedTasks}/{totalTasks}</p>
        </div>
      );
}