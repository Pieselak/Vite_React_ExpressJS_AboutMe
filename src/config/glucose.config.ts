export class GlucoseConfig {
  readonly apiUrl: string;
  readonly version: string;
  readonly product: string;
  readonly accountId: string;
  readonly email: string;
  readonly password: string;

  constructor() {
    this.apiUrl = this.getEnv('LIBREVIEW_API_URL');
    this.version = this.getEnv('LIBREVIEW_VERSION');
    this.product = this.getEnv('LIBREVIEW_PRODUCT');
    this.accountId = this.getEnv('LIBREVIEW_ACCOUNT_ID');
    this.email = this.getEnv('LIBREVIEW_EMAIL');
    this.password = this.getEnv('LIBREVIEW_PASSWORD');
  }

  private getEnv(key: string): string {
    const value = process.env[key];
    if (!value) {
      throw new Error(`Missing environment variable: ${key}`);
    }
    return value;
  }
}
