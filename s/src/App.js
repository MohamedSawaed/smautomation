import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import './App.css';

const App = () => {
    const [currentPage, setCurrentPage] = useState('/');

    const navigate = (path) => {
        window.history.pushState({}, '', path);
        setCurrentPage(path);
    };

    const renderPage = () => {
        switch (currentPage) {
            case '/about': return <About />;
            case '/services': return <Services />;
            default: return <Home />;
        }
    };

    return (
        <div className="App">
            <Navbar onNavigate={navigate} />
            {renderPage()}
        </div>
    );
};

export default App;
