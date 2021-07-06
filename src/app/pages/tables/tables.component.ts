import { Component, OnInit } from '@angular/core';
import {DTOQuestion} from '../../shared/models/dto-question.model';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  public listFirstQuestionnaire: DTOQuestion[];

  constructor() {
  }

  public ngOnInit() {
    this.reinitializeAllData();
    this.listFirstQuestionnaire.push(this.getFirstQuestion());
    this.listFirstQuestionnaire.push(this.getSecondQuestion());
    this.listFirstQuestionnaire.push(this.getThirdQuestion());
    this.listFirstQuestionnaire.push(this.getFourthQuestion());
    this.listFirstQuestionnaire.push(this.getFifthQuestion());
    this.listFirstQuestionnaire.push(this.getSixthQuestion());
    this.listFirstQuestionnaire.push(this.getSevenQuestion());
    this.listFirstQuestionnaire.push(this.getEightQuestion());
    this.listFirstQuestionnaire.push(this.getNinthQuestion());
    this.listFirstQuestionnaire.push(this.getDixQuestion());
    this.listFirstQuestionnaire.push(this.getOnzeQuestion());
  }

  private reinitializeAllData(): void {
   this.listFirstQuestionnaire = [];
  }

  private getFirstQuestion(): DTOQuestion {
    const newQuestion: DTOQuestion = new DTOQuestion();
    newQuestion.label = 'Comment vous appelez-vous ?';
    newQuestion.placeholder = 'Prénom';
    newQuestion.isSelect = false;
    return newQuestion;
  }

  private getSecondQuestion(): DTOQuestion {
    const newQuestion: DTOQuestion = new DTOQuestion();
    newQuestion.label = 'Quel est votre nom de famille ?';
    newQuestion.placeholder = 'Nom';
    newQuestion.isSelect = false;
    return newQuestion;
  }

  private getThirdQuestion(): DTOQuestion {
    const newQuestion: DTOQuestion = new DTOQuestion();
    newQuestion.label = 'Quel âge avez-vous ?';
    newQuestion.placeholder = 'Âge';
    newQuestion.isSelect = false;
    return newQuestion;
  }

  private getFourthQuestion(): DTOQuestion {
    const newQuestion: DTOQuestion = new DTOQuestion();
    newQuestion.label = 'De quel sexe êtes-vous ?';
    newQuestion.placeholder = '';
    newQuestion.isSelect = true;
    newQuestion.selectOptions = ['Masculin', 'Féminin'];
    return newQuestion;
  }

  private getFifthQuestion(): DTOQuestion {
    const newQuestion: DTOQuestion = new DTOQuestion();
    newQuestion.label = 'Quel est votre taille ?';
    newQuestion.placeholder = 'Taille (en m)';
    newQuestion.isSelect = false;
    return newQuestion;
  }

  private getSixthQuestion(): DTOQuestion {
    const newQuestion: DTOQuestion = new DTOQuestion();
    newQuestion.label = 'Quel est votre poids ?';
    newQuestion.placeholder = 'Poids (en kg)';
    newQuestion.isSelect = false;
    return newQuestion;
  }

  private getSevenQuestion(): DTOQuestion {
    const newQuestion: DTOQuestion = new DTOQuestion();
    newQuestion.label = 'Comment définiriez-vous votre niveau d\'activité physique?';
    newQuestion.placeholder = '';
    newQuestion.isSelect = true;
    newQuestion.selectOptions = ['Sédentaire', 'Légère', 'Modérée', 'Intense', 'Très intense'];
    return newQuestion;
  }

  private getEightQuestion(): DTOQuestion {
    const newQuestion: DTOQuestion = new DTOQuestion();
    newQuestion.label = 'Comment jugeriez-vous votre alimentation ?';
    newQuestion.placeholder = '';
    newQuestion.isSelect = true;
    newQuestion.selectOptions = ['Non variée et non équilibrée', 'Peu variée et peu équilibré', 'Variée et équilibrée'];
    return newQuestion;
  }

  private getNinthQuestion(): DTOQuestion {
    const newQuestion: DTOQuestion = new DTOQuestion();
    newQuestion.label = 'Comment de fois mangez-vous par jour ?';
    newQuestion.placeholder = '';
    newQuestion.isSelect = true;
    newQuestion.selectOptions = ['1 fois', '2 fois', '3 fois', '4 fois', '5 fois', '6 fois'];
    return newQuestion;
  }

  private getDixQuestion(): DTOQuestion {
    const newQuestion: DTOQuestion = new DTOQuestion();
    newQuestion.label = 'A quelle fréquence grignotez-vous ?';
    newQuestion.placeholder = '';
    newQuestion.isSelect = true;
    newQuestion.selectOptions = ['Jamais', 'Très rarement', 'Souvent', 'Tous les jours'];
    return newQuestion;
  }

  private getOnzeQuestion(): DTOQuestion {
    const newQuestion: DTOQuestion = new DTOQuestion();
    newQuestion.label = 'Combien de temps dormez-vous par jours (en moyenne) ?';
    newQuestion.placeholder = '';
    newQuestion.isSelect = true;
    newQuestion.selectOptions = ['Moins de 4h', 'Entre 4h et 5h', 'Entre 5h et 6h', 'Entre 6h et 7h', 'Entre 7h et 8h',
    'Entre 8h et 9h', 'Entre 9h et 10h'];
    return newQuestion;
  }
}
