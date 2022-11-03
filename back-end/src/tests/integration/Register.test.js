const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');
const { UserModel } = require('../../database/models');
const jwt = require('jsonwebtoken');
const registerMock = require('../mocks/registerMock');

chai.use(chaiHttp);
const { expect } = chai;

describe('Rota POST /register', () => {
  describe('Quando os dados do `body` são válidos', () => {
    before(async () => {
      sinon.stub(UserModel, 'findOne').resolves(null);
      sinon.stub(UserModel, 'create').resolves(registerMock.createdUser);
      sinon.stub(jwt, 'sign').resolves('tokenCorreto');
    });
    
    after(()=> {
      sinon.restore();
    })

    it('A aplicação retorna um status 201 e as informações do usuário', async () => {
      const postRegister = await chai.request(app).post('/register')
      .send(registerMock.successfulRegister);
      const { status, body } = postRegister;

      expect(status).to.be.equals(201);
      expect(body).to.be.deep.equal(registerMock.successfulResponse);
    })
  })

  describe('Quando os dados do `body` existem no banco de dados', () => {
    before(async () => {
      sinon.stub(UserModel, 'findOne').resolves(registerMock.user);
    });
    
    after(()=> {
      sinon.restore();
    })

    it('A aplicação retorna um status 409 e uma mensagem de conflito', async () => {
      const postRegister = await chai.request(app).post('/register')
      .send(registerMock.unsuccessfulRegister);
      const { status, body } = postRegister;

      expect(status).to.be.equals(409);
      expect(body).to.be.deep.equal({message: 'Conflict'});
    })
  })
});