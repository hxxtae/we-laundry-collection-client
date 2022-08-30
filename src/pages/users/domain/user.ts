import Https from '../../../service/https';

class User {
  private https: Https;

  constructor(https: Https) {
    this.https = https;
  }
}

export default User;
