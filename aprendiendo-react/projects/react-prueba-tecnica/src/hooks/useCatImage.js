import { useEffect, useState } from "react";

const CAT_PREFFIX_IMAGE_URL = 'https://cataas.com/'

export function useCatImage ( { fact }) {
    const [imageUrl, setImageUrl ] = useState()

    //Para recuperar la imagen cada que tenemos una nueva cita
    useEffect(() =>{
        if (!fact) return

        const threeFirstWords = fact.split(' ').splice(0,3).join(' ')

        console.log(threeFirstWords)
        
        fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red`)
            //.then (res => res.json())
            .then(response => {
                const { url } = response
                setImageUrl(url)
            })     
    }, [fact])

    return { imageUrl: `${imageUrl}`  }

}