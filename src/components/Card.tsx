interface ICard {
    id: number,
    paraghaph: string,
    details: string
}

export const Card = ({ id, paraghaph, details }: ICard) => {
    return(
        <div>
            <h1>Component Card {id}</h1>
            <h4>{paraghaph}</h4>
            <p>{details}</p>
        </div>
    )
}