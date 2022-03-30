import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  routeSub: any;
  userSub: any;

  constructor(private route: ActivatedRoute, private uService: UserService) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params=>{
      this.userSub = this.uService.getUserById(+params.id).subscribe(userData=>this.user = userData.data)
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    this.userSub.unsubscribe();
  }

}
