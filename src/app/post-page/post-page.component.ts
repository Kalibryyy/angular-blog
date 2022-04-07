import { Component } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {PostsService} from "../shared/posts.service";
import {Post} from "../shared/interfaces";
import {switchMap} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent {
  readonly post$: Observable<Post> = this.route.params.pipe(
    switchMap((params: Params) => this.postsService.getById(params['id']))
  );

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) { }
}
