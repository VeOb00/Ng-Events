import { Component, OnInit } from '@angular/core';
import {
  faFacebook,
  faGoogle,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faHome,
  faPhone,
  faPrint,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faGoogle = faGoogle;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faHome = faHome;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faPrint = faPrint;

  constructor() {}

  ngOnInit(): void {}
}
