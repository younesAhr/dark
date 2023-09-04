import './../styles/App.css'
export default function Card(props){
    const crd=document.getElementById(props.id);
    let rotate=true
    return(
        <>
            <div className='Svc-card' id={props.id}
            onClick={function(){
                if(rotate == true){
                    crd.classList='Svc-card1';
                    rotate = false;
                }else{
                    crd.classList='Svc-card'
                    rotate = true;
                }
            }}
            >
                <div className="front">
                    <div className="card-pic" style={{backgroundImage: `url(${props.picSrc})`}}>
                        <div className="hover-eff">
                            <p>more details</p>
                        </div>
                    </div>
                    <div className="card-sentences">
                        <p className="card-ttl">{props.cardTitle}</p>
                        <p className="card-subttl">{props.cardSubTitle}Sub title non sense talk</p>
                    </div>
                </div>
                <div className="back">
                    aaa
                </div>
            </div>
        </>
    )
}