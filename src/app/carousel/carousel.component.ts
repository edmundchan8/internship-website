import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Internship } from '../internship';
import { InternshipService } from '../internship.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  Internships: Internship[]

  constructor(private route: ActivatedRoute, private router: Router,
    public internshipService: InternshipService) {
   }

  ngOnInit(): void {
    this.getInternships()
  }

  getInternships(): void {
    this.internshipService.getInternships()
      .subscribe( internships => {
        this.Internships = internships
      })
  }

  onSelect(internship: Internship){
    this.router.navigate(['/internship-details', internship.id])
  }
}