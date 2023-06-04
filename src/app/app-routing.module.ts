import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputOutputComponent } from './input-output/input-output.component';
import { ReactiveServiceComponent } from './reactive-service/reactive-service.component';

const routes: Routes = [
  { path: '', redirectTo: '/reactive-service', pathMatch: 'full' },
  { path: 'input-output', component: InputOutputComponent },
  { path: 'reactive-service', component: ReactiveServiceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
