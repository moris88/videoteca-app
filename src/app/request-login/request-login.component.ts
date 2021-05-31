import { Attribute, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-login',
  templateUrl: './request-login.component.html',
  styleUrls: ['./request-login.component.css']
})
export class RequestLoginComponent implements OnInit {

  view: boolean; 
  text = '';


  constructor(
    @Attribute('view') text1: string,
    @Attribute('text') text2: string,
  ) { 
    text1 === 'true' ? this.view = true : this.view = false;
    text1 === 'true' ? this.text = text2 : this.text = '';
  }

  ngOnInit(): void {
  }

}
