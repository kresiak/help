import { Component, Input, OnInit, Output } from '@angular/core'
import { Observable } from 'rxjs/Rx'
import { FormItemStructure, FormItemType} from 'gg-ui'
import { userInfo } from 'os';

@Component(
    {
        templateUrl: './other.component.html'
    }
)
export class OtherComponent {
    public errFn = function (err) { console.log('Error: ' + err); }

    constructor() {
        
    }

    public formStructure: FormItemStructure[]= []
    public employee = userInfo

    @Input() userObservable: Observable<any>;

    ngOnInit(): void {
    
        this.formStructure.push(new FormItemStructure('description', 'HELP.LABEL.DESCRIPTION', FormItemType.InputText, {isRequired: true, minimalLength: 3}))
        this.formStructure.push(new FormItemStructure('description', 'HELP.LABEL.PROGRAM', FormItemType.InputText, {isRequired: true, minimalLength: 3}))
        this.formStructure.push(new FormItemStructure('name', 'HELP.LABEL.EMPLOYEE', FormItemType.FlexiList, {isRequired: true, selectableData: this.employee }))

    }
}