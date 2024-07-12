

import { FC, useState } from 'react'
import { ITabs } from './App'
import PizzaContent from './PizzaContent'
import DrinksContent from './DrinksContent'
import DesertsContent from './DesertsContent'

interface IHeaderProps {
    tabs:ITabs []
}

// any, unknown, void

// type TypeText = {
//     handleClick: (text: string) => string
// }

const Header: FC<IHeaderProps> = (props) => {
    const [content, setContent] = useState<string>("Pizza")
    const handleClick = (text: string) => {
        setContent(text)
    }

    return (
        <div className='container'>
            {props.tabs.map(el => {
                return <a onClick={
                    () => {
                    handleClick(el.name)
                }} href="#">{el.name}</a>
            })}

            <br />
            <br />
            <div>
                {content == "Pizza" && <PizzaContent/>}
                {content == "Drinks" && <DrinksContent/>}
                {content == "Deserts" && <DesertsContent/>}
            </div>
        </div>
    )
}

export default Header