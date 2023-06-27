export class LoginAndSign{
    email: string | null = null;
    password: string | null = null;
    name: string | null = null;
    constructor(addReq?: LoginAndSign) {
        if (addReq) {
            this.deserialize(addReq)
        }
    }
    private deserialize(data: any) {
        const keys = Object.keys(this);
        for (const key of keys) {
          if (data.hasOwnProperty(key)) {
            (this as any)[key] = data[key];
          }
        }
      }
}