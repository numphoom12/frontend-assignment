export async function get_data(){
       const Data =  await fetch('http://localhost:9000/trips')
        .then((res) => res.json())
        .then((data) => {return data})
}