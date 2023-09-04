import './../styles/App.css'
import Card from './card.jsx'
import pregnancyTest from './../pics/pregnancyTest.jpg'
import bloodTest from './../pics/bloodTest.avif'
import wavesTest from './../pics/wavesTest.jpg'
export default function Svc(){
    return(
        <>
            <section className='services'>
                <div className="services-header">
                    <h1 className='svc-ttl'>services</h1>
                    <p className='svc-subttl'>our services will improve your project,just trust us</p>
                </div>
                <div className="card-cont">
                <Card cardTitle='waves radio' cardSubTitle='card title non sense ' picSrc={wavesTest} id='crd1' />
                <Card cardTitle='blood test' cardSubTitle='card title non sense ' picSrc={bloodTest} id='crd2' />
                <Card cardTitle='pregnancy test' cardSubTitle='card title non sense ' picSrc={pregnancyTest} id='crd3' />
                </div>
            </section>
        </>
    )
}