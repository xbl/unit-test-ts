import test from 'ava';
import sinon from 'sinon';
import Util from '@/util';
import ProductService from '@/product-service';

test.serial('Given ProductService, When ProductService.getTop3(), Then result to be [A, B, C]', async t => {
  const stub = sinon.stub(ProductService, 'getList');
  stub.resolves(['A', 'B', 'C', 'D']);

  const result = await ProductService.getTop3();
  t.deepEqual(result, ['A', 'B', 'C']);

  stub.restore();
});

test('Given ProductService, When ProductService.sendEmail(), Then send email subject to be Top 3 And content to be A,B,C', async t => {
  const spy = sinon.spy(Util, 'sendEmail');

  await ProductService.sendEmail(['A', 'B', 'C', 'D']);
  t.truthy(spy.calledOnce);
  t.truthy(spy.calledWith('Top 3', 'A,B,C'));

  spy.restore();
});

test.serial('Given ProductService, When call ProductService.getTop3() twice, Then got error', async t => {
  const stub = sinon.stub(ProductService, 'getList');
  stub.onCall(0).resolves(['A', 'B', 'C', 'D']);
  const expectError = new Error('error!');
  stub.onCall(1).rejects(expectError);

  const result = await ProductService.getTop3();
  t.deepEqual(result, ['A', 'B', 'C']);

  const error = await t.throwsAsync(ProductService.getTop3());
  t.deepEqual(expectError, error);

  stub.restore();
});

test.serial('Given ProductService, When call ProductService.getTop3() once, Then got verify to be true', async t => {
  const mock = sinon.mock(ProductService).expects('getList');
  mock.once().resolves(['A', 'B', 'C', 'D']);

  const result = await ProductService.getTop3();
  t.deepEqual(result, ['A', 'B', 'C']);

  t.truthy(mock.verify());
});
