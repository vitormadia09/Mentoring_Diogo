const characterNumber = document.querySelector('.character__number');
const characterName = document.querySelector('.character__name');

let searchCharacter = 1;

const fetchSW = async (character) => {
    debugger;
    const APIResponse = await fetch
    (`https://swapi.dev/api/people/${character}`);
    
        const data = await APIResponse.json();
        return data;     
        console.log(data);           
}




fetchSW(searchCharacter);
