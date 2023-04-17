import { TestBed } from '@angular/core/testing';

import { ImagenproyectoService } from './imagenproyecto.service';

describe('ImagenproyectoService', () => {
  let service: ImagenproyectoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagenproyectoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
