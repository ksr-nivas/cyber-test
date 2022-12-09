import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Order } from 'src/app/models/order.model';
import { OrderStatus } from 'src/app/models/orser-status.enum';
import { addOrder } from 'src/app/state/orders/order.action';
import { selectOrderList } from 'src/app/state/orders/order.selector';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
  providers: [MessageService]
})
export class StatusComponent implements OnInit {

  ordersList!: Order[];
  status: any = {
    completed: 0,
    pending: 0,
    cancelled: 0
  }

  @ViewChild('table') tableComp!: Table;
  constructor(private store: Store, private messageService: MessageService) {}

  ngOnInit(): void {
    this.store.select(selectOrderList).subscribe(data => this.setOrdersList(data));
  }

  setOrdersList(data: Order[]) {
    this.ordersList = data;
    this.setStatus();
  }

  setStatus() {
    this.status = this.ordersList.reduce((acc, curr) => {
      if(curr.status === OrderStatus.DELIVERED) {
        acc.completed++;
      } else if(curr.status === OrderStatus.PENDING) {
        acc.pending++;
      } else if(curr.status === OrderStatus.CANCELLED) {
        acc.cancelled++;
      }
      return acc;
    }, this.status);
  }

  markAsCompleted(order: Order) {
    const orderClone: Order = {...order};
    orderClone.status = OrderStatus.DELIVERED;
    this.store.dispatch(addOrder(orderClone));

    this.messageService.add({
      key: 'tr',
      life: 5000,
      severity: 'success',
      summary: 'Success',
      detail: 'Order completed successfully.',
    });
  }

}
