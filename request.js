const getWord = async () => {
    const response = await fetch('http://puzzle.mead.io/puzzle?wordCount=1')
    
    if(response.status === 200){
        const data = await response.json()
        return data.puzzle
    }else{
        throw new Error('unable to find a word!')
    }  
}

// const getLocation = async () => {
//     const response = fetch('http://ipinfo.io/json?token=ffadc530c0fe50')
//         if(response.status === 200){
//             const data = await response.json()
//             return data
//         }else{
//             throw new Error('unabale to locate your location')
//         }  
//     }



