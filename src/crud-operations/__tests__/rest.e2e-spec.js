import request from 'supertest';
import faker from 'faker';

describe('CRUD Operations', () => {
  it('should get a text list', async () => {
    const { statusCode, body } = await request(global.API_URL)
      .get('/crud-operations');

    expect(statusCode).toBe(200);
    expect(body.message).toBe('Data obtained.');
  });

  it('should get a item from ID in list', async () => {
    const { statusCode, body } = await request(global.API_URL)
      .get('/crud-operations?_id=5a4b49309fc9ad8fa4dfe51f');

    expect(statusCode).toBe(200);
    expect(body.message).toBe('Data obtained.');
  });

  it('should search a text in list', async () => {
    const { statusCode, body } = await request(global.API_URL)
      .get('/crud-operations?text=Developer');

    expect(statusCode).toBe(200);
    expect(body.message).toBe('Data obtained.');
  });

  it('should get a list length', async () => {
    const { statusCode, body } = await request(global.API_URL)
      .get('/crud-operations/count');

    expect(statusCode).toBe(200);
    expect(body.message).toBe('Data obtained.');
  });

  it('should /crud-operations/pagination', async () => {
    const { statusCode, body } = await request(global.API_URL)
      .get('/crud-operations/pagination');

    expect(statusCode).toBe(200);
    expect(body.message).toBe('Data obtained.');
  });

  it('should create a item', async () => {
    const { statusCode, body: { message } } = await request(global.API_URL)
      .post('/crud-operations')
      .send({ text: faker.name.jobTitle() });

    expect(statusCode).toBe(200);
    expect(message).toBe('List saved');
  });

  it('should update a item', async () => {
    const _id = '59901c7dbc9187001ec32c7b';
    const { statusCode, body: { message } } = await request(global.API_URL)
      .put(`/crud-operations/${_id}`)
      .send({ text: faker.name.jobTitle() });

    expect(statusCode).toBe(200);
    expect(message).toBe('List updated');
  });

  it('should remove a item', async () => {
    const _id = '59901c7dbc9187001ec32c7b';
    const { statusCode, body: { message } } = await request(global.API_URL)
      .delete(`/crud-operations/${_id}`);

    expect(statusCode).toBe(200);
    expect(message).toBe('List deleted');
  });
});
