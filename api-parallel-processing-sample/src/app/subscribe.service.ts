import { concat, delay, forkJoin, merge, Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubscribeService {
  constructor(private http: HttpClient) {}

  /* -------------------- Observable 動作確認 -------------------- */

  // Observable
  test1() {
    let observableValue = new Observable((observer) => {
      observer.next('first');
      observer.next('second');
      observer.next('third');
    });

    observableValue.subscribe((result) => {
      console.log(result);
    });
  }

  // Observable.of
  test2() {
    let observableValue = of('forth', 'fifth', 'sixth');
    observableValue.subscribe((result) => {
      console.log(result);
    });
  }

  /* -------------------- 並列処理 -------------------- */

  // Observable.forkJoin
  test3() {
    let observable1 = this.getPost();
    let observable2 = this.getPostComment(1);

    const observableValue = forkJoin([observable1, observable2]);
    observableValue.subscribe((result) => {
      console.log(result);
    });
  }

  // Observable.marge
  test4() {
    let observableArray: Array<Observable<Object>> = new Array();

    for (let i = 1; i < 10; i++) {
      let observable = this.getPostComment(i).pipe(delay(1000));
      observableArray.push(observable);
    }
    merge(...observableArray).subscribe((res) => {
      console.log(res);
    });
  }

  // Observable.concat
  test5() {
    let observableArray: Array<Observable<Object>> = new Array();

    for (let i = 1; i < 10; i++) {
      let observable = this.getPostComment(i).pipe(delay(1000));
      observableArray.push(observable);
    }
    concat(...observableArray).subscribe((res) => {
      console.log(res);
    });
  }

  // --------------------------------------------------
  // private method
  // --------------------------------------------------
  getPost(): Observable<Array<any>> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostComment(postId: number) {
    return this.http.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
  }
}
