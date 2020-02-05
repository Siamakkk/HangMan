// const getCountryName = (countyCode) => {
//     return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
//          if(response.status === 200){
//              return response.json()
//          }else {
//              throw new Error('Error: such a country not found')
//          }
//      }).then((data) => {
//          return data.find((country) => {
//             return country.alpha2Code === countyCode
//          })
//      }).then((country) => country.name)
//  }

//  const print = async () => {
//      const country = await getCountryName('IR')
//      console.log(country)
//  } 

//  print()