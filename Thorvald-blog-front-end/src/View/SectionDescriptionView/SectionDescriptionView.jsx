import './SectionDescriptionView.scss'
import SectionDescription from '../../Components/SectionDescription/SectionDescription'
import sectionsDatas from '../../data/sections/sections.json'


export default function SectionDescriptionView() {

    return (
        <div className='section-description-view-container'>
            <h2>Rubriques du Blog en détail</h2>
            {sectionsDatas.map((section, index) => {
                return (
                    <SectionDescription key={index} class="img-left" data={section} />
                )
            })}
            {/* <SectionDescription class="img-left" />
            <SectionDescription class="img-right" /> */}
        </div>
    )
}