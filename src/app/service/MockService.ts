import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root',
})

export class MockService {
    foo() {
        console.log('你好，世界---hello world');
    }

    setId(id: Number) {
        this.goodsId = id;
    }

    goodsId: Number = 8899;
}