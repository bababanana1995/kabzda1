import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {InputButton} from "./components/InputButton";

function App() {
        const [onOff, setOnOff]=useState(true)
    return (
        <div className="App">
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <UncontrolledRating/>
            <hr/>
            <Accordion title={'Menu'} collapsed={true}/>
            <Accordion title={'Menu'} collapsed={false}/>
            <UncontrolledAccordion title={'Menu'}/>
            <hr/>
            <OnOff onOff={onOff}
                isActive={setOnOff}/>
            <OnOff onOff={onOff}
                isActive={setOnOff}/>
            <UncontrolledOnOff />
            {/* eslint-disable-next-line react/jsx-no-undef */}
                <InputButton/>
        </div>
    );
}

export default App;
