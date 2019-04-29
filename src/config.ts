export default class Config {
  host: string;
  port: string;

  constructor(host: string, port: string) {
    this.host = host;
    this.port = port;
  }

  getUrl(): string {
    return `https://${this.host}:${this.port}`;
  }
}
