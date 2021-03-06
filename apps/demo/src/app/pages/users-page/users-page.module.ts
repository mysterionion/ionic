import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { UsersListModule } from '@rucken/ionic';
import { UsersPageComponent } from './users-page.component';
import { UsersPageRoutes } from './users-page.routes';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    UsersListModule,
    TranslateModule.forChild(),
    RouterModule.forChild(UsersPageRoutes)
  ],
  declarations: [UsersPageComponent]
})
export class UsersPageModule { }
