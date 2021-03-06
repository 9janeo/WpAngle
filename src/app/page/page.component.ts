import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PageService } from '../page.service';
import { Page } from '../model/page';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})

export class PageComponent implements OnInit  {

  errMsg: string;
  loading = true;

  // initialize the pageId variable
  id = 0;
  // initialize the page
  page$: Observable<Page>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pageService: PageService
    ) {
      // allows navigation within the same component
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
      this.watchPageDetail()
    }

    ngOnInit() {
      this.page$ = this.selectPage(this.id)
    }

    watchPageDetail() {
      // set id parameter from route wether search param is a string (slug) or number (id)
      this.route.params.subscribe(
        detail => {
          this.id = isNaN(+detail.id) ? detail.id : +detail.id
          console.log("Detail: " + (this.id) + " is string? - " + (typeof(this.id) === "string") );
          return detail.id
        }
      );
    }

    selectPage(id:any): Observable<Page> {
      this.id = id
      this.loading = false;
      return this.pageService.getPage(id);
    }
}
