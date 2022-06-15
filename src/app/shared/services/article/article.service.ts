import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import database from "../../../../assets/database.json"
import { Article } from '../../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getAllArticles() {
    return database.articles as Article[];
  }

  getArticleById(id: number) {
    return database.articles.filter(a => a.id === id)[0] as Article;
  }
}
