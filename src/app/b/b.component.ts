import { Component, OnInit } from '@angular/core';

// 接收路由参数
import { ActivatedRoute } from '@angular/router';
// 发送http请求
import { HttpClient } from '@angular/common/http';

import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-b',
  // templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss'],
  template: `
    <img class="imgs" *ngFor="let item of goodsArr" [src]="item.img" alt="">

    <hr>
    <div style="display:flex; align-items:center;" *ngIf="myname.length">
        头像:<img style="width: 50px; border-radius: 50%;" [src]="avatar" alt="">
        用户名：{{myname}}
    </div>

    <form [formGroup]="loginForm" action="" *ngIf="!myname.length">
        账号：<input type="text" formControlName="username">
        密码：<input type="password" formControlName="password">
        <button (click)="loginClik()">登录</button>
    </form>
  `,
})
export class BComponent implements OnInit {

    goodsArr: any = [];

    // 动态表单组
    loginForm = new FormGroup({
        username: new FormControl('gitub'),
        password: new FormControl('222222')
    })

    avatar: String = '';
    myname: String = '';

    loginClik() {
        let {username,password} = this.loginForm.value;
        if(!username) {
            return
        }

        this.http.post('http://api.gitub.cn/api/login',{
            username,password
        }).subscribe((data:any) => {
            if(data.status == 0) {
                alert(data.message)
                let {avatar,username} = data.userInfo;
                this.avatar = 'http://api.gitub.cn/'+avatar;
                this.myname = username;
            }
        })

    }

    // 接受路由参数 ActivatedRoute
  constructor(
      private routerinfo:ActivatedRoute,
      private http: HttpClient
  ) {
    //   console.log('00 构造函数执行了---除了使用简单的值对局部变量进行初始化之外，什么都不应该做')
  }

  ngOnChanges() {
    //   console.log('01 ngOnChages执行了---当被绑定的输入属性的值发生变化时调用(父子组件传值的时候会触发)'); 
  }

  ngOnInit() {
    let id = this.routerinfo.snapshot.params["id"]
    console.log('路由参数：',id);

    this.http.get('http://api.gitub.cn/api/getlunbo').subscribe((data:any)=>{
        this.goodsArr = data.message;
    })

    // console.log('02 ngOnInit执行了--- 请求数据一般放在这个里面');
  }
  ngDoCheck() {
    //   console.log('03 ngDoCheck执行了---检测，并在发生 Angular 无法或不愿意自己检测的变化时作出反应');
  }
  ngAfterContentInit() {
    //   console.log('04 ngAfterContentInit执行了---当把内容投影进组件之后调用');
  }
  ngAfterContentChecked() {
    //   console.log('05 ngAfterContentChecked执行了---每次完成被投影组件内容的变更检测之后调用');
  }
  ngAfterViewInit() : void {
    //   console.log('06 ngAfterViewInit执行了----初始化完组件视图及其子视图之后调用（dom操作放在这个里面）');
  }
  ngAfterViewChecked() {
    //   console.log('07 ngAfterViewChecked执行了----每次做完组件视图和子视图的变更检测之后调用');
  }

  ngOnDestroy() {
    //   console.log('08 ngOnDestroy执行了····');
  }

}
