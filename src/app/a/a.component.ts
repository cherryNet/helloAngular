import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

// 动态表单控件
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {

  sites = [
    {site : "Google", url : "http://www.google.com"},
    {site : "Runoob", url : "http://www.runoob.com"},
    {site : "Taobao", url : "http://www.taobao.com"}
  ];

  myDate:Date = new Date();

  sData:any = '来自子组件的数据';

  // 子传父引入 @Output  EventEmitter
  @Output() addList = new EventEmitter();

  sBtn() {
    this.addList.emit(this.sData)
  }

  //@Input 接受父组件的传值
  @Input() name!: string;
  @Input() myage!: Number;

  fn() {
    setInterval(() =>{
      this.myDate = new Date();
    },0)
  }
  

  age:FormControl = new FormControl(0)

  // 动态表单组
  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
    select: new FormControl(''),
  })

  changeAge() {
    // 修改值可以通过FormControl提供的setvalue()方法
    this.age.setValue(18)
    // reset() 方法可把表单中的元素重置为它们的默认值
    this.loginForm.reset({
      userName: '库帕',
      password: 222222
    })

  }

  loginClick() {
    console.log(this.loginForm.value)
    let {userName,password} = this.loginForm.value;
    console.log(`账号：${userName},密码：${password}`);
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
