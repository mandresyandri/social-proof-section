import React from 'react';
import Attribution from "./Attribution";
import ContentTop from "./ContentTop";
import ContentBottom from "./ContentBottom";

const App = () => {
    return (
        <main>
            <ContentTop />
            <ContentBottom />
            <Attribution />
        </main>
    );
};

export default App;