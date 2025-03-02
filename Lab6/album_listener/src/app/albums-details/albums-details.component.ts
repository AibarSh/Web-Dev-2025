import { Component, OnInit, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumsService } from '../albums-service/albums-service.component';
import { Album } from '../albums-service/albums-service.component';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './albums-details.component.html',
  styleUrls: ['./albums-details.component.css'],
})
export class AlbumDetailComponent implements OnInit {
  @Input() album!: Album;

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(id).subscribe((data: Album) => {
      this.album = data;
    });
  }

  saveChanges() {
    if (this.album) {
      this.albumsService.updateAlbum(this.album).subscribe(() => {
        alert('Album updated successfully!');
      });
    }
  }

  goBack() {
    this.router.navigate(['/albums']);
  }

  
}
