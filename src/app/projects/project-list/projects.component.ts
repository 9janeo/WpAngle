import { Component, OnInit } from '@angular/core';
import { Project } from '../../model/project';
import { ProjectsService } from '../../projects.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
    projects: Project[] = [];
    errMsg: string;
    loading = true;
    defaultImage = environment.baseTokenUrl + environment.assetsUrl + 'Iconsocial.png';
    // media = Project._embedded.wp:featuredmedia.source_url;

    constructor(private projectService: ProjectsService) {}

    ngOnInit() {
        this.projectService.getProjects().subscribe({
            complete: () => {
                this.loading = false;
            },
            next: projects => {
                this.projects = projects;
                this.loading = false;
            },
            error: errorMessage => {
                this.errMsg = errorMessage;
                this.loading = false;
            }
        });
    }
}
