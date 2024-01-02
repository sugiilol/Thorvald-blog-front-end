import './SectionDescriptionView.scss'
import SectionDescription from '../../Components/SectionDescription/SectionDescription'
import sectionsDatas from '../../data/sections/sections.json'


export default function SectionDescriptionView() {

    return (
        <div className='section-description-view-container'>
            <h2>Rubriques du Blog en détail</h2>
            {sectionsDatas.map((section, index) => {
                const imgPosition = index % 2 === 0 ? "img-left" : "img-right";
                return (
                    <SectionDescription key={index} class={imgPosition} data={section} />
                )
            })}
        </div>
    )
}