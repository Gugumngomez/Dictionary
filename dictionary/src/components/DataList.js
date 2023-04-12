const DataList = ({ result }) => {
    console.log({ result });

    const {word, phonetics, meanings} = result;

    function playAudio() {
        try {
            let audio = new Audio(phonetics[0].audio)
            audio.play();
        } catch(e) {
            console.log({ e });
        }
    }
    
    return (
        <div className="card mt-20">
            <div className="p-2">
                <h3>Word</h3>
                <div className="flex">
                    <p>{word}</p>

                    <p className="words">{meanings[0].partOfSpeech}</p>
                    <p className="words">{phonetics[0].text}</p> 
                    <div className="awords">
                        <p className="audio" onClick={playAudio}>
                            {" "}
                            Play{" "}</p> 
                    </div>
                </div>

                <div>
                    <h3>meanings</h3>
                    <p>{meanings[0].definitions[0].definition}</p>
                </div>
                <div>
                    <h2>Synonyms</h2>
                    <p>{meanings[0].synonyms.map((item, index ) => {
                        return <p key={index}>{item}</p>;
                    })}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DataList