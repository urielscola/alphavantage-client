import AxiosMockAdapter from 'axios-mock-adapter';
import instance from '../services/instance';

const apiMock = new AxiosMockAdapter(instance);

export default apiMock;
