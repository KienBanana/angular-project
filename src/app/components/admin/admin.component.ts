import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { AdminLeftComponent } from './admin-left/admin-left.component';

import { ProductAdminComponent } from './product-admin/product-admin.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterModule,
    AdminLeftComponent,
    ProductAdminComponent,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {}
