// import supervisor from '../images/icon-supervisor.svg'

function ContentCard(props) {
    return(
        <div className={`content-card ${props.bordercolor}`}>
            <a className="card-link" href="www.muk.ge">{props.title}</a>
            <p className="card-description">{props.description}</p>
            <img className="card-img" src={props.image} alt="supervisor"/>
        </div>
    )
}

export default ContentCard;