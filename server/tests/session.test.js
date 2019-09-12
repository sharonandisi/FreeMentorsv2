import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';
import { create, changeMentor, findByEmail } from '../models/userModel';
import '../../config';
import testdata from './mockData/user'
import authHelper from '../helpers/authHelper';
import Session from '../models/sessionModel';
import mockData from './mockData/user'

chai.use(chaiHttp);
const { expect, request } = chai;
const endpoint = '/api/v2/sessions/'

describe('Master describe', () =>{
    let token = false;
    
    before((done) => {
            chai.request(app)
                .post('/api/v2/auth/signup')
                .send(mockData.user014)
                .end((err, res) => {
                    const { body } = res;
                    token = body.data;
                    done();
                })            
    });

    describe('POST /api/v1/sessions/sessions', () => {
        it('Should successfully create a session with valid mentor', (done) => {
            chai.request(app)
                .post(`${endpoint}/`)
                .set('x-auth-token', token)
                .send(mockData.session001)
                .end((err, res) => {
                    const { body, status } = res;
                    expect(status).to.be.equal(400, 'Status not correct');
                    done();
                })
        });

        it('Should not successfully create a session with invalid mentor', (done) => {
            chai.request(app)
                .post(`${endpoint}/`)
                .set('x-auth-token', token)
<<<<<<< HEAD
                .send(mockData.session002)
=======
                .send(mockData.session001)
>>>>>>> 4c697ebe6f48afc8c1738acc95741f8bdcd42c4f
                .end((err, res) => {
                    const { body, status } = res;
                    expect(status).to.be.equal(400, 'Status not correct');
                    done();
                })
        });
        it('Should not successfully create a session if session is already created', (done) => {
            chai.request(app)
                .post(`${endpoint}/`)
                .set('x-auth-token', token)
                .send(mockData.session001)
                .end((err, res) => {
                    const { body, status } = res;
                    expect(status).to.be.equal(400, 'Status not correct');
                    done();
                })
        });

    });
    describe('PATCH /api/v1/sessions/:sessionid/accept', () => {

    });

    describe('PATCH /api/v1/sessions/sessions/:sessionid/reject', () => {
    
    });

});
