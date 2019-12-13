import { Component, OnInit } from '@angular/core';
import { ServiceAlbumService } from '../service/service-album.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
photoId;
albumId;
  constructor( private service: ServiceAlbumService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.albumId = this.route.snapshot.params.albumId;
    this.photoId = this.service.getPhotos(this.albumId);
  }
}
