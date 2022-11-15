import { Component, OnInit } from '@angular/core';
import { UserAccount } from 'src/app/Model/userAccount.model';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.scss']
})
export class ManageAccountComponent implements OnInit {

  userAccount:UserAccount[] = [];
  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
   this.getAccount();
  }
getAccount(){
  this.accountService.getAccount().subscribe(Response=>{
    this.userAccount=Response;
  },
  (error=>{
    console.log(error);
  }))
}
}