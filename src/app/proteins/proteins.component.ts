import { Component, OnInit} from '@angular/core';
import { Entity, ProteinsService } from './proteins.service';


@Component({
  selector: 'app-proteins',
  templateUrl: './proteins.component.html',
  styleUrls: ['./proteins.component.css']
})
export class ProteinsComponent implements OnInit {
  public proteininfo : Entity[];
  public infomessage : string ="This super market is for shopping  all kinds of proteins";
  public showTime : string= new Date().toLocaleTimeString();

  constructor(proteinservice : ProteinsService) {
    this.proteininfo= proteinservice.proteninfo;
    this.updateTime();
  }

  updateTime(): void{
    setInterval(()=>{
      this.showTime= new Date().toLocaleTimeString();
    },1000);
  }

  ngOnInit(): void {
  }

  IncrementQ(id: number):void{

    this.proteininfo= this.proteininfo.map((info: Entity)=>{

      if(info.id === id)
      {
        return{
          ...info,
          quantity: info.quantity+1
        }
      }

        return info;
    })

  }
  DecrementQ(id: number):void{

    this.proteininfo= this.proteininfo.map((info: Entity)=>{

      if(info.id === id)
      {
        return{
          ...info,
          quantity: (info.quantity >0 )? info.quantity-1 : 0
        }
      }

        return info;
    })

  }

  public GrandTotal():number {

    let total= 0;
    for(let qtotal of this.proteininfo)
    {
      total+=(qtotal.quantity * qtotal.price);
    }
    return total;
  }

}
