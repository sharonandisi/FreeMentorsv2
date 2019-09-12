import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';
import { create, changeMentor, findByEmail } from '../models/userModel';
import '../../config';
import testdata from './mockData/user'
import authHelper from '../helpers/authHelper';

const { expect } = chai;
chai.should();
chai.use(chaiHttp);

describe('GET /api/v2/mentors/mentors/:mentorid', () => {
    let mentorid = '';
    let token = '';

    const execute = () => chai.request(app)
        .get(`/api/v2/mentors/mentors/${mentorid}`)
        .set('x-auth-token', token);

    it('should not get a mentor if the user making the request has no token', async () => {
        token = '';
        const res = await execute();
        expect(res).to.have.status(401);
    });

    it('should not get a mentor if the user has an invalid token', async () => {
        token = 'sha23563rwe';
        const res = await execute();
        expect(res).to.have.status(401);

    })

});

describe('/GET  all mentors', () => {

    let token = '';
    const execute = () => chai.request(app)
        .get('/api/v2/mentors/mentors')
        .set('x-auth-token', token);

    it('should not get mentors when the user has no token', async () => {
        token = '';
        const res = await execute();
        expect(res).to.have.status(401);
    });

    it('should not get mentors if the user has an invalid token', async () => {
        token = 'sha23563rwe';
        const res = await execute();
        expect(res).to.have.status(401);
    });

});