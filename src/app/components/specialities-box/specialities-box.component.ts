import { Component, Input } from '@angular/core';

@Component({
  selector: 'specialities-box',
  standalone: true,
  imports: [],
  templateUrl: './specialities-box.component.html',
  styleUrl: './specialities-box.component.css'
})
export class SpecialitiesBoxComponent {
  @Input("icon")
  icon:string = "bi bi-database-fill"

  @Input("specialities-title")
  title:string = "SQL Server"

  @Input("paragraphText")
  paragraphText:string = "Minhas principais experiências são com SQL Server, em conjunto com ferramentas de elaboração de relatórios "
}
