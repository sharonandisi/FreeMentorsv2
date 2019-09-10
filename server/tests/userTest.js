import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';
import User from '../models/userModel';
import '../../config';
import testdata from './mockData/user';
import authHelper from '../helpers/authHelper';

const { expect } = chai;
chai.should();
chai.use(chaiHttp);

describe('/Auth', () => {
    describe('/POST signup', () => {
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

    describe('PATCH /api/v1/auth/:userid', () => {

        let id = '';
        let token = '';

        const execute = () => chai.request(app)
            .patch(`/api/v1/auth/${id}`)
            .set('x-auth-token', token);

        it('should not change roles of a non existant user', async () => {
            User.createAdmin({ ...testdata.admin });
            const admin = User.findByEmail(process.env.ADMIN_EMAIL);
            token = authHelper.generateToken({id:admin.id});
            id = 2765786;
            const res = await execute();
            expect(res).to.have.status(404);
            return done();
        });

        it('should check for admin before allowing change of status', async () => {
            const { user001 } = testdata;
            const user = User.create({ ...user001 });
            token = authHelper.generateToken({id:user.id});
            id = user.id;
            const res = await execute();
            expect(res).to.have.status(403);
            return done();
        });

        it('should allow an admin to change a status', async () => {
            const { user001 } = testdata;
            const user = User.create({ ...user001 });
            id = user.id;
            User.createAdmin({ ...testdata.admin });
            const admin = User.findByEmail(process.env.ADMIN_EMAIL);
            token = authHelper.generateToken({id:admin.id});
            const res = await execute();
            expect(res).to.have.status(200);
            return done();
        });

    })
});
