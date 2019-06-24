# Population-Manager
This is an application that manages population of residents in given locations, it keeps track of the total number of male and female for the specified location.

## Technologies Used

* NodeJS
* Express
* PostgreSQL
* Sequelize
* Babel
* Eslint

## Installation

```bash

1. Git clone this repository `https://github.com/clintfidel/Population-Manager.git`
2. Change your directory `cd Population`
3. Install all dependencies using `npm install`
4. Create .env file which will be used to load environment variables see sample in `.env.example` file in the project root directory
6. Migrate `sequelize db:migrate`
7. Start the app `npm start-server` for development 
8. Navigate to `localhost:3800` in your browser

```

## Endpoints
* [POST] /api/v1/location/create - To create location
* [GET] /api/v1/location/all - Get all locations
* [GET] /api/v1/location/one/:locationId - Get one location
* [PUT] /api/v1/location/update/:locationId- To update location data
* [DELETE] /api/v1/location/delete/:locationId- To delete location data




## Tests

* Run database test using `npm run server:test`

## Coding Style

- Airbnb: Airbnb is a coding style guide that guides developers to write clean codes


## How to Contribute

```bash

- Fork this repository.
- Clone it.
- Create your feature branch on your local machine with ```git checkout -b your-feature-branch```
- Push your changes to your remote branch with ```git push origin your-feature-branch```
- Open a pull request to the master branch, and describe how your feature works

Ensure your codes follow <a href="https://github.com/airbnb/javascript">AirBnB Javascript Styles Guide</a>

```

## Author

-  Fidelis Clinton

## License

This project is licensed under the Apache License - see the [LICENSE](LICENSE) file for details
