import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationEnd, Router, RouterLink } from "@angular/router";
import { UserService } from "../../services/user.service";
import { filter } from "rxjs";

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  private service = inject(UserService);
  private router = inject(Router);

  isAuthenticated = this.service.isAuthenticated;

  currentRoute = signal(this.router.url);

  constructor() {
    this.router.events  //mi metto in ascolto router.events 
      .pipe(filter((e) => e instanceof NavigationEnd)) //prendo solo quando la navigazione è finita
      .subscribe((e: any) => {
        this.currentRoute.set(e.urlAfterRedirects);  //aggiorno il segnale della rotta corrente con quella nuova 
      });
  }

  isActive(path: string) {
    return this.currentRoute().startsWith(path); //metodo per trovare la rotta attiva 
  }
}



