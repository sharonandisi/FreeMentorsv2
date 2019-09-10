import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';
import User from '../models/userModel';
import '../../config';
import testdata from './mockData/user';

const { expect } = chai;
chai.should();
chai.use(chaiHttp);

describe('/Auth', () => {
    describe('/POST signup', () => {
        it('should successfully sign up a user', (done) => {
            chai.request(app)
                .post('/api/v1/auth/signup')
                .send(testdata.user001)
                .end((err, res) => {
                    res.should.have.status(201);
                    if (err) return done();
                    done();
                });
        });

        it('should not sign up a user missing a firstname', (done) => {
            chai.request(app)
                .post('/api/v1/auth/signup')
                .send(testdata.user002)
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    if (err) return done();
                    done();
                });
        });

        it('should not sign up a user missing a lastname', (done) => {
            chai.request(app)
                .post('/api/v1/auth/signup')
                .send(testdata.user003)
                .end((err, res) => {
                    res.should.have.status(400);
                    expect(res).to.have.status(400);
                    if (err) return done();
                    done();
                });
        });

        it('should not sign up a user missing an email address', (done) => {
            chai.request(app)
                .post('/api/v1/auth/signup')
                .send(testdata.user004)
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    if (err) return done();
                    done();
                });
        });

        it('should not sign up a user missing a password', (done) => {
            chai.request(app)
                .post('/api/v1/auth/signup')
                .send(testdata.user005)
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    if (err) return done();
                    done();
                });
        });

        it('should not sign up a user missing an address', (done) => {
            chai.request(app)
                .post('/api/v1/auth/signup')
                .send(testdata.user006)
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    if (err) return done();
                    done();
                });
        });

        it('should not sign up a user missing a bio', (done) => {
            chai.request(app)
                .post('/api/v1/auth/signup')
                .send(testdata.user007)
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    if (err) return done();
                    done();
                });
        });

        it('should not sign up a user missing an occupation', (done) => {
            chai.request(app)
                .post('/api/v1/auth/signup')
                .send(testdata.user008)
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    if (err) return done();
                    done();
                });
        });

        it('should not sign up a user missing an expertise', (done) => {
            chai.request(app)
                .post('/api/v1/auth/signup')
                .send(testdata.user009)
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    if (err) return done();
                    done();
                });
        });
    });

    describe('/POST signin', () => {

        it('should successfully sign up a user', (done) => {
            chai.request(app)
                .post('/api/v1/auth/signin')
                .send(testdata.user010)
                .end((err, res) => {
                    res.should.have.status(200);
                    if (err) return done();
                    done();
                });
        });

        it('should not sign in a user missing an email address', (done) => {
            chai.request(app)
                .post('/api/v1/auth/signin')
                .send(testdata.user011)
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    if (err) return done();
                    done()
                });
        });

        it('should not sign in a user missing a password', (done) => {
            chai.request(app)
                .post('/api/v1/auth/signin')
                .send(testdata.user012)
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    if (err) return done();
                    done()
                });
        });

        it('should not sign in a user that is not registered', (done) => {
            chai.request(app)
                .post('/api/v1/auth/signin')
                .send(testdata.user013)
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    if (err) return done();
                    done()
                })
        })
    });

});