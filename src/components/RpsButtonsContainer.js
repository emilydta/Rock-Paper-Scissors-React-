import RpsButton from "./RpsButton";

function RpsButtonsContainer({rock, paper, scissors}) {
    return (
        <div className="buttons">
            <RpsButton 
                value="Rock"
                handleClick={rock}
            />
            <RpsButton 
                value="Paper"
                handleClick={paper} 
            />
            <RpsButton 
                value="Scissors"
                handleClick={scissors}
            />
        </div>
    )
}

export default RpsButtonsContainer;
