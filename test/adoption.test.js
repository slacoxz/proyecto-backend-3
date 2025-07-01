import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app.js';

const expect = chai.expect;
chai.use(chaiHttp);

let requester;

before(() => {
  requester = chai.request(app).keepOpen();
});

after(() => {
  requester.close();
});

describe('TDD: Adoption Router', () => {

  it('GET /api/adoptions - debe obtener todas las adopciones', async () => {
    const res = await requester.get('/api/adoptions');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('payload');
    expect(Array.isArray(res.body.payload)).to.be.true;
  });

  it('GET /api/adoptions/:aid - debe fallar con ID inválido', async () => {
    const res = await requester.get('/api/adoptions/invalid-id');
    expect(res.status).to.be.oneOf([400, 404]);
  });

  it('POST /api/adoptions/:uid/:pid - debe fallar si los IDs son inválidos', async () => {
    const res = await requester.post('/api/adoptions/fakeUser/fakePet');
    expect(res.status).to.be.oneOf([400, 404]);
  });

  // Test para creación exitosa — requeriría usuarios y mascotas válidos
   it('POST /api/adoptions/:uid/:pid - debe crear una adopción', async () => {
    const res = await requester.post('/api/adoptions/64d1f.../64d2b...');
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('payload');
   });

});
