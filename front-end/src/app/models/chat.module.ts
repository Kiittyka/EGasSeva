import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDialogComponent } from '../components/chat-dialog/chat-dialog.component';
import { ChatService} from '../components/chat-dialog/chat.service';
import {FormsModule} from '@angular/forms';




@NgModule({
  declarations: [ChatDialogComponent],
  imports: [
    CommonModule,
    FormsModule
    
  ], 
  exports: [ChatDialogComponent],
  providers: [ChatService]
  
})
export class ChatModule { }
