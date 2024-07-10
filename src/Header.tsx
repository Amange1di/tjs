// import { FC, useState } from 'react'
// import { ITabs } from './App'


// interface IHeaderProps {
//     tabs: ITabs[]
// }

// const Header: FC<IHeaderProps> = (props) => {

//     const [content, setContent] = useState<string>("Pizza")

//     const handlClick = (text: string) => {
// setContent(text)
//     }
//     return (
//         <div>
//             <h1>{props.tabs.map(el => {
//                 return <a
//                     onClick={( e:React.MouseEvent<HTMLAnchorElement>) => {
//                         handlClick(el.name)
//                     }} href="#">{el.name}</a>
//             })}</h1>
//             <br />
//             <br />
//             <br />
//             <div >
//                 {content == "Pizza" && <h2>Pizza content</h2>}
//                 {content == "Drinks" && <h2>Pasta content</h2>}
//                 {content == "Deserts" && <h2>Burgers content</h2>}
//             </div>
//         </div>
//     )
// }

// export default Header


import React, { FC, useState } from 'react';
import { ITabs } from './App';
import PizzaContent from './PizzaContent';

interface IHeaderProps {
    tabs: ITabs[];
}

const Header: FC<IHeaderProps> = ({ tabs }) => {
    const [content, setContent] = useState<string>("Pizza");

    const handleClick = (text: string) => {
        setContent(text);
    };

    return (
        <div>
            <h1>
                {tabs.map((tab) => (
                    <a
                        key={tab.name}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                            e.preventDefault();
                            handleClick(tab.name);
                        }}
                        href="#"
                    >
                        {tab.name}
                    </a>
                ))}
            </h1>
            <br />
            <br />
            <br />
            <div>
                {content === "Pizza" &&<PizzaContent/>}
                {content === "Drinks" && <h2>Drinks content</h2>}
                {content === "Deserts" && <h2>Deserts content</h2>}
            </div>
        </div>
    );
};

export default Header;
