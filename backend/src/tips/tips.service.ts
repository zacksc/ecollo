import { Injectable } from '@nestjs/common';

@Injectable()
export class TipsService {
  list() {
    return [
      { id: 1, text: 'Lave embalagens antes de reciclar.' },
      { id: 2, text: 'Separe vidro, metal, papel e plástico.' },
    ];
  }
}
