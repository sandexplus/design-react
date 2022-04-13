import './WorksTemplate.scss';

const WorksTemplate = (props) => {

    const setType = () => {
        if (props.type === 1) {
            return (
                <>
                <div className="work-item type1">
                    <a href="#" className="work-item__link">
                        <img src={props.imgs[0]} alt="Work" className="work-item__img" />
                    </a>
                </div>
                <div className="work-item type1">
                    <a href="#" className="work-item__link">
                        <img src={props.imgs[1]} alt="Work" className="work-item__img" />
                    </a>
                </div>
                <div className="work-item type1">
                    <a href="#" className="work-item__link">
                        <img src={props.imgs[2]} alt="Work" className="work-item__img" />
                    </a>
                </div>
                </>
            )
        } else if (props.type === 2) {
            return (
                <>
                <div className="work-item type2">
                    <a href="#" className="work-item__link">
                        <img src={props.imgs[0]} alt="Work" className="work-item__img" />
                    </a>
                </div>
                <div className="work-item type2">
                    <a href="#" className="work-item__link">
                        <img src={props.imgs[1]} alt="Work" className="work-item__img" />
                    </a>
                </div>
                </>
            )
        } else if (props.type === 3) {
            return (
                <>
                <div className="work-item type3">
                    <a href="#" className="work-item__link">
                        <img src={props.imgs[0]} alt="Work" className="work-item__img" />
                    </a>
                </div>
                <div className="work-item type3">
                    <a href="#" className="work-item__link">
                        <img src={props.imgs[1]} alt="Work" className="work-item__img" />
                    </a>
                </div>
                <div className="work-item type3">
                    <a href="#" className="work-item__link">
                        <img src={props.imgs[2]} alt="Work" className="work-item__img" />
                    </a>
                </div>
                </>
            )
        } else {
            return null;
        }
    }

    return (
        <div className="work-container">
            {setType()}
        </div>
    )
}

export default WorksTemplate;