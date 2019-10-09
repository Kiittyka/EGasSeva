import { Component } from '@angular/core';

export type EditorType = 'customer' | 'dealer'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EGasSeva';

  editor : EditorType;
  
  get showCustomerComponent(){
    return this.editor === "customer";
  }

  get showDealerComponent(){
    return this.editor === "dealer";
  }

  toggleEditor(type: EditorType){
    this.editor = type;
  }
}
