import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumsService } from '../albums-service/albums-service.component';
import { Album } from '../albums-service/albums-service.component';
import { AlbumDetailComponent } from "../albums-details/albums-details.component";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule, AlbumDetailComponent],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  providers: [AlbumsService]
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];

  constructor(private AlbumsService: AlbumsService) {}

  ngOnInit() {
    this.AlbumsService.getAlbums().subscribe((data: Album[]) => {
      this.albums = data;
    }); 
  }

  deleteAlbum(id: number) {
    this.AlbumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }

  addAlbum(title: string) {
    this.AlbumsService.addAlbum({ title } as Album).subscribe((album: Album) => {
      this.albums.push(album);
    });
  }

  updateAlbum(album: Album) {
    this.AlbumsService.updateAlbum(album).subscribe();
  }

  albumDetails(id: number){
    this.AlbumsService.getAlbum(id).subscribe((data: Album) => {
      console.log(data);
    });
  }

}
