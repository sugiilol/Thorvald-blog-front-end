import './ImgOverlay.scss'

export default function ImgOverlay(props) {
    return (
        <div className="img-overlay-container" onClick={() => props.vanishAction(false)}>
            <img src={props.urlImg} alt="yo" />
        </div>
    )
}