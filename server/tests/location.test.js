import expect from 'expect';
import supertest from 'supertest';
import app from '../../server';

const apiPrefix = '/api/v1/location';


describe('Location', () => {
  it('should not create a new location', (done) => {
    supertest(app)
      .post(`${apiPrefix}/create`)
      .send({
        no_of_females: 20,
        no_of_males: 30,
        location: 'Lagos',
      })
      .expect(201)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.body.message).toBe('Location created successfully');
        expect(res.status).toBe(201);
        done();
      });
  });
  it('should get one location ', (done) => {
    supertest(app)
      .get(`${apiPrefix}/one`)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.body.message).toBe('Location retrieved successfully');
        expect(res.status).toBe(200);
        done();
      });
  });
  it('should not get all location ', (done) => {
    supertest(app)
      .get(`${apiPrefix}/all`)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.body.message).toBe('All Location retrieved successfully');
        done();
      });
  });
  it('should update user location', (done) => {
    supertest(app)
      .put(`${apiPrefix}/all`)
      .send({
        no_of_females: 10,
        no_of_males: 40,
        location: 'Lagos ibadan',
      })
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.body.message).toBe('Business successfully edited');
        done();
      });
  });
  it('should delete user location ', (done) => {
    supertest(app)
      .delete(`${apiPrefix}/delete/1`)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.body.message).toBe('Location data deleted successfully');
        done();
      });
  });
});
