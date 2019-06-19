import express from 'express';
import location from '../controllers/location';

const {
  addLocation,
  deleteLocation,
  updateLocation,
  getAllLocation,
  getOneLocation
} = location;

const apiPrefix = '/location';

const locationRouter = express.Router();
locationRouter
  .route(`${apiPrefix}/create`).post(addLocation);
locationRouter
  .route(`${apiPrefix}/one/:locationId`).get(getOneLocation);
locationRouter
  .route(`${apiPrefix}/all`).get(getAllLocation);
locationRouter
  .route(`${apiPrefix}/delete/:locationId`).get(deleteLocation);
locationRouter
  .route(`${apiPrefix}/update/:locationId`).get(updateLocation);

export default locationRouter;
