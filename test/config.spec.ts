import test from 'ava';
import Config from '@/config';

test('Given host "" And port "", When Config.getUrl(), Then result to be https://:', t => {
  // 这里的参数就是一种 Dummy 测试替身方法
  const config = new Config('', '');
  const result = config.getUrl();
  t.is(result, 'https://:');
});
