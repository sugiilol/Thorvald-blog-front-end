import './galleryView.scss'
import galleryImgs from '../../data/galleryImgs/galleryImgs.json'
import ImgOverlay from '../../Components/ImgOverlay/ImgOverlay'
import { useState } from 'react'

export default function GalleryView() {

    const [currentImgUrl, setCurrentImgUrl] = useState("")
    const [isOpenOverlay, setIsOpenOverlay] = useState(null)

    const handleClick = (imgUrl) => {
        setCurrentImgUrl(imgUrl)
        setIsOpenOverlay(true)
    }

    return (
        <>
            {isOpenOverlay &&
                <ImgOverlay vanishAction={setIsOpenOverlay} urlImg={currentImgUrl} />
            }
            <div className='gallery-container'>
                <h1>Galerie</h1>
                <ul className='grid-gallery-content'>
                    {galleryImgs.map((img, index) => {
                        return (
                            <li key={index}><img src={img.url} alt={img.alt} onClick={() => handleClick(img.url)} /></li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}