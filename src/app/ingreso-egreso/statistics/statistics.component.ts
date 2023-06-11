import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChartData } from 'chart.js';
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit{

  public acumIngreso = 0;
  public acumEgreso = 0;
  public totalIngreso = 0;
  public totalEgreso = 0;
  private store = inject(Store<AppState>);

  public doughnutChartLabels: string[] = [ 'Ingreso', 'Egreso' ];
  public doughnutChartData!: ChartData<'doughnut'>
  ngOnInit(): void {
    this.store.select('ingreso_egreso').subscribe(({ingreso_greso}) => this.generarEstadistica(ingreso_greso))
  }

  public generarEstadistica(items: any){
    console.log(items);
    for( const item of items){
      if(item.tipo === 'ingreso'){
        let cantidad = parseInt(item.amount)
        this.totalIngreso += cantidad ;
        this.acumIngreso++;
      }else{
        let cantidad = parseInt(item.amount)
        this.totalEgreso += cantidad ;
        this.acumEgreso++;
      }

    }
       this.doughnutChartData = {
        labels: this.doughnutChartLabels,
        datasets: [
          { data: [ this.totalIngreso, this.totalEgreso ] }
        ]
      };
  }


  // events


}
