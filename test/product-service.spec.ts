import test from 'ava';
import sinon from 'sinon';
import Util from '@/util';
import ProductService from '@/product-service';

test('Given ProductService, When ProductService.getTop3(), Then result to be [A, B, C]', async t => {
  const stub = sinon.stub(ProductService, 'getList');
  stub.returns(Promise.resolve(['A', 'B', 'C', 'D']));

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
