const baseURL = "http://localhost:6005/api"

export const get = async(url) => {
    try{
        const response = await fetch(`${baseURL}/${url}`);
        return await response.json();
    }catch(error){
        console.log("error",error);
    }
}
