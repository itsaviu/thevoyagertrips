import React, {useState} from 'react';
import './styles/App.css';
import ImageContainer from "./components/ImageContainer";
import Headers from "./components/Headers";
import Destinations from "./components/Destinations";
import Navigator from "./components/Navigator";
import VagamonHill from './image/vagamon-hill.jpg';
import AlappuzhaBoat from './image/alapuzha_boat.jpg';

const App = () => {

    const [data, setData] = useState([
        {index: 0, url: VagamonHill, titleCard: "Vagamon"},
        {index: 1, url: AlappuzhaBoat, titleCard: "Alappuzha"}
    ]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextIndex = () => {
        let _index = currentIndex + 1;
        if (_index > data.length -1)
            setCurrentIndex(0);
        else
            setCurrentIndex(_index);

        console.log(_index);
    };

    const backIndex = () => {
        let _index = currentIndex - 1;
        if (_index < 0)
            setCurrentIndex(data.length - 1);
        else
            setCurrentIndex(_index);

        console.log(_index);
    };

    return (
        <div className="App">
            <ImageContainer data={data[currentIndex]}/>
            <Headers/>
            <Destinations data={data[currentIndex]}/>
            <Navigator nextIndex={() => nextIndex()} backIndex={() => backIndex()}/>
            <div className={'signature'}>aS</div>
        </div>
    );
}

export default App;
