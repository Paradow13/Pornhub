export class Actor {
  private _lastName: string;
  private _firstName: string;
  private _linkGoogle: string;

  constructor(lastName: string, firstName: string, linkGoogle: string) {
    this._lastName = lastName;
    this._firstName = firstName;
    this._linkGoogle = linkGoogle;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get linkGoogle(): string {
    return this._linkGoogle;
  }

  set linkGoogle(value: string) {
    this._linkGoogle = value;
  }
}
