import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) {}

  showSuccess(message: string) {
    const snackbarRef = this.snackBar.open(`✔ ${message}`, 'Close', {
      duration: 0, 
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['success-snackbar'],
    });
  
    snackbarRef.onAction().subscribe(() => {
      snackbarRef.dismiss();
    });
  }
  
  showError(message: string) {
    const snackbarRef = this.snackBar.open(`❌ ${message}`, 'Close', {
      duration: 0, 
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['error-snackbar'],
    });
  
    snackbarRef.onAction().subscribe(() => {
      snackbarRef.dismiss();
    });
  }
  
}
