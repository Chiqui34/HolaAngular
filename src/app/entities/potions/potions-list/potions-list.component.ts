import { Component, OnInit } from '@angular/core';
import { PotionService } from '../potion.service';
import { Potion,  POTIONTYPE} from '../potion/model';

@Component({
  selector: 'app-potions-list',
  templateUrl: './potions-list.component.html',
  styleUrls: ['./potions-list.component.css']
})
export class PotionsListComponent implements OnInit {

  title = 'Pociones mágicas mejoradas'
  potionsMana: Potion[] = [];
  potionsVida: Potion[] = [];
  potionsEnergia: Potion[] = [];

  constructor(
    private potionService: PotionService
  ) { }

  ngOnInit(): void {
    //this.potions = this.potionService.getAllPosition();
    this.potionsMana = this.potionService.getPotionsByType(POTIONTYPE.MANA);
    this.potionsVida = this.potionService.getPotionsByType(POTIONTYPE.VIDA);
    this.potionsEnergia = this.potionService.getPotionsByType(POTIONTYPE.ENERGIA);
  }

}
