
export async function Myfetch() {
    const url = "https://api.le-systeme-solaire.net/rest.php/bodies";
    try {
      const newData = await fetch(url);
      if (!newData.ok) {
        throw new Error(`Response status: ${newData.status}`);
      }
  
      const json = await newData.json();
      console.log(json);
      return json
      
    } catch (error) {

      console.log(error);
    }
}