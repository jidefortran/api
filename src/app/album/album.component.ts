import { ServiceAlbumService } from './../service/service-album.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
albums;
  constructor(private photoService: ServiceAlbumService) { }

  ngOnInit() {
    this.albums = this.photoService.getAlbums();
  }

}
