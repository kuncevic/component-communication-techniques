import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputOutputComponent } from './input-output/input-output.component';
import { ReactiveServiceComponent } from './reactive-service/reactive-service.component';

const routes: Routes = [
  { path: '', redirectTo: '/input-output', pathMatch: 'full' },
  { path: 'input-output', component: InputOutputComponent },
  { path: 'reactive-service', component: ReactiveServiceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
