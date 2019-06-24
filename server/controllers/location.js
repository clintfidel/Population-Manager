/* eslint-disable camelcase */
/* eslint-disable require-jsdoc */
import database from '../../models';

const { Location } = database;

class LocationController {
  static async addLocation(req, res) {
    try {
      const { location, noOfMales, noOfFemales } = req.body;
      const newLocation = await Location.create({
        location,
        no_of_females: parseInt(noOfFemales, 10),
        no_of_males: parseInt(noOfMales, 10)
      });
      return res.status(200).json({
        messgae: 'Location created successfully',
        status: true,
        NewLocation: newLocation
      });
    } catch (error) {
      return error;
    }
  }

  static async getOneLocation(req, res) {
    try {
      const { locationId } = req.params;
      const singleLocation = await Location.findOne({
        where: {
          id: locationId
        }
      });
      if (singleLocation) {
        const { no_of_females, no_of_males } = singleLocation;
        singleLocation.sum_totals = no_of_females + no_of_males;
        return res.status(200).json({
          message: 'Location retrieved successfully',
          status: false,
          SingleLocation: singleLocation
        });
      }
      return res.status(200).json({
        message: 'No location found',
        status: false
      });
    } catch (error) {
      return error;
    }
  }

  static async getAllLocation(req, res) {
    try {
      const allLocation = await Location.findAll({});
      let total = 0;
      if (allLocation) {
        allLocation.forEach(element => {
          let females = element.no_of_females;
          let males = element.no_of_males;
          // eslint-disable-next-line no-return-assign
          return total += males + females;
        });
        return res.status(200).json({
          message: 'All Location retrieved successfully',
          status: true,
          AllLocation: [...allLocation, { total: total }]
        });
      }
      return res.status(404).json({
        message: 'Location not found',
        status: false
      });
    } catch (error) {
      return error;
    }
  }

  static updateLocation(req, res) {
    const { location, noOfmales, noOfFemales } = req.body;
    const { locationId } = req.params;
    Location.findOne({
      where: {
        id: locationId
      }
    })
      .then(newLocation => {
        if (newLocation) {
          newLocation.update({
            location: location || newLocation.location,
            no_of_females: +noOfFemales || newLocation.no_of_females,
            no_of_males: +noOfmales || newLocation.no_of_males,
          });
          return res.status(200).json({
            message: 'Location data updated successfully',
            status: true,
            UpdatedLocation: newLocation
          });
        }
      }).catch(error => error);
  }

  static deleteLocation(req, res) {
    const { locationId } = req.params;
    Location.findOne({
      where: {
        id: locationId
      }
    })
      .then(location => {
        if (location) {
          location.destroy({ id: locationId });
          return res.status(200).json({
            message: 'Location data deleted successfully',
            status: true,
            deletedLocation: location
          });
        }
      }).catch(error => error);
  }
}

export default LocationController;
