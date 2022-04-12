import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ButtonNsModel } from 'src/app/commons/components/button/model/button-ns.model';
import { InputNsModel } from 'src/app/commons/components/input/model/input-ns.model';
import { InterfaceOficios } from 'src/app/commons/models/oficio';
import { OficiosService } from '../../commons/services/oficios.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  form!: FormGroup
  valida: boolean
  actionForm: boolean
  items!: InterfaceOficios.OFICIO[]
  buttonGrabar = new ButtonNsModel.ButtonClass('Grabar', 'green', 'borde')
  buttonModificar = new ButtonNsModel.ButtonClass('Modificar', 'green', 'borde')
  buttonCancelar = new ButtonNsModel.ButtonClass('Cancelar', 'warn', 'borde')
  buttonCancelarModificacion = new ButtonNsModel.ButtonClass('No modificar', 'warn', 'borde')

  inputName = new InputNsModel.InputClass(
    'Nombre',
    'Ingresar nombre',
    true,
    'name'
  )
  inputDescription = new InputNsModel.InputClass(
    'Descripción',
    'Ingresar descripción',
    true,
    'description'
  )
  inputCategoria = new InputNsModel.InputClass(
    'Categoría',
    'Agregar Categoría',
    true,
    'category'
  )
  constructor(
    private oficiosSErvice: OficiosService,
    public toastr: ToastrService,
    ) {
    this.valida = false
    this.actionForm = false
  }

  ngOnInit(): void {
    this.createForm()
    this.listOficios()
  }
  test() {
    console.log('test')
  }
  public createForm() {
    this.form = new FormGroup({
      id: new FormControl()
    })
  }
  public reset() {
    this.form.reset()
    this.actionForm = false
  }
  public save() {
    let data = this.form.value
    
    if (this.form.valid) {
      this.valida = false
      console.log(data)
      this.oficiosSErvice.create(data).subscribe({
        next: _ => {
        console.log('EXITO')
        this.toastr.success('Exito', 'Oficio guardado!');
        this.listOficios()
      },
      error: (err) =>{
        console.log(err)
        this.toastr.warning('Error', 'No se registro!');
      }
      })
    } else {
      this.valida = true;
    }
  }
  public update() {
    let data = this.form.value
    console.log(data)
    this.oficiosSErvice.update(data).subscribe({
      next: _=>{
        this.toastr.success('EXITO', 'Modifico Oficio!');
        this.listOficios()
      },
      error: (err)=>{
console.log(err)
this.toastr.warning('Error', 'Operaciòn invalida!');
      }
    })
  }
  public deleteOficio(id: number){
    this.oficiosSErvice.delete(id).subscribe({
      next: _=>{
        console.log('DELETE')
        this.toastr.success('EXITO', 'Elimino registro!');
        this.listOficios()
      },
      error: (err)=>{
        this.toastr.warning('ERROR', 'No se elimino!');
      }
    })
  }
  private listOficios(): void {
    this.oficiosSErvice.getOficios().subscribe({
      next: (response) => {
        this.items = response;
      },
      error: (err) => console.log(err),
    });
  }
  public edit(item: any) {
    console.log(item)
    let accion = item.accion
    if(accion === 'Editar'){
      this.actionForm = true
      let form =  this.form.controls
      form.id.setValue(item.id)
      form.name.setValue(item.name)
      form.description.setValue(item.description)
      form.category.setValue(item.category)
    } else {
      this.deleteOficio(item.id)
    }
    
  }
}
