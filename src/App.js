// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import KanbanBoard from './KanbanBoard';
import { PRIORITY, STATUS, TITLE, USER } from './constants';

function App() {

  const [grouping, setGrouping] = useState(STATUS)
  const [ordering, setOrdering] = useState(PRIORITY)

  const [displayList, setDisplayList] = useState(false)

  const displayButton = () => {
    return (
      <div>   
        <button onClick={(e)=>{setDisplayList(!displayList)}}>Display</button>
        {displayList && (
          <div>
            <select onChange={(e)=>{setGrouping(e.target.value)}}>
              <option value={STATUS}>{STATUS}</option>
              <option value={PRIORITY}>{PRIORITY}</option>
              <option value={USER}>{USER}</option>
            </select>
            <select onChange={(e)=>{setOrdering(e.target.value)}}>
              <option value={PRIORITY}>{PRIORITY}</option>
              <option value={TITLE}>{TITLE}</option>
            </select>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="App">
      <header>Top bar here
        {displayButton()}
      </header>
      <KanbanBoard
        group = {grouping}
        order = {ordering}
      />
    </div>
  );
}

export default App;
