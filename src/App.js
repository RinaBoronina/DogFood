import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { CardList } from './components/CardList/CardList';
import data from './data/data';

function App() {
    let count = 3;
    const [hook, setHook] = useState(count);

    const clicker = () => {
        setHook((state) => (state = state + 1));
    };

    return (
        <div className="App">
            <Header myTitle={'Title'}></Header>
            <div className="container">
                <CardList cards={data} />
            </div>
            <Footer />
        </div>
    );
}

export default App;
