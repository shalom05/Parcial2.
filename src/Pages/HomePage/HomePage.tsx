import { useFetch } from "../../Hooks/MyHook"


export const HomePage = () => {
    console.log("Home")

    const { data } = useFetch('https://api.le-systeme-solaire.net/rest.php/bodies')
    console.log(data)


    if (data) {
        return <>
            <main className='principalPage' id='HomePage'>
                <h1>Celestial Bodies</h1>
                <div id='Container'>
                    {data.bodies.map(() => {
                        return 
                    })}
                </div>
            </main>
        </>
    }
}