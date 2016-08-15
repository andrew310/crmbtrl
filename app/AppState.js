import { observable } from 'mobx';

class AppState {
  @observable name = 'enter text...';

  var setName = (n) => name = n;

}

export default AppState;
