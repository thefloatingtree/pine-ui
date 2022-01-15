import styled from "styled-components";

const StyledCard = styled.div`
box-shadow: 2px 2px 6px -2px grey;
display: inline-flex;
flex-direction: column;
max-width: 500px;
background-color: ${props => props.backgroundColor || 'white'} ;
color: ${props => props.textColor || 'black'};
/* Why this not working? */
width: ${props => props.width || '300px'};

& .card-content h3, & .card-subtitle {
    margin: 0;
}

& .card-subtitle {
    margin-bottom: 1rem;
    color: ${props => props.subtitleColor || 'grey'};
}

& .card-content {
    padding: 10px 10px 20px 10px;
}

& .card-actions {
    all: unset;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    max-width: 300px;
    gap: 10px;
}

& .card-actions li {
    color: ${props => props.actionColor || "6c6c6c"};
    text-transform: uppercase;
    font-weight: 700;
}

& .card-actions li:hover {
    cursor: pointer;
}

`

//props: image, title, subtitle, text, actions
export default function Card(props) {
    console.log(props)
    let actions;
    if (props.actions) {
        actions = props.actions.map(action => {
            return <li onClick={action.action} key={action.text}>{action.text}</li>
        })
    }

    return (
        <StyledCard width={props.width} actionColor={props.actionColor} className={props.className} onClick={props.onClick} backgroundColor={props.backgroundColor} textColor={props.textColor} subtitleColor={props.subtitleColor}>
            {props.image && <img src={props.image}/>}
            <div className="card-content">
                {props.title && <h3>{props.title}</h3>}
                {props.subtitle && <h4 className="card-subtitle">{props.subtitle}</h4>}
                {props.text && <p>{props.text}</p>}
                {props.actions && <ul className="card-actions">{actions}</ul>}
            </div>
        </StyledCard>
    )
};