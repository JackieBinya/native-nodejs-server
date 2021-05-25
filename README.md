# native-nodejs-server
This is a solution to Backend Challenge 1

## Requirements
- _Make sure that you have Nodejs >= 12.8 locallly._

## Installition
1. Open an account on https://www.omdbapi.com and get a free api key.
2. Clone this repo on your local.
3. Run `npm run start` to make a get request to OMDB API.
4. The a result will be logged on your console.


## How it works?
- We used a native nodejs module called https to make API requests to a OMBD.
- The query is to search by title and query parameter is hard coded in the url with a value of string of value "kill".
- The response is in json format and it is then parsed and logged as an object on the console.




