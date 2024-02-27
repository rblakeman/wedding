import React from 'react';

import './App.css';
import {
    Hotel,
    Photos,
    RSVP,
    Registry,
    ThingsToDo,
    Travel,
    Welcome,
} from './pages';
import { TabList, Tabs, defaultRoute } from './routes';

function App() {
    const [selectedTab, setSelectedTab] = React.useState(defaultRoute);

    const renderTab = () => {
        switch (selectedTab) {
            case Tabs.HOTEL:
                return <Hotel />;
            case Tabs.PHOTOS:
                return <Photos />;
            case Tabs.REGISTRY:
                return <Registry />;
            case Tabs.RSVP:
                return <RSVP />;
            case Tabs.THINGS_TO_DO:
                return <ThingsToDo />;
            case Tabs.TRAVEL:
                return <Travel />;
            default:
            case Tabs.WELCOME:
                return <Welcome />;
        }
    };

    return (
        <div className='App'>
            <div className='Header' />
            <div className='Tabs'>
                {TabList.map(({ label, id }) => (
                    <button
                        key={id}
                        style={{
                            background: 'unset',
                            border: 'unset',
                            color: 'unset',
                            cursor: 'pointer',
                            fontWeight: selectedTab === id ? '700' : '400',
                        }}
                        onClick={() => setSelectedTab(id)}>
                        {label}
                    </button>
                ))}
            </div>
            <div className='Page'>{renderTab()}</div>
        </div>
    );
}

export default App;
