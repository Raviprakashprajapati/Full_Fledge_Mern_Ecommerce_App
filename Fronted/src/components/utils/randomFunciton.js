export const getDate = (timestamp) =>{
    const date = new Date(timestamp)
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}