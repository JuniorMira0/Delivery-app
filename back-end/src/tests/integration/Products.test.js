const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');
const { ProductsModel } = require('../../database/models');
const { allProducts, token } = require('../mocks/productMock');

chai.use(chaiHttp);

let chaiRequest = chai.request;

const { expect } = chai;

describe('Rota /products', () => {
  let goodResponse;

  before(async () => {
    sinon
    .stub(ProductsModel, 'findAll')
    .returns(allProducts);
    goodResponse = await chaiRequest(app)
    .get('/products')
    .set({ Authorization: token });
  });
  after(() => {
    ProductsModel.findAll.restore();
  });

  it('Should returns all products', () => {
    const { body } = goodResponse;
    expect(body).to.be.an('array');
    expect(body).to.be.lengthOf(11);
    for (let i = 0; i <11; i +=1) {
      expect(body[index]).to.haveOwnProperty('id');
      expect(body[index]).to.haveOwnProperty('name');
      expect(body[index]).to.haveOwnProperty('price');
      expect(body[index]).to.haveOwnProperty('url_image');
    }
  });
});

describe('Rota /products', () => {
  let authError;

  before(async () => {
    sinon
    .stub(ProductsModel, 'findAll')
    .returns(allProducts);
    authError = await chaiRequest(app)
    .get('/products')
  });
  after(() => {
    ProductsModel.findAll.restore();
  })

  it('Should not return products without an token', () => {
    const { body } = authError;

    expect(body).to.be.an('object');
    expect(authError).to.have.status(404);
    expect(body).to.haveOwnProperty('error');
    expect(body.error).to.be.equal({ error: 'token is required!' });
  })
});

