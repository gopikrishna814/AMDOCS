import { Injectable, EventEmitter, Output } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription';    
    

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  subsVar: Subscription; 
  constructor() { }

  invokeNodeComponentAdd = new EventEmitter();  

  onFirstComponentButtonClick(nodeId: any) {    
    this.invokeNodeComponentAdd.emit(nodeId);    
  }

}
