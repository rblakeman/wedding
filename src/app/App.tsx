import React from 'react';

import { Header, Page, Tab, TabBar, TabContent } from './App.styles';
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

    const changeTabs = (tabId: Tabs, replace?: boolean) => {
        setSelectedTab(tabId);
    };

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
        <Page>
            <Header />
            <TabBar className='TabBar'>
                {TabList.map(({ label, id }) => (
                    <Tab
                        key={id}
                        selected={selectedTab === id}
                        onClick={() => changeTabs(id)}>
                        {selectedTab === id ? '🥀' : ''}
                        {label}
                    </Tab>
                ))}
            </TabBar>
            <TabContent>{renderTab()}</TabContent>
        </Page>
    );
}

export default App;
