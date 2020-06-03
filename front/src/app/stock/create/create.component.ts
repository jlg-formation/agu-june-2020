import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  f = new FormGroup({
    name: new FormControl('Tournevis', [Validators.required]),
    price: new FormControl(2.34, [Validators.required]),
    qty: new FormControl(100, [Validators.required]),
  });
  constructor(private router: Router, private articleService: ArticleService) {}

  ngOnInit(): void {}

  submit() {
    console.log('submit...');
    this.articleService.add(this.f.value as Article);
    this.router.navigateByUrl('/stock/list');
  }
}
