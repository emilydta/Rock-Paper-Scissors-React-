import RpsButton from "./RpsButton";

function RpsButtonsContainer({rock, paper, scissors}) {
    return (
        <div className="buttons">
            <RpsButton 
                value="Rock"
                onClick={rock}
            />
            <RpsButton 
                value="Paper"
                onClick={paper} 
            />
            <RpsButton 
                value="Scissors"
                onClick={scissors}
            />
        </div>
    )
}

export default RpsButtonsContainer;
