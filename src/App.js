import React, {useEffect, useState} from 'react';
import ImageContainer from "./components/ImageContainer";
import Headers from "./components/Headers";
import Destinations from "./components/Destinations";
import Navigator from "./components/Navigator";
import {When, Otherwise} from "react-control-statements";
import FooterDetail from "./components/FooterDetail";

const App = () => {

    useEffect(() => {
        fetch("https://7shau56ywf.execute-api.us-east-2.amazonaws.com/Dev/voyager")
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                setData(result);
            })
            .catch((error) => console.log(error))
    }, []);

    const [data, setData] = useState([]);

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
            <When condition={data.length > 0}>
                <ImageContainer index={currentIndex} data={data[currentIndex]}/>
                <Headers/>
                <Destinations data={data[currentIndex]}/>
                <Navigator nextIndex={() => nextIndex()} backIndex={() => backIndex()}/>
                <FooterDetail data={data[currentIndex]}/>
                <div className={'signature'}>aS</div>
            </When>
            <Otherwise>
                Loading !
            </Otherwise>
        </div>
    );
}

export default App;
