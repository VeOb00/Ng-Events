import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfileComponent } from './profile/profile.component';
import { userRoutes } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { HeroComponent } from '../hero/hero.component';

@NgModule({
  declarations: [ProfileComponent, LoginComponent, HeroComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [HeroComponent],
})
export class UserModule {}
