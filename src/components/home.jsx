import './../styles/App.css'
export default function home(){
    return(
        <>
            <section className='home'>
                <article className="artical">
                    <h1 className='sentences'>Your Health, Our </h1>
                    <h1 className='sentences'>expert care</h1>
                    <br /><br />
                    <button className='button2' id='btn2'> view all services </button>
                    <button className='button3' id='btn3'>log in</button>
                </article>
                <div className="pic-cont">
                    <div className="home-pic"></div>
                </div>
            </section>
        </>
    )
}