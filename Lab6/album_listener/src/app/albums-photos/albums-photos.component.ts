import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-album-photos',
  imports: [CommonModule, RouterModule],
  templateUrl: './albums-photos.component.html',
  styleUrls: ['./albums-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.http.get<any[]>(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .subscribe((data: any[]) => {
        this.photos = data;
      });
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}
