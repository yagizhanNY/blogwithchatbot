import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Article } from 'src/app/shared/models/article.model';
import { ArticleService } from 'src/app/shared/services/article/article.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [ArticleService],
})
export class MainComponent implements OnInit {
  constructor(
    private articleService: ArticleService
  ) {}
  articles: Article[] = [];

  ngOnInit(): void {   
    this.getAllArticles();
  }

  getAllArticles() {
    this.articles = this.articleService.getAllArticles();
  }
}
