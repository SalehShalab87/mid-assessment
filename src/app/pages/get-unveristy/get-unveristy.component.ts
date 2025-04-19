import { Component } from '@angular/core';
import { UniverstiesService } from '../../services/universties.service';
import { Unversity } from '../../models/university.model';

@Component({
  selector: 'app-get-unveristy',
  imports: [],
  templateUrl: './get-unveristy.component.html',
  styleUrl: './get-unveristy.component.scss'
})
export class GetUnveristyComponent {

  respones!: Unversity[];

  constructor(private universitiesService: UniverstiesService) {}

  ngOnInit() {
    this.universitiesService.getUniversties().subscribe({
      next: (data: Unversity[]) => {
        this.respones = data;
        console.log('University data fetched successfully:', data);
      },
      error: (err) => {
        console.error('Error fetching university data:', err);
      },
      complete: () => {
        console.log('University data fetch completed.');
      }
    });
  }

}
