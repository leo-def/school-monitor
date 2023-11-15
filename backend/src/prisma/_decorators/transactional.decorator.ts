import { SetMetadata } from '@nestjs/common';

export const TRANSACTIONAL_REQUEST_KEY = 'TRANSACTIONAL_REQUEST_KEY';

export const Transactional = () => SetMetadata(TRANSACTIONAL_REQUEST_KEY, true);
