const axios = require ('axios');
const validator = require('jsonschema');
const locationsSchema = require('../data/locations.v2.schema.json');


describe ('API testing Realtor.com', function (){
    let response;
    beforeAll (async () => {
        response = await axios.get('https://realtor.p.rapidapi.com/locations/v2/auto-complete', 
        {params: {input: 'new york', limit: '10'},
        headers: {
          'X-RapidAPI-Key': 'f60cf7c6e0msh8c64172a5d054c8p15c655jsn8ca43bb58d75',
          'X-RapidAPI-Host': 'realtor.p.rapidapi.com'
        }})
    })

    test ('1. Status code should be 200', async () =>{
        console.log(response.data)
    expect (response.status).toEqual(200)
    })
    test ('2. Schema should be valid', async () => {
        const result = await validator.validate(response.data, locationsSchema);
        expect (result.valid).toEqual(true)

    })
})


