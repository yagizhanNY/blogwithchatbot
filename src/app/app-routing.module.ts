import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailsComponent } from './pages/article-details/article-details.component';
import { MainComponent } from './pages/main/main.component';
import { ChatComponent } from './shared/components/chat/chat.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'details/:id',
    component: ArticleDetailsComponent
  },
  {
    path: 'about',
    component: ArticleDetailsComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
