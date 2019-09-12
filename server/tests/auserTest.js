import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';
import { findByEmail } from '../models/userModel';
import '../../config';
import testdata from './mockData/user';
import authHelper from '../helpers/authHelper';

const { expect } = chai;
chai.should();
chai.use(chaiHttp);
let userid = false;

describe('/Auth', () => {

    describe('/POST signup', () => {
     

        it('successfully sign up user', (done) => {
            const { user001 } = testdata;
            chai.request(app)
                .post('/api/v2/auth/signup')
                .send(user001)
                .end((err, res) => {
                    res.should.have.status(201);
                    userid = res.body.id;
                    if (err) return done();
                    done();
                });
        });

        it('should not sign up a user missing a firstname', (done) => {
            chai.request(app)
                .post('/api/v2/auth/signup')
                .send(testdata.user002)
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    if (err) return done();
                    done();
                });
        });

        it('should not sign up a user missing a lastname', (done) => {
            chai.request(app)
                .post('/api/v2/auth/signup')
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
                .post('/api/v2/auth/signup')
                .send(testdata.user004)
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    if (err) return done();
                    done();
                });
        });

        it('should not sign up a user missing a password', (done) => {
            chai.request(app)
                .post('/api/v2/auth/signup')
                .send(testdata.user005)
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    if (err) return done();
                    done();
                });
        });

        it('should not sign up a user missing an address', (done) => {
            chai.request(app)
                .post('/api/v2/auth/signup')
                .send(testdata.user006)
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    if (err) return done();
                    done();
                });
        });

        it('should not sign up a user missing a bio', (done) => {
            chai.request(app)
                .post('/api/v2/auth/signup')
                .send(testdata.user007)
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    if (err) return done();
                    done();
                });
        });

        it('should not sign up a user missing an occupation', (done) => {
            chai.request(app)
                .post('/api/v2/auth/signup')
                .send(testdata.user008)
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    if (err) return done();
                    done();
                });
        });

        it('should not sign up a user missing an expertise', (done) => {
            chai.request(app)
                .post('/api/v2/auth/signup')
                .send(testdata.user009)
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    if (err) return done();
                    done();
                });
        });
    });

    describe('/POST signin', () => {
        it('should successfully sign in a user', (done) => {
            const { user010 } = testdata;
            chai.request(app)
                .post('/api/v2/auth/signin')
                .send(user010)
                .end((err, res) => {
                    res.should.have.status(200);
                    if (err) return done();
                    done();
                });
        });

        it('should not sign in a user missing an email address', (done) => {
            chai.request(app)
                .post('/api/v2/auth/signin')
                .send(testdata.user011)
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    if (err) return done();
                    done()
                });
        });

        it('should not sign in a user missing a password', (done) => {
            chai.request(app)
                .post('/api/v2/auth/signin')
                .send(testdata.user012)
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    if (err) return done();
                    done()
                });
        });

        it('should not sign in a user that is not registered', (done) => {
            chai.request(app)
                .post('/api/v2/auth/signin')
                .send(testdata.user013)
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    if (err) return done();
                    done()
                })
        })
      
    });
    describe('PATCH /api/v2/auth/:userid', () => {
        let token = false;
        let usertoken = false;

        before((done) => {
            chai.request(app)
                .post('/api/v2/auth/signin')
                .send(testdata.admin001)
                .end((err, res) => {
                    const { body } = res;
                    token = body.data;
                })

            chai.request(app)
                .post('/api/v2/auth/signin')
                .send(testdata.user014)
                .end((err, res) => {
                    const { body } = res;
                    usertoken = body.data;
                    done();
                })
        });

        it('should not allow an admin access with no token', (done) => {
            chai.request(app)
                .patch('/api/v2/auth/'+userid)
                .end((err, res) => {
                    const {body, status} = res;
                    expect(status).to.be.equal(401, 'Incorrect status');
                    done();
                });
                
        });


        it('should not allow an admin access with invalid token', (done) => {
            chai.request(app)
                .patch('/api/v2/auth/' + userid)
                .end((err, res) => {
                    const { body, status } = res;
                    expect(status).to.be.equal(401, 'Incorrect status');
                    done();
                });
        });


        it('should check for admin before allowing change of status', (done) => {
            chai.request(app)
                .patch('/api/v2/auth/' + userid)
                .set('x-auth-token', token)
                .end((err, res) => {
                    const { body, status } = res;
                    expect(status).to.be.equal(401, 'Incorrect status');
                    done();
                })
        });

    })
});