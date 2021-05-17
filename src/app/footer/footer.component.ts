import { Attribute, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private textContent!: string;

  constructor(@Attribute('content') textContent: string ) {
    this.textContent = textContent;
  }

  ngOnInit(): void {
  }

  get text_content(): string{
    return this.textContent;
  }

}
