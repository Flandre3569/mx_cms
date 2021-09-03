import { App } from 'vue';
// import registerElement from './register-element';
import registerProperties from './registerProperties';

export function globalRegister(app: App): void {
  // app.use(registerElement);
  app.use(registerProperties);
}
