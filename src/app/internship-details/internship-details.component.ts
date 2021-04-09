import { Component, OnInit, Input } from '@angular/core';
import { Internship } from '../internship';
import { InternshipService } from '../internship.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'


@Component({
  selector: 'app-internship-details',
  templateUrl: './internship-details.component.html',
  styleUrls: ['./internship-details.component.css']
})
export class InternshipDetailsComponent implements OnInit {

  public internshipID: any;
  Internships: Internship[]
  internship: Internship
  public disablePreviousID = 1
  public disableNextID = 3


  constructor(private route: ActivatedRoute, 
    private internshipService: InternshipService, private router: Router) {
     }

  ngOnInit() {  
    // let id = parseInt(this.route.snapshot.paramMap.get('id') || '{}')
    // this.internshipID = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let newId = parseInt(params.get('id'))
      this.internshipID = newId;
      this.getIntern()
    })
  }

  getIntern(){
    this.internshipService.getIntern(this.internshipID)
    .subscribe(intern => {this.internship = intern })
  }

  getAllInterns(){
    this.internshipService.getInternships()
      .subscribe(interns => this.Internships = interns)
  }

  onPrevious(){
      let previousID = this.internshipID - 1;
      this.router.navigate(['/internship-details', previousID])    
  }

  onNext(){
    let nextID = this.internshipID + 1;
    this.router.navigate(['/internship-details', nextID])
  }
}