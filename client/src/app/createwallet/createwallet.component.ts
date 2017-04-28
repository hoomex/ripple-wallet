import { Component, OnInit } from '@angular/core';
import {RippleService} from '../ripple.service';
import { GlobalVariable } from '../global-variable';
@Component({
    selector: 'app-createwallet',
    templateUrl: './createwallet.component.html',
    styleUrls: ['./createwallet.component.css']
})
export class CreatewalletComponent implements OnInit {
    wallet;
    isSave:boolean=false;
    tipinfo:string="";
    constructor(private ripple: RippleService,private gv:GlobalVariable) {
    }

    ngOnInit() {
    }
    createWallet(){
        this.tipinfo="";
        this.ripple.createWallet("new").subscribe(result => this.wallet=result.data);
    }
    saveWallet(){
        this.ripple.saveWallet().subscribe(result=>{
            if(result.ok){
                this.isSave=true;
                this.gv.wallet=result.data;
                this.tipinfo="钱包已经保存成功，接下来你应该点击加密钱包按钮，输入钱包口令，加密这个钱包。";
            }else{
                this.isSave=false;
                this.tipinfo=result.data;
            }
        });
    }
}
