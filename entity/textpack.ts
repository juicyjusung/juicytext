import { v4 as uuidv4 } from 'uuid';
import { DiffTextPack, JuicyText, TextType } from '~/types/index';

export class TextPack implements JuicyText {
  id = uuidv4();
  text = '';
  type: TextType = '';
  createdOn = new Date();
  updatedOn = new Date();
  lock: boolean = false;

  constructor(options?: Partial<JuicyText>) {
    if (options) {
      Object.assign(this, options);
    }
  }
}

type CreateDiff = Pick<DiffTextPack, 'left' | 'right'>;

export class DiffTextPacks implements DiffTextPack {
  id = uuidv4();
  left = new TextPack();
  right = new TextPack();
  createdOn = new Date();
  updatedOn = new Date();
  constructor(createOptions: CreateDiff) {
    Object.assign(this, createOptions);
  }
}
