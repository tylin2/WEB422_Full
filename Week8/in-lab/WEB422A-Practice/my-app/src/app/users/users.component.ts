import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[]; // or Array<User> also works

  usersSub: any;
  routeSub: any;

  constructor(private uService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.queryParams.subscribe(params=>{
      this.usersSub = this.uService.getUsersByPage(+params["page"]).subscribe(userData => this.users = userData.data)
    });
    
  }

  ngOnDestroy(): void{
    this.usersSub.unsubscribe();
    this.routeSub.unsubscribe();
  }

  goToPage(pageNum){
    this.router.navigate(["/users"], {queryParams: {page: pageNum }} )
    //console.log(pageNum);
  }


}
