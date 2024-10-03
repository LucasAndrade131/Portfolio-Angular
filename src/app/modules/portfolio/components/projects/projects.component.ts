import { Component, inject, signal } from '@angular/core';
// Interface
import { IProjects } from '../../interface/IProjects.interface';

// Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/barbearia.png',
      alt: 'Projeto Barbearia',
      title: 'Projeto Barbearia',
      with: '100px',
      height: '51px',
      description:
        '<p>Projeto feito somente com HTML e CSS.</p>',
      links: [
        {
          name: 'Conheça a página',
          href: 'https://lucasandrade131.github.io/Projeto-Barbearia/produtos.html',
        },
      ],
    },
    {
      src: 'assets/img/projects/CRUD.png',
      alt: 'Projeto CRUD',
      title: 'Projeto CRUD',
      with: '100px',
      height: '51px',
      description:
        '<p>Projeto para aplicação de conhecimentos de CRUD, com JAVA/Spring e Angular. Utilizando Postman para testes.</p>',
      links: [
        {
          name: 'Projeto Angular e JAVA',
          href: 'https://www.linkedin.com/posts/lucas-silva-andrade_programaaexaeto-desenvolvimento-java-activity-7224942344926633985-dEgW?utm_source=share&utm_medium=member_desktop',
        },
      ],
    },
    {
      src: 'assets/img/projects/sistema_biblioteca_java.jpg',
      alt: 'Projeto Livraria',
      title: 'Projeto Livraria',
      with: '100px',
      height: '51px',
      description:
        '<p>Projeto Livraria feito com Java, e interface com JOptionPane.</p>',
      links: [
        {
          name: 'Projeto Livraria',
          href: 'https://www.linkedin.com/feed/update/urn:li:activity:7139962050235064320/',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
