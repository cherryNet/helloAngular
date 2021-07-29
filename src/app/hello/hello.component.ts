import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  constructor(
  ) { }

  message:String = '我是hello组件'
  value:String = '请输入...'
  box:String = 'orange'
  isShow:Boolean = false
  listArr:Array<Number> = [1,2,3,4,5]
  pData:any = '来自父组件的数据'

  sData:any = null

  pListFun(e:any) {
    // console.log(e);
    this.sData = e;
  }

  swtFun(e:Event) {
    if(this.isShow) {
      this.box = 'orange';
      this.isShow = false;
    }else{
      this.box = 'red';
      this.isShow = true;
    }
  }

  inputChange(e:any) {
    // console.log( e.target.value );
    this.value = e.target.value;
  }

  btn2d(v:any) {
    console.log(v); 
    
  }

  ngOnInit(): void {
  }

}
