

export async function getCoordinates(city : string) {
    const res = await fetch (`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`)

    if(!res.ok) {
        throw new Error ("failed to fetch coordinates")
    }

    const data = await res.json()

    if(!data.result || data.result.length === 0) {
        throw new Error ("City not found")
    }
    return data.results[0]
}