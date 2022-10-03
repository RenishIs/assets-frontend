export const generateCSV = async (query) => {
    const { data } = await query()
    if(data?.generateCSV?.outputString){
        window.location = `${process.env.REACT_APP_BASE_URL}${data?.generateCSV?.outputString}`
    }
}