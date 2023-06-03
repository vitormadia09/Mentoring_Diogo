let characterNumber = 1;

const dataSW = async (character) => {
    debugger;
    
    const fetchSW = await fetch (`https://swapi.dev/api/people/${character}`);

    return fetchSW;
};

dataSW(characterNumber);