

interface IDataDrinks {
    name: string,
    img: string,
    price: number
}

const dataDrinks: IDataDrinks[] = [
    {
        name: 'Fuse Tea',
        img: 'https://media.dodostatic.net/image/r:292x292/11EECF7CB7FA2C5E9A084593C73D3929.avif',
        price: 139
    },
    {
        name: 'Coca Cola',
        img: 'https://media.dodostatic.net/image/r:292x292/11EEF310622713CBB0D3C36591743C0F.avif',
        price: 79
    },
    {
        name: 'Sprite',
        img: 'https://media.dodostatic.net/image/r:292x292/11EEC6DE74537AC0AA46372A25248429.avif',
        price: 79
    },
    {
        name: 'Fanta',
        img: 'https://media.dodostatic.net/image/r:292x292/11EEC6DE90CE3A2C9764F59C1321788A.avif',
        price: 79
    },
]


const DrinksContent = () => {
  return (
    <div style={{
        display: 'flex',
        gap: 20
    }}>
        {dataDrinks.map(t => {
            return (
                <div style={{ width: 450  }} key={t.name}>
                    <img style={{
                        paddingBottom: '20px'
                    }} src={t.img} alt="" />
                    <h3>{t.name}</h3>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingTop: '20px'
                    }}>
                        <p>{t.price} сом</p>
                        <button className="btn" style={{
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

export default DrinksContent