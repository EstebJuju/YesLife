export class DTOQuestion {
  label: string;
  placeholder: string;
  isSelect: boolean;
  selectOptions: string[];

  public constructor(init?: DTOQuestion) {
    Object.assign(this, init);
  }
}
