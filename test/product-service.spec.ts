import test from 'ava';
import sinon from 'sinon';
import ProductService from '@/product-service';

test('Given ProductService, When ProductService.getTop3(), Then result to be [A, B, C]', async t => {
  const stub = sinon.stub(ProductService, 'getList');
  stub.returns(Promise.resolve(['A', 'B', 'C', 'D']));

  const result = await ProductService.getTop3();
  t.deepEqual(result, ['A', 'B', 'C']);

  stub.restore();
});
