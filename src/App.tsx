import React, {useState} from 'react';
import './App.css';
import {Rating, RatingStarType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";

import {OnOff} from "./components/OnOff/OnOff";
import {Select} from "./components/Select/Select";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion/UncontrolledAccordion";

type PageTitlePropsType = {
    title: string
}

function App(props: any) {
    console.log('App rendering')
    const [valueRating, setRatingValue] = useState<RatingStarType>(0)
    const [collapsedAccordion, setCollapsedAccordion] = useState<boolean>(false)
    const [onOff, setOnOff] = useState<boolean>(false);
    const [switchOn, setSwitchOn] = useState<boolean>(false)




    const [vape, setVape] = useState([
        {id:1, name:'Alpaca'},
        {id:2, name:'Husky'},
        {id:3, name:'Paradice'},
        {id:4, name:'Smoke Kitchen'},
    ])
    const [value,setValue] = useState(vape[0].name)

    const onChange = (value:any)=>{
       setValue(vape[value-1].name)

    }

    return (


        <div className={'App'}>
            {/*<UncontrolledOnOff setOn={setSwitchOn}/> {switchOn.toString()}*/}
            <Select value={value} onChange={onChange} items={vape}/>
            <UncontrolledAccordion titleValue={'vape'}/>
            {/*<OnOff onOff={onOff} setOnOff={setOnOff}/>*/}

            {/*<Accordion titleValue={'Menu'}*/}
            {/*           collapsed={collapsedAccordion}*/}
            {/*           callback={setCollapsedAccordion}*/}
            {/*           onClick={() => {*/}
            {/*           }}*/}
            {/*           item={[]}/>*/}
            {/*<Rating callback={setRatingValue} value={valueRating}/>*/}


            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<PageTitle title={'This is React'}/>*/}
            {/*Article 1*/}
            {/*<Rating value={3}/>*/}
            {/*<UncontrolledAccordion titleValue={'Menu'}  />*/}
            {/*<UncontrolledAccordion titleValue={'User'}  />*/}
            {/*Article 2*/}


            {/*<UnRating />*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

        </div>

    );
}


export default App;
