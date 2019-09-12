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

describe('/Auth', () => {
    describe('/POST signup', () => {
        it('should successfully sign up a user', (done) => {
            const { user001 } = testdata;
            chai.request(app)
                .post('/api/v2/auth/signup')
                .send(user001)
                .end((err, res) => {
                    res.should.have.status(201);
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
        let id = '';
        let token = '';

        const execute = () => chai.request(app)
            .patch(`/api/v2/auth/${id}`)
            .set('x-auth-token', token);

        it('should not allow an admin access with no token', async () => {
            const admin = await findByEmail(process.env.ADMIN_EMAIL);
            id = admin.id;
            token = '';
            const res = await execute();
            expect(res).to.have.status(401);
        });

        it('should not allow an admin access with invalid token', async () => {
            const admin = await findByEmail(process.env.ADMIN_EMAIL);
            id = admin.id;
            token = 'jdje';
            const res = await execute();
            expect(res).to.have.status(401);
        });


        it('should check for admin before allowing change of status', async () => {

            const { user001 } = testdata;
            const user = await findByEmail(user001.email);
            id = user.id;
            token = authHelper.generateToken(user);
            const res = await execute();
            expect(res).to.have.status(403);
        });

        it('should allow an admin to change a status', async () => {
            const { user001 } = testdata;
            const user = await findByEmail(user001.email);
            id = user.id
            const admin = await findByEmail(process.env.ADMIN_EMAIL);
            token = authHelper.generateToken(admin);
            const res = await execute();
            expect(res).to.have.status(200);

        });

    })
});