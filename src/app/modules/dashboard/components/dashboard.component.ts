import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { UIChart } from 'primeng/chart';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/order.model';
import { selectOrderList, selectOrdersTotalPrice } from 'src/app/state/orders/order.selector';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  ordersList!: Order[];
  ordersTotalCost$!: Observable<number>;
  deliveredCount: number = 0;
  pendingCount: number = 0;

  @ViewChild('chart', {static: false}) chartComponent!: UIChart;

  basicData = {
    labels: [''],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40], // dummy
        fill: false,
        borderColor: '#42A5F5',
        tension: 0.4,
      },
    ],
  };

  basicOptions = {
    plugins: {
        legend: {
            display: false,
        }
    },
    scales: {
        x: {
            ticks: {
                color: '#ebedef'
            },
            grid: {
                color: 'rgba(255,255,255,0.2)',
                display: 'none'
            }
        },
        y: {
            ticks: {
                color: '#ebedef'
            },
            grid: {
                color: 'rgba(255,255,255,0.2)'
            }
        }
    }
  };

  constructor(private store: Store) {
    this.ordersTotalCost$ = this.store.select(selectOrdersTotalPrice);
    this.store
      .select(selectOrderList)
      .subscribe((value: Order[]) => (this.ordersList = value));
  }

  ngOnInit(): void {
    this.deliveredCount = this.ordersList.filter((order) => order.status === 'delivered')?.length || 0;
    this.pendingCount = this.ordersList.filter((order) => order.status === 'pending')?.length || 0;

    // update chart data with actual values and move heavy computations to the worker
    this.getLiveChartData();

    // since we donot have proper api data, for now filling with dummy values
    this.basicData.labels = this.ordersList.map(order => new Date(order.createdTime).toLocaleTimeString());
    this.basicData.datasets[0].data.push(this.ordersList.length);
  }

  getLiveChartData() {
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(new URL('../dashboard.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        console.log(`live data: ${data}`);

        // once we get the computed data, we can simply push it to the chart
        // this.basicData.datasets[0].data.push(data);
      };
      worker.postMessage('hello');
    }
  }

  ngOnDestroy(): void {
    // unsubscribe all the observables.
  }
}
