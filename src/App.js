import './App.css';
import Tab from './components/Tab';
import TabForm from './components/TabForm';
import { useState } from 'react';

function App() {

  const [activeTab, setActiveTab] = useState(0)

  const tabs = ['Tab 1', 'Tab 2', 'Tab 3']

  const selectedTab = tab => {
    setActiveTab(tab)
  }

  const headerStyle = {
    gap: '20px',
    padding:'20px',
    display: 'flex'
  }

  return (
    <>
      <div style={headerStyle}>
        {
          tabs.map ( (tab, i) => {
            return(
              <Tab name={tab} index={i} selectTab={selectedTab} active={activeTab} />
            )
          })
        }
      </div>
      <TabForm tab={activeTab} />
    </>
  );
}

export default App;
