export default class ProductService {

  static getList(): Promise<Array<string>> {
    // 这里是一个很漫长的网络请求
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(['H', 'E', 'L', 'L', 'O']);
      }, 30000);
    });
  }

  static async getTop3(): Promise<Array<string>> {
    const list = await this.getList();
    return list.slice(0, 3);
  }
}
