import { Component } from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  name = '张三';
  age = 18

  // 路由跳转constructor中得接收
  constructor(private router:Router) {

  }

  tabC() {
    // 页面跳转
    this.router.navigate(['tabC'],{
      // 传递路由参数
      queryParams:{
        id: 88
      }
    })
  }

  tabA() {

    // this.router.navigateByUrl("tabA")

    // location.href = '/tabA'
    
    // 或者是
    this.router.navigate(['tabA']);
  }
}
