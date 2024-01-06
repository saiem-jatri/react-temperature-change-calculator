export function BoilingVerdict({celsius}){
    if(celsius >= 100){
        return <p>Water would boil</p>
    }
    // eslint-disable-next-line react/no-unescaped-entities
    return <p>Water wouldn't boild</p>
}