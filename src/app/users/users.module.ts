import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersRoutingModule } from "./users-routing.module";
import { NgModel, FormsModule, ReactiveFormsModule } from "@angular/forms";

import { UsersComponent } from "./components/users/users.component";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { UsersService } from "./services/users.service";
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from "./effects/users.effect";

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    // EffectsModule.forFeature([UsersEffects])
  ],
  providers:[NgModel,UsersService]
})
export class UsersModule {}
