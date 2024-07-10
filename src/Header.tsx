import { FC, useState } from 'react'
import { ITabs } from './App'
import PizzaContent from './PizzaContent'


interface IHeaderProps {
    tabs: ITabs[]
}

const Header: FC<IHeaderProps> = (props) => {

    const [content, setContent] = useState<string>("Pizza")

    const handlClick = (text: string) => {
setContent(text)
    }
    return (
        <div>
            <h1>{props.tabs.map(el => {
                return <a
                    onClick={() => {
                        handlClick(el.name)
                    }} href="#">{el.name}</a>
            })}</h1>
            <br />
            <br />
            <br />
            <div >
                {content == "Pizza" && <h2><PizzaContent/></h2>}
                {content == "Drinks" && <h2>Pasta content</h2>}
                {content == "Deserts" && <h2>Burgers content</h2>}
            </div>
        </div>
    )
}

export default Header

