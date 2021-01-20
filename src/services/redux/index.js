import { createStore, persist } from 'easy-peasy';
import auth from './models/auth';
import settings from './models/settings';

const model = {
    auth,
    settings
}

const dataprovider = createStore(persist(model));

export default dataprovider;
