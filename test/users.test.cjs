const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app.js');

chai.use(chaiHttp);
const expect = chai.expect;
const requester = chai.request(app).keepOpen();

after(() => {
  requester.close();
});

describe('GET /api/users/:uid', () => {
  it('debería devolver error si uid no es un número', async () => {
    const res = await requester.get('/api/users/abc');
    expect(res.status).to.equal(400);
    expect(res.body.error).to.equal('Parámetro inválido');
  });

  it('debería devolver error si uid es negativo', async () => {
    const res = await requester.get('/api/users/-1');
    expect(res.status).to.equal(400);
    expect(res.body.error).to.equal('Parámetro inválido');
  });

  it('debería devolver error si uid está vacío', async () => {
    const res = await requester.get('/api/users/');
    expect(res.status).to.equal(404); // Ruta inválida
  });
});
