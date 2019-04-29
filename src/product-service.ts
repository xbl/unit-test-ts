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

  static async save(list: Array<string>): Promise<any> {
    // 这里是一个很漫长的网络请求，写入...
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 30000);
    });
  }

  static async saveTop3(list: Array<string>): Promise<any> {
    this.save(list.slice(0, 3));
  }
}
