
interface IDataDeserts {
    name: string,
    desc: string,
    img: string,
    price: number
}

const dataDeserts: IDataDeserts[] = [
    {
        name: 'Слоеные палочки с ананасами и брусникой',
        desc: 'Здесь все сразу — брусника и ананас со сгущенкой на слоеном тесте',
        img: 'https://media.dodostatic.net/image/r:292x292/11EF36C339D42BED990C6518FC1D3662.avif',
        price: 285,
    },
    {
        name: 'Пончик клубничной',
        desc: 'Нежный пончик с клубничной начинкой и разноцветной посыпкой',
        img: 'https://media.dodostatic.net/image/r:292x292/11EF1CA528051D229B29F2E16D3E33CD.avif',
        price: 159,
    },
    {
        name: 'Пончик три шоколада',
        desc: 'Нежный пончик с клубничной начинкой и разноцветной посыпкой',
        img: 'https://media.dodostatic.net/image/r:292x292/11EF1CA56AA15236B64E45ADD494A1DF.avif',
        price: 159,
    },
    {
        name: 'Пончик Орео',
        desc: 'Очаровывайтесь вкусом нашего нежного пончика Oreo, сочное сочетание нежного теста, ароматной ванили и хрустящих кусочков печенья',
        img: 'https://media.dodostatic.net/image/r:292x292/11EEEFEC40A55F3F9B36C8BB43FE8D9D.avif',
        price: 159,
    },
]


const DesertsContent = () => {
  return (
    <div style={{
        display: 'flex',
        gap: '20px',
    }}>
        {dataDeserts.map(i => {
            return (
                <div style={{
                    width: 450,
                }}
                key={i.name}>
                    <img style={{paddingTop: 20, paddingBottom: 20}} src={i.img} alt="" />
                    <h3 style={{paddingBottom: 20}}>{i.name}</h3>
                    <p>{i.desc}</p>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingTop: 30
                    }}>
                        <p>{i.price}</p>
                        <button className="btn" 
                        style={{
                            border: 'none',
                            borderRadius: '4px',
                            background: 'green',
                            color: '#fff',
                            width: '100px',
                            height: '20px',
                            cursor: 'pointer',
                        }}>В Корзину</button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default DesertsContent