

interface IDataPizza{
    name:string,
    desc:string,
    img:string,
    price:number
}
const dataPizza:IDataPizza[] = [
    {
        name: "Креветки со сладким чили",
        desc: "Креветки, ананасы, соус сладкий чили, сладкий перец, моцарелла, соус альфредо",
        img: "https://media.dodostatic.net/image/r:292x292/11EF33DC750FF17794FB1ACA35F22A6E.avif",
        price: 545,
    },
    {
        name: "Баварская",
        desc: "Охотничьи колбаски, маринованные огурчики, красный лук, томаты, горчичный соус, моцарелла, томатный соус",
        img: "https://media.dodostatic.net/image/r:292x292/11EF346408A39615BD3478135F9F6673.avif",
        price: 495,
    },
    {
        name: "Чикен Бомбони",
        desc: "Куриные кусочки в панировке, сладкий перчик, сыры чеддер, пармезан и моцарелла, красный лук, соусы сладкий чили и альфредо",
        img: "https://media.dodostatic.net/image/r:292x292/11EF3DB2188200718EDEB6D5EC3E3ECD.avif",
        price: 555,
    },
]
const PizzaContent = () => {
    return (
        <div style={{
            display:"flex",
            gap:"200px"
        }}>
            {
                dataPizza.map(
                    p=>{
                        return(
                            <div style={{width:"250px" }} key={p.name}>
                                <img src={p.img} alt="" />
                                <h5>{p.name}</h5>
                                <p>{p.desc}</p>
                               <div style={{
                                display:"flex",
                                justifyContent:"space-between"
                               }}>
                                <p>от{p.price}</p>
                                <button>Выбрать</button>
                               </div>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default PizzaContent