import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private route: Router = injecting(ActivatedRoute);

  navigateToSignUpPage(): void {
    this.route.navigateTo(/signup)
  }
}