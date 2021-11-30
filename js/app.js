const getCountryButton = document.querySelector(".getCountry");
getCountryButton.addEventListener("click",getCountry)

function getCountry()
{
    getSelectCountry = document.getElementById("selectCountry").value;
    let url = `https://restcountries.com/v2/name/${getSelectCountry}`;
    fetch(url)
    .then(response =>{
        //console.log(response.json)
        return response.json();
    })
    .then(data=>{
        data.forEach(element => {
            console.log(element)
        });


    })
    
}