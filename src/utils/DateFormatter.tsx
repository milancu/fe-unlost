export const formatDate = (input:string)=>{
    const date = new Date(input);
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
}