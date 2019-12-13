import { TestBed } from '@angular/core/testing';

import { ServiceAlbumService } from '../service/service-album.service';

describe('ServiceAlbumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceAlbumService = TestBed.get(ServiceAlbumService);
    expect(service).toBeTruthy();
  });
});
