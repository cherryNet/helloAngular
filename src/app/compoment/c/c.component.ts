import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { MockService } from 'src/app/service/MockService';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.scss']
})
export class CComponent implements OnInit {

  constructor(
    private routerinfo:ActivatedRoute,
    private mockService:MockService, //不是响应式的
  ) { }

  ngOnInit(): void {
    this.routerinfo.queryParams.subscribe(value => {
      console.log('路由参数',value);
    })

    this.mockService.foo();
    console.log(this.mockService.goodsId);
    
  }

}
