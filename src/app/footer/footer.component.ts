import { Attribute, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private textSviluppatore!: string;
  private textEmail!: string;
  private textCell!: string;
  private textIndirizzo!: string;
  private textCompany!: string;
  private textLinkedin!: string;

  constructor(
    @Attribute('sviluppatore') text1: string,
    @Attribute('email') text2: string,
    @Attribute('cell') text3: string,   
    @Attribute('indirizzo') text4: string,
    @Attribute('company') text5: string,
    @Attribute('linkedin') text6: string,
    ) {
    this.textSviluppatore = text1;
    this.textEmail = text2;
    this.textCell = text3;
    this.textIndirizzo = text4;
    this.textCompany = text5;
    this.textLinkedin = text6;
  }

  ngOnInit(): void {
  }

  get sviluppatore(): string{
    return this.textSviluppatore;
  }

  get email(): string{
    return this.textEmail;
  }

  get cell(): string{
    return this.textCell;
  }

  get indirizzo(): string{
    return this.textIndirizzo;
  }

  get company(): string{
    return this.textCompany;
  }

  get linkedin(): string{
    return this.textLinkedin;
  }

}
