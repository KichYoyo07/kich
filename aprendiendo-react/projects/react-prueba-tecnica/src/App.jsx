import './App.css'
import { useCatImage} from './hooks/useCatImage.js';
import { useCatFact } from './hooks/useCatFact.js';

//const CAT_ENPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50`

export function App () {
    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })
     
    const handleClick = async () => {
        refreshFact()
    }
    
    return(
        <main>
            <h1>App de gatitos</h1> 
            <button onClick={handleClick}>Get new fact</button>
            <section>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={`${imageUrl}`} alt=
                {`Image extrated using the first trhee words for ${fact}`} />}
              </section> 
        </main>
    )
}