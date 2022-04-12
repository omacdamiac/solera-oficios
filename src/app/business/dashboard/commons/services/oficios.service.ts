import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { END_POINT } from 'src/app/commons/const/constantes';
import { InterfaceOficios } from 'src/app/commons/models/oficio';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OficiosService {

  constructor(
    private http: HttpClient,
  ) { }

  getOficios():Observable<InterfaceOficios.OFICIO[]> {
    let api = `${environment.api_Base}${END_POINT.GET_OFICIOS}`
    return this.http.get<InterfaceOficios.OFICIO[]>(api)
  }
  create(oficio: any):Observable<InterfaceOficios.OFICIO>{
    let api = `${environment.api_Base}${END_POINT.GET_OFICIOS}`
    return this.http.post<InterfaceOficios.OFICIO>(api, oficio)
  }
  update(oficio: any):Observable<InterfaceOficios.OFICIO>{
    let api = `${environment.api_Base}${END_POINT.GET_OFICIOS}/${oficio.id}`
    return this.http.put<InterfaceOficios.OFICIO>(api, oficio)
  }
  delete(id: any):Observable<any>{
    let api = `${environment.api_Base}${END_POINT.GET_OFICIOS}/${id}`
    return this.http.delete<any>(api)
  }
}
