import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SignInModalComponent } from '../sign-in-modal/sign-in-modal.component';
import { SignUpModalComponent } from '../sign-up-modal/sign-up-modal.component';
import { StorageService } from '../../services/storage.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-user-panel',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
})
export class UserPanelComponent implements OnInit {
  user$: Observable<{ email: string; } | null>;

  constructor(
    private dialog: MatDialog,
    private storageService: StorageService
  ) {
    this.user$ = this.storageService.getTokenObservable().pipe(
      map((token) => {
        if (token) {
          const parsedPoken = jwtDecode(token) as any;
          return {
            email: parsedPoken?.email,
          };
        } else {
          return null;
        }
      })
    );
  }

  ngOnInit(): void {}

  signOut(): void {
    this.storageService.removeToken();
  }

  openSignInModal(): void {
    const dialogRef = this.dialog.open(SignInModalComponent, {
      width: '400px',
    });
  }

  openSignUpModal(): void {
    const dialogRef = this.dialog.open(SignUpModalComponent, {
      width: '400px',
    });
  }
}
