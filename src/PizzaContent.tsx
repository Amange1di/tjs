
interface IDataPizza {
    name: string,
    desc: string,
    img: string,
    price: number,
}

const dataPizza: IDataPizza[]  = [
    {
        name: 'Peperoni',
        desc: 'Креветки, ананасы, соус сладкий чили, сладкий перец, моцарелла, соус альфредо',
        img: 'https://media.dodostatic.net/image/r:292x292/11EF33DC750FF17794FB1ACA35F22A6E.avif',
        price: 555,
    },
    {
        name: '4 Cheese',
        desc: 'Моцарелла, смесь сыров чеддер и пармезан, соус альфредо',
        img: 'https://media.dodostatic.net/image/r:292x292/11EE7D600BC7B9F1B6888AF021E5C198.avif',
        price: 695,
    },
    {
        name: 'Bavarian',
        desc: 'Охотничьи колбаски, маринованные огурчики, красный лук, томаты, горчичный соус, моцарелла, томатный соус',
        img:'https://media.dodostatic.net/image/r:292x292/11EF346408A39615BD3478135F9F6673.avif',
        price: 495,
    },
    {
        name: 'Chicken Bamboni',
        desc: 'Куриные кусочки в панировке, сладкий перчик, сыры чеддер, пармезан и моцарелла, красный лук, соусы сладкий чили и альфредо',
        img:'https://media.dodostatic.net/image/r:292x292/11EF3DB2188200718EDEB6D5EC3E3ECD.avif',
        price: 495,
    }
]

const PizzaContent = () => {
  return (
    <div style={{
        display: 'flex',
        gap: '20px'
    }}>
        {dataPizza.map(p => {
            return (
                <div style={{ width: 450  }} key={p.name}>
                    <img width={'100%'} style={{paddingTop: 20, paddingBottom: 20}} src={p.img} alt="" />
                    <h3 style={{paddingBottom: 20}}>{p.name}</h3>
                    <p>{p.desc}</p>
                    <div style={{
                        display: 'flex', 
                        justifyContent: 'space-between',
                        paddingTop: 30,
                    }}>
                        <p>от {p.price} сом</p>
                        <button className="btn" style={{
                            border: 'none',
                            borderRadius: '4px',
                            background: 'green',
                            color: '#fff',
                            width: '100px',
                            height: '20px',
                            cursor: 'pointer',
                        }}>Выбрать</button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default PizzaContent